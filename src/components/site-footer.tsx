export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-cream">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpeg"
              alt="Ph. G studio logo"
              className="h-10 w-10 rounded-sm object-cover"
            />
            <p className="font-display text-2xl">
              Ph.G <span className="text-clay italic">Studio</span>
            </p>
          </div>
          <p className="font-label mt-2 text-cream/50">
            © 2026 Architecture shaped through Perception, Human, Pause &amp; Geometry
          </p>
        </div>
        <div className="flex flex-col gap-2 text-left md:items-end md:text-right">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=phgstudio44@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label text-cream/70 hover:text-clay"
          >
            phgstudio44@gmail.com
          </a>
          <a
            href="https://wa.me/923030444072"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label text-cream/70 hover:text-clay"
          >
            +92 303 0444072
          </a>
          <div className="mt-2 flex items-center gap-4">
            <a
              href="https://www.instagram.com/ph.g_studio?igsh=ZHBpNnJxbTkxY2hw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-cream/70 hover:text-clay"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a
              href="https://www.linkedin.com/company/phg-studio/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-cream/70 hover:text-clay"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
