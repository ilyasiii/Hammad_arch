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
const team = [{
  role: "Principal Architect",
  name: "Ar. Hammad Hussain",
  photo: ""
}, {
  role: "Senior Architect",
  name: "Ar. Syed Faraz Ali",
  photo: ""
}, {
  role: "Junior Architect",
  name: "Ar. Munazah Babar",
  photo: ""
}, {
  role: "Junior Architect",
  name: "Ar. Zeeshan Haider",
  photo: "/team/zeeshan-haider.jpeg"
}, {
  role: "Junior Architect",
  name: "Ar. Yadullah",
  photo: ""
}, {
  role: "Managing Director",
  name: "Muhammad Ilyas",
  photo: "/team/muhammad-ilyas.jpg"
}, {
  role: "Media Director",
  name: "Qammar Abbas",
  photo: ""
}];
function People() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-[1600px] px-6 pt-32 pb-12 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label text-muted-foreground", children: "§ People" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display mt-6 text-6xl md:text-8xl", children: [
        "The ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-clay", children: "team" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "behind the work."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-[1600px] px-6 pb-28 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-10 border-t border-border pt-12 md:grid-cols-2 lg:grid-cols-3", children: team.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border pb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 aspect-[4/5] w-full overflow-hidden bg-muted", children: p.photo ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.photo, alt: p.name, loading: "lazy", className: "h-full w-full object-cover" }) : null }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label text-clay", children: p.role }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-3 text-3xl md:text-4xl", children: p.name })
    ] }, p.name)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  People as component
};
