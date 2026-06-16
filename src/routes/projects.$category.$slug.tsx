import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { projectsByCategory, categoryLabel } from "@/lib/projects-data";

export const Route = createFileRoute("/projects/$category/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug} Ph. G studio` },
    ],
  }),
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto max-w-[1200px] px-6 pt-40 md:px-10">
        <h1 className="font-display text-4xl">Project not found.</h1>
        <Link to="/" className="mt-6 inline-block underline">Return home</Link>
      </div>
      <SiteFooter />
    </div>
  ),
});

function ProjectDetail() {
  const { category, slug } = Route.useParams();
  const list = projectsByCategory[category];
  if (!list) throw notFound();
  const project = list.find((p) => p.slug === slug);
  if (!project) throw notFound();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-[1400px] px-6 pt-32 pb-10 md:px-10">
        <Link
          to={("/projects/" + category) as "/projects/commercial"}
          className="font-label text-muted-foreground hover:text-foreground"
        >
          ← {categoryLabel[category] ?? category}
        </Link>
        <h1 className="font-display mt-6 text-4xl md:text-6xl">{project.title}</h1>
        <p className="mt-2 text-muted-foreground italic">{project.place} · {project.year}</p>
        <p className="mt-6 max-w-2xl text-foreground/80">{project.description}</p>
      </section>

      <section className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 px-6 pb-24 md:grid-cols-2 md:px-10">
        {project.gallery.map((src, i) => (
          <div key={i} className="aspect-[4/3] overflow-hidden bg-muted">
            <img src={src} alt={`${project.title} ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
          </div>
        ))}
      </section>

      <SiteFooter />
    </div>
  );
}
