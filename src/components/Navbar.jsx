// ye lo code or ab updated code mje do meri req k mutabiq
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sparkles, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import ButtonLink from "./ButtonLink";

function Navbar({ navLinks, theme, toggleTheme, isMenuOpen, toggleMenu }) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navLinks.map((link) => document.querySelector(link.href));
    const onScroll = () => {
      const currentOffset = window.scrollY + 140;
      let active = "home";

      sections.forEach((section) => {
        if (section && currentOffset >= section.offsetTop) {
          active = section.id;
        }
      });

      setActiveSection(active);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [navLinks]);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] isolate">
      <div className="mx-auto max-w-7xl rounded-2xl border border-border bg-bg-primary shadow-2xl px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br  from-primary to-secondary text-sm font-semibold text-white shadow-[0_14px_35px_-12px_rgba(139,92,246,0.4)]">
              H
            </div>
            <div>
              <p className="text-sm font-semibold text-text-primary">
                Hafsa Abdul Razaq
              </p>
              <p className="text-xs text-text-muted">Frontend Developer</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-text-muted md:flex">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-1 py-2 transition ${isActive ? "text-text-primary" : "hover:text-text-primary"}`}
                >
                  {link.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-primary to-secondary"
                    />
                  ) : null}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="hidden rounded-full border border-border bg-card-bg p-2.5 text-text-secondary shadow-sm transition hover:border-primary/40 hover:text-primary md:inline-flex"
              aria-label="Toggle color theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              type="button"
              onClick={toggleMenu}
              className="rounded-full border border-border bg-card-bg p-2.5 text-text-secondary shadow-sm transition hover:border-primary/40 hover:text-primary md:hidden"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 z-40 bg-bg-primary/70 backdrop-blur-sm md:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 240, damping: 28 }}
              className="fixed right-0 top-0 z-50 flex h-full w-80 max-w-[85vw] flex-col border-l border-violet-200/60 bg-white/95 p-6 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/95"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    Navigation
                  </p>
                  <p className="text-xs text-text-muted">
                    Explore the portfolio
                  </p>
                </div>
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="rounded-full border border-border bg-card-bg p-2 text-text-secondary"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="mt-8 flex flex-1 flex-col gap-3 text-sm font-medium text-text-muted">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={toggleMenu}
                    className="rounded-2xl border border-transparent px-3 py-3 transition hover:border-primary/20 hover:bg-primary/10 hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-3 border-t border-border pt-5">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card-bg px-3 py-2.5 text-sm font-medium text-text-secondary"
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                  {theme === "dark" ? "Light mode" : "Dark mode"}
                </button>
                <ButtonLink
                  href="#contact"
                  variant="primary"
                  onClick={toggleMenu}
                >
                  <Sparkles size={16} />
                  Let&apos;s connect
                </ButtonLink>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
