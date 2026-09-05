import { lazy, Suspense, useState } from "react";
import { Plate } from "@/components/plate";
import { Reveal } from "@/components/reveal";
import { LAYOUT_SIZES, type GalleryLayout } from "@/lib/gallery-layout";

const Lightbox = lazy(() => import("@/components/lightbox"));

type GalleryProps = {
  images: string[];
  layout?: GalleryLayout;
  alt: string;
};

/**
 * Editorial rhythm: a wide plate, then a large one held left, then a small one
 * pushed right and dropped down. The eye moves diagonally instead of scanning
 * a grid, which is what makes a small set of strong images feel considered.
 */
const EDITORIAL_SLOTS = [
  // No slot runs the full measure. A portrait plate in a 1400px column gets
  // height-capped and then centres itself, leaving wide bands of white either
  // side, narrower slots keep the image filling what it is given.
  "col-span-12 md:col-span-8",
  "col-span-12 md:col-span-6 md:col-start-7",
  "col-span-12 md:col-span-5 md:col-start-2 md:mt-8",
];

export function Gallery({ images, layout = "grid", alt }: GalleryProps) {
  const [openAt, setOpenAt] = useState<number | null>(null);
  const sizes = LAYOUT_SIZES[layout];

  const plate = (src: string, i: number, ratio?: string) => (
    <button
      type="button"
      onClick={() => setOpenAt(i)}
      aria-label={`Open ${alt} ${i + 1} full screen`}
      // Natural plates can be narrower than their column once height-capped,
      // so the frame hugs them instead of leaving empty bands either side.
      className={`plate-frame group block cursor-zoom-in overflow-hidden ${
        ratio ? "w-full" : "mx-auto w-fit"
      }`}
    >
      <Plate
        src={src}
        alt={`${alt} ${i + 1}`}
        sizes={sizes}
        ratio={ratio}
        className="transition-transform duration-[var(--dur-base)] ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
      />
    </button>
  );

  return (
    <>
      {layout === "grid" && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {images.map((src, i) => (
            <Reveal key={src} index={i}>
              {plate(src, i, "4/3")}
            </Reveal>
          ))}
        </div>
      )}

      {layout === "diptych" && (
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          {images.map((src, i) => (
            <Reveal key={src} index={i}>
              {plate(src, i)}
            </Reveal>
          ))}
        </div>
      )}

      {layout === "editorial" && (
        <div className="grid grid-cols-12 gap-6">
          {images.map((src, i) => (
            <Reveal key={src} index={i} className={EDITORIAL_SLOTS[i % EDITORIAL_SLOTS.length]}>
              {plate(src, i)}
            </Reveal>
          ))}
        </div>
      )}

      {layout === "contact-sheet" && (
        <div className="columns-2 gap-3 md:columns-3 lg:columns-4 [&>*]:mb-3 [&>*]:break-inside-avoid">
          {images.map((src, i) => (
            <Reveal key={src} index={i}>
              {plate(src, i)}
            </Reveal>
          ))}
        </div>
      )}

      {layout === "cinematic" && (
        <div className="grid grid-cols-12 gap-6">
          {images.map((src, i) => (
            <Reveal
              key={src}
              index={i}
              // Every third plate runs the full measure; the rest pair up.
              className={i % 3 === 0 ? "col-span-12" : "col-span-12 md:col-span-6"}
            >
              {plate(src, i)}
            </Reveal>
          ))}
        </div>
      )}

      {openAt !== null && (
        <Suspense fallback={null}>
          <Lightbox images={images} alt={alt} index={openAt} onClose={() => setOpenAt(null)} />
        </Suspense>
      )}
    </>
  );
}
