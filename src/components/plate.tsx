import { assetUrl } from "@/lib/assets";
import { getImage } from "@/lib/images";

type PlateProps = {
  /** Raw source path under public/, e.g. "/projects/urban/panahgah/HA 2.jpg". */
  src: string;
  alt: string;
  /**
   * How much of the viewport this plate occupies, so the browser can pick the
   * right rung of the srcset ladder. Getting this wrong is the usual reason
   * responsive images still ship too many bytes.
   */
  sizes?: string;
  /**
   * Crop to a fixed ratio (e.g. "4/3") for uniform grids, or omit to keep the
   * image's own proportions, plans and sections must never be cropped.
   */
  ratio?: string;
  /** Cover a positioned parent entirely (full-bleed hero). Overrides `ratio`. */
  fill?: boolean;
  /** Skip lazy-loading and fetch eagerly. Use only for above-the-fold plates. */
  priority?: boolean;
  className?: string;
};

/**
 * The single image primitive for the whole site.
 *
 * Emits AVIF with a WebP fallback from the build-time ladder, reserves exact
 * space from the intrinsic dimensions so nothing shifts as the page loads, and
 * paints the image's own average colour underneath so a slow plate reads as a
 * settling tone rather than a white hole.
 *
 * Deliberately has no JS-driven fade: an opacity transition gated on an onLoad
 * event leaves images invisible whenever the handler is missed (cached decode,
 * hydration failure). Entrance motion belongs on the surrounding block, where
 * it can't strand content.
 */
export function Plate({ src, alt, sizes = "100vw", ratio, fill, priority, className }: PlateProps) {
  const image = getImage(src);
  const loading = priority ? "eager" : "lazy";
  const fetchPriority = priority ? "high" : "auto";
  const fit = fill
    ? "absolute inset-0 h-full w-full object-cover"
    : ratio
      ? "h-full w-full object-cover"
      : "plate-fit block h-auto";

  // No manifest entry (image added since the last `npm run images`): serve the
  // original rather than nothing.
  if (!image) {
    return (
      <img
        src={assetUrl(src)}
        alt={alt}
        loading={loading}
        decoding="async"
        className={`${fit} bg-muted ${className ?? ""}`}
        style={ratio || fill ? undefined : { aspectRatio: "4 / 3" }}
      />
    );
  }

  return (
    <picture>
      <source type="image/avif" srcSet={image.avif} sizes={sizes} />
      <source type="image/webp" srcSet={image.webp} sizes={sizes} />
      <img
        src={image.src}
        alt={alt}
        width={image.width}
        height={image.height}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        className={`${fit} ${className ?? ""}`}
        style={{
          backgroundColor: image.color,
          aspectRatio: fill ? undefined : (ratio ?? image.aspectRatio),
        }}
      />
    </picture>
  );
}
