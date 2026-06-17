import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
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
const appCss = "/assets/styles-D2LzMdlw.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ph.G Studio Phenomenological Geometry" },
      { name: "description", content: "Ph.G Studio is a multidisciplinary architecture and design practice exploring Perception, Human experience, Pause, and Geometry." },
      { property: "og:title", content: "Ph.G Studio Phenomenological Geometry" },
      { property: "og:description", content: "Architecture shaped through Perception, Human Experience, Pause, and Geometry." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ph.G Studio Phenomenological Geometry" },
      { name: "twitter:description", content: "Architecture shaped through Perception, Human Experience, Pause, and Geometry." }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$6 = () => import("./projects-IJ6xWIfp.mjs");
const Route$6 = createFileRoute("/projects")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./people-B31i01pa.mjs");
const Route$5 = createFileRoute("/people")({
  head: () => ({
    meta: [{
      title: "People Ph.G Studio"
    }, {
      name: "description",
      content: "The team behind Ph.G Studio."
    }, {
      property: "og:title",
      content: "People Ph.G Studio"
    }, {
      property: "og:description",
      content: "Architects, directors and collaborators behind Ph.G Studio."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-Sy9Dho4N.mjs");
const Route$4 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Ph.G Studio"
    }, {
      name: "description",
      content: "Get in touch with Ph.G Studio for new commissions and collaborations."
    }, {
      property: "og:title",
      content: "Contact Ph.G Studio"
    }, {
      property: "og:description",
      content: "Write to us about your next project."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./about-CVL-YPj8.mjs");
const Route$3 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Ph.G Studio"
    }, {
      name: "description",
      content: "Ph.G Studio Phenomenological Geometry. An multidisciplinary architecture and design practice."
    }, {
      property: "og:title",
      content: "About Ph.G Studio"
    }, {
      property: "og:description",
      content: "Architecture shaped through Perception, Human Experience, Pause, and Geometry."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-DggT01Q1.mjs");
const Route$2 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Ph.G Studio Phenomenological Geometry"
    }, {
      name: "description",
      content: "Ph.G Studio an multidisciplinary architecture and design practice exploring Perception, Human experience, Pause, and Geometry."
    }, {
      property: "og:title",
      content: "Ph.G Studio Phenomenological Geometry"
    }, {
      property: "og:description",
      content: "Architecture shaped through Perception, Human Experience, Pause, and Geometry."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const categories = ["all", "commercial", "residential", "others"];
const $$splitComponentImporter$1 = () => import("./projects.index-BONF-wNC.mjs");
const Route$1 = createFileRoute("/projects/")({
  head: () => ({
    meta: [{
      title: "Projects Ph. G studio"
    }, {
      name: "description",
      content: "Selected work by Ph. G studio."
    }]
  }),
  validateSearch: (search) => {
    const raw = search.cat;
    const cat = categories.includes(raw) ? raw : "all";
    return {
      cat
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitNotFoundComponentImporter = () => import("./projects._category._slug-D42n022k.mjs");
const $$splitComponentImporter = () => import("./projects._category._slug-BO7GH9NS.mjs");
const Route = createFileRoute("/projects/$category/$slug")({
  head: ({
    params
  }) => ({
    meta: [{
      title: `${params.slug} Ph. G studio`
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const ProjectsRoute = Route$6.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$7
});
const PeopleRoute = Route$5.update({
  id: "/people",
  path: "/people",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$4.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const AboutRoute = Route$3.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$7
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const ProjectsIndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => ProjectsRoute
});
const ProjectsCategorySlugRoute = Route.update({
  id: "/$category/$slug",
  path: "/$category/$slug",
  getParentRoute: () => ProjectsRoute
});
const ProjectsRouteChildren = {
  ProjectsIndexRoute,
  ProjectsCategorySlugRoute
};
const ProjectsRouteWithChildren = ProjectsRoute._addFileChildren(
  ProjectsRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  PeopleRoute,
  ProjectsRoute: ProjectsRouteWithChildren
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$1 as R,
  Route as a,
  categories as c,
  router as r
};
