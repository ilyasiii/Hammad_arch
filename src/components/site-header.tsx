import { useState } from "react";
import { Link } from "@tanstack/react-router";

const NAV_LINKS = [
  { to: "/thinking", label: "Thinking" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/people", label: "People" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 md:px-10">
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-xl leading-none"
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo.jpeg"
            alt="Ph. G studio logo"
            className="h-9 w-9 rounded-sm object-cover"
          />
          <span>
            Ph. G <span className="text-clay italic">studio</span>
          </span>
        </Link>

        {/* Desktop / tablet nav */}
        <nav className="hidden items-center gap-6 md:flex md:gap-8">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-label text-foreground/70 transition-colors hover:text-accent"
              activeProps={{ className: "font-label text-accent" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-foreground md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown panel */}
      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-[1600px] flex-col px-6 py-4">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="font-label block py-3 text-foreground/80 transition-colors hover:text-accent"
                  activeProps={{ className: "font-label block py-3 text-accent" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

