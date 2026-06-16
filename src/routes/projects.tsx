import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { projectsByCategory } from "@/lib/projects-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects Ph. G studio" },
      { name: "description", content: "Selected work by Ph. G studio." },
    ],
  }),
  component: Projects,
});

const categories = ["all", "commercial", "residential", "others"] as const;
type Cat = (typeof categories)[number];

const tabLabel: Record<Cat, string> = {
  all: "All",
  commercial: "Commercial",
  residential: "Residential",
  others: "Institutional",
};

function Projects() {
  const [active, setActive] = useState<Cat>("all");

  const visible =
    active === "all"
      ? [
          ...projectsByCategory.commercial.map((p) => ({ p, cat: "commercial" as const })),
          ...projectsByCategory.residential.map((p) => ({ p, cat: "residential" as const })),
          ...projectsByCategory.others.map((p) => ({ p, cat: "others" as const })),
        ]
      : projectsByCategory[active].map((p) => ({ p, cat: active as "commercial" | "residential" | "others" }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <div className="mx-auto max-w-[1400px] px-6 pt-32 pb-24 md:px-10">
        <div className="mb-12 flex flex-wrap gap-x-8 gap-y-3 border-b border-border pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-display text-2xl transition-colors md:text-3xl ${
                active === cat ? "text-clay" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {tabLabel[cat]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
          {visible.map(({ p, cat }) => (
            <Link
              key={`${cat}-${p.slug}`}
              to="/projects/$category/$slug"
              params={{ category: cat, slug: p.slug }}
              className="group block"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display mt-4 text-2xl">{p.title}</h3>
              <p className="text-muted-foreground italic">{p.place} · {p.year}</p>
              <p className="mt-1 text-sm text-foreground/70">{p.blurb}</p>
            </Link>
          ))}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
