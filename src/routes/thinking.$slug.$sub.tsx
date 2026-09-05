import { createFileRoute, notFound, useRouter } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BackLink, RouteNotFound } from "@/components/back-link";
import { useGoBack } from "@/lib/use-go-back";
import { Gallery } from "@/components/gallery";
import { Reveal, RevealText } from "@/components/reveal";
import { thinkingProjects } from "@/lib/thinking-data";

export const Route = createFileRoute("/thinking/$slug/$sub")({
  head: ({ params }) => ({
    meta: [{ title: `${params.sub} Ph.G Studio` }],
  }),
  component: ThinkingCollection,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <RouteNotFound backTo="/thinking" backLabel="Back to Thinking" />
      <SiteFooter />
    </div>
  ),
});

function ThinkingCollection() {
  const { slug, sub } = Route.useParams();
  const router = useRouter();
  const project = thinkingProjects.find((t) => t.slug === slug);
  if (!project) throw notFound();
  const collection = project.collections.find((c) => c.slug === sub);
  if (!collection) throw notFound();

  const goBack = useGoBack(() => router.navigate({ to: "/thinking/$slug", params: { slug } }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-[1400px] px-6 pt-32 pb-12 md:px-10">
        <BackLink label={project.title} onClick={goBack} />

        <div className="mt-8 flex flex-wrap items-baseline justify-between gap-4 border-b border-border pb-6">
          <RevealText as="h1" className="font-display text-4xl md:text-5xl">
            {collection.title}
          </RevealText>
          <p className="font-label text-muted-foreground">{collection.gallery.length} plates</p>
        </div>

        {collection.description && (
          <Reveal>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/80">
              {collection.description}
            </p>
          </Reveal>
        )}
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10">
        <Gallery images={collection.gallery} layout={collection.layout} alt={collection.title} />
      </section>

      <SiteFooter />
    </div>
  );
}
