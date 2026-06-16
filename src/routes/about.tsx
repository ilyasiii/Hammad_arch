import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ph.G Studio" },
      { name: "description", content: "Ph.G Studio Phenomenological Geometry. An multidisciplinary architecture and design practice." },
      { property: "og:title", content: "About Ph.G Studio" },
      { property: "og:description", content: "Architecture shaped through Perception, Human Experience, Pause, and Geometry." },
    ],
  }),
  component: About,
});

const serviceGroups = [
  {
    heading: "Architecture & Planning",
    items: [
      "Architectural Design",
      "Space Planning",
      "Urban Planning",
      "Residential Projects",
      "Commercial Projects",
      "Academic Projects",
      "Landscape Design",
    ],
  },
  {
    heading: "Interior & Spatial Design",
    items: [
      "Interior Design",
      "Exterior Design",
      "Furniture Design",
      "Lighting Concepts",
      "Material & Color Direction",
      "Art Direction",
    ],
  },
  {
    heading: "Visualization & Representation",
    items: [
      "3D Modeling",
      "Architectural Visualization",
      "Concept Development",
      "Presentation Design",
      "Architectural Sketching",
    ],
  },
  {
    heading: "Branding & Creative Design",
    items: ["Logo Design", "Brand Identity Design", "Creative Direction"],
  },
  {
    heading: "Arts & Cultural Practice",
    items: ["Painting", "Calligraphy", "Performing Arts", "Music"],
  },
];

const process = [
  { n: "01", title: "Discovery", body: "Understanding the client, context, and aspirations." },
  { n: "02", title: "Research", body: "Analyzing site conditions, opportunities, and constraints." },
  { n: "03", title: "Concept Development", body: "Generating design directions and spatial strategies." },
  { n: "04", title: "Design Development", body: "Refining planning, form, materiality, and experience." },
  { n: "05", title: "Visualization", body: "Communicating the design through 3D drawings, diagrams, and renderings." },
  { n: "06", title: "Documentation", body: "Preparing detailed drawings and project deliverables." },
];

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-[1600px] px-6 pt-32 pb-12 md:px-10">
        <p className="font-label text-muted-foreground">§ About us</p>
        <h1 className="font-display mt-6 text-6xl md:text-8xl">
          Our Services & <br />
          <em className="text-clay">Design Process.</em>
        </h1>
      </section>


      {/* Services */}
      <section className="mx-auto max-w-[1600px] px-6 pb-20 md:px-10">
        <div className="grid grid-cols-1 gap-12 border-t border-border pt-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-label text-clay">§ Services</p>
            <h2 className="font-display mt-4 text-4xl md:text-5xl">What we do.</h2>
          </div>
          <div className="md:col-span-8 space-y-10">
            {serviceGroups.map((g) => (
              <div key={g.heading} className="border-t border-border pt-6">
                <h3 className="font-display text-2xl md:text-3xl">{g.heading}</h3>
                <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                  {g.items.map((it) => (
                    <li key={it} className="text-foreground/80">{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-[1600px] px-6 pb-28 md:px-10">
        <div className="grid grid-cols-1 gap-12 border-t border-border pt-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-label text-clay">§ Design Process</p>
            <h2 className="font-display mt-4 text-4xl md:text-5xl">From brief to building.</h2>
          </div>
          <ol className="md:col-span-8 grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
            {process.map((s) => (
              <li key={s.n} className="bg-background p-6">
                <p className="font-label text-clay">Nº {s.n}</p>
                <h3 className="font-display mt-3 text-2xl">{s.title}</h3>
                <p className="mt-3 text-foreground/75 leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
