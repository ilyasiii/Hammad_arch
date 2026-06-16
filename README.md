# Ph.G Studio — Website

The official website for **Ph.G Studio** (Phenomenological Geometry), an
interdisciplinary architecture and design practice founded by Ar. Hammad
Hussain. The site is a single-page application with server-side rendering,
built on TanStack Start.

Live pages:

| Route | Purpose |
| --- | --- |
| `/` | Hero slideshow, design philosophy (the four Ph.G pillars), featured projects |
| `/projects` | Filterable gallery (All / Commercial / Residential / Institutional) |
| `/projects/commercial` | Commercial projects grid |
| `/projects/residential` | Residential projects grid |
| `/projects/others` | Institutional / public projects grid |
| `/projects/$category/$slug` | Individual project page with gallery |
| `/about` | Services and design process |
| `/people` | Team (architects, directors, collaborators) |
| `/contact` | Studio contact info + working enquiry form |

## Tech stack

- **[TanStack Start](https://tanstack.com/start)** — full-stack React framework
  (SSR via Nitro, file-based routing via TanStack Router)
- **React 19** + **TypeScript 5**
- **Vite 7** with the [`@lovable.dev/vite-tanstack-config`](https://www.npmjs.com/package/@lovable.dev/vite-tanstack-config)
  preset (auto-wires React, Tailwind, tsconfig paths, Nitro, error logging)
- **Tailwind CSS v4** with a custom editorial palette in OKLCH
  (cream / ink / clay / stone) plus `tw-animate-css`
- **TanStack Query** (provider wired in, ready for data fetching)
- **Web3Forms** for contact-form delivery (no backend required)

## Prerequisites

- **Node.js ≥ 20** (tested on Node 24)
- **npm ≥ 10**

## Getting started

```powershell
# 1. Install dependencies
npm install

# 2. Start the dev server (port 8080)
npm run dev
```

Then open <http://localhost:8080/>.

### Available scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Vite dev server with HMR on <http://localhost:8080> |
| `npm run build` | Production build (client + SSR) into `dist/` |
| `npm run build:dev` | Production build in development mode (un-minified, source maps) |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint (TypeScript + React rules) |
| `npm run format` | Prettier write |

## Project structure

```
src/
├── assets/                  # Hero & project images (imported, fingerprinted by Vite)
├── components/
│   ├── site-header.tsx      # Fixed top navigation
│   └── site-footer.tsx      # Studio info, social links
├── lib/
│   ├── error-capture.ts     # Captures unhandled errors for SSR recovery
│   ├── error-page.ts        # HTML fallback when SSR crashes
│   ├── lovable-error-reporting.ts  # Forwards client errors to Lovable
│   └── projects-data.ts     # Static project catalog (by category)
├── routes/                  # File-based routes (TanStack Router conventions)
│   ├── __root.tsx           # App shell: <head>, providers, error/404 boundaries
│   ├── index.tsx            # `/`
│   ├── about.tsx            # `/about`
│   ├── people.tsx           # `/people`
│   ├── contact.tsx          # `/contact` — Web3Forms-powered form
│   ├── projects.tsx         # `/projects`
│   ├── projects.commercial.tsx
│   ├── projects.residential.tsx
│   ├── projects.others.tsx
│   └── projects.$category.$slug.tsx   # Dynamic project detail
├── router.tsx               # Router factory (QueryClient context, scroll restoration)
├── routeTree.gen.ts         # Auto-generated — do NOT edit by hand
├── server.ts                # SSR entry (h3 error normalisation)
├── start.ts                 # createStart() with request-scoped error middleware
└── styles.css               # Tailwind v4 setup + theme tokens
```

### Routing conventions (TanStack Router file-based)

| File | URL |
| --- | --- |
| `index.tsx` | `/` |
| `about.tsx` | `/about` |
| `projects.$category.$slug.tsx` | `/projects/:category/:slug` (dynamic) |
| `__root.tsx` | root layout — wraps every page; preserve `<Outlet />` |

`routeTree.gen.ts` is regenerated automatically by the TanStack Router Vite
plugin while the dev server is running.

## Editing content

| Content | File |
| --- | --- |
| Featured projects on the homepage | `src/routes/index.tsx` (`featured` array) |
| Pillars / philosophy copy | `src/routes/index.tsx` (`pillars` array) |
| Services & design-process steps | `src/routes/about.tsx` |
| Team members | `src/routes/people.tsx` (`team` array) |
| Project catalog (gallery + categories) | `src/lib/projects-data.ts` |
| Contact details (email, WhatsApp, socials) | `src/routes/contact.tsx` and `src/components/site-footer.tsx` |
| Theme colors | `src/styles.css` (`:root` OKLCH variables) |

To add a new project image, drop it into `src/assets/`, import it in
`src/lib/projects-data.ts`, and reference it in the desired category array.

## Contact form (Web3Forms)

The enquiry form on `/contact` submits to **[Web3Forms](https://web3forms.com)**
via a public access key — no server, no SMTP setup.

- Access key lives in [`src/routes/contact.tsx`](src/routes/contact.tsx) as
  `WEB3FORMS_ACCESS_KEY`. The key is **not a secret** (it's domain-scoped on
  the Web3Forms dashboard) so it is safe to commit.
- A hidden honeypot `botcheck` checkbox filters out most bots.
- Delivery destination, daily limit, and allowed referer domains are managed
  on the Web3Forms dashboard (form name: `Hammad_arch`).

**When you deploy:** edit the form on Web3Forms and replace the `localhost`
domain with the production hostname (e.g. `phgstudio.com`). The access key
itself does not change.

## Theme & typography

- Palette is defined in OKLCH in `src/styles.css` (cream background, ink text,
  clay accent, stone muted) — change once, propagated everywhere.
- Display font: **Instrument Serif** (Google Fonts, preloaded in `__root.tsx`)
- Body font: **Inter**
- Custom utilities: `font-display`, `font-label`, `hairline`

## Deployment

`@lovable.dev/vite-tanstack-config` wires **Nitro** with Cloudflare as the
default deploy target. Run `npm run build` and deploy the contents of `dist/`
according to your provider's instructions (Cloudflare Workers, Node server,
etc.). The SSR entry is `src/server.ts`.

## License

Private — © 2026 Ph.G Studio. All rights reserved.
