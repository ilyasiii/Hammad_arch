import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectCard } from "@/components/project-card";
import { Reveal, RevealText } from "@/components/reveal";
import {
  categories,
  categoryLabel,
  projectsByCategory,
  type Cat,
  type Project,
} from "@/lib/projects-data";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects Ph. G studio" },
      { name: "description", content: "Selected work by Ph. G studio." },
    ],
  }),
  validateSearch: (search: Record<string, unknown>): { cat: Cat } => {
    const raw = search.cat;
    const cat = (categories as readonly string[]).includes(raw as string) ? (raw as Cat) : "all";
    return { cat };
  },
  component: ProjectsIndex,
});

type Entry = { p: Project; cat: string };

function ProjectsIndex() {
  const { cat: active } = Route.useSearch();
  const navigate = useNavigate({ from: "/projects/" });

  const setActive = (next: Cat) => {
    navigate({ search: { cat: next }, replace: true });
  };

  const visible: Entry[] =
    active === "all"
      ? categories
          .filter((c): c is Exclude<Cat, "all"> => c !== "all")
          .flatMap((c) => (projectsByCategory[c] ?? []).map((p) => ({ p, cat: c as string })))
      : (projectsByCategory[active] ?? []).map((p) => ({ p, cat: active as string }));

  // Every project the same size. A full-measure lead plate was tried and read
  // as "this is the flagship", a claim the index has no business making, since
  // the order here is just the category order.
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <div className="mx-auto max-w-[1400px] px-6 pt-32 pb-24 md:px-10">
        <RevealText as="h1" className="font-display text-4xl md:text-6xl">
          Projects<em className="text-clay">.</em>
        </RevealText>

        <nav
          aria-label="Filter projects by category"
          className="mt-14 mb-16 flex flex-wrap gap-x-8 gap-y-4 border-b border-border pb-5"
        >
          {categories.map((cat) => {
            const isActive = active === cat;
            const count = cat === "all" ? undefined : (projectsByCategory[cat] ?? []).length;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                aria-current={isActive ? "true" : undefined}
                className={`font-display relative pb-1 text-2xl transition-colors duration-[var(--dur-fast)] md:text-3xl ${
                  isActive ? "text-clay" : "text-foreground/50 hover:text-foreground"
                }`}
              >
                {categoryLabel[cat]}
                {count === 0 && <span className="align-super text-xs text-foreground/30"> ✶</span>}
                {isActive && (
                  // Slides between tabs rather than blinking on and off.
                  <motion.span
                    layoutId="category-underline"
                    className="absolute -bottom-[21px] right-0 left-0 h-px bg-clay"
                    transition={{ type: "spring", stiffness: 400, damping: 40 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Strict grid: same crop, same title size, shared baseline per row. */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
          {visible.map(({ p, cat }, i) => (
            <Reveal key={`${cat}-${p.slug}`} index={i}>
              <ProjectCard
                project={p}
                category={cat}
                ratio="4/3"
                sizes="(min-width: 768px) 46vw, 92vw"
                priority={i < 2}
                // Inside a filtered view the chip would just repeat the
                // selected tab on every card.
                showPlace={active === "all"}
              />
            </Reveal>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="font-label text-muted-foreground mt-8">✶ New work coming soon.</p>
        )}
      </div>

      <SiteFooter />
    </div>
  );
}
