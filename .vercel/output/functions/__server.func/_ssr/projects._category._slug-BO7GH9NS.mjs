import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useRouter } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { S as SiteHeader, a as SiteFooter } from "./site-footer-CHwZYVKp.mjs";
import { p as projectsByCategory, c as categoryLabel } from "./projects-data-Cv0TF6x4.mjs";
import { a as Route } from "./router-oV-bATkV.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function ProjectDetail() {
  const {
    category,
    slug
  } = Route.useParams();
  const router = useRouter();
  const list = projectsByCategory[category];
  if (!list) throw notFound();
  const project = list.find((p) => p.slug === slug);
  if (!project) throw notFound();
  const goBack = () => {
    if (window.history.length > 1) {
      router.history.back();
    } else {
      router.navigate({
        to: "/projects",
        search: {
          cat: category
        }
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-[1400px] px-6 pt-32 pb-10 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: goBack, className: "font-label text-muted-foreground hover:text-foreground", children: [
        "← ",
        categoryLabel[category] ?? category
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display mt-6 text-4xl md:text-6xl", children: project.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-muted-foreground italic", children: [
        project.place,
        project.year ? ` · ${project.year}` : ""
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-foreground/80", children: project.description })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto grid max-w-[1400px] grid-cols-1 gap-6 px-6 pb-24 md:grid-cols-2 md:px-10", children: project.gallery.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: `${project.title} ${i + 1}`, loading: "lazy", className: "h-full w-full object-cover" }) }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ProjectDetail as component
};
