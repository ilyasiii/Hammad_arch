import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
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
const WEB3FORMS_ACCESS_KEY = "788522df-4c9a-4def-ae85-f2af8161b251";
function Contact() {
  const [status, setStatus] = reactExports.useState("idle");
  const [errorMsg, setErrorMsg] = reactExports.useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const msg = String(data.get("msg") ?? "").trim();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New enquiry from ${name || "website"}`,
          from_name: name || "Ph.G website",
          name,
          email,
          phone,
          message: msg,
          // honeypot — bots will fill this and get silently dropped by Web3Forms
          botcheck: ""
        })
      });
      const result = await res.json();
      if (res.ok && result.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(result.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto grid max-w-[1600px] grid-cols-12 gap-8 px-6 pt-40 pb-32 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label text-muted-foreground", children: "§ Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display mt-6 text-6xl md:text-9xl", children: [
          "Let's ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-clay", children: "build" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "together."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 max-w-md text-lg leading-relaxed text-foreground/80", children: "New commissions, collaborations, and conversations are always welcome." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-16 space-y-6 text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "font-label text-muted-foreground", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1 text-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://mail.google.com/mail/?view=cm&fs=1&to=phgstudio44@gmail.com", target: "_blank", rel: "noopener noreferrer", className: "hover:text-clay", children: "phgstudio44@gmail.com" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "font-label text-muted-foreground", children: "WhatsApp" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1 text-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/923030444072", target: "_blank", rel: "noopener noreferrer", className: "hover:text-clay", children: "+92 303 0444072" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "font-label text-muted-foreground", children: "Instagram" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1 text-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/ph.g_studio?igsh=ZHBpNnJxbTkxY2hw", target: "_blank", rel: "noopener noreferrer", className: "hover:text-clay", children: "@ph.g_studio" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "font-label text-muted-foreground", children: "LinkedIn" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1 text-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.linkedin.com/company/phg-studio/", target: "_blank", rel: "noopener noreferrer", className: "hover:text-clay", children: "Ph.G Studio" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 md:col-span-6", children: status === "sent" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ink text-cream p-12 md:p-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label text-clay", children: "✶ Received" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display mt-6 text-5xl", children: [
          "Thank you.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "We'll write back soon." })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "bg-card p-8 md:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label text-muted-foreground", children: "Nº 001 New Enquiry" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Your name", name: "name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Your email", name: "email", type: "email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone number", name: "phone", type: "tel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-label block text-muted-foreground", htmlFor: "msg", children: "Tell us about the project" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "msg", name: "msg", rows: 5, required: true, className: "mt-3 w-full resize-none border-b border-border bg-transparent pb-2 text-lg outline-none placeholder:text-muted-foreground/50 focus:border-clay", placeholder: "A home, a workspace, a cultural space…" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", name: "botcheck", tabIndex: -1, autoComplete: "off", style: {
          position: "absolute",
          left: "-9999px"
        }, "aria-hidden": "true" }),
        status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm text-destructive", children: errorMsg }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: status === "sending", className: "font-label mt-12 group inline-flex w-full items-center justify-between border-t border-ink/80 pt-4 text-ink hover:text-clay disabled:opacity-50 disabled:cursor-not-allowed", children: [
          status === "sending" ? "Sending…" : "Send enquiry",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-2", children: "→" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function Field({
  label,
  name,
  type = "text"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-label block text-muted-foreground", htmlFor: name, children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: name, name, type, required: true, className: "mt-3 w-full border-b border-border bg-transparent pb-2 text-lg outline-none focus:border-clay" })
  ] });
}
export {
  Contact as component
};
