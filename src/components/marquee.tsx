import { Link } from "@tanstack/react-router";
import { Plate } from "@/components/plate";
import type { Project } from "@/lib/projects-data";

type MarqueeItem = { project: Project; cat: string };

type MarqueeProps = {
  items: MarqueeItem[];
  /** "left" travels right-to-left; "right" travels left-to-right. */
  direction?: "left" | "right";
  /** Seconds for one full pass. Longer reads calmer. */
  duration?: number;
};

/**
 * A continuously travelling strip of projects that halts under the pointer.
 *
 * The track holds the items twice and slides exactly -50%, so the second copy
 * is in the first copy's place when the animation loops, the seam is never
 * visible. Only the first copy is exposed to assistive tech and the tab order;
 * the duplicate is inert, or every project would be announced twice.
 *
 * Pausing is CSS (`animation-play-state`), so it costs nothing per frame and
 * also triggers on keyboard focus, not just hover, otherwise tabbing into a
 * moving strip would chase the link away from the user.
 */
export function Marquee({ items, direction = "left", duration = 48 }: MarqueeProps) {
  if (items.length === 0) return null;

  const row = (copy: number) =>
    items.map(({ project, cat }) => {
      const duplicate = copy === 1;
      return (
        <Link
          key={`${copy}-${cat}-${project.slug}`}
          to="/projects/$category/$slug"
          params={{ category: cat, slug: project.slug }}
          viewTransition
          className="group w-[68vw] shrink-0 sm:w-[46vw] md:w-[30vw] lg:w-[23vw]"
          tabIndex={duplicate ? -1 : undefined}
          aria-hidden={duplicate || undefined}
        >
          <div className="plate-frame overflow-hidden">
            <Plate
              src={project.cover}
              alt={duplicate ? "" : project.title}
              ratio="4/3"
              sizes="(min-width: 1024px) 23vw, (min-width: 768px) 30vw, 68vw"
              className="transition-transform duration-[var(--dur-base)] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
            />
          </div>
          {/* Stacked and left-aligned. Spread across the card's width, one
              card's right-aligned label sat directly beside the next card's
              title and the two read as a single line. */}
          <div className="mt-4">
            <h3 className="font-display text-xl transition-colors duration-[var(--dur-fast)] group-hover:text-clay md:text-2xl">
              {project.title}
            </h3>
            <span className="font-label mt-1 block text-muted-foreground">{project.place}</span>
          </div>
        </Link>
      );
    });

  return (
    <div className="marquee" data-direction={direction}>
      <div className="marquee-track" style={{ animationDuration: `${duration}s` }}>
        {row(0)}
        {row(1)}
      </div>
    </div>
  );
}
