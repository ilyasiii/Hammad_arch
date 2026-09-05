import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Plate } from "@/components/plate";
import { Reveal, RevealText } from "@/components/reveal";
import { Tilt } from "@/components/tilt";
import { assetUrl } from "@/lib/assets";
import { thinkingProjects, thinkingPdfs } from "@/lib/thinking-data";

export const Route = createFileRoute("/thinking/")({
  head: () => ({
    meta: [
      { title: "Thinking Ph.G Studio" },
      { name: "description", content: "Writings, research and reflections from Ph.G Studio." },
      { property: "og:title", content: "Thinking Ph.G Studio" },
      {
        property: "og:description",
        content: "Writings, research and reflections from Ph.G Studio.",
      },
    ],
  }),
  component: ThinkingIndex,
});

function ThinkingIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-[1600px] px-6 pt-32 pb-16 md:px-10">
        <p className="font-label text-muted-foreground">§ Thinking</p>
        <RevealText as="h1" className="font-display mt-8 max-w-4xl text-4xl md:text-6xl">
          Notes, sketches &amp; <em className="text-clay">writings.</em>
        </RevealText>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-foreground/80">
          The working material behind the projects. Notebooks, diagrams and studies kept as they
          were made.
        </p>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 pb-24 md:px-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 border-t border-border pt-12 md:grid-cols-2">
          {thinkingProjects.map((t, i) => (
            <Reveal key={t.slug} index={i}>
              <Link
                to="/thinking/$slug"
                params={{ slug: t.slug }}
                viewTransition
                className="group block"
              >
                <Tilt>
                  <div className="plate-frame overflow-hidden">
                    <Plate
                      src={t.cover}
                      alt={t.title}
                      ratio="4/3"
                      sizes="(min-width: 768px) 46vw, 92vw"
                      priority={i === 0}
                      className="transition-transform duration-[var(--dur-base)] ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
                    />
                  </div>
                </Tilt>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h2
                    className="font-display text-3xl transition-colors duration-[var(--dur-fast)] group-hover:text-clay md:text-4xl"
                    style={{ viewTransitionName: `thinking-title-${t.slug}` }}
                  >
                    {t.title}
                  </h2>
                  <span className="font-label text-muted-foreground">
                    {t.collections.length} {t.collections.length === 1 ? "set" : "sets"}
                  </span>
                </div>
                <p className="mt-3 max-w-md text-foreground/70">{t.blurb}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {thinkingPdfs.length > 0 && (
        <section className="mx-auto max-w-[1600px] px-6 pb-32 md:px-10">
          <div className="border-t border-border pt-10">
            <p className="font-label text-clay">§ Writings</p>
            <ul className="mt-8 divide-y divide-border">
              {thinkingPdfs.map((pdf, i) => (
                <li key={pdf.href}>
                  <Reveal index={i}>
                    <a
                      href={assetUrl(pdf.href)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display group flex items-center justify-between gap-6 py-6 text-2xl transition-colors hover:text-clay md:text-3xl"
                    >
                      <span>{pdf.title}</span>
                      <span className="font-label shrink-0 text-muted-foreground transition-all duration-[var(--dur-fast)] group-hover:translate-x-1 group-hover:text-clay">
                        Open PDF →
                      </span>
                    </a>
                  </Reveal>
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
