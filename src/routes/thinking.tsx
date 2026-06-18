import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/thinking")({
  head: () => ({
    meta: [
      { title: "Thinking Ph.G Studio" },
      { name: "description", content: "Writings, research and reflections from Ph.G Studio." },
      { property: "og:title", content: "Thinking Ph.G Studio" },
      { property: "og:description", content: "Writings, research and reflections from Ph.G Studio." },
    ],
  }),
  component: Thinking,
});

function Thinking() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-[1600px] px-6 pt-32 pb-12 md:px-10">
        <p className="font-label text-muted-foreground">§ Thinking</p>
        <h1 className="font-display mt-6 text-6xl md:text-8xl">
          Notes &amp; <em className="text-clay">writings.</em>
        </h1>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-foreground/80">
          A space for the studio&apos;s research, reflections and short essays on
          architecture, geometry and the rhythms of inhabited space.
        </p>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 pb-32 md:px-10">
        <div className="border-t border-border pt-16">
          <p className="font-label text-clay">✶ Coming soon</p>
          <h3 className="font-display mt-4 text-3xl md:text-4xl">
            The first pieces are being prepared.
          </h3>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
