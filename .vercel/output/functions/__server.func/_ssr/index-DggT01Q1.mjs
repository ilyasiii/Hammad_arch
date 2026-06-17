import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteHeader, a as SiteFooter } from "./site-footer-CHwZYVKp.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const slides = ["/projects/home/home-1.jpg", "/projects/home/home-2.jpg", "/projects/home/home-3.jpg", "/projects/home/home-4.jpg"];
const pillars = [{
  letter: "P",
  title: "Perception",
  body: "Architecture begins with experience. We design spaces that respond to light, movement, memory, and atmosphere."
}, {
  letter: "H",
  title: "Human",
  body: "People remain at the center of every design decision. Our work seeks to understand lifestyles, behaviors, and aspirations."
}, {
  letter: ".",
  title: "Pause",
  body: "We value moments of reflection, calm, and transition. Architecture should create opportunities to slow down, connect, and experience space consciously."
}, {
  letter: "G",
  title: "Geometry",
  body: "Geometry provides order, proportion, structure, and clarity. It is the framework through which ideas become built form."
}];
function Index() {
  const [i, setI] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % slides.length), 4e3);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative mt-16 h-[calc(100svh-4rem)] w-full overflow-hidden bg-background", children: [
      slides.map((src, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "", className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-in-out ${i === idx ? "opacity-100" : "opacity-0"}`, width: 1920, height: 1080 }, idx)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-8 z-10 flex justify-center gap-3", children: slides.map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": `Slide ${idx + 1}`, onClick: () => setI(idx), className: `h-[2px] w-10 transition-all ${i === idx ? "bg-cream" : "bg-cream/40"}` }, idx)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-40 space-y-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 md:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label text-muted-foreground", children: "§ Philosophy" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-9", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-7xl", children: [
            "Phenomenological",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-clay", children: "Geometry." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 max-w-3xl text-xl leading-relaxed text-foreground/80", children: "Ph.G Studio is an multidisciplinary architecture and design practice founded on the belief that meaningful spaces emerge through the relationship between human experience and geometry. We explore architecture as a medium of perception, reflection, and spatial expression creating environments that are thoughtful, functional, and emotionally engaging." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-8 border-t border-border pt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label text-clay", children: "§ The Ph.G framework" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-4 text-3xl md:text-4xl leading-tight", children: "Four pillars anchoring every project." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 md:col-span-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-8 sm:grid-cols-2", children: pillars.map((pillar) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-5xl text-clay", children: pillar.letter }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-2xl", children: pillar.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-foreground/75 leading-relaxed", children: pillar.body })
        ] }, pillar.title)) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "hairline mx-auto max-w-[1600px] px-6 py-20 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label text-muted-foreground", children: "§ Selected Work" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects", className: "font-label text-muted-foreground hover:text-clay", children: "All projects →" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Index as component
};
