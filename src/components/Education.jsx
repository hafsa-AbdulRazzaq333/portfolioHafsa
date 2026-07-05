import { motion } from "framer-motion";

import {
  University,
  School,
  GraduationCap,
  MapPin,
  CalendarDays,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

function Education() {
  const education = [
    {
      degree: "BS Computer Science",
      institution: "University of Gujrat",
      location: "Gujrat, Pakistan",
      duration: "2023 – Present",
      status: "Undergraduate",
      cgpa: "3.1/4.0",
      icon: <University size={20} />,
      tags: [
        "Programming Fundamentals",
        "Data Structures & Algorithms",
        "Web Development",
        "Database Management",
        "Software Engineering",
      ],
    },

    {
      degree: "Intermediate (ICS)",
      institution: "Punjab College",
      location: "Wazirabad, Pakistan",
      duration: "2021 – 2023",
      status: "Pre-Engineering / ICS",
      icon: <School size={20} />,
      grade: "A+",
      tags: [
        "Mathematics",
        "Physics",
        "Computer Science",
        "Academic Excellence",
      ],
    },

    {
      degree: "Matriculation",
      institution: "Dar-e-Arqam School",
      location: "Wazirabad, Pakistan",
      duration: "2019 – 2021",
      status: "Science Group",
      icon: <GraduationCap size={20} />,
      grade: "A+",
      tags: ["Science", "Mathematics", "Discipline", "Academic Foundation"],
    },
  ];

  return (
    <section id="education" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Education"
          title="Where learning became the foundation for building."
          description="A journey of academic learning, practical experience, and continuous growth as a developer."
        />

        {/* ===================== Education Showcase ===================== */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-20"
        >
          {/* Background */}

          <span className="pointer-events-none absolute -top-10 left-0 hidden text-7xl font-black uppercase tracking-tight text-violet-100 dark:text-white/[0.03] md:block lg:text-[9rem]">
            EDUCATION
          </span>

          <div className="relative grid items-start gap-10 lg:grid-cols-[260px_1fr]">
            {/* Timeline */}

            <div className="relative mx-auto flex w-full max-w-xs flex-col gap-8">
              <div className="absolute bottom-3 left-5 top-3 w-[2px] bg-gradient-to-b from-primary via-secondary to-cyan-400 opacity-40" />

              {education.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="relative flex items-center gap-4"
                >
                  <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-bold text-primary backdrop-blur-xl">
                    0{index + 1}
                  </div>

                  <div>
                    <p className="font-medium text-text-primary">
                      {item.institution}
                    </p>

                    <span className="text-sm text-text-muted">
                      {item.duration}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Cards */}

            <div className="space-y-7">
              {education.map((item, index) => (
                <motion.article
                  key={item.degree}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.06] via-card-bg to-bg-secondary/90 p-8 backdrop-blur-3xl shadow-[0_30px_90px_-35px_rgba(139,92,246,.22)] transition-all duration-700 hover:border-primary/40 hover:shadow-[0_25px_60px_-35px_rgba(139,92,246,.22)]"
                >
                  {/* Background Glow */}

                  <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-[120px] opacity-0 transition-all duration-700 group-hover:scale-125 group-hover:opacity-100" />

                  <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-secondary/10 blur-[110px]" />

                  {/* Animated Border */}

                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-primary via-secondary to-primary transition-all duration-700 group-hover:w-full" />

                  {/* Number */}

                  <span className="absolute right-7 top-5 text-7xl font-black tracking-tight text-white/[0.035] transition duration-500 group-hover:text-primary/10">
                    0{index + 1}
                  </span>

                  <div className="relative">
                    {/* Header */}

                    <div className="flex items-start gap-6">
                      <div className="flex h-16 w-16 items-center justify-center rounded-[22px] border border-primary/20 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent text-primary shadow-[0_20px_40px_-20px_rgba(139,92,246,.45)] transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                        {item.icon}
                      </div>

                      <div className="flex-1">
                        <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
                          {item.status}
                        </span>

                        <h3 className="mt-4 text-[28px] font-black leading-tight tracking-tight text-text-primary">
                          {item.degree}
                        </h3>

                        <p className="mt-2 text-[15px] font-medium text-text-secondary">
                          {item.institution}
                        </p>

                        <div className="mt-5 h-px w-24 bg-gradient-to-r from-primary via-secondary/40 to-transparent" />
                      </div>
                    </div>

                    {/* Info */}

                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-4 transition duration-300 hover:border-primary/30 hover:bg-primary/[0.03]">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-text-muted">
                          Location
                        </p>

                        <p className="mt-2 text-sm font-semibold text-text-primary">
                          {item.location}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-4 transition duration-300 hover:border-primary/30 hover:bg-primary/[0.03]">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-text-muted">
                          Duration
                        </p>

                        <p className="mt-2 text-sm font-semibold text-text-primary">
                          {item.duration}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-4 transition duration-300 hover:border-primary/30 hover:bg-primary/[0.03]">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-text-muted">
                          {item.cgpa ? "CGPA" : "Grade"}
                        </p>

                        <p className="mt-2 text-sm font-bold text-primary">
                          {item.cgpa || item.grade}
                        </p>
                      </div>
                    </div>

                    {/* Divider */}

                    <div className="my-8 h-px bg-gradient-to-r from-primary/40 via-border to-transparent" />

                    {/* Subjects */}

                    <div className="flex flex-wrap gap-3">
                      {item.tags.map((subject) => (
                        <motion.span
                          key={subject}
                          whileHover={{
                            y: -3,
                            scale: 1.04,
                          }}
                          className="rounded-full border border-primary/15 bg-primary/[0.05] px-4 py-2 text-sm font-medium text-text-secondary transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                        >
                          {subject}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
