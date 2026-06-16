import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ph.G Studio" },
      { name: "description", content: "Get in touch with Ph.G Studio for new commissions and collaborations." },
      { property: "og:title", content: "Contact Ph.G Studio" },
      { property: "og:description", content: "Write to us about your next project." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto grid max-w-[1600px] grid-cols-12 gap-8 px-6 pt-40 pb-32 md:px-10">
        <div className="col-span-12 md:col-span-6">
          <p className="font-label text-muted-foreground">§ Contact</p>
          <h1 className="font-display mt-6 text-6xl md:text-9xl">
            Let's <em className="text-clay">build</em><br />together.
          </h1>
          <p className="mt-10 max-w-md text-lg leading-relaxed text-foreground/80">
            New commissions, collaborations, and conversations are always welcome.
          </p>

          <dl className="mt-16 space-y-6 text-base">
            <div>
              <dt className="font-label text-muted-foreground">Email</dt>
              <dd className="mt-1 text-xl">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=phgstudio44@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-clay"
                >
                  phgstudio44@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-label text-muted-foreground">WhatsApp</dt>
              <dd className="mt-1 text-xl">
                <a href="https://wa.me/923030444072" target="_blank" rel="noopener noreferrer" className="hover:text-clay">
                  +92 303 0444072
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-label text-muted-foreground">Instagram</dt>
              <dd className="mt-1 text-xl">
                <a
                  href="https://www.instagram.com/ph.g_studio?igsh=ZHBpNnJxbTkxY2hw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-clay"
                >
                  @ph.g_studio
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-label text-muted-foreground">LinkedIn</dt>
              <dd className="mt-1 text-xl">
                <a
                  href="https://www.linkedin.com/company/phg-studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-clay"
                >
                  Ph.G Studio
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="col-span-12 md:col-span-6">
          {sent ? (
            <div className="bg-ink text-cream p-12 md:p-16">
              <p className="font-label text-clay">✶ Received</p>
              <h3 className="font-display mt-6 text-5xl">
                Thank you.<br />
                <em>We'll write back soon.</em>
              </h3>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="bg-card p-8 md:p-12"
            >
              <p className="font-label text-muted-foreground">Nº 001 New Enquiry</p>

              <div className="mt-10 space-y-8">
                <Field label="Your name" name="name" />
                <Field label="Your email" name="email" type="email" />
                <Field label="Where is the site?" name="place" />
                <div>
                  <label className="font-label block text-muted-foreground" htmlFor="msg">
                    Tell us about the project
                  </label>
                  <textarea
                    id="msg"
                    name="msg"
                    rows={5}
                    required
                    className="mt-3 w-full resize-none border-b border-border bg-transparent pb-2 text-lg outline-none placeholder:text-muted-foreground/50 focus:border-clay"
                    placeholder="A home, a workspace, a cultural space…"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="font-label mt-12 group inline-flex w-full items-center justify-between border-t border-ink/80 pt-4 text-ink hover:text-clay"
              >
                Send enquiry
                <span className="transition-transform group-hover:translate-x-2">→</span>
              </button>
            </form>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="font-label block text-muted-foreground" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-3 w-full border-b border-border bg-transparent pb-2 text-lg outline-none focus:border-clay"
      />
    </div>
  );
}
