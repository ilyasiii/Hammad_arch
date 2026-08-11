import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { assetUrl } from "@/lib/assets";
import {
  projectsByCategory,
  categoryLabel,
  type Project,
  type ProjectSection,
} from "@/lib/projects-data";

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

/** Uniform 4:3 grid — photography. */
function CroppedGrid({ images, alt }: { images: string[]; alt: string }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {images.map((src, i) => (
        <div key={src} className="aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={assetUrl(src)}
            alt={`${alt} ${i + 1}`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

/** Masonry at natural aspect ratio — plans, sections and drawings are never cropped. */
function NaturalGrid({ images, alt }: { images: string[]; alt: string }) {
  return (
    <div className="columns-1 gap-6 md:columns-2 [&>*]:mb-6 [&>*]:break-inside-avoid">
      {images.map((src, i) => (
        <img
          key={src}
          src={assetUrl(src)}
          alt={`${alt} ${i + 1}`}
          loading="lazy"
          className="block h-auto w-full bg-muted"
        />
      ))}
    </div>
  );
}

function Gallery({ images, project }: { images: string[]; project: Project }) {
  return project.display === "natural" ? (
    <NaturalGrid images={images} alt={project.title} />
  ) : (
    <CroppedGrid images={images} alt={project.title} />
  );
}

/**
 * Before/after: two independent columns under sticky labels, so the existing
 * condition and the proposal stay identified while the page scrolls. Collapses
 * to one column on mobile, existing first.
 */
function CompareColumns({ before, after }: { before: ProjectSection; after: ProjectSection }) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
      {[before, after].map((column, idx) => (
        <div key={column.title}>
          <div className="sticky top-16 z-20 border-b border-border bg-background/95 py-3 backdrop-blur">
            <p className="font-label text-clay">
              {idx === 0 ? "Before" : "After"} — {column.title}
            </p>
          </div>
          <div className="mt-6 space-y-6">
            {column.images.map((src, i) => (
              <img
                key={src}
                src={assetUrl(src)}
                alt={`${column.title} ${i + 1}`}
                loading="lazy"
                className="block h-auto w-full bg-muted"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectDetail() {
  const { category, slug } = Route.useParams();
  const router = useRouter();
  const list = projectsByCategory[category];
  if (!list) throw notFound();
  const project = list.find((p) => p.slug === slug);
  if (!project) throw notFound();

  const goBack = () => {
    // If the user landed here directly (no history), fall back to /projects.
    if (window.history.length > 1) {
      router.history.back();
    } else {
      router.navigate({ to: "/projects", search: { cat: category } as never });
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
          ← {categoryLabel[category] ?? category}
        </button>
        <h1 className="font-display mt-6 text-4xl md:text-6xl">{project.title}</h1>
        <p className="mt-2 text-muted-foreground italic">
          {project.place}
          {project.year ? ` · ${project.year}` : ""}
        </p>
        <p className="mt-6 max-w-2xl text-foreground/80">{project.description}</p>
      </section>

      {project.compare && (
        <section className="mx-auto max-w-[1400px] px-6 pb-20 md:px-10">
          <CompareColumns before={project.compare.before} after={project.compare.after} />
        </section>
      )}

      {project.sections?.map((section) => (
        <section key={section.title} className="mx-auto max-w-[1400px] px-6 pb-20 md:px-10">
          <div className="mb-8 border-t border-border pt-6">
            <h2 className="font-display text-3xl md:text-4xl">{section.title}</h2>
          </div>
          <Gallery images={section.images} project={project} />
        </section>
      ))}

      {project.gallery && project.gallery.length > 0 && (
        <section className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10">
          <Gallery images={project.gallery} project={project} />
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
