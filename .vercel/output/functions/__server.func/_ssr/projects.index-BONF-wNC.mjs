import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Route$1, c as categories } from "./router-oV-bATkV.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteHeader, a as SiteFooter } from "./site-footer-CHwZYVKp.mjs";
import { p as projectsByCategory } from "./projects-data-Cv0TF6x4.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
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
const tabLabel = {
  all: "All",
  commercial: "Commercial",
  residential: "Residential",
  others: "Institutional"
};
function ProjectsIndex() {
  const {
    cat: active
  } = Route$1.useSearch();
  const navigate = useNavigate({
    from: "/projects/"
  });
  const setActive = (next) => {
    navigate({
      search: {
        cat: next
      },
      replace: true
    });
  };
  const visible = active === "all" ? [...projectsByCategory.commercial.map((p) => ({
    p,
    cat: "commercial"
  })), ...projectsByCategory.residential.map((p) => ({
    p,
    cat: "residential"
  })), ...projectsByCategory.others.map((p) => ({
    p,
    cat: "others"
  }))] : projectsByCategory[active].map((p) => ({
    p,
    cat: active
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 pt-32 pb-24 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-12 flex flex-wrap gap-x-8 gap-y-3 border-b border-border pb-4", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(cat), className: `font-display text-2xl transition-colors md:text-3xl ${active === cat ? "text-clay" : "text-foreground/60 hover:text-foreground"}`, children: tabLabel[cat] }, cat)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2", children: visible.map(({
        p,
        cat
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects/$category/$slug", params: {
        category: cat,
        slug: p.slug
      }, className: "group block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.cover, alt: p.title, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-4 text-2xl", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground italic", children: [
          p.place,
          " · ",
          p.year
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-foreground/70", children: p.blurb })
      ] }, `${cat}-${p.slug}`)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ProjectsIndex as component
};
