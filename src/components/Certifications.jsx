import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionTitle from "./SectionTitle";

function Certifications() {
  const certificates = [
    {
      title: "Google AI Fundamentals",
      issuer: "Google",
      year: "2026",
      image: "/images/google-ai.png",
      link: "https://www.credly.com/earner/earned/badge/d71344e6-e6bd-4005-90f4-04b18f0b8f87",
      description:
        "Built a strong foundation in Artificial Intelligence by exploring core AI concepts, responsible AI practices, and practical applications across real-world scenarios.",
    },
    {
      title: "Google AI Essentials",
      issuer: "Google",
      year: "2026",
      image: "/images/google-ai-essentials.jpeg",
      link: "https://www.credly.com/badges/b8481ad2-8c05-4c9e-a64d-e6cb6e593dde/print",
      description:
        "Gained practical knowledge of generative AI, prompt engineering, responsible AI, and real-world AI applications for productivity and problem-solving.",
    },
    {
      title: "Google Prompting Essentials",
      issuer: "Google",
      year: "2026",
      image: "/images/google-prompting-essentials.png",
      link: "https://www.credly.com/earner/earned/badge/786e7516-5095-43b2-94d0-d34ac41ce311",
      description:
        "Learned professional prompting techniques, prompt refinement strategies, structured AI communication, and workflow optimization for high-quality AI-assisted results.",
    },
  ];

  return (
    <section
      id="certifications"
      className="px-4 pt-5 mt-5 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Certifications"
          title="Professional Certifications."
          description="A collection of industry-recognized certifications that reflect my commitment to continuous learning, professional growth, and staying current with modern technologies."
        />

        {/* Cards will go here */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-20 max-w-6xl space-y-10"
        >
          {certificates.map((certificate, index) => (
            <motion.article
              key={certificate.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[34px] border border-border bg-card-bg/80 backdrop-blur-2xl transition-all duration-500 hover:border-primary/30 hover:shadow-[0_30px_70px_-40px_rgba(139,92,246,.35)]"
            >
              {/* Glow */}
              <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-primary/10 blur-[90px] opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Top Accent */}
              <div className="absolute left-0 top-0 h-[3px] w-0 bg-gradient-to-r from-primary via-secondary to-primary transition-all duration-700 group-hover:w-full" />

              <div className="grid gap-8 p-7 lg:grid-cols-[280px_1fr] lg:p-8">
                {/* Certificate Preview */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative mx-auto w-full max-w-[280px]"
                >
                  <div className="rounded-[24px] bg-white p-3 shadow-xl">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full rounded-2xl object-contain"
                    />
                  </div>

                  <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-primary/20 bg-bg-primary px-4 py-2 shadow-lg">
                    <Award size={15} className="text-primary" />
                    <span className="text-xs font-semibold text-text-primary">
                      Verified
                    </span>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                      {certificate.issuer}
                    </span>

                    <span className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-text-muted">
                      {certificate.year}
                    </span>
                  </div>

                  <h3 className="mt-6 text-3xl font-black leading-tight text-text-primary lg:text-4xl">
                    {certificate.title}
                  </h3>

                  <p className="mt-5 max-w-2xl leading-8 text-text-secondary">
                    {certificate.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-text-muted">
                        Certification
                      </p>

                      <p className="mt-2 font-semibold text-text-primary">
                        Industry Recognized Credential
                      </p>
                    </div>

                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105"
                    >
                      View Credential
                      <ExternalLink
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Certifications;
