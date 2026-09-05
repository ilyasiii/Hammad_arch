/**
 * Build-time image pipeline.
 *
 * Walks public/, and for every referenced source image emits a ladder of AVIF +
 * WebP derivatives into public/_opt/, keyed by a content hash. Also records the
 * intrinsic dimensions and an average placeholder colour into
 * src/lib/image-manifest.json, which the <Plate> component reads so every image
 * ships with correct width/height (no layout shift) and paints a tone
 * immediately instead of a white hole.
 *
 * Why content-hashed flat filenames: the source tree is full of spaces,
 * brackets and braces ("HA 5[1].jpg", "{3D}.jpg"). Hashing sidesteps all URL
 * encoding and makes every derivative immutably cacheable.
 *
 *   npm run images        regenerate (incremental, unchanged sources are skipped)
 *   npm run build         runs this first via the `prebuild` hook
 *
 * public/_opt is COMMITTED. Encoding on the deploy host overran Vercel's
 * 45-minute build limit, so the derivatives ship with the repo and this script
 * becomes a fast no-op there. After adding or removing images, run it and
 * commit what changes under public/_opt alongside the sources.
 */
import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync, mkdirSync, readdirSync, unlinkSync } from "node:fs";
import { readdir, stat, readFile, writeFile } from "node:fs/promises";
import { join, relative, extname } from "node:path";
import { cpus } from "node:os";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { rgbaToThumbHash, thumbHashToAverageRGBA } from "thumbhash";

const HERE = fileURLToPath(new URL(".", import.meta.url));
const PUBLIC = join(HERE, "..", "public");
const OUT_DIR = join(PUBLIC, "_opt");
const MANIFEST = join(HERE, "..", "src", "lib", "image-manifest.json");

// 240 exists for the logo and other small fixed-size slots, without it the
// 36px header mark would download a 480px rung.
const WIDTHS = [240, 480, 960, 1600, 2400];
const SOURCE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

// _opt holds this script's own output. Everything else under public/ is source
// material the site references; anything unreferenced now lives in unused/,
// outside public/, so it is never walked in the first place.
const SKIP_DIRS = new Set(["_opt"]);

async function walk(dir, acc = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      await walk(join(dir, entry.name), acc);
    } else if (SOURCE_EXT.has(extname(entry.name).toLowerCase())) {
      acc.push(join(dir, entry.name));
    }
  }
  return acc;
}

/** Average colour of the image, via ThumbHash, a 1-token placeholder tone. */
async function placeholderColor(pipeline) {
  const { data, info } = await pipeline
    .clone()
    .resize(64, 64, { fit: "inside" })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const hash = rgbaToThumbHash(info.width, info.height, data);
  const { r, g, b } = thumbHashToAverageRGBA(hash);
  const hex = (v) =>
    Math.round(Math.min(255, Math.max(0, v * 255)))
      .toString(16)
      .padStart(2, "0");
  return `#${hex(r)}${hex(g)}${hex(b)}`;
}

/** The manifest from a previous run, so unchanged images can skip all decoding. */
const PREVIOUS = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, "utf8")) : {};

async function processOne(absPath) {
  const rel = "/" + relative(PUBLIC, absPath).split("\\").join("/");
  const bytes = await readFile(absPath);
  const hash = createHash("sha256").update(bytes).digest("hex").slice(0, 10);

  // Nothing to do when the previous run recorded this exact content and every
  // derivative it promised is still on disk. This is what makes a deploy cheap:
  // with public/_opt committed, the whole run is a hash pass over the sources
  // rather than 320 image decodes.
  const prior = PREVIOUS[rel];
  if (
    prior &&
    prior[0] === hash &&
    prior[4].every((w) => ["avif", "webp"].every((e) => existsSync(join(OUT_DIR, `${hash}-${w}.${e}`))))
  ) {
    return { rel, entry: prior, written: 0 };
  }

  const base = sharp(bytes, { limitInputPixels: 0 });
  const meta = await base.metadata();
  if (!meta.width || !meta.height) throw new Error("no dimensions");

  // Never upscale; always keep at least one rung on the ladder.
  const widths = WIDTHS.filter((w) => w <= meta.width);
  if (widths.length === 0) widths.push(meta.width);

  let written = 0;
  for (const w of widths) {
    for (const [ext, encode] of [
      ["avif", (p) => p.avif({ quality: 58, effort: 4 })],
      ["webp", (p) => p.webp({ quality: 78, effort: 4 })],
    ]) {
      const out = join(OUT_DIR, `${hash}-${w}.${ext}`);
      if (existsSync(out)) continue; // content-hashed: existing output is current
      const buf = await encode(
        base.clone().resize({ width: w, withoutEnlargement: true }),
      ).toBuffer();
      await writeFile(out, buf);
      written++;
    }
  }

  return {
    rel,
    entry: [hash, meta.width, meta.height, await placeholderColor(base), widths],
    written,
  };
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  const files = (await walk(PUBLIC)).sort();
  console.log(`optimizing ${files.length} images → ${relative(process.cwd(), OUT_DIR)}`);

  const manifest = {};
  const failures = [];
  let done = 0;
  let written = 0;
  const started = Date.now();

  const concurrency = Math.max(1, cpus().length - 1);
  const queue = [...files];
  await Promise.all(
    Array.from({ length: concurrency }, async () => {
      for (let file = queue.pop(); file; file = queue.pop()) {
        try {
          const result = await processOne(file);
          manifest[result.rel] = result.entry;
          written += result.written;
        } catch (error) {
          failures.push(`${relative(PUBLIC, file)}: ${error.message}`);
        }
        if (++done % 25 === 0 || done === files.length) {
          const secs = ((Date.now() - started) / 1000).toFixed(0);
          process.stdout.write(`  ${done}/${files.length}  ${written} written  ${secs}s\n`);
        }
      }
    }),
  );

  const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
  const previous = existsSync(MANIFEST) ? readFileSync(MANIFEST, "utf8") : "";
  const next = JSON.stringify(sorted, null, 0) + "\n";
  if (next !== previous) writeFileSync(MANIFEST, next);

  // Drop derivatives no manifest entry claims any more. Without this, deleting
  // or replacing a source image leaves its old files behind forever, and since
  // public/_opt is committed those orphans would accumulate in the repository.
  // Only ever runs on a complete pass: a run with failures leaves them alone,
  // because a partial manifest would look like everything had been deleted.
  let pruned = 0;
  if (failures.length === 0) {
    const keep = new Set();
    for (const [hash, , , , widths] of Object.values(sorted))
      for (const w of widths) for (const e of ["avif", "webp"]) keep.add(`${hash}-${w}.${e}`);
    for (const name of readdirSync(OUT_DIR)) {
      if (keep.has(name)) continue;
      unlinkSync(join(OUT_DIR, name));
      pruned++;
    }
  }

  console.log(
    `done: ${Object.keys(sorted).length} images, ${written} derivatives written, ` +
      `${pruned} orphans pruned, ${((Date.now() - started) / 1000).toFixed(0)}s`,
  );
  if (failures.length) {
    console.log(`\n${failures.length} failed:`);
    failures.forEach((f) => console.log("  " + f));
  }
}

await main();
