import YARL from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

import { getImage } from "@/lib/images";
import { assetUrl } from "@/lib/assets";

type LightboxProps = {
  images: string[];
  alt: string;
  index: number;
  onClose: () => void;
};

/**
 * Fullscreen plate viewer. Lazy-loaded by <Gallery> only once something is
 * opened, so neither the library nor its stylesheet touches the initial page.
 *
 * Zoom matters more here than anywhere else on the site: half this archive is
 * master plans and sections that are unreadable at grid size.
 */
export default function Lightbox({ images, alt, index, onClose }: LightboxProps) {
  const slides = images.map((src, i) => {
    const image = getImage(src);
    if (!image) return { src: assetUrl(src), alt: `${alt} ${i + 1}` };
    return {
      src: image.src,
      alt: `${alt} ${i + 1}`,
      width: image.width,
      height: image.height,
      srcSet: image.sources,
    };
  });

  return (
    <YARL
      open
      close={onClose}
      index={index}
      slides={slides}
      plugins={[Counter, Zoom]}
      controller={{ closeOnBackdropClick: true }}
      styles={{ container: { backgroundColor: "rgba(20, 18, 16, 0.96)" } }}
      animation={{ fade: 300, swipe: 400 }}
      carousel={{ finite: true, padding: 0, spacing: 0 }}
      counter={{ container: { style: { top: "unset", bottom: 0, left: 0 } } }}
    />
  );
}
