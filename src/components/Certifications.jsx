import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionTitle from "./SectionTitle";

function Certifications() {
  const certificates = [
    {
      title: "Google AI",
      issuer: "Google",
      year: "2026",
      link: "https://www.coursera.org/account/accomplishments/specialization/PBNONBJPS2KO",
      iconColor: "from-blue-500 to-cyan-500",
      description:
        "Built a strong foundation in Artificial Intelligence by exploring core AI concepts and responsible AI practices.",
    },
    {
      title: "Google AI Essentials",
      issuer: "Google",
      year: "2026",
      link: "https://www.coursera.org/account/accomplishments/specialization/RURQ75076BIK",
      iconColor: "from-violet-500 to-fuchsia-500",
      description:
        "Gained hands-on experience with generative AI, prompt engineering and AI-powered problem solving.",
    },
    {
      title: "Google Prompting Essentials",
      issuer: "Google",
      year: "2026",
      link: "https://www.coursera.org/account/accomplishments/specialization/R321JM6U2CIA",
      iconColor: "from-amber-500 to-orange-500",
      description:
        "Learned advanced prompting techniques, prompt optimization, structured AI communication strategies to get accurate results.",
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-20 max-w-7xl"
        >
          <div className="grid gap-6 lg:grid-cols-3 ">
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -8 }}
                className="group relative py-8"
              >
                {/* Left Accent */}
                <div className="absolute left-0 top-0 h-full w-[3px] rounded-full bg-gradient-to-b from-primary via-secondary to-cyan-400 transition-all duration-500 group-hover:w-[6px]" />

                <div className="pl-7">
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${certificate.iconColor} shadow-lg`}
                    >
                      <Award size={24} className="text-white" />
                    </div>

                    <span className="text-sm font-semibold text-text-muted">
                      {certificate.year}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-bold leading-snug text-text-primary">
                    {certificate.title}
                  </h3>

                  <p className="mt-2 text-sm uppercase tracking-[0.28em] text-primary">
                    {certificate.issuer}
                  </p>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-500">
                      ✓ Verified
                    </span>

                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 font-semibold text-primary"
                    >
                      Credential
                      <ExternalLink
                        size={16}
                        className="transition group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Certifications;
