import { Link } from "@tanstack/react-router";
import { Plate } from "@/components/plate";
import { Tilt } from "@/components/tilt";
import type { Project } from "@/lib/projects-data";

type ProjectCardProps = {
  project: Project;
  category: string;
  ratio: string;
  /** Must match the slot's real width, or the srcset ladder picks the wrong rung. */
  sizes: string;
  priority?: boolean;
  /**
   * Show the category chip. Only worth it when the list mixes categories,
   * inside a filtered view every card would repeat the tab already selected.
   */
  showPlace?: boolean;
};

/**
 * One project in the index. Spare, in the manner of an architectural monograph:
 * cover, name, place. The category rides on a frosted chip over the plate
 * rather than in a line of text beneath it, so the image keeps the full width
 * of the card and the type below stays to one line.
 */
export function ProjectCard({
  project,
  category,
  ratio,
  sizes,
  priority,
  showPlace = true,
}: ProjectCardProps) {
  return (
    <Link
      to="/projects/$category/$slug"
      params={{ category, slug: project.slug }}
      viewTransition
      className="group block"
    >
      <Tilt>
        <div
          className="plate-frame relative overflow-hidden"
          style={{ viewTransitionName: `project-cover-${project.slug}` }}
        >
          <Plate
            src={project.cover}
            alt={project.title}
            ratio={ratio}
            sizes={sizes}
            priority={priority}
            className="transition-transform duration-[var(--dur-base)] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
          />

          {/* Frosted chip layered over the plate. Rises slightly on hover so the
              card acknowledges the pointer without moving the image itself. */}
          {showPlace && (
            <span className="glass font-label absolute bottom-4 left-4 px-3 py-1.5 text-ink transition-transform duration-[var(--dur-base)] ease-[var(--ease-out-expo)] group-hover:-translate-y-1">
              {project.place}
            </span>
          )}
        </div>
      </Tilt>

      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3
          className="font-display text-2xl transition-colors duration-[var(--dur-fast)] group-hover:text-clay md:text-3xl"
          style={{ viewTransitionName: `project-title-${project.slug}` }}
        >
          {project.title}
        </h3>
        <span
          aria-hidden="true"
          className="shrink-0 text-muted-foreground transition-transform duration-[var(--dur-fast)] group-hover:translate-x-1 group-hover:text-clay"
        >
          →
        </span>
      </div>
    </Link>
  );
}
