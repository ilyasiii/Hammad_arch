import type { GalleryLayout } from "./gallery-layout";

export type ThinkingCollection = {
  slug: string;
  title: string;
  cover: string;
  gallery: string[];
  /** Shown above the plates. The folders hold very different material. */
  description?: string;
  /** How the plates are presented, see gallery-layout.ts. */
  layout?: GalleryLayout;
};

type ThinkingProject = {
  slug: string;
  title: string;
  blurb: string;
  description: string;
  cover: string;
  collections: ThinkingCollection[];
};

type ThinkingPdf = { title: string; href: string };

// NOTE: paths are RAW on-disk paths under public/, render sites wrap them in
// assetUrl() (src/lib/assets.ts), so spaces and non-ASCII names are fine here.
// The public/ folder is "Thinking" (capital T), matches Linux case-sensitivity
// on Vercel. Collection titles mirror their folder names on disk.

const BRAINSTORMING = "/Thinking/brainstorming";

export const thinkingProjects: ThinkingProject[] = [
  {
    slug: "brainstorming",
    title: "Brainstorming",
    blurb: "Sketchbooks, study models and boards from work in progress.",
    description:
      "Four working folders. Hand sketches and annotated plans, coloured master plans, site models in card and plaster, and the boards these were presented on. Each folder follows one line of thinking from the first mark to the reviewed proposal.",
    cover: `${BRAINSTORMING}/the intellectual spine/title.png`,
    collections: [
      {
        slug: "the-intellectual-spine",
        layout: "diptych",
        title: "The Intellectual Spine",
        description:
          "A spine threaded through a series of campuses and institutions, tested in card and plaster massing models, coloured master plans and painted site studies.",
        cover: `${BRAINSTORMING}/the intellectual spine/title.png`,
        gallery: [
          `${BRAINSTORMING}/the intellectual spine/title.png`,
          `${BRAINSTORMING}/the intellectual spine/1.png`,
          `${BRAINSTORMING}/the intellectual spine/2.png`,
          `${BRAINSTORMING}/the intellectual spine/spacial journey.png`,
          `${BRAINSTORMING}/the intellectual spine/masterplan of parachinar.png`,
          `${BRAINSTORMING}/the intellectual spine/gawo mastyerplan.png`,
          `${BRAINSTORMING}/the intellectual spine/living way gawon.png`,
          `${BRAINSTORMING}/the intellectual spine/district islamia.png`,
          `${BRAINSTORMING}/the intellectual spine/cadet.png`,
          `${BRAINSTORMING}/the intellectual spine/nca.png`,
          `${BRAINSTORMING}/the intellectual spine/nca hostel.png`,
          `${BRAINSTORMING}/the intellectual spine/hoestel building.png`,
          `${BRAINSTORMING}/the intellectual spine/home.png`,
          `${BRAINSTORMING}/the intellectual spine/lahore.png`,
          `${BRAINSTORMING}/the intellectual spine/contrast.png`,
          `${BRAINSTORMING}/the intellectual spine/Screenshot 2025-12-09 192512.png`,
        ],
      },
      {
        slug: "reimagening-co-existing",
        layout: "contact-sheet",
        title: "Reimagening Co Existing",
        description:
          "A speculative scenario: fuel exhausted, piped water and sewage gone, the grid down. The folder works through what settles in that vacuum, from governance models for a community to the boards the proposal was presented on.",
        cover: `${BRAINSTORMING}/reimagening co existing/IMG-20241214-WA0034.jpg`,
        gallery: [
          `${BRAINSTORMING}/reimagening co existing/IMG-20241214-WA0034.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20241214-WA0035.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20241214-WA0036.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20241214-WA0037.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20241214-WA0038.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20241214-WA0039.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20241214-WA0040.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20241214-WA0041.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20241214-WA0042.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20241214-WA0043.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0018.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0022.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0028.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0029.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0030.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0031.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0034.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0061.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0097.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0098.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0099.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0100.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0101.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0102.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0103.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0104.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0105.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0106.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0107.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0108.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0109.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0110.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0111.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0112.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0113.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0114.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0115.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0116.jpg`,
          `${BRAINSTORMING}/reimagening co existing/IMG-20250205-WA0117.jpg`,
          `${BRAINSTORMING}/reimagening co existing/WhatsApp Image 2024-10-28 at 04.00.24_112ab909.jpg`,
          `${BRAINSTORMING}/reimagening co existing/WhatsApp Image 2024-10-28 at 04.00.24_7594daa0.jpg`,
          `${BRAINSTORMING}/reimagening co existing/WhatsApp Image 2024-10-28 at 04.00.24_7ba51544.jpg`,
          `${BRAINSTORMING}/reimagening co existing/WhatsApp Image 2024-10-28 at 05.09.41_922852bd.jpg`,
          `${BRAINSTORMING}/reimagening co existing/WhatsApp Image 2024-10-28 at 05.13.23_a93b4dd9.jpg`,
          `${BRAINSTORMING}/reimagening co existing/WhatsApp Image 2024-10-28 at 05.13.24_17fac99c.jpg`,
          `${BRAINSTORMING}/reimagening co existing/WhatsApp Image 2024-10-28 at 05.13.24_5d3760db.jpg`,
          `${BRAINSTORMING}/reimagening co existing/WhatsApp Image 2024-12-14 at 15.56.13_5878013e.jpg`,
        ],
      },
      {
        slug: "ravi",
        layout: "contact-sheet",
        title: "Ravi",
        description:
          "Thirty three sketchbook pages. Quick pencil and charcoal studies alongside annotated plans that set out living and sleeping space against cattle, poultry and the working yard.",
        cover: `${BRAINSTORMING}/ravi/SKETCHES/IMG-20250527-WA0005.jpg`,
        // 33 sketches, IMG-20250527-WA0005 … WA0037
        gallery: Array.from(
          { length: 33 },
          (_, i) =>
            `${BRAINSTORMING}/ravi/SKETCHES/IMG-20250527-WA${String(i + 5).padStart(4, "0")}.jpg`,
        ),
      },
      {
        slug: "home-with-jama",
        layout: "diptych",
        title: "Home with Jama",
        description:
          "A study of the Jama, the shared forecourt in front of two or three homes in Shublan, Parachinar. It works as a community hub and baitak, and is given over to weddings and funerals. These sheets record the site and set out how that space might be shaped.",
        cover: `${BRAINSTORMING}/home with jama/IMG-20241219-WA0049.jpg`,
        gallery: [
          `${BRAINSTORMING}/home with jama/IMG-20241219-WA0049.jpg`,
          `${BRAINSTORMING}/home with jama/IMG-20241219-WA0050.jpg`,
          `${BRAINSTORMING}/home with jama/IMG-20241219-WA0051.jpg`,
          `${BRAINSTORMING}/home with jama/IMG-20241219-WA0052.jpg`,
        ],
      },
    ],
  },
  {
    slug: "spatial-experimentation",
    title: "Spatial Experimentation",
    blurb: "Visual studies exploring atmosphere, form and material.",
    description:
      "A set of spatial studies produced by the studio. Each plate pushes a different combination of atmosphere, light and material further than a drawing would, and is used as a way of thinking through space alongside them.",
    cover: "/Thinking/Spatial Experimentation/1.jpeg",
    collections: [
      {
        slug: "all",
        layout: "grid",
        title: "Spatial Experimentation",
        cover: "/Thinking/Spatial Experimentation/1.jpeg",
        gallery: [
          "/Thinking/Spatial Experimentation/1.jpeg",
          "/Thinking/Spatial Experimentation/2.jpeg",
          "/Thinking/Spatial Experimentation/3.jpeg",
          "/Thinking/Spatial Experimentation/4.jpeg",
          "/Thinking/Spatial Experimentation/5.jpeg",
          "/Thinking/Spatial Experimentation/6.jpeg",
        ],
      },
    ],
  },
];

export const thinkingPdfs: ThinkingPdf[] = [
  { title: "Space and Human Interaction", href: "/Thinking/pdfs/space and human interaction.pdf" },
  { title: "Studio Site", href: "/Thinking/pdfs/studio site.pdf" },
  { title: "Thesis Ideas", href: "/Thinking/pdfs/Thesis ideas.pdf" },
  {
    title: "Villages are Converting into Cities",
    href: "/Thinking/pdfs/Villages are Converting into Cities.pdf",
  },
  { title: "چندرو", href: "/Thinking/pdfs/چندرو.pdf" },
];
