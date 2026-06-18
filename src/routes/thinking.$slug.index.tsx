import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { thinkingProjects } from "@/lib/thinking-data";

export const Route = createFileRoute("/thinking/$slug/")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug} Ph.G Studio` },
    ],
  }),
  component: ThinkingProjectIndex,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto max-w-[1200px] px-6 pt-40 md:px-10">
        <h1 className="font-display text-4xl">Not found.</h1>
        <Link to="/thinking" className="mt-6 inline-block underline">Back to Thinking</Link>
      </div>
      <SiteFooter />
    </div>
  ),
});

function ThinkingProjectIndex() {
  const { slug } = Route.useParams();
  const router = useRouter();
  const project = thinkingProjects.find((t) => t.slug === slug);
  if (!project) throw notFound();

  const goBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.history.back();
    } else {
      router.navigate({ to: "/thinking" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-[1400px] px-6 pt-32 pb-10 md:px-10">
        <button
          type="button"
          onClick={goBack}
          className="font-label text-muted-foreground hover:text-foreground"
        >
          ← Thinking
        </button>
        <h1 className="font-display mt-6 text-4xl md:text-6xl">{project.title}</h1>
        <p className="mt-6 max-w-2xl text-foreground/80">{project.description}</p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 border-t border-border pt-12 md:grid-cols-2">
          {project.collections.map((c) => (
            <Link
              key={c.slug}
              to="/thinking/$slug/$sub"
              params={{ slug: project.slug, sub: c.slug }}
              className="group block"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={c.cover}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display mt-4 text-2xl md:text-3xl">{c.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
