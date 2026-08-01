import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionTitle from "./SectionTitle";

function Certifications() {
  const certificates = [
    {
      title: "Google AI Essentials",
      issuer: "Google",
      year: "2026",
      image: "/images/google-ai-essentials.jpeg",
      link: "https://www.credly.com/badges/b8481ad2-8c05-4c9e-a64d-e6cb6e593dde/print",
      description:
        "Gained practical knowledge of generative AI, prompt engineering, responsible AI, and real-world AI applications for productivity and problem-solving.",
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
          className="mx-auto mt-18 max-w-6xl space-y-16"
        >
          {certificates.map((certificate, index) => (
            <motion.article
              key={certificate.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="group relative w-full overflow-hidden rounded-[36px] border border-border bg-card-bg/80 backdrop-blur-2xl shadow-[0_30px_80px_-40px_rgba(139,92,246,.35)] transition-all duration-500 hover:border-primary/30"
            >
              {/* Animated Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/15 blur-[110px]" />
                <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-secondary/15 blur-[110px]" />
              </div>

              <div
                className={`relative grid items-center gap-10 p-8 lg:grid-cols-[420px_1fr] ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* IMAGE */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="mx-auto w-full max-w-[420px] overflow-hidden rounded-[28px] bg-white p-4 shadow-xl"
                >
                  <div className="absolute inset-0 z-10 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10" />

                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full rounded-2xl object-contain transition duration-700 group-hover:scale-105"
                  />

                  {/* Shine */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover:translate-x-full" />
                </motion.div>

                {/* CONTENT */}
                <div className="relative">
                  <h3 className="mt-6 text-4xl font-black leading-tight text-text-primary">
                    {certificate.title}
                  </h3>

                  <p className="mt-6 text-lg leading-9 text-text-secondary">
                    {certificate.description}
                  </p>

                  <div className="mt-10 flex flex-wrap gap-5">
                    <div className="rounded-2xl border border-border bg-bg-secondary px-6 py-4">
                      <p className="text-xs uppercase tracking-[0.25em] text-text-muted">
                        Issued
                      </p>

                      <p className="mt-2 font-semibold text-text-primary">
                        {certificate.year}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border bg-bg-secondary px-6 py-4">
                      <p className="text-xs uppercase tracking-[0.25em] text-text-muted">
                        Provider
                      </p>

                      <p className="mt-2 font-semibold text-text-primary">
                        {certificate.issuer}
                      </p>
                    </div>
                  </div>

                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-4 font-semibold text-white transition duration-300 hover:scale-105"
                  >
                    View Credential
                    <ExternalLink size={18} />
                  </a>
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
