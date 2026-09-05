/**
 * Moves every file under public/ that the site never references into unused/,
 * keeping its folder structure. Nothing is deleted.
 *
 *   node scripts/move-unused.mjs          list what would move
 *   node scripts/move-unused.mjs --apply  actually move it
 */
import { readdirSync, statSync, readFileSync, mkdirSync, renameSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";

const APPLY = process.argv.includes("--apply");

/** Every file under a directory, as paths relative to public/. */
function walk(dir, base, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name === "_opt") continue; // generated, not source
      walk(p, base, acc);
    } else {
      acc.push("/" + p.slice(base.length + 1).split("\\").join("/"));
    }
  }
  return acc;
}

// Every "/..." string literal anywhere in the source counts as a reference.
// This catches the data modules, the hero `slides`, team photos and the logo
// without having to enumerate them by hand.
const referenced = new Set();
(function scan(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) scan(p);
    else if (/\.(ts|tsx|json)$/.test(name)) {
      const text = readFileSync(p, "utf8");
      // Match each quote style separately. A path inside a double-quoted string
      // may legitimately contain an apostrophe ("front elevation'.png"), and a
      // combined character class truncates it and calls a live file unused.
      for (const re of [/"(\/[^"\n]*)"/g, /'(\/[^'\n]*)'/g, /`(\/[^`\n]*)`/g])
        for (const m of text.matchAll(re)) referenced.add(decodeURIComponent(m[1]));
      // template literals built from a prefix constant, e.g. `${BRAINSTORMING}/x.jpg`
      for (const m of text.matchAll(/\$\{(\w+)\}([^`"'\n]+)/g)) referenced.add(m[2]);
    }
  }
})("src");

const all = walk("public", "public");
const unused = all.filter((f) => {
  if (referenced.has(f)) return false;
  // a path may be referenced via a prefix constant, so also match by suffix
  return ![...referenced].some((r) => r.length > 12 && f.endsWith(r));
});

const bytes = (f) => statSync(join("public", f)).size;
const byFolder = {};
for (const f of unused) {
  const key = f.split("/").slice(0, 3).join("/");
  byFolder[key] = (byFolder[key] ?? 0) + bytes(f);
}

console.log(`${all.length} files under public/, ${referenced.size} referenced strings in src/`);
console.log(`${unused.length} unreferenced files:\n`);
for (const [k, v] of Object.entries(byFolder).sort((a, b) => b[1] - a[1]))
  console.log(`  ${(v / 1048576).toFixed(1).padStart(7)} MB  ${k}`);
console.log(
  `\n  ${(unused.reduce((s, f) => s + bytes(f), 0) / 1048576).toFixed(1)} MB total`,
);

if (!APPLY) {
  console.log("\n(dry run, nothing moved. re-run with --apply)");
} else {
  for (const f of unused) {
    const from = join("public", f);
    const to = join("unused", f);
    mkdirSync(dirname(to), { recursive: true });
    if (!existsSync(to)) renameSync(from, to);
  }
  console.log(`\nmoved ${unused.length} files into unused/`);
}
