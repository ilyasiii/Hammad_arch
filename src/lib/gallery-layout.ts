/**
 * How a set of plates is presented. Chosen per project from the material it
 * holds, never by default, see .claude/skills/phg-design for the catalog.
 *
 *   grid           photographed interiors      even 4:3 pairs, cropped
 *   diptych        drawings paired with renders two-up, natural height
 *   editorial      a few strong plates          offset, diagonal rhythm
 *   contact-sheet  large sketch sets            dense masonry, uncropped
 *   cinematic      the hero project             full-measure plates among pairs
 */
export type GalleryLayout = "grid" | "editorial" | "contact-sheet" | "diptych" | "cinematic";

/** Viewport share each layout's plates occupy, so srcset picks the right rung. */
export const LAYOUT_SIZES: Record<GalleryLayout, string> = {
  grid: "(min-width: 768px) 44vw, 92vw",
  editorial: "(min-width: 768px) 55vw, 92vw",
  "contact-sheet": "(min-width: 1024px) 22vw, (min-width: 768px) 30vw, 45vw",
  diptych: "(min-width: 768px) 44vw, 92vw",
  cinematic: "(min-width: 768px) 60vw, 92vw",
};
