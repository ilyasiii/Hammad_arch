import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
function SiteHeader() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-0 left-0 right-0 z-50 h-16 border-b border-border bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-full max-w-[1600px] items-center justify-between px-6 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "font-display text-xl leading-none", children: [
      "Ph. G ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-clay italic", children: "studio" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex items-center gap-6 md:gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/projects",
          className: "font-label text-foreground/70 transition-colors hover:text-accent",
          activeProps: { className: "font-label text-accent" },
          children: "Projects"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/about",
          className: "font-label text-foreground/70 transition-colors hover:text-accent",
          activeProps: { className: "font-label text-accent" },
          children: "About"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/people",
          className: "font-label text-foreground/70 transition-colors hover:text-accent",
          activeProps: { className: "font-label text-accent" },
          children: "People"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/contact",
          className: "font-label text-foreground/70 transition-colors hover:text-accent",
          activeProps: { className: "font-label text-accent" },
          children: "Contact"
        }
      )
    ] })
  ] }) });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mt-24 bg-ink text-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-[1600px] flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-2xl", children: [
        "Ph.G ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-clay italic", children: "Studio" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label mt-2 text-cream/50", children: "© 2026 Architecture shaped through Perception, Human, Pause & Geometry" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 text-left md:items-end md:text-right", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://mail.google.com/mail/?view=cm&fs=1&to=phgstudio44@gmail.com",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "font-label text-cream/70 hover:text-clay",
          children: "phgstudio44@gmail.com"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://wa.me/923030444072",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "font-label text-cream/70 hover:text-clay",
          children: "+92 303 0444072"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://www.instagram.com/ph.g_studio?igsh=ZHBpNnJxbTkxY2hw",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Instagram",
            className: "text-cream/70 hover:text-clay",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://www.linkedin.com/company/phg-studio/",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "LinkedIn",
            className: "text-cream/70 hover:text-clay",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "2", y: "9", width: "4", height: "12" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "4", cy: "4", r: "2" })
            ] })
          }
        )
      ] })
    ] })
  ] }) });
}
export {
  SiteHeader as S,
  SiteFooter as a
};
