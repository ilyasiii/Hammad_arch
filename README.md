# Ph.G Studio, Website

The official website for **Ph.G Studio** (Phenomenological Geometry), an
interdisciplinary architecture and design practice founded by Ar. Hammad
Hussain. Server-rendered React on TanStack Start.

Live pages:

| Route | Purpose |
| --- | --- |
| `/` | Hero slideshow, philosophy with the 3D armature, two travelling project strips |
| `/projects?cat=…` | Filterable gallery, the active filter lives in the URL |
| `/projects/$category/$slug` | Project page, full-bleed hero then a per-project gallery layout |
| `/thinking` | Brainstorming folders, Spatial Experimentation, PDF writings |
| `/thinking/$slug` | A thinking project's collections |
| `/thinking/$slug/$sub` | One collection's plates |
| `/about` | Services and design process |
| `/people` | Team |
| `/contact` | Studio contact info + Web3Forms enquiry form |

## Tech stack

- **[TanStack Start](https://tanstack.com/start)**, SSR via Nitro, file-based routing
- **React 19** + **TypeScript 5**, **Vite 7** with the
  [`@lovable.dev/vite-tanstack-config`](https://www.npmjs.com/package/@lovable.dev/vite-tanstack-config) preset
- **Tailwind CSS v4**, custom editorial palette in OKLCH (cream / ink / clay / stone)
- **Motion** for view transitions and the category underline
- **three.js / React Three Fiber** for the one 3D moment on the home page
- **sharp** for the build-time image pipeline (a runtime dependency: the deploy
  host needs it during `prebuild`)
- **Web3Forms** for contact-form delivery (no backend)

## Getting started

```bash
npm install
npm run images   # generate image derivatives (first run ~20 min, then incremental)
npm run dev      # http://localhost:8080
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with HMR on <http://localhost:8080> |
| `npm run images` | Regenerate image derivatives into `public/_opt` |
| `npm run build` | Production build (runs `images` first via `prebuild`) |
| `npm run preview` | Serve the production build |
| `npm run lint` | ESLint |

## Images, read this before adding any

Source images live in `public/`, many of them very large (the archive has
originals up to 35 MB). **Nothing serves originals.** `npm run images` walks
`public/`, writes an AVIF + WebP ladder (240–2400px) into `public/_opt`, and
records dimensions and a placeholder colour into `src/lib/image-manifest.json`.

- Derivatives are named by **content hash**, so filenames with spaces, brackets
  or non-ASCII characters need no URL encoding, and the files cache forever.
- `public/_opt` is **gitignored** and regenerated on the deploy host.
- Always render content images with **`<Plate>`** (`src/components/plate.tsx`),
  never a bare `<img>`, a bare tag pointed at `public/` serves the original.
- After dropping new images into `public/`, run `npm run images`.

### Scripts

| Script | Purpose |
| --- | --- |
| `scripts/optimize-images.mjs` | The pipeline above. Run via `npm run images`, and automatically by `prebuild`. |
| `scripts/report-payload.mjs` | Prints the weight of every project page, before and after optimisation. |
| `scripts/move-unused.mjs` | Lists files under `public/` that nothing references. Pass `--apply` to move them into `unused/`. Always dry-run first. |

Run the last two with `node --experimental-strip-types scripts/<name>.mjs`.

### unused/

Source material the site does not reference lives in `unused/` at the repo root,
outside `public/` so it is never served or deployed. It is gitignored: the files
sit on disk only. Delete the folder when you are confident you no longer want
them.

## Editing content

| Content | File |
| --- | --- |
| Project catalog, categories, tab order | `src/lib/projects-data.ts` |
| Thinking collections and PDF writings | `src/lib/thinking-data.ts` |
| Pillars / philosophy copy | `src/routes/index.tsx` (`pillars`) |
| Services & design process | `src/routes/about.tsx` |
| Team members | `src/routes/people.tsx` (`team`) |
| Contact details, socials | `src/routes/contact.tsx`, `src/components/site-footer.tsx` |
| Theme + motion tokens | `src/styles.css` |
| Home hero plates | `public/projects/home/` + `slides` in `src/routes/index.tsx` |

### Adding a project

Add an entry to the right category array in `src/lib/projects-data.ts`. Every
project declares a `layout` that suits its material:

| Layout | For |
| --- | --- |
| `grid` | photographed interiors, uniform 4:3, cropped |
| `diptych` | drawings and renders, two-up, never cropped |
| `editorial` | a few strong plates, offset, diagonal rhythm |
| `contact-sheet` | large sketch sets, dense masonry |
| `cinematic` | the hero project, full-measure plates among pairs |

Use `sections` for named sub-groups and `compare` for before/after columns
(see Pedestrianizing Anarkali). New categories go in the `categories` tuple and
`categoryLabel` map in the same file, the tabs are generated from them.

## Development tooling

`.mcp.json` registers the Playwright MCP server, which lets an AI assistant open
the site and screenshot it while working. Not needed to build or run the site.

## Design system

`.claude/skills/phg-design/SKILL.md` holds the palette, type scale, motion
tokens, image rules and layout catalog, plus the list of effects deliberately
rejected. Read it before changing any page.

## Contact form (Web3Forms)

`/contact` submits to **[Web3Forms](https://web3forms.com)** via a public access
key in `src/routes/contact.tsx`. The key is domain-scoped and safe to commit; a
hidden `botcheck` honeypot filters bots. **When you deploy:** replace the
`localhost` domain on the Web3Forms dashboard with the production hostname.

## Deployment

Nitro targets **Vercel** by default (override with `NITRO_PRESET`).

`public/_opt` is **not** committed. `npm run build` runs `prebuild` first, which
regenerates every derivative from `public/`, so a cold deploy spends roughly 20
minutes encoding before the app build starts. Nothing else is required: the
folder appears on the server as part of the build.

If that wait becomes a problem, un-ignore `public/_opt` and commit it. Deploys
then become instant, at the cost of ~150 MB in the repository.

Derivatives under `/_opt` are served with a one-year immutable cache header,
which is safe because their filenames are content hashes.

**Before the first deploy:** add the production domain in the Web3Forms
dashboard, or contact-form submissions will stop silently.

## License

Private, © 2026 Ph.G Studio. All rights reserved.
