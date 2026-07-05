function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 px-4 py-16 sm:px-6 lg:px-8">
      {/* Glow */}

      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-secondary/10 blur-[120px]" />

      {/* Background Text */}

      <span className="pointer-events-none absolute left-1/2 top-4 hidden -translate-x-1/2 text-7xl font-black uppercase tracking-tight text-white/[0.03] lg:block">
        THANK YOU
      </span>

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
            Thanks for Visiting
          </span>

          <h2 className="mt-6 text-4xl font-black text-text-primary">
            Hafsa Abdul Razaq
          </h2>

          <p className="mt-3 max-w-lg text-text-muted leading-8">
            Frontend Developer focused on building clean, modern and meaningful
            digital experiences.
          </p>

          {/* Navigation */}

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Education",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-text-secondary transition hover:text-primary"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="my-10 h-px w-full max-w-xl bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="flex flex-col items-center gap-5 lg:flex-row">
            <p className="text-sm text-text-muted">
              © 2026 Hafsa Abdul Razaq · Crafted with React, Tailwind CSS &
              Framer Motion.
            </p>

            <a
              href="#home"
              className="rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-medium text-primary transition-all hover:-translate-y-1 hover:bg-primary hover:text-white"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
