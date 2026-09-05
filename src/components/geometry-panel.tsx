import { ClientOnly } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useRef, useState } from "react";

const GeometryScene = lazy(() => import("@/components/geometry-scene"));

/**
 * Hosts the WebGL armature.
 *
 * three.js is ~600 KB, so it must never be part of the initial page. Three
 * guards stack up: ClientOnly keeps it out of the server render, lazy() keeps
 * it out of the main chunk, and an IntersectionObserver delays the import until
 * the section is actually approaching the viewport. A visitor who never scrolls
 * this far downloads none of it.
 */
export function GeometryPanel() {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setNear(true);
      return;
    }
    let idle: number | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        // Philosophy sits directly under the hero, so intersection fires almost
        // immediately on load. Waiting for an idle moment keeps three.js from
        // competing with the hero image, which is the LCP element, for
        // bandwidth. The timeout guarantees it still loads on a busy main thread.
        const start = () => setNear(true);
        idle =
          typeof requestIdleCallback === "function"
            ? requestIdleCallback(start, { timeout: 2500 })
            : window.setTimeout(start, 900);
      },
      { rootMargin: "200px" },
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      if (idle === undefined) return;
      if (typeof cancelIdleCallback === "function") cancelIdleCallback(idle);
      else window.clearTimeout(idle);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-square w-full cursor-grab active:cursor-grabbing md:aspect-[4/3]"
    >
      {near && (
        <ClientOnly fallback={null}>
          <Suspense fallback={null}>
            <GeometryScene />
          </Suspense>
        </ClientOnly>
      )}
    </div>
  );
}
