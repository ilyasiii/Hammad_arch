# Project images

Each project gets its **own subfolder** here. The folder name should match the
project's `slug` in `src/lib/projects-data.ts`.

## Convention

```
public/projects/
├── casa-penedo/
│   ├── cover.jpg          ← used in grid + project detail header
│   ├── 01.jpg             ← gallery image 1
│   ├── 02.jpg             ← gallery image 2
│   └── 03.jpg             ← gallery image 3 (add as many as needed)
├── kunsthal-bjorvika/
│   ├── cover.jpg
│   ├── 01.jpg
│   └── ...
└── ...
```

## In code

Reference these images by URL path (no `import` needed):

```ts
{
  slug: "casa-penedo",
  cover: "/projects/casa-penedo/cover.jpg",
  gallery: [
    "/projects/casa-penedo/01.jpg",
    "/projects/casa-penedo/02.jpg",
    "/projects/casa-penedo/03.jpg",
  ],
}
```

## Image guidelines

- **Format:** `.jpg` for photographs (smaller). `.png` only if you need transparency.
- **Aspect ratio:** `4 : 3` (covers and gallery render in a `aspect-[4/3]` box).
- **Resolution:** export at **1600 × 1200** for covers, **2000 × 1500** for full-screen gallery shots. Anything larger is wasted bandwidth.
- **File size target:** keep each image **under ~400 KB** (use [squoosh.app](https://squoosh.app) if your originals are huge).
- **Naming:** lowercase, hyphens only — `cover.jpg`, `01.jpg`, `02.jpg`. No spaces, no `IMG_1234.JPG`.
