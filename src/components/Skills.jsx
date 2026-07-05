import { motion } from "framer-motion";
import {
  BadgeCheck,
  Code2,
  Database,
  Globe,
  Rocket,
  Wrench,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

function Skills() {
  const groups = [
    {
      title: "Frontend",
      icon: <Code2 size={18} />,
      items: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React JS",
        "Responsive Web Design",
      ],
    },
    {
      title: "Backend",
      icon: <Rocket size={18} />,
      items: ["Python", "Flask"],
    },
    {
      title: "Database",
      icon: <Database size={18} />,
      items: ["SQLite"],
    },
    {
      title: "Deployment",
      icon: <Globe size={18} />,
      items: ["Vercel", "Render"],
    },
    {
      title: "Tools",
      icon: <Wrench size={18} />,
      items: ["Git", "GitHub", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Skills"
          title="Technologies I Use to Build Real Projects."
          description="From responsive frontend development to backend integration and machine learning, I enjoy learning modern technologies and applying them to practical, real-world applications."
        />

        {/* ===================== Skills Showcase ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-20"
        >
          {/* Background Text */}

          <span className="pointer-events-none absolute -top-16 -left-10 hidden select-none text-[9rem] font-black uppercase tracking-tight text-violet-100 dark:text-white/[0.03] xl:block">
            SKILLS
          </span>

          <div className="relative z-10 grid items-start gap-14 lg:grid-cols-[260px_1fr]">
            {/* Timeline */}

            <div className="relative mx-auto flex w-full max-w-xs flex-col gap-8">
              <div className="absolute left-5 top-3 bottom-3 w-[2px] bg-gradient-to-b from-primary via-secondary to-cyan-400 opacity-40" />

              {[
                "Frontend Development",
                "Backend Development",
                "Machine Learning",
                "Deployment & Tools",
              ].map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="relative flex items-center gap-4"
                >
                  <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-bold text-primary backdrop-blur-xl">
                    0{index + 1}
                  </div>

                  <span className="text-sm font-medium text-text-secondary">
                    {step}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Skills Grid */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="grid gap-5 md:grid-cols-2">
                {groups.map((group, index) => (
                  <motion.article
                    key={group.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -8,
                    }}
                    className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-card-bg/90 via-bg-secondary/70 to-card-bg/90 p-5 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_30px_80px_-35px_rgba(139,92,246,.35)]"
                  >
                    {/* Glow */}

                    <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary/10 blur-[80px] opacity-0 transition duration-500 group-hover:opacity-100" />

                    {/* Top Accent */}

                    <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-primary via-secondary to-primary transition-all duration-700 group-hover:w-full" />

                    <div className="relative">
                      {/* Header */}

                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                          {group.icon}
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-text-primary">
                            {group.title}
                          </h3>

                          <span className="text-xs uppercase tracking-[0.25em] text-text-muted">
                            0{index + 1}
                          </span>
                        </div>
                      </div>

                      {/* Divider */}

                      <div className="my-6 h-px w-full bg-gradient-to-r from-primary/30 via-border to-transparent" />

                      {/* Technologies */}

                      <div className="flex flex-wrap gap-2.5">
                        {group.items.map((item) => (
                          <motion.span
                            key={item}
                            whileHover={{
                              y: -3,
                              scale: 1.05,
                            }}
                            className="rounded-full border border-border bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-text-secondary transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                          >
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
