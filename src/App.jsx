import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CircleUserRound,
  GraduationCap,
  Mail,
  Sparkles,
} from "lucide-react";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Education from "./components/Education.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";

function App() {
  const [theme, setTheme] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }

    const timer = window.setTimeout(() => setIsLoading(false), 800);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  const quickStats = [
    { label: "Projects", value: "5+", icon: <BriefcaseBusiness size={18} /> },
    { label: "Focus", value: "Frontend", icon: <CircleUserRound size={18} /> },
    {
      label: "Learning",
      value: "Full Stack",
      icon: <GraduationCap size={18} />,
    },
    { label: "Reach", value: "Open to work", icon: <Mail size={18} /> },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-bg-primary text-text-primary transition-colors duration-300">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-secondary/95"
          >
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-primary">
                <Sparkles size={24} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-primary">
                  Preparing portfolio
                </p>
                <p className="mt-2 text-lg font-medium text-text-primary">
                  Hafsa Abdul Razaq
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Navbar
        navLinks={navLinks}
        theme={theme}
        toggleTheme={() =>
          setTheme((prev) => (prev === "dark" ? "light" : "dark"))
        }
        isMenuOpen={isMenuOpen}
        toggleMenu={() => setIsMenuOpen((current) => !current)}
      />

      <main>
        <Hero />

        <section className="relative px-4 pb-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {quickStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-3xl p-[1px]"
              >
                {/* Animated Border */}
                <div className="absolute inset-0 bg-[linear-gradient(130deg,#8B5CF6,#6366F1,#06B6D4,#8B5CF6)] bg-[length:300%_300%] animate-[gradient_8s_linear_infinite]" />

                {/* Card */}
                <div className="relative h-full rounded-[22px] border border-violet-200/60 bg-white/80 p-4 sm:p-5 backdrop-blur-2xl transition-all duration-500 group-hover:bg-white dark:border-white/10 dark:bg-[#111827]/95 dark:group-hover:bg-[#18243d]">
                  {/* Glow */}
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet-400/20 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100 dark:bg-violet-500/20" />

                  {/* Header */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-white shadow-[0_0_25px_rgba(139,92,246,.35)] transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                      {stat.icon}
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500 sm:text-[11px] sm:tracking-[0.22em] dark:text-slate-400">
                        {stat.label}
                      </p>

                      <div className="mt-1 flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />

                        <span className="text-[8px] text-slate-500 sm:text-[10px] dark:text-slate-500">
                          Growing
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Value */}
                  <h3 className="mt-4 text-2xl font-black tracking-tight text-slate-900 transition-all duration-300 group-hover:text-violet-600 dark:text-white dark:group-hover:text-violet-300 sm:mt-5 sm:text-3xl">
                    {stat.value}
                  </h3>

                  {/* Bottom Line */}
                  <div className="mt-4 h-[3px] w-8 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-500 group-hover:w-full sm:w-10" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
