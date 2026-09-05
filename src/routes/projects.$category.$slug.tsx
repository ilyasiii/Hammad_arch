import { createFileRoute, notFound, useRouter } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Gallery } from "@/components/gallery";
import { Plate } from "@/components/plate";
import { Reveal } from "@/components/reveal";
import { BackLink, RouteNotFound } from "@/components/back-link";
import { useGoBack } from "@/lib/use-go-back";
import {
  projectsByCategory,
  categoryLabel,
  type Project,
  type ProjectSection,
} from "@/lib/projects-data";

export const Route = createFileRoute("/projects/$category/$slug")({
  head: ({ params }) => ({
    meta: [{ title: `${params.slug} Ph. G studio` }],
  }),
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <RouteNotFound backTo="/projects" backLabel="Back to Projects" />
      <SiteFooter />
    </div>
  ),
});

/**
 * Every project opens the same way: the cover fills the viewport and the title
 * sits over it.
 *
 * Earlier this varied per project, a split treatment with a second plate
 * overlapping the cover, and a stacked monograph treatment. Both were dropped
 * in favour of one consistent opening; the plates themselves already differ
 * enough from project to project.
 */
function ProjectHero({
  project,
  category,
  onBack,
}: {
  project: Project;
  category: string;
  onBack: () => void;
}) {
  return (
    <section className="relative mt-16 min-h-[68svh] w-full overflow-hidden bg-ink">
      <div className="absolute inset-0" style={{ viewTransitionName: `project-cover-${project.slug}` }}>
        <Plate src={project.cover} alt={project.title} fill sizes="100vw" priority />
      </div>

      {/* Two washes, sized for the worst case rather than the best. Several
          covers are white-ground plans and line drawings, not dark photographs
         , on those, weaker gradients left the title and back link floating on
          near-white and effectively unreadable. */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/90 via-ink/55 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/75 to-transparent" />

      <div className="relative mx-auto flex min-h-[68svh] max-w-[1400px] flex-col justify-between px-6 py-10 md:px-10">
        {/* On a frosted chip: several covers are white-ground plans where
            cream text on a gradient alone was still unreadable. */}
        <BackLink label={categoryLabel[category] ?? category} onClick={onBack} dark />
        <div>
          <h1
            className="font-display max-w-4xl text-4xl text-cream md:text-6xl"
            style={{ viewTransitionName: `project-title-${project.slug}` }}
          >
            {project.title}
          </h1>
          <p className="font-label mt-4 text-cream/70">
            {project.place}
            {project.year ? ` · ${project.year}` : ""}
          </p>
        </div>
      </div>
    </section>
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
              {idx === 0 ? "Before" : "After"}: {column.title}
            </p>
          </div>
          <div className="mt-6 space-y-6">
            {column.images.map((src, i) => (
              <Reveal key={src} index={i}>
                <Plate
                  src={src}
                  alt={`${column.title} ${i + 1}`}
                  sizes="(min-width: 768px) 44vw, 92vw"
                />
              </Reveal>
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

  const goBack = useGoBack(() =>
    router.navigate({ to: "/projects", search: { cat: category } as never }),
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <ProjectHero project={project} category={category} onBack={goBack} />

      {/* The hero has no room for the description, so it lands here. */}
      <section className="mx-auto max-w-[1400px] px-6 pt-16 md:px-10">
        <Reveal>
          <p className="max-w-2xl text-lg leading-relaxed text-foreground/80">
            {project.description}
          </p>
        </Reveal>
      </section>

      {project.compare && (
        <section className="mx-auto mt-20 max-w-[1400px] px-6 pb-4 md:px-10">
          <CompareColumns before={project.compare.before} after={project.compare.after} />
        </section>
      )}

      {project.sections?.map((section) => (
        <section key={section.title} className="mx-auto mt-20 max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <div className="mb-10 border-t border-border pt-6">
              <h2 className="font-display text-3xl md:text-4xl">{section.title}</h2>
            </div>
          </Reveal>
          <Gallery images={section.images} layout={project.layout} alt={section.title} />
        </section>
      ))}

      {project.gallery && project.gallery.length > 0 && (
        <section className="mx-auto mt-20 max-w-[1400px] px-6 md:px-10">
          <Gallery images={project.gallery} layout={project.layout} alt={project.title} />
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
