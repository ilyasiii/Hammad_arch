import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

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


const slides = [
  "/projects/home/home-1.jpg",
  "/projects/home/home-2.jpg",
  "/projects/home/home-3.jpg",
  "/projects/home/home-4.jpg",
];

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

function Index() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO SLIDESHOW — fills the viewport below the solid navbar. The 16:9
          photos use object-cover so they cover the frame edge-to-edge. With
          the frame near-16:9 the crop is minimal (~3% top/bottom). */}
      <section className="relative mt-16 h-[calc(100svh-4rem)] w-full overflow-hidden bg-background">
        {slides.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
            width={1920}
            height={1080}
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

      {/* CTA TO PROJECTS */}
      <section className="hairline mx-auto max-w-[1600px] px-6 py-20 md:px-10">
        <div className="flex items-end justify-between">
          <p className="font-label text-muted-foreground">§ Selected Work</p>
          <Link to="/projects" className="font-label text-muted-foreground hover:text-clay">
            All projects →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
