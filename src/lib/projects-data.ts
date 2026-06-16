import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import hero from "@/assets/hero.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import about from "@/assets/about.jpg";

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
      slug: "carmo-offices",
      title: "Carmo Offices",
      place: "Lisboa, PT",
      year: "2024",
      blurb: "A workplace carved into a 19th-century shell.",
      description:
        "Carmo Offices reorganises a slender Pombaline block into a daylit workplace. Limewashed walls, oak floors and a central stair stitched in steel form a calm armature for daily work.",
      cover: hero2,
      gallery: [hero2, p3, p2, hero],
    },
    {
      slug: "kunsthal-bjorvika",
      title: "Kunsthal Bjørvika",
      place: "Oslo, NO",
      year: "2022",
      blurb: "A small art hall at the waterline of the fjord.",
      description:
        "A compact exhibition hall facing the Oslofjord. Rough board-marked concrete plinths support a timber-clad upper volume, lit by north-facing clerestories.",
      cover: p3,
      gallery: [p3, hero3, p1, p2],
    },
    {
      slug: "forest-pavilion-hq",
      title: "Forest Pavilion HQ",
      place: "Telemark, NO",
      year: "2023",
      blurb: "Headquarters in a clearing of pine and granite.",
      description:
        "A low timber building threaded between existing pines. Glulam frames, charred larch cladding and a green roof return the volume to its setting.",
      cover: p2,
      gallery: [p2, hero, p1, hero2],
    },
  ],
  residential: [
    {
      slug: "casa-penedo",
      title: "Casa Penedo",
      place: "Sintra, PT",
      year: "2024",
      blurb: "A house balanced between two granite boulders.",
      description:
        "Casa Penedo sits between two granite outcrops in Sintra. Lime-rendered walls and a long copper roof frame views down toward the Atlantic.",
      cover: p1,
      gallery: [p1, hero, hero3, about],
    },
    {
      slug: "hus-vid-sjo",
      title: "Hús við Sjó",
      place: "Tórshavn, FO",
      year: "2022",
      blurb: "A family house at the edge of the harbour.",
      description:
        "A turf-roofed dwelling looking onto Tórshavn harbour. Pine interiors and deep window reveals shelter the rooms from Atlantic weather.",
      cover: hero,
      gallery: [hero, p2, hero2, about],
    },
    {
      slug: "quinta-dos-olivais",
      title: "Quinta dos Olivais",
      place: "Évora, PT",
      year: "2019",
      blurb: "A farmhouse renewed within an olive grove.",
      description:
        "An existing farmhouse re-walled in lime and tile. New courtyards mediate between the olive grove and the cool interior rooms.",
      cover: hero3,
      gallery: [hero3, p1, p3, about],
    },
  ],
  others: [
    {
      slug: "skog-schoolhouse",
      title: "Skog Schoolhouse",
      place: "Tromsø, NO",
      year: "2018",
      blurb: "A primary school in the arctic light.",
      description:
        "A timber schoolhouse organised around a top-lit central hall. Classrooms open onto sheltered south-facing terraces.",
      cover: p2,
      gallery: [p2, hero2, hero, p3],
    },
    {
      slug: "carmo-cloister",
      title: "Carmo Cloister",
      place: "Lisboa, PT",
      year: "2021",
      blurb: "A cultural reuse of a ruined cloister.",
      description:
        "The remains of a cloister stabilised and lightly inhabited. A new steel-and-glass insertion holds reading rooms above the old arcade.",
      cover: p3,
      gallery: [p3, hero3, p1, about],
    },
    {
      slug: "atelier-sonnerland",
      title: "Atelier Sønnerland",
      place: "Bergen, NO",
      year: "2020",
      blurb: "A painter's studio above the fjord.",
      description:
        "A single-room atelier of board-formed concrete and pine. A high north window throws even light across the working wall.",
      cover: hero,
      gallery: [hero, p2, hero2, about],
    },
  ],
};

export const categoryLabel: Record<string, string> = {
  commercial: "Commercial",
  residential: "Residential",
  others: "Institutional",
};
