// Paths below are RAW on-disk paths under public/ — never pre-encoded here.
// Render sites wrap them in assetUrl() (src/lib/assets.ts).

export type ProjectSection = {
  title: string;
  images: string[];
};

export type ProjectCompare = {
  before: ProjectSection;
  after: ProjectSection;
};

export type Project = {
  slug: string;
  title: string;
  place: string;
  year: string;
  blurb: string;
  description: string;
  cover: string;
  /** Flat gallery. Rendered after `compare` and `sections` when present. */
  gallery?: string[];
  /** Named groups of plates, each with its own heading. */
  sections?: ProjectSection[];
  /** Side-by-side before/after columns (e.g. existing vs proposed). */
  compare?: ProjectCompare;
  /**
   * "crop"    — uniform 4:3 grid, images cropped to fill (default; photography).
   * "natural" — masonry, full image, never cropped (plans, sections, drawings).
   */
  display?: "crop" | "natural";
};

// Order here is the order of the filter tabs on /projects.
export const categories = [
  "all",
  "commercial",
  "residential",
  "others",
  "special-planning",
  "urban-planning",
  "fashion",
  "landscape",
  "logo-branding",
] as const;

export type Cat = (typeof categories)[number];

export const categoryLabel: Record<string, string> = {
  all: "All",
  commercial: "Commercial",
  residential: "Residential",
  others: "Institutional",
  "special-planning": "Special Planning",
  "urban-planning": "Urban Planning",
  fashion: "Fashion",
  landscape: "Landscape",
  "logo-branding": "Logo & Branding",
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
  "special-planning": [
    {
      slug: "sacred-geometry",
      title: "Sacred Geometry",
      place: "Special Planning",
      year: "",
      blurb: "Geometry as a generative language for inhabited space.",
      description:
        "A studio investigation into proportion, symmetry, and the underlying geometric patterns that organise architecture — from the scale of a single room to a village fabric.",
      cover: "/projects/specialplanning/sacredgeometry/backdesign/s4.png",
      display: "natural",
      gallery: [
        "/projects/specialplanning/sacredgeometry/backdesign/s4.png",
        "/projects/specialplanning/sacredgeometry/backdesign/t1.jpeg",
        "/projects/specialplanning/sacredgeometry/backdesign/t6.jpeg",
        "/projects/specialplanning/sacredgeometry/backdesign/t15.png",
        "/projects/specialplanning/sacredgeometry/backdesign/t16.png",
        "/projects/specialplanning/sacredgeometry/backdesign/t17.png",
        "/projects/specialplanning/sacredgeometry/backdesign/t18.png",
        "/projects/specialplanning/sacredgeometry/backdesign/t19.png",
        "/projects/specialplanning/sacredgeometry/backdesign/t20.png",
        "/projects/specialplanning/sacredgeometry/backdesign/s2.jpeg",
        "/projects/specialplanning/sacredgeometry/backdesign/s3.jpeg",
      ],
    },
    {
      slug: "the-intellectual-spine",
      title: "The Intellectual Spine",
      place: "Special Planning",
      year: "",
      blurb: "Modular studies of bridges and undergrounds along a shared spine.",
      description:
        "A modular exploration organised along a single spine — studying how repeating geometric units assemble into bridges above and circulation below, and how the two register against one another.",
      cover: "/projects/specialplanning/sacredgeometry/theintelectualspine/bridges/m1.jpeg",
      display: "natural",
      sections: [
        {
          title: "Bridges",
          images: [
            "/projects/specialplanning/sacredgeometry/theintelectualspine/bridges/m1.jpeg",
            "/projects/specialplanning/sacredgeometry/theintelectualspine/bridges/m2.jpeg",
            "/projects/specialplanning/sacredgeometry/theintelectualspine/bridges/m3.jpeg",
            "/projects/specialplanning/sacredgeometry/theintelectualspine/bridges/m4.jpeg",
            "/projects/specialplanning/sacredgeometry/theintelectualspine/bridges/m5.jpeg",
            "/projects/specialplanning/sacredgeometry/theintelectualspine/bridges/m6.jpeg",
            "/projects/specialplanning/sacredgeometry/theintelectualspine/bridges/m7.jpeg",
            "/projects/specialplanning/sacredgeometry/theintelectualspine/bridges/m8.jpeg",
            "/projects/specialplanning/sacredgeometry/theintelectualspine/bridges/m9.jpeg",
            "/projects/specialplanning/sacredgeometry/theintelectualspine/bridges/m10.jpeg",
            "/projects/specialplanning/sacredgeometry/theintelectualspine/bridges/m11.jpeg",
            "/projects/specialplanning/sacredgeometry/theintelectualspine/bridges/m12.jpeg",
            "/projects/specialplanning/sacredgeometry/theintelectualspine/bridges/s1.jpeg",
          ],
        },
        {
          title: "Underground",
          images: [
            "/projects/specialplanning/sacredgeometry/theintelectualspine/underground/t2.jpeg",
            "/projects/specialplanning/sacredgeometry/theintelectualspine/underground/t3.jpeg",
            "/projects/specialplanning/sacredgeometry/theintelectualspine/underground/t4.jpeg",
            "/projects/specialplanning/sacredgeometry/theintelectualspine/underground/t5.jpeg",
            "/projects/specialplanning/sacredgeometry/theintelectualspine/underground/t7.jpeg",
            "/projects/specialplanning/sacredgeometry/theintelectualspine/underground/t8.jpeg",
            "/projects/specialplanning/sacredgeometry/theintelectualspine/underground/t9.jpeg",
            "/projects/specialplanning/sacredgeometry/theintelectualspine/underground/t10.jpeg",
            "/projects/specialplanning/sacredgeometry/theintelectualspine/underground/t11.jpeg",
            "/projects/specialplanning/sacredgeometry/theintelectualspine/underground/t12.jpeg",
            "/projects/specialplanning/sacredgeometry/theintelectualspine/underground/t13.jpeg",
            "/projects/specialplanning/sacredgeometry/theintelectualspine/underground/t14.jpeg",
          ],
        },
      ],
    },
  ],
  "urban-planning": [
    {
      slug: "panahgah",
      title: "Panahgah",
      place: "Urban Planning",
      year: "",
      blurb: "A shelter proposal read at the scale of the city block.",
      description:
        "An urban proposal for Panahgah — a place of shelter. The plates move from master plan and detail plans through exploded axonometrics and sections to the spatial views that test the proposal at eye level.",
      cover: "/projects/urban/panahgah/PANAHGAH FINAL PRE.jpg",
      display: "natural",
      gallery: [
        "/projects/urban/panahgah/PANAHGAH FINAL PRE.jpg",
        "/projects/urban/panahgah/MASTER PLAN.jpg",
        "/projects/urban/panahgah/MASTTTTTTTTTTT.png",
        "/projects/urban/panahgah/detail plan.png",
        "/projects/urban/panahgah/EXPLODED AXONOMO.png",
        "/projects/urban/panahgah/{3D}.jpg",
        "/projects/urban/panahgah/HAMMAD 1.jpg",
        "/projects/urban/panahgah/HA 2.jpg",
        "/projects/urban/panahgah/HA 3.jpg",
        "/projects/urban/panahgah/HA 4.jpg",
        "/projects/urban/panahgah/HA 5[1].jpg",
        "/projects/urban/panahgah/HA 6.jpg",
        "/projects/urban/panahgah/HA 7.jpg",
        "/projects/urban/panahgah/HA 8.jpg",
        "/projects/urban/panahgah/HA 9.jpg",
        "/projects/urban/panahgah/HAAAA13.jpg",
        "/projects/urban/panahgah/HAAAA  14.jpg",
        "/projects/urban/panahgah/HAM 15.jpg",
        "/projects/urban/panahgah/HAMM 16.jpg",
        "/projects/urban/panahgah/HAA 19.jpg",
        "/projects/urban/panahgah/GHGHGH.png",
        "/projects/urban/panahgah/RTRTRTRETETET.png",
        "/projects/urban/panahgah/AASASASASASASA.jpg",
        "/projects/urban/panahgah/HAHAAHHAAHAAH.jpg",
        "/projects/urban/panahgah/huuuu.jpg",
        "/projects/urban/panahgah/1131313.jpg",
        "/projects/urban/panahgah/121212121.jpg",
        "/projects/urban/panahgah/12121212122131324.jpg",
      ],
    },
    {
      slug: "pedestrianizing-anarkali",
      title: "Pedestrianizing Anarkali",
      place: "Urban Planning",
      year: "",
      blurb: "Anarkali's foot street, read as existing condition and proposal.",
      description:
        "An urban study of Anarkali that pedestrianises the foot street. The drawings are set out as a direct comparison — the existing condition on one side, the proposed intervention on the other — across plan, axonometric, section and the street-level electrical system.",
      cover: "/projects/urban/pedestrianzing_anarkali/proposed/1.png",
      display: "natural",
      compare: {
        before: {
          title: "Existing",
          images: [
            "/projects/urban/pedestrianzing_anarkali/existing/existing plan.png",
            "/projects/urban/pedestrianzing_anarkali/existing/axo.png",
            "/projects/urban/pedestrianzing_anarkali/existing/kocho.png",
            "/projects/urban/pedestrianzing_anarkali/existing/electric systrem in anarkali foot street vs proposal.png",
            "/projects/urban/pedestrianzing_anarkali/existing/isoooooo.png",
            "/projects/urban/pedestrianzing_anarkali/existing/view 1.png",
            "/projects/urban/pedestrianzing_anarkali/existing/21.png",
            "/projects/urban/pedestrianzing_anarkali/existing/7.png",
            "/projects/urban/pedestrianzing_anarkali/existing/vfebetb egbvw ad.png",
            "/projects/urban/pedestrianzing_anarkali/existing/WhatsApp Image 2024-05-30 at 07.54.58_cec1b120.jpg",
          ],
        },
        after: {
          title: "Proposed",
          images: [
            "/projects/urban/pedestrianzing_anarkali/proposed/proposal plan.png",
            "/projects/urban/pedestrianzing_anarkali/proposed/axoooooooo aftrt.png",
            "/projects/urban/pedestrianzing_anarkali/proposed/pocho.png",
            "/projects/urban/pedestrianzing_anarkali/proposed/electric systrem in anarkali foot street.jpg",
            "/projects/urban/pedestrianzing_anarkali/proposed/1.png",
            "/projects/urban/pedestrianzing_anarkali/proposed/2.png",
            "/projects/urban/pedestrianzing_anarkali/proposed/3.png",
            "/projects/urban/pedestrianzing_anarkali/proposed/4.png",
            "/projects/urban/pedestrianzing_anarkali/proposed/gfrvgdvgsv.png",
            "/projects/urban/pedestrianzing_anarkali/proposed/sec.png",
            "/projects/urban/pedestrianzing_anarkali/proposed/sec blow up.png",
          ],
        },
      },
    },
    {
      slug: "reimaging-co-existance",
      title: "Reimaging Co Existance",
      place: "Urban Planning",
      year: "",
      blurb: "A master plan where agriculture, livestock and workshop co-exist.",
      description:
        "An urban proposal that reimagines co-existence between productive landscapes and settlement. The master plans and axonometric models set agriculture, livestock, textile and workshop programmes alongside the shared centre and its parking.",
      cover: "/projects/urban/reimaging co existance/masterplan.png",
      display: "natural",
      gallery: [
        "/projects/urban/reimaging co existance/masterplan.png",
        "/projects/urban/reimaging co existance/MASTEER PLEEN.jpg",
        "/projects/urban/reimaging co existance/taqreeban masterplan.png",
        "/projects/urban/reimaging co existance/masterrrrrrrrrrr plan Taqreeban.jpg",
        "/projects/urban/reimaging co existance/CENTRE.png",
        "/projects/urban/reimaging co existance/AGRICULTURE PART.jpg",
        "/projects/urban/reimaging co existance/agriculture model axo.png",
        "/projects/urban/reimaging co existance/BIO GAS LIVESTOCK PART.jpg",
        "/projects/urban/reimaging co existance/livestock model axo.png",
        "/projects/urban/reimaging co existance/livestock model axo 2.png",
        "/projects/urban/reimaging co existance/jungle model axo.png",
        "/projects/urban/reimaging co existance/TEXTILE PART ISO.jpg",
        "/projects/urban/reimaging co existance/WORKSHOP PART ISO.jpg",
        "/projects/urban/reimaging co existance/PARKING.png",
        "/projects/urban/reimaging co existance/view 1.png",
        "/projects/urban/reimaging co existance/view 11.png",
        "/projects/urban/reimaging co existance/viewn2.png",
        "/projects/urban/reimaging co existance/1.png",
        "/projects/urban/reimaging co existance/2.png",
        "/projects/urban/reimaging co existance/22.png",
        "/projects/urban/reimaging co existance/33.png",
        "/projects/urban/reimaging co existance/44.png",
      ],
    },
  ],
  fashion: [
    {
      slug: "fashion-design",
      title: "Fashion Design",
      place: "Fashion",
      year: "",
      blurb: "Garment studies carrying the studio's geometry into cloth.",
      description:
        "A fashion design series by the studio. The same interest in proportion, structure and silhouette that shapes our buildings is worked out here at the scale of the body.",
      cover: "/projects/fashiondesign/1.jpeg",
      gallery: [
        "/projects/fashiondesign/1.jpeg",
        "/projects/fashiondesign/2.jpeg",
        "/projects/fashiondesign/3.jpeg",
        "/projects/fashiondesign/4.jpeg",
        "/projects/fashiondesign/5.jpeg",
        "/projects/fashiondesign/6.jpeg",
        "/projects/fashiondesign/7.jpeg",
        "/projects/fashiondesign/8.jpeg",
        "/projects/fashiondesign/9.jpeg",
        "/projects/fashiondesign/10.jpeg",
        "/projects/fashiondesign/11.jpeg",
        "/projects/fashiondesign/12.jpeg",
        "/projects/fashiondesign/13.jpeg",
        "/projects/fashiondesign/14.jpeg",
        "/projects/fashiondesign/15.jpeg",
      ],
    },
    {
      slug: "furniture-design",
      title: "Furniture Design",
      place: "Fashion",
      year: "",
      blurb: "Walls, frames and fittings — from working drawing to render.",
      description:
        "A furniture and fitted-joinery series developed for interiors of the studio's own projects. Shown as finished visuals alongside the working drawings that set out each wall, frame and module.",
      cover: "/projects/furnituredesign/visuals/1.png",
      display: "natural",
      sections: [
        {
          title: "Visuals",
          images: [
            "/projects/furnituredesign/visuals/1.png",
            "/projects/furnituredesign/visuals/2.png",
            "/projects/furnituredesign/visuals/3.png",
            "/projects/furnituredesign/visuals/4.png",
            "/projects/furnituredesign/visuals/5.png",
            "/projects/furnituredesign/visuals/6.png",
            "/projects/furnituredesign/visuals/7.png",
            "/projects/furnituredesign/visuals/9.png",
            "/projects/furnituredesign/visuals/10.png",
            "/projects/furnituredesign/visuals/11.png",
            "/projects/furnituredesign/visuals/11 (1).png",
            "/projects/furnituredesign/visuals/11 (3).png",
            "/projects/furnituredesign/visuals/11c.png",
            "/projects/furnituredesign/visuals/13a.png",
            "/projects/furnituredesign/visuals/13d.png",
            "/projects/furnituredesign/visuals/14b.png",
          ],
        },
        {
          title: "Drawings",
          images: [
            "/projects/furnituredesign/drawings/1.png",
            "/projects/furnituredesign/drawings/front wall.png",
            "/projects/furnituredesign/drawings/artisan wall.png",
            "/projects/furnituredesign/drawings/interective wall.png",
            "/projects/furnituredesign/drawings/fabinachi wall.png",
            "/projects/furnituredesign/drawings/fabinachoi front wall.png",
            "/projects/furnituredesign/drawings/khambeer wall.png",
            "/projects/furnituredesign/drawings/khambeer.png",
            "/projects/furnituredesign/drawings/frame.png",
            "/projects/furnituredesign/drawings/frame 2.png",
            "/projects/furnituredesign/drawings/dim.jpeg",
          ],
        },
      ],
    },
  ],
  landscape: [],
  "logo-branding": [],
};
