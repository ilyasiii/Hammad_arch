import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BackLink, RouteNotFound } from "@/components/back-link";
import { useGoBack } from "@/lib/use-go-back";
import { Gallery } from "@/components/gallery";
import { Plate } from "@/components/plate";
import { Reveal } from "@/components/reveal";
import { thinkingProjects } from "@/lib/thinking-data";

export const Route = createFileRoute("/thinking/$slug/")({
  head: ({ params }) => ({
    meta: [{ title: `${params.slug} Ph.G Studio` }],
  }),
  component: ThinkingProjectIndex,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <RouteNotFound backTo="/thinking" backLabel="Back to Thinking" />
      <SiteFooter />
    </div>
  ),
});

function ThinkingProjectIndex() {
  const { slug } = Route.useParams();
  const router = useRouter();
  const project = thinkingProjects.find((t) => t.slug === slug);
  if (!project) throw notFound();

  const goBack = useGoBack(() => router.navigate({ to: "/thinking" }));

  // A project holding a single collection has nothing to choose between, so its
  // plates are shown here rather than behind a card leading to one more page.
  const only = project.collections.length === 1 ? project.collections[0] : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-[1400px] px-6 pt-32 pb-10 md:px-10">
        <BackLink label="Thinking" onClick={goBack} />
        <h1
          className="font-display mt-8 text-4xl md:text-5xl"
          style={{ viewTransitionName: `thinking-title-${project.slug}` }}
        >
          {project.title}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/80">
          {project.description}
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10">
        <div className="border-t border-border pt-12">
          {only ? (
            <Gallery images={only.gallery} layout={only.layout} alt={only.title} />
          ) : (
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
              {project.collections.map((collection, i) => (
                <Reveal key={collection.slug} index={i}>
                  <Link
                    to="/thinking/$slug/$sub"
                    params={{ slug: project.slug, sub: collection.slug }}
                    viewTransition
                    className="group block"
                  >
                    <div
                      className="plate-frame overflow-hidden"
                      style={{ viewTransitionName: `collection-cover-${collection.slug}` }}
                    >
                      <Plate
                        src={collection.cover}
                        alt={collection.title}
                        ratio="4/3"
                        sizes="(min-width: 768px) 46vw, 92vw"
                        className="transition-transform duration-[var(--dur-base)] ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="mt-5 flex items-baseline justify-between gap-4">
                      <h2 className="font-display text-3xl transition-colors duration-[var(--dur-fast)] group-hover:text-clay md:text-4xl">
                        {collection.title}
                      </h2>
                      <span className="font-label text-muted-foreground">
                        {collection.gallery.length}
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
