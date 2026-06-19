export type Project = {
  slug: string;
  title: string;
  place: string;
  year: string;
  blurb: string;
  description: string;
  cover: string;
  gallery: string[];
};

export const projectsByCategory: Record<string, Project[]> = {
  commercial: [
    {
      slug: "artisan-bakery",
      title: "Artisan Bakery",
      place: "Commercial",
      year: "",
      blurb: "A boutique bakery interior shaped around craft and warmth.",
      description:
        "A commercial interior for an artisan bakery. The plan reads as a calm display floor, with material textures and lighting tuned to the rhythm of fresh-baked product on display.",
      cover: "/projects/commercial/artisanbakery/a1.jpeg",
      gallery: [
        "/projects/commercial/artisanbakery/a1.jpeg",
        "/projects/commercial/artisanbakery/a2.jpeg",
        "/projects/commercial/artisanbakery/a3.jpeg",
        "/projects/commercial/artisanbakery/a4.jpeg",
        "/projects/commercial/artisanbakery/a5.jpeg",
      ],
    },
    {
      slug: "arena-fitness-club",
      title: "Arena Fitness Club",
      place: "Commercial Interior",
      year: "",
      blurb: "An industrial, rusty fitness interior in Parachinar City.",
      description:
        "A commercial interior for Arena Fitness Club, located in Parachinar City. The space is shaped around an industrial and rusty design language, with a palette of brown, gray and black tones tying floor, structure and lighting into a single grounded atmosphere.",
      cover: "/projects/commercial/arenafitness/2.png",
      gallery: [
        "/projects/commercial/arenafitness/2.png",
        "/projects/commercial/arenafitness/4.jpeg",
        "/projects/commercial/arenafitness/5.png",
        "/projects/commercial/arenafitness/6.jpeg",
        "/projects/commercial/arenafitness/9.png",
        "/projects/commercial/arenafitness/10.png",
        "/projects/commercial/arenafitness/11.png",
        "/projects/commercial/arenafitness/12.png",
      ],
    },
  ],
  residential: [
    {
      slug: "visal-home",
      title: "Visal Home",
      place: "Residential",
      year: "",
      blurb: "A family residence balancing privacy and openness.",
      description:
        "A residential project organised around daylit communal volumes and quieter, sheltered private wings. The composition keeps proportion and material restraint at the centre.",
      cover: "/projects/residential/visalhome/v1.jpeg",
      gallery: [
        "/projects/residential/visalhome/v1.jpeg",
        "/projects/residential/visalhome/v2.jpeg",
        "/projects/residential/visalhome/v3.jpeg",
        "/projects/residential/visalhome/v4.jpeg",
        "/projects/residential/visalhome/v6.jpeg",
      ],
    },
    {
      slug: "bazar-home",
      title: "Bazar Home",
      place: "Residential",
      year: "",
      blurb: "A residence threaded between street life and inner courtyards.",
      description:
        "A residential project that mediates between an active urban street edge and quiet interior rooms, with daylight and air pulled deep into the plan through a small set of measured openings.",
      cover: "/projects/residential/bazarhome/b1.jpeg",
      gallery: [
        "/projects/residential/bazarhome/b1.jpeg",
        "/projects/residential/bazarhome/a2.jpeg",
        "/projects/residential/bazarhome/a3.jpeg",
      ],
    },
  ],
  others: [
    {
      slug: "nca",
      title: "NCA",
      place: "Institutional",
      year: "",
      blurb: "An institutional project for the National College of Arts.",
      description:
        "An institutional project developed for the National College of Arts. The full set of plates is shown below.",
      cover: "/projects/institutional/nca/nca1.jpeg",
      gallery: [
        "/projects/institutional/nca/nca1.jpeg",
        "/projects/institutional/nca/nca2.jpeg",
        "/projects/institutional/nca/nca3.jpeg",
        "/projects/institutional/nca/nca4.jpeg",
        "/projects/institutional/nca/nca5.jpeg",
        "/projects/institutional/nca/nca6.jpeg",
        "/projects/institutional/nca/nca7.jpeg",
        "/projects/institutional/nca/nca8.jpeg",
        "/projects/institutional/nca/nca9.jpeg",
        "/projects/institutional/nca/nca10.jpeg",
        "/projects/institutional/nca/nca11.jpeg",
        "/projects/institutional/nca/nca12.jpeg",
      ],
    },
    {
      slug: "un-main-court",
      title: "UN Main Court",
      place: "Institutional",
      year: "",
      blurb: "An institutional courtyard project for a UN-scale civic ensemble.",
      description:
        "An institutional project developed around a generous main court. The plates illustrate the spatial sequence between approach, threshold, and the central public room.",
      cover: "/projects/institutional/un_maincourt/u1.jpeg",
      gallery: [
        "/projects/institutional/un_maincourt/u1.jpeg",
        "/projects/institutional/un_maincourt/u2.jpeg",
        "/projects/institutional/un_maincourt/u3.jpeg",
        "/projects/institutional/un_maincourt/u4.jpeg",
        "/projects/institutional/un_maincourt/u5.jpeg",
      ],
    },
    {
      slug: "art-gallery",
      title: "Art Gallery",
      place: "Institutional",
      year: "",
      blurb: "An institutional art gallery shaped around light and procession.",
      description:
        "An institutional project developed for an art gallery. The plates explore how daylight, circulation and proportion are tuned to the experience of viewing work.",
      cover: "/projects/institutional/artgallery/1.jpeg",
      gallery: [
        "/projects/institutional/artgallery/1.jpeg",
        "/projects/institutional/artgallery/2.jpeg",
        "/projects/institutional/artgallery/3.jpeg",
        "/projects/institutional/artgallery/4.jpeg",
        "/projects/institutional/artgallery/5.jpeg",
      ],
    },
  ],
  "urban-planning": [],
  landscape: [],
  "logo-branding": [],
  "ai-visualization": [
    {
      slug: "ai-visualization-studies",
      title: "AI Visualization Studies",
      place: "AI Visualization",
      year: "",
      blurb: "AI-driven visual studies exploring atmosphere, form and material.",
      description:
        "A set of AI-assisted visualization studies produced by the studio. Each plate explores a different combination of atmosphere, light, and material — used as a thinking tool alongside our drawings.",
      cover: "/projects/ai_visualization/1.jpeg",
      gallery: [
        "/projects/ai_visualization/1.jpeg",
        "/projects/ai_visualization/2.jpeg",
        "/projects/ai_visualization/3.jpeg",
        "/projects/ai_visualization/4.jpeg",
        "/projects/ai_visualization/5.jpeg",
        "/projects/ai_visualization/6.jpeg",
      ],
    },
  ],
  "culture-gathering": [
    {
      slug: "culture-and-gathering",
      title: "Culture & Gathering",
      place: "Culture & Gathering",
      year: "",
      blurb: "Spaces for community, ritual and shared experience.",
      description:
        "A studio investigation into spaces of culture and gathering — including the Saregama Karwan and Taqreeban proposals, master plans, and isometric studies that situate ritual, community and performance within a shared spatial language.",
      cover: "/projects/cultureandgathering/1.png",
      gallery: [
        "/projects/cultureandgathering/1.png",
        "/projects/cultureandgathering/2.png",
        "/projects/cultureandgathering/3.png",
        "/projects/cultureandgathering/4.png",
        "/projects/cultureandgathering/saregama%20karwan.png",
        "/projects/cultureandgathering/taqreeban.png",
        "/projects/cultureandgathering/masterpplan.png",
        "/projects/cultureandgathering/plan.png",
        "/projects/cultureandgathering/iso-%20metric%20view.png",
      ],
    },
  ],
};

export const categoryLabel: Record<string, string> = {
  commercial: "Commercial",
  residential: "Residential",
  others: "Institutional",
  "ai-visualization": "AI Visualization",
  "culture-gathering": "Culture & Gathering",
};
