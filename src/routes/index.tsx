import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import hero from "@/assets/hero.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ph.G Studio Phenomenological Geometry" },
      { name: "description", content: "Ph.G Studio an multidisciplinary architecture and design practice exploring Perception, Human experience, Pause, and Geometry." },
      { property: "og:title", content: "Ph.G Studio Phenomenological Geometry" },
      { property: "og:description", content: "Architecture shaped through Perception, Human Experience, Pause, and Geometry." },
    ],
  }),
  component: Index,
});


const slides = [hero, hero2, hero3, p1, p2];

const pillars = [
  {
    letter: "P",
    title: "Perception",
    body: "Architecture begins with experience. We design spaces that respond to light, movement, memory, and atmosphere.",
  },
  {
    letter: "H",
    title: "Human",
    body: "People remain at the center of every design decision. Our work seeks to understand lifestyles, behaviors, and aspirations.",
  },
  {
    letter: ".",
    title: "Pause",
    body: "We value moments of reflection, calm, and transition. Architecture should create opportunities to slow down, connect, and experience space consciously.",
  },
  {
    letter: "G",
    title: "Geometry",
    body: "Geometry provides order, proportion, structure, and clarity. It is the framework through which ideas become built form.",
  },
];

const featured = [
  { n: "01", title: "Casa Penedo", place: "Sintra, PT", year: "2024", img: p1, type: "Residence" },
  { n: "02", title: "Forest Pavilion", place: "Telemark, NO", year: "2023", img: p2, type: "Retreat" },
];

function Index() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO SLIDESHOW */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        {slides.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
            width={1920}
            height={1280}
          />
        ))}
        <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-[2px] w-10 transition-all ${
                i === idx ? "bg-cream" : "bg-cream/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* DESIGN PHILOSOPHY */}
      <section className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-40 space-y-24">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-label text-muted-foreground">§ Philosophy</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-5xl md:text-7xl">
              Phenomenological<br />
              <em className="text-clay">Geometry.</em>
            </h2>
            <p className="mt-10 max-w-3xl text-xl leading-relaxed text-foreground/80">
              Ph.G Studio is an multidisciplinary architecture and design practice founded on the
              belief that meaningful spaces emerge through the relationship between human experience
              and geometry. We explore architecture as a medium of perception, reflection, and spatial
              expression creating environments that are thoughtful, functional, and emotionally
              engaging.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 border-t border-border pt-12">
          <div className="col-span-12 md:col-span-3">
            <p className="font-label text-clay">§ The Ph.G framework</p>
            <h3 className="font-display mt-4 text-3xl md:text-4xl leading-tight">
              Four pillars anchoring every project.
            </h3>
          </div>

          <div className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="border-t border-border pt-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-5xl text-clay">{pillar.letter}</span>
                    <h4 className="font-display text-2xl">{pillar.title}</h4>
                  </div>
                  <p className="mt-4 text-foreground/75 leading-relaxed">{pillar.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED 2 PROJECTS */}
      <section className="hairline mx-auto max-w-[1600px] px-6 pt-16 md:px-10">
        <div className="mb-12 flex items-end justify-between">
          <p className="font-label text-muted-foreground">§ Selected Work</p>
          <Link to="/projects" className="font-label text-muted-foreground hover:text-clay">
            All projects →
          </Link>
        </div>

        <div className="space-y-24">
          {featured.map((p, idx) => (
            <article
              key={p.n}
              className={`grid grid-cols-12 gap-6 ${idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="col-span-12 md:col-span-8">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1600}
                    height={1200}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
                  />
                </div>
              </div>
              <div className="col-span-12 flex flex-col justify-between md:col-span-4">
                <div>
                  <p className="font-label text-clay">Nº {p.n}</p>
                  <h3 className="font-display mt-6 text-5xl md:text-6xl">{p.title}</h3>
                  <p className="mt-4 text-muted-foreground italic">{p.place} · {p.year}</p>
                </div>
                <dl className="hairline mt-12 grid grid-cols-2 gap-y-3 pt-6 text-sm">
                  <dt className="font-label text-muted-foreground">Type</dt>
                  <dd className="text-right">{p.type}</dd>
                  <dt className="font-label text-muted-foreground">Status</dt>
                  <dd className="text-right">Completed</dd>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
