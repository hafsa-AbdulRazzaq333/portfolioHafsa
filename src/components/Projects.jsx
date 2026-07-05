import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Sparkles } from "lucide-react";
import SectionTitle from "./SectionTitle";

function Projects() {
  const projects = [
    {
      title: "HealthGuard AI",
      description:
        "A machine learning-powered diabetes prediction platform with PDF report generation and a polished clinical feel.",
      tags: ["React", "Python", "ML", "PDF Reports"],
      github:
        "https://github.com/hafsa-AbdulRazzaq333/HealthGuard-AI-Backend.git",
      demo: "https://health-guard-ai-a-diabetes-predicto.vercel.app/",
      image: "./images/healthguard.png",
    },
    {
      title: "Full Stack Todo Application",
      description:
        "A task management app built with React, Flask, and SQLite for a clean and practical workflow experience.",
      tags: ["React", "Flask", "SQLite", "CRUD"],
      github: "https://github.com/hafsa-AbdulRazzaq333/TodoApp.git",
      demo: "https://todo-app-eta-ten-25.vercel.app/",
      image: "./images/todo-list.png",
    },
    {
      title: "Translator & Summarizer",
      description:
        "A multilingual web app focused on fast text translation and summaries with a smooth, accessible interface.",
      tags: ["Streamlit", "Python", "API", "UI/UX"],
      github:
        "https://github.com/hafsa-AbdulRazzaq333/Language-Summarizer-Translator.git",
      demo: "https://language-summarizer-translator-gtxfuo9db9zfjaeir2unra.streamlit.app/",
      image: "./images/translator.png",
    },
    {
      title: "Weather Application",
      description:
        "A responsive weather forecasting experience with API integration and dynamic visual updates.",
      tags: ["Streamlit", "Python", "API", "Responsive"],
      github:
        "https://github.com/hafsa-AbdulRazzaq333/Weather-app-with-streamlit-and-python.git",
      demo: "https://hafsa-abdulrazzaq333-weather-app-with-streamlit-and--app-q6oukt.streamlit.app/",
      image: "./images/weather.png",
    },
    {
      title: "Quran Player",
      description:
        "An interactive audio player designed for calm, intuitive playback and modern accessibility standards.",
      tags: ["HTML", "CSS", "JavaScript", "Audio", "UX"],
      github: "https://github.com/hafsa-AbdulRazzaq333/QuranPlayer.git",
      demo: "https://quran-player-9vft.vercel.app/",
      image: "./images/quran-player.png",
    },
  ];

  return (
    <section id="projects" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Projects"
          title="Building practical solutions with modern technologies."
          description="A selection of projects reflecting my skills in frontend, backend, and AI-powered development."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className={`group overflow-hidden rounded-[1.8rem] border p-0 shadow-[0_16px_45px_-24px_rgba(139,92,246,0.25)] backdrop-blur ${project.featured ? "border-border bg-gradient-to-br from-primary/10 via-card-bg to-bg-secondary/80" : "border-border bg-card-bg"}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-text-primary">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-base leading-8 text-text-muted">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-bg-secondary/70 px-3 py-1.5 text-sm text-text-secondary shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-violet-400 hover:text-violet-600 dark:border-border dark:bg-card-bg dark:text-text-secondary dark:hover:border-primary/40 dark:hover:text-primary"
                  >
                    <Sparkles size={16} />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(139,92,246,0.25)] transition hover:-translate-y-0.5"
                  >
                    <Globe size={16} />
                    Live demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
