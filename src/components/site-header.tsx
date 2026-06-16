import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-3 md:px-10">
        <Link to="/" className="font-display text-xl leading-none">
          Ph. G <span className="text-clay italic">studio</span>
        </Link>
        <nav className="flex items-center gap-6 md:gap-8">
          <Link
            to="/projects"
            className="font-label text-foreground/70 transition-colors hover:text-accent"
            activeProps={{ className: "font-label text-accent" }}
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="font-label text-foreground/70 transition-colors hover:text-accent"
            activeProps={{ className: "font-label text-accent" }}
          >
            About
          </Link>
          <Link
            to="/people"
            className="font-label text-foreground/70 transition-colors hover:text-accent"
            activeProps={{ className: "font-label text-accent" }}
          >
            People
          </Link>
          <Link
            to="/contact"
            className="font-label text-foreground/70 transition-colors hover:text-accent"
            activeProps={{ className: "font-label text-accent" }}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
