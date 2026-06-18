import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/people")({
  head: () => ({
    meta: [
      { title: "People Ph.G Studio" },
      { name: "description", content: "The team behind Ph.G Studio." },
      { property: "og:title", content: "People Ph.G Studio" },
      { property: "og:description", content: "Architects, directors and collaborators behind Ph.G Studio." },
    ],
  }),
  component: People,
});

const team = [
  { role: "Principal Architect", name: "Ar. Hammad Hussain", photo: "/team/hammad.jpeg" },
  { role: "Senior Architect", name: "Ar. Syed Faraz Ali", photo: "" },
  { role: "Junior Architect", name: "Ar. Munazah Babar", photo: "/team/munazah.jpeg" },
  { role: "Junior Architect", name: "Ar. Zeeshan Haider", photo: "/team/zeeshan-haider.jpeg" },
  { role: "Junior Architect", name: "Ar. Yadullah", photo: "" },
  { role: "Managing Director", name: "Muhammad Ilyas", photo: "/team/muhammad-ilyas.jpg" },
  { role: "Media Director", name: "Qammar Abbas", photo: "/team/qammar.jpg" },
];

function People() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-[1600px] px-6 pt-32 pb-12 md:px-10">
        <p className="font-label text-muted-foreground">§ People</p>
        <h1 className="font-display mt-6 text-6xl md:text-8xl">
          The <em className="text-clay">team</em><br />
          behind the work.
        </h1>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 pb-28 md:px-10">
        <div className="grid grid-cols-1 gap-10 border-t border-border pt-12 md:grid-cols-2 lg:grid-cols-3">
          {team.map((p) => (
            <div key={p.name} className="border-b border-border pb-10">
              <div className="mb-6 aspect-[4/5] w-full overflow-hidden bg-muted">
                {p.photo ? (
                  <img
                    src={p.photo}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : null}
              </div>
              <p className="font-label text-clay">{p.role}</p>
              <h3 className="font-display mt-3 text-3xl md:text-4xl">{p.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
