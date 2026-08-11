// Many asset filenames under public/ contain spaces, brackets, braces, commas
// or non-ASCII characters ("HA 5[1].jpg", "{3D}.jpg", "چندرو.pdf"). Data files
// keep the RAW on-disk path; every render site passes it through assetUrl() so
// the emitted URL is properly percent-encoded segment by segment.
export function assetUrl(path: string): string {
  return path
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}
