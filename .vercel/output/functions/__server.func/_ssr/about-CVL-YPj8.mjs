import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteHeader, a as SiteFooter } from "./site-footer-CHwZYVKp.mjs";
import "../_libs/tanstack__react-router.mjs";
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
const serviceGroups = [{
  heading: "Architecture & Planning",
  items: ["Architectural Design", "Space Planning", "Urban Planning", "Residential Projects", "Commercial Projects", "Institutional Projects", "Landscape Design"]
}, {
  heading: "Interior & Spatial Design",
  items: ["Interior Design", "Exterior Design", "Furniture Design", "Lighting Concepts", "Material & Color Direction", "Art Direction"]
}, {
  heading: "Visualization & Representation",
  items: ["3D Modeling", "Architectural Visualization", "Concept Development", "Presentation Design", "Architectural Sketching"]
}, {
  heading: "Branding & Creative Design",
  items: ["Logo Design", "Brand Identity Design", "Creative Direction"]
}, {
  heading: "Arts & Cultural Practice",
  items: ["Painting", "Calligraphy", "Performing Arts", "Music"]
}];
const process = [{
  n: "01",
  title: "Discovery",
  body: "Understanding the client, context, and aspirations."
}, {
  n: "02",
  title: "Research",
  body: "Analyzing site conditions, opportunities, and constraints."
}, {
  n: "03",
  title: "Concept Development",
  body: "Generating design directions and spatial strategies."
}, {
  n: "04",
  title: "Design Development",
  body: "Refining planning, form, materiality, and experience."
}, {
  n: "05",
  title: "Visualization",
  body: "Communicating the design through 3D drawings, diagrams, and renderings."
}, {
  n: "06",
  title: "Documentation",
  body: "Preparing detailed drawings and project deliverables."
}];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-[1600px] px-6 pt-32 pb-12 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label text-muted-foreground", children: "§ About us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display mt-6 text-6xl md:text-8xl", children: [
        "Our Services & ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-clay", children: "Design Process." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-[1600px] px-6 pb-20 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-12 border-t border-border pt-12 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label text-clay", children: "§ Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-4 text-4xl md:text-5xl", children: "What we do." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-8 space-y-10", children: serviceGroups.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl md:text-3xl", children: g.heading }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2", children: g.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-foreground/80", children: it }, it)) })
      ] }, g.heading)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-[1600px] px-6 pb-28 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-12 border-t border-border pt-12 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label text-clay", children: "§ Design Process" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-4 text-4xl md:text-5xl", children: "From brief to building." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "md:col-span-8 grid grid-cols-1 gap-px bg-border sm:grid-cols-2", children: process.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "bg-background p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-label text-clay", children: [
          "Nº ",
          s.n
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-3 text-2xl", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-foreground/75 leading-relaxed", children: s.body })
      ] }, s.n)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  About as component
};
