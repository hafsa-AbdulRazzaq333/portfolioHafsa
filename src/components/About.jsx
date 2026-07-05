import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Code2, BrainCircuit } from "lucide-react";import SectionTitle from "./SectionTitle";

function About() {
  const highlights = [
    "Modern React & Responsive Interfaces",
    "Flask Backend Development & APIs",
    "Machine Learning Integration",
    "Deployment with Vercel & Render",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-secondary/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="flex justify-center">
          <SectionTitle
            eyebrow="About Me"
            title="From Curiosity to Creating Impact."
            description="Passionate about transforming ideas into modern digital experiences through clean design, scalable development, and continuous learning."
          />
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 space-y-14"
        >
          {/* Story Section */}

          <div className="grid items-center gap-10 lg:grid-cols-[280px_1fr]">
            {/* Timeline */}

            <div className="relative mx-auto flex w-full max-w-xs flex-col gap-7">
              <div className="absolute left-5 top-3 bottom-3 w-[2px] bg-gradient-to-b from-primary via-secondary to-cyan-400 opacity-40" />

              {[
                "Started Web Development",
                "Mastered React",
                "Built Full-Stack Projects",
                "Exploring Artificial Intelligence",
              ].map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
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

            {/* Story */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Huge Background Word */}

              <span className="pointer-events-none absolute -top-12 left-0 text-7xl font-black uppercase tracking-tight text-violet-100 dark:text-white/[0.03] md:text-[9rem]">
                ABOUT
              </span>

              <div className="relative grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
                {/* Left Side */}

                <div>

                  <h3 className="mt-7 text-5xl font-black leading-[1.05] tracking-tight text-text-primary">
                    Building
                    <br />
                    <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                      meaningful
                    </span>
                    <br />
                    digital experiences.
                  </h3>

                  <p className="mt-8 max-w-xl text-[16px] leading-9 text-text-muted">
                    I started with simple web pages and gradually progressed
                    into developing modern React applications, Flask backends,
                    and AI-powered solutions. Today, my focus is building
                    products that are clean, scalable, and genuinely enjoyable
                    to use.
                  </p>
                </div>

                {/* Right Side */}

                <div className="space-y-5">
                  {[
                    {
                      number: "01",
                      title: "Frontend",
                      text: "Modern React interfaces with responsive design.",
                    },
                    {
                      number: "02",
                      title: "Backend",
                      text: "Flask APIs and practical full-stack architecture.",
                    },
                    {
                      number: "03",
                      title: "AI",
                      text: "AI-powered solutions integrated into real applications.",
                    },
                  ].map((item) => (
                    <motion.div
                      key={item.number}
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.25 }}
                      className="group flex gap-5 border-l border-primary/20 pl-5"
                    >
                      <span className="text-3xl font-black text-primary/25 transition group-hover:text-primary">
                        {item.number}
                      </span>

                      <div>
                        <h4 className="font-semibold text-text-primary">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-sm leading-7 text-text-muted">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default About;
