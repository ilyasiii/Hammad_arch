export type ThinkingCollection = {
  slug: string;
  title: string;
  cover: string;
  gallery: string[];
};

export type ThinkingProject = {
  slug: string;
  title: string;
  blurb: string;
  description: string;
  cover: string;
  collections: ThinkingCollection[];
};

export type ThinkingPdf = { title: string; href: string };

// NOTE: paths are RAW on-disk paths under public/ — render sites wrap them in
// assetUrl() (src/lib/assets.ts), so spaces and non-ASCII names are fine here.
// The public/ folder is "Thinking" (capital T) — matches Linux case-sensitivity
// on Vercel. Collection titles mirror their folder names on disk.

const BRAINSTORMING = "/Thinking/brainstorming";

export const thinkingProjects: ThinkingProject[] = [
  {
    slug: "brainstorming",
    title: "Brainstorming",
    blurb: "Sketches, diagrams and ideation studies from the studio's notebooks.",
    description:
      "Working folders of brainstorming material — early sketches, spatial studies and conceptual diagrams produced while developing projects. Each folder follows one line of thinking from first mark to resolved idea.",
    cover: `${BRAINSTORMING}/the intellectual spine/title.png`,
    collections: [
      {
        slug: "the-intellectual-spine",
        title: "The Intellectual Spine",
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
        title: "Reimagening Co Existing",
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
        title: "Ravi",
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
        title: "Home with Jama",
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
    slug: "ai-visualization",
    title: "AI Visualization",
    blurb: "AI-driven visual studies exploring atmosphere, form and material.",
    description:
      "A set of AI-assisted visualization studies produced by the studio. Each plate explores a different combination of atmosphere, light, and material — used as a thinking tool alongside our drawings.",
    cover: "/Thinking/ai_visualization/1.jpeg",
    collections: [
      {
        slug: "all",
        title: "AI Visualization",
        cover: "/Thinking/ai_visualization/1.jpeg",
        gallery: [
          "/Thinking/ai_visualization/1.jpeg",
          "/Thinking/ai_visualization/2.jpeg",
          "/Thinking/ai_visualization/3.jpeg",
          "/Thinking/ai_visualization/4.jpeg",
          "/Thinking/ai_visualization/5.jpeg",
          "/Thinking/ai_visualization/6.jpeg",
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
