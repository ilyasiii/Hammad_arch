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

// NOTE: Folder names with spaces or non-ASCII chars must be URL-encoded.
// The public/ folder is "Thinking" (capital T) — matches Linux case-sensitivity on Vercel.

export const thinkingProjects: ThinkingProject[] = [
  {
    slug: "sacred-geometry",
    title: "Sacred Geometry",
    blurb:
      "An exploration of geometry as a generative language for inhabited space.",
    description:
      "A studio investigation into sacred geometry — proportion, symmetry, and the underlying patterns that organise architecture from the scale of a single room to a village fabric. The plates and accompanying writings document our thinking on the topic.",
    cover: "/Thinking/sacredgeometry/t1.jpeg",
    collections: [
      {
        slug: "special-planning",
        title: "Special Planning",
        cover: "/Thinking/sacredgeometry/t18.png",
        gallery: [
          "/Thinking/sacredgeometry/t1.jpeg",
          "/Thinking/sacredgeometry/t15.png",
          "/Thinking/sacredgeometry/t16.png",
          "/Thinking/sacredgeometry/t17.png",
          "/Thinking/sacredgeometry/t18.png",
          "/Thinking/sacredgeometry/t19.png",
          "/Thinking/sacredgeometry/t20.png",
        ],
      },
      {
        slug: "modular-explorations",
        title: "Modular Explorations",
        cover: "/Thinking/sacredgeometry/t12.jpeg",
        gallery: [
          "/Thinking/sacredgeometry/t2.jpeg",
          "/Thinking/sacredgeometry/t3.jpeg",
          "/Thinking/sacredgeometry/t4.jpeg",
          "/Thinking/sacredgeometry/t5.jpeg",
          "/Thinking/sacredgeometry/t6.jpeg",
          "/Thinking/sacredgeometry/t7.jpeg",
          "/Thinking/sacredgeometry/t8.jpeg",
          "/Thinking/sacredgeometry/t9.jpeg",
          "/Thinking/sacredgeometry/t10.jpeg",
          "/Thinking/sacredgeometry/t11.jpeg",
          "/Thinking/sacredgeometry/t12.jpeg",
          "/Thinking/sacredgeometry/t13.jpeg",
          "/Thinking/sacredgeometry/t14.jpeg",
        ],
      },
    ],
  },
];

export const thinkingPdfs: ThinkingPdf[] = [
  {
    title: "Space and Human Interaction",
    href: "/Thinking/sacredgeometry/space%20and%20human%20interaction.pdf",
  },
  {
    title: "Studio Site",
    href: "/Thinking/sacredgeometry/studio%20site.pdf",
  },
  {
    title: "Thesis Ideas",
    href: "/Thinking/sacredgeometry/Thesis%20ideas.pdf",
  },
  {
    title: "Villages are Converting into Cities",
    href: "/Thinking/sacredgeometry/Villages%20are%20Converting%20into%20Cities.pdf",
  },
  {
    title: "چندرو",
    href: "/Thinking/sacredgeometry/%DA%86%D9%86%D8%AF%D8%B1%D9%88.pdf",
  },
];

