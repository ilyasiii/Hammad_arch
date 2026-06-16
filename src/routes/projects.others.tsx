import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { projectsByCategory } from "@/lib/projects-data";

export const Route = createFileRoute("/projects/others")({
  head: () => ({
    meta: [
      { title: "Institutional Ph. G studio" },
      { name: "description", content: "Institutional and public projects by Ph. G studio." },
    ],
  }),
  component: Others,
});

function Others() {
  const items = projectsByCategory.others;
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto grid max-w-[1400px] grid-cols-1 gap-x-8 gap-y-14 px-6 pt-32 pb-24 md:grid-cols-2 md:px-10">
        {items.map((p) => (
          <Link
            key={p.slug}
            to="/projects/$category/$slug"
            params={{ category: "others", slug: p.slug }}
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
      </section>
      <SiteFooter />
    </div>
  );
}
