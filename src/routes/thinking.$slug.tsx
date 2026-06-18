import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { thinkingProjects } from "@/lib/thinking-data";

export const Route = createFileRoute("/thinking/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug} Ph.G Studio` },
    ],
  }),
  component: ThinkingDetail,
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

function ThinkingDetail() {
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

      {/* Gallery — masonry layout, natural aspect ratio, never cropped */}
      <section className="mx-auto max-w-[1400px] px-6 pb-16 md:px-10">
        <div className="columns-1 gap-4 md:columns-2 [&>*]:mb-4 [&>*]:break-inside-avoid">
          {project.gallery.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${project.title} ${i + 1}`}
              loading="lazy"
              className="block h-auto w-full bg-muted"
            />
          ))}
        </div>
      </section>

      {/* PDF list */}
      {project.pdfs.length > 0 && (
        <section className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10">
          <div className="border-t border-border pt-10">
            <p className="font-label text-clay">§ Writings</p>
            <ul className="mt-6 divide-y divide-border">
              {project.pdfs.map((pdf) => (
                <li key={pdf.href}>
                  <a
                    href={pdf.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display group flex items-center justify-between py-5 text-2xl text-foreground hover:text-clay md:text-3xl"
                  >
                    <span>{pdf.title}</span>
                    <span className="font-label text-base text-muted-foreground transition-colors group-hover:text-clay">
                      Open PDF →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
