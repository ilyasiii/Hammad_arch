import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { thinkingProjects } from "@/lib/thinking-data";

export const Route = createFileRoute("/thinking/$slug/$sub")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.sub} Ph.G Studio` },
    ],
  }),
  component: ThinkingCollection,
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

function ThinkingCollection() {
  const { slug, sub } = Route.useParams();
  const router = useRouter();
  const project = thinkingProjects.find((t) => t.slug === slug);
  if (!project) throw notFound();
  const collection = project.collections.find((c) => c.slug === sub);
  if (!collection) throw notFound();

  const goBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.history.back();
    } else {
      router.navigate({ to: "/thinking/$slug", params: { slug } });
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
          ← {project.title}
        </button>
        <h1 className="font-display mt-6 text-4xl md:text-6xl">{collection.title}</h1>
      </section>

      {/* Gallery — masonry, natural aspect ratio, never cropped on any device */}
      <section className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10">
        <div className="columns-1 gap-4 md:columns-2 [&>*]:mb-4 [&>*]:break-inside-avoid">
          {collection.gallery.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${collection.title} ${i + 1}`}
              loading="lazy"
              className="block h-auto w-full bg-muted"
            />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
