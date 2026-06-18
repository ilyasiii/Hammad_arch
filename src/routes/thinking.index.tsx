import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { thinkingProjects, thinkingPdfs } from "@/lib/thinking-data";

export const Route = createFileRoute("/thinking/")({
  head: () => ({
    meta: [
      { title: "Thinking Ph.G Studio" },
      { name: "description", content: "Writings, research and reflections from Ph.G Studio." },
      { property: "og:title", content: "Thinking Ph.G Studio" },
      { property: "og:description", content: "Writings, research and reflections from Ph.G Studio." },
    ],
  }),
  component: ThinkingIndex,
});

function ThinkingIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-[1600px] px-6 pt-32 pb-12 md:px-10">
        <p className="font-label text-muted-foreground">§ Thinking</p>
        <h1 className="font-display mt-6 text-6xl md:text-8xl">
          Notes &amp; <em className="text-clay">writings.</em>
        </h1>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 pb-20 md:px-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 border-t border-border pt-12 md:grid-cols-2">
          {thinkingProjects.map((t) => (
            <Link
              key={t.slug}
              to="/thinking/$slug"
              params={{ slug: t.slug }}
              className="group block"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={t.cover}
                  alt={t.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display mt-4 text-2xl md:text-3xl">{t.title}</h3>
              <p className="mt-1 text-sm text-foreground/70">{t.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      {thinkingPdfs.length > 0 && (
        <section className="mx-auto max-w-[1600px] px-6 pb-32 md:px-10">
          <div className="border-t border-border pt-10">
            <p className="font-label text-clay">§ Writings</p>
            <ul className="mt-6 divide-y divide-border">
              {thinkingPdfs.map((pdf) => (
                <li key={pdf.href}>
                  <a
                    href={pdf.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display group flex items-center justify-between py-5 text-2xl text-foreground hover:text-clay md:text-3xl"
                  >
                    <span>{pdf.title}</span>
                    <span className="font-label text-base text-muted-foreground transition-colors group-hover:text-clay">
                      Open PDF →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
