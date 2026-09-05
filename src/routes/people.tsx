import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Plate } from "@/components/plate";
import { Reveal, RevealText } from "@/components/reveal";
import { Tilt } from "@/components/tilt";

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
  { role: "Design Head", name: "Ar. Hammad Hussain", photo: "/team/hammad.jpeg" },
  { role: "Senior Architect", name: "Ar. Syed Faraz Haider", photo: "/team/faraz.png" },
  { role: "Senior Architect", name: "Ar. Arij Karim", photo: "/team/arijkarim.jpeg" },
  { role: "Senior Architect", name: "Ar. Multazam Naveed", photo: "/team/multazamnaveed.jpeg" },
  { role: "Junior Architect", name: "Ar. Munazza Baber", photo: "/team/munazah.jpeg" },
  { role: "Junior Architect", name: "Ar. Zeeshan Haider", photo: "/team/zeeshan-haider.jpeg" },
  { role: "Junior Architect", name: "Ar. Sayed Yadullah", photo: "/team/yadullah.png" },
  { role: "Media Director", name: "Qammar Abbas", photo: "/team/qammar.jpg" },
  { role: "Managing Director-IT", name: "Muhammad Ilyas", photo: "/team/muhammad-ilyas.jpg" },
];

function People() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-[1600px] px-6 pt-32 pb-12 md:px-10">
        <p className="font-label text-muted-foreground">§ People</p>
        <RevealText as="h1" className="font-display mt-6 text-4xl md:text-6xl">
          The <em className="text-clay">team</em>.
        </RevealText>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 pb-28 md:px-10">
        <div className="grid grid-cols-1 gap-10 border-t border-border pt-12 md:grid-cols-2 lg:grid-cols-3">
          {team.map((p, i) => (
            <Reveal key={p.name} index={i} className="group border-b border-border pb-10">
              <Tilt>
                <div className="plate-frame relative mb-6 w-full overflow-hidden">
                  {p.photo ? (
                    <Plate
                      src={p.photo}
                      alt={p.name}
                      ratio="4/5"
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 46vw, 92vw"
                      className="object-top transition-transform duration-[var(--dur-base)] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                    />
                  ) : null}

                  {/* Role rides on frosted glass over the portrait, matching the
                      project cards. It slides up into place on hover. */}
                  <span className="glass font-label absolute bottom-4 left-4 translate-y-1 px-3 py-1.5 text-ink opacity-0 transition-all duration-[var(--dur-base)] ease-[var(--ease-out-expo)] group-hover:translate-y-0 group-hover:opacity-100">
                    {p.role}
                  </span>
                </div>
              </Tilt>

              <p className="font-label text-clay">{p.role}</p>
              <h3 className="font-display mt-3 text-2xl transition-colors duration-[var(--dur-fast)] group-hover:text-clay md:text-3xl">
                {p.name}
              </h3>
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
