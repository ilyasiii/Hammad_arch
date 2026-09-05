import manifest from "./image-manifest.json";

/**
 * One entry per source image, written by scripts/optimize-images.mjs:
 *   [contentHash, intrinsicWidth, intrinsicHeight, placeholderColor, widthLadder]
 * Stored as a tuple rather than an object to keep the manifest small, it ships
 * to the client.
 */
type ManifestEntry = [string, number, number, string, number[]];

const IMAGES = manifest as unknown as Record<string, ManifestEntry>;

type ImageMeta = {
  width: number;
  height: number;
  /** Average colour, painted behind the image so nothing flashes white. */
  color: string;
  /** srcset for AVIF, best-supported modern format. */
  avif: string;
  /** srcset for WebP, the fallback for Safari 15 and older. */
  webp: string;
  /** Largest derivative, the plain <img src> and the lightbox source. */
  src: string;
  aspectRatio: string;
  /** Every rung with its scaled height, for consumers that need both (lightbox). */
  sources: { src: string; width: number; height: number }[];
};

export function getImage(path: string): ImageMeta | null {
  const entry = IMAGES[path];
  if (!entry) return null;

  const [hash, width, height, color, widths] = entry;
  const srcSet = (ext: string) => widths.map((w) => `/_opt/${hash}-${w}.${ext} ${w}w`).join(", ");

  return {
    width,
    height,
    color,
    avif: srcSet("avif"),
    webp: srcSet("webp"),
    src: `/_opt/${hash}-${widths[widths.length - 1]}.webp`,
    aspectRatio: `${width} / ${height}`,
    sources: widths.map((w) => ({
      src: `/_opt/${hash}-${w}.webp`,
      width: w,
      height: Math.round((height / width) * w),
    })),
  };
}
