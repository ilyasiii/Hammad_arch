/** Reports the byte weight of key pages before and after the image pipeline. */
import { statSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = fileURLToPath(new URL(".", import.meta.url));
const PUBLIC = join(HERE, "..", "public");
const manifest = JSON.parse(
  await import("node:fs/promises").then((fs) =>
    fs.readFile(join(HERE, "..", "src", "lib", "image-manifest.json"), "utf8"),
  ),
);

const { projectsByCategory } = await import("../src/lib/projects-data.ts");
const { thinkingProjects } = await import("../src/lib/thinking-data.ts");

const bytes = (p) => (existsSync(p) ? statSync(p).size : 0);
const MB = (n) => (n / 1048576).toFixed(1) + " MB";

/** Bytes for one image at the rung a browser picks for `target` CSS pixels. */
function optimized(path, target) {
  const entry = manifest[path];
  if (!entry) return bytes(join(PUBLIC, decodeURIComponent(path)));
  const [hash, , , , widths] = entry;
  const rung = widths.find((w) => w >= target) ?? widths[widths.length - 1];
  return bytes(join(PUBLIC, "_opt", `${hash}-${rung}.avif`));
}

function original(path) {
  return bytes(join(PUBLIC, decodeURIComponent(path)));
}

const pages = [];
for (const [cat, projects] of Object.entries(projectsByCategory)) {
  for (const p of projects) {
    const images = [
      p.cover,
      ...(p.gallery ?? []),
      ...(p.sections ?? []).flatMap((s) => s.images),
      ...(p.compare ? [...p.compare.before.images, ...p.compare.after.images] : []),
    ];
    pages.push({ name: `/projects/${cat}/${p.slug}`, images });
  }
}
for (const t of thinkingProjects) {
  for (const c of t.collections) {
    pages.push({ name: `/thinking/${t.slug}/${c.slug}`, images: c.gallery });
  }
}

console.log("page".padEnd(52), "before".padStart(10), "after".padStart(10), "  saving");
console.log("-".repeat(88));

let totalBefore = 0;
let totalAfter = 0;
for (const page of pages.sort((a, b) => a.name.localeCompare(b.name))) {
  const before = page.images.reduce((sum, i) => sum + original(i), 0);
  const after = page.images.reduce((sum, i) => sum + optimized(i, 960), 0);
  totalBefore += before;
  totalAfter += after;
  const saving = before ? (100 * (1 - after / before)).toFixed(1) : "0";
  console.log(
    page.name.padEnd(52),
    MB(before).padStart(10),
    MB(after).padStart(10),
    `  −${saving}%`,
  );
}
console.log("-".repeat(88));
console.log(
  "TOTAL".padEnd(52),
  MB(totalBefore).padStart(10),
  MB(totalAfter).padStart(10),
  `  −${(100 * (1 - totalAfter / totalBefore)).toFixed(1)}%`,
);
