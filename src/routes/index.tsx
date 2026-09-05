import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Plate } from "@/components/plate";
import { Marquee } from "@/components/marquee";
import { Reveal, RevealText } from "@/components/reveal";
import { GeometryPanel } from "@/components/geometry-panel";
import { projectsByCategory } from "@/lib/projects-data";

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

// One plate from each of four projects, copied into public/projects/home so the
// hero has its own set and is not silently changed by a project cover swap.
// Ordered to alternate warm interior, open exterior, dark drawing.
const slides = [
  "/projects/home/home-nca.jpeg",
  "/projects/home/home-panahgah.jpg",
  "/projects/home/home-intellectual-spine.jpeg",
  "/projects/home/home-artisan-bakery.jpeg",
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

/**
 * Every project, split across the two strips. Alternating rather than slicing
 * down the middle, so neither row is all one category.
 */
const allProjects = Object.entries(projectsByCategory).flatMap(([cat, list]) =>
  list.map((project) => ({ cat, project })),
);
const rowOne = allProjects.filter((_, i) => i % 2 === 0);
const rowTwo = allProjects.filter((_, i) => i % 2 === 1);

function Index() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % slides.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO, full viewport below the navbar, plates cross-fading beneath a
          single line of type. The first slide is eager; the rest lazy. */}
      <section className="relative mt-16 h-[calc(100svh-4rem)] w-full overflow-hidden bg-ink">
        {slides.map((src, idx) => (
          <div
            key={src}
            aria-hidden={i !== idx}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-[var(--ease-out-expo)] ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
          >
            <Plate src={src} alt="" fill sizes="100vw" priority={idx === 0} />
          </div>
        ))}

        {/* Legibility wash, kept to the bottom third so the image stays the subject. */}
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/70 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-10 md:px-10 md:pb-14">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-8">
            <h1 className="font-display max-w-3xl text-4xl text-cream md:text-6xl">
              Architecture shaped through perception,
              <br className="hidden md:block" /> human experience,{" "}
              <em className="text-clay">pause</em> and geometry.
            </h1>

            <div className="flex gap-3" role="tablist" aria-label="Hero slides">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  role="tab"
                  aria-selected={i === idx}
                  aria-label={`Slide ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-[2px] w-12 transition-colors duration-[var(--dur-base)] ${
                    i === idx ? "bg-cream" : "bg-cream/30 hover:bg-cream/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY, label sits directly above the heading, as it does on every
          other page. Held out in a 3-column margin it stranded ~400px of white. */}
      <section className="mx-auto max-w-[1600px] space-y-24 px-6 py-24 md:px-10 md:py-32">
        {/* The armature sits beside the philosophy copy, this is the section it
            illustrates, and the column of white to the right of the text was
            already the right size for it. */}
        <div className="grid grid-cols-12 items-center gap-8">
          <div className="col-span-12 md:col-span-6">
            <p className="font-label text-muted-foreground">§ Philosophy</p>
            <RevealText as="h2" className="font-display mt-8 text-4xl md:text-6xl">
              Phenomenological
            </RevealText>
            <RevealText as="div" index={1} className="font-display text-4xl md:text-6xl">
              <em className="text-clay">Geometry.</em>
            </RevealText>
            <Reveal index={2}>
              <p className="mt-10 max-w-xl text-lg leading-relaxed text-foreground/80">
                Ph.G Studio is an multidisciplinary architecture and design practice founded on the
                belief that meaningful spaces emerge through the relationship between human experience
                and geometry. We explore architecture as a medium of perception, reflection, and spatial
                expression creating environments that are thoughtful, functional, and emotionally
                engaging.
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <GeometryPanel />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 border-t border-border pt-12">
          <div className="col-span-12 md:col-span-3">
            <p className="font-label text-clay">§ The Ph.G framework</p>
            <h3 className="font-display mt-4 text-3xl leading-tight md:text-4xl">
              Four pillars anchoring every project.
            </h3>
          </div>

          <div className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {pillars.map((pillar, idx) => (
                <Reveal key={pillar.title} index={idx} className="border-t border-border pt-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-5xl text-clay">{pillar.letter}</span>
                    <h4 className="font-display text-2xl">{pillar.title}</h4>
                  </div>
                  <p className="mt-4 leading-relaxed text-foreground/75">{pillar.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK, two strips travelling in opposite directions, each
          halting under the pointer. Full-bleed rather than inside the measure,
          so the plates run off both edges and the movement reads as continuous. */}
      <section className="py-28 md:py-32">
        <div className="space-y-6">
          <Marquee items={rowOne} direction="left" duration={56} />
          <Marquee items={rowTwo} direction="right" duration={68} />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
