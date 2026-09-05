// @lovable.dev/vite-tanstack-config already includes the following, do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Pick a Nitro preset:
//   1. If NITRO_PRESET env var is set, honour it (used locally for `node-server` builds).
//   2. Otherwise default to `vercel` so Vercel deployments get a real serverless function
//      (the Lovable preset SKIPS Nitro entirely unless we pass `nitro: { ... }` here).
const nitroPreset = process.env.NITRO_PRESET ?? "vercel";

// The preset types `nitro` far more narrowly than Nitro actually accepts, it
// omits routeRules, which Nitro does honour (verified: the rule below lands in
// .vercel/output/config.json). Declared separately and widened at the call site.
const routeRules = {
  // Derivatives under /_opt are named by content hash, a changed image gets a
  // new filename, so they can be cached forever.
  "/_opt/**": {
    headers: { "cache-control": "public, max-age=31536000, immutable" },
  },
};

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: {
    preset: nitroPreset,
    ...({ routeRules } as object),
  },
});
