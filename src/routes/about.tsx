import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal, RevealText } from "@/components/reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ph.G Studio" },
      {
        name: "description",
        content:
          "Ph.G Studio Phenomenological Geometry. An multidisciplinary architecture and design practice.",
      },
      { property: "og:title", content: "About Ph.G Studio" },
      {
        property: "og:description",
        content: "Architecture shaped through Perception, Human Experience, Pause, and Geometry.",
      },
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
      "Institutional Projects",
      "Landscape Design",
      "Construction Supervision",
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
  {
    n: "02",
    title: "Research",
    body: "Analyzing site conditions, opportunities, and constraints.",
  },
  {
    n: "03",
    title: "Concept Development",
    body: "Generating design directions and spatial strategies.",
  },
  {
    n: "04",
    title: "Design Development",
    body: "Refining planning, form, materiality, and experience.",
  },
  {
    n: "05",
    title: "Visualization",
    body: "Communicating the design through 3D drawings, diagrams, and renderings.",
  },
  {
    n: "06",
    title: "Documentation",
    body: "Preparing detailed drawings and project deliverables.",
  },
];

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-[1600px] px-6 pt-32 pb-16 md:px-10">
        <p className="font-label text-muted-foreground">§ About us</p>
        <RevealText as="h1" className="font-display mt-8 max-w-4xl text-4xl md:text-6xl">
          Our services & <em className="text-clay">design process.</em>
        </RevealText>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-[1600px] px-6 pb-24 md:px-10">
        <div className="grid grid-cols-1 gap-12 border-t border-border pt-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <p className="font-label text-clay">§ Services</p>
              <h2 className="font-display mt-4 text-4xl md:text-5xl">What we do.</h2>
            </div>
          </div>
          <div className="space-y-12 md:col-span-8">
            {serviceGroups.map((g, i) => (
              <Reveal key={g.heading} index={i} className="border-t border-border pt-6">
                <h3 className="font-display text-2xl md:text-3xl">{g.heading}</h3>
                <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                  {g.items.map((it) => (
                    <li key={it} className="flex gap-3 text-foreground/80">
                      <span aria-hidden="true" className="text-clay/50">
                        ·
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-[1600px] px-6 pb-24 md:px-10">
        <div className="grid grid-cols-1 gap-12 border-t border-border pt-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <p className="font-label text-clay">§ Design Process</p>
              <h2 className="font-display mt-4 text-4xl md:text-5xl">From brief to building.</h2>
            </div>
          </div>
          <ol className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 md:col-span-8">
            {process.map((s, i) => (
              <Reveal key={s.n} index={i} as="li" className="bg-background p-8">
                <p className="font-label text-clay">Nº {s.n}</p>
                <h3 className="font-display mt-4 text-2xl">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-foreground/75">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Close */}
      <section className="mx-auto max-w-[1600px] px-6 pb-32 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 border-t border-border pt-12">
          <h2 className="font-display max-w-2xl text-4xl md:text-5xl">Have a project in mind?</h2>
          <Link
            to="/contact"
            className="font-label group text-muted-foreground transition-colors hover:text-clay"
          >
            Start a conversation{" "}
            <span className="inline-block transition-transform duration-[var(--dur-fast)] group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
