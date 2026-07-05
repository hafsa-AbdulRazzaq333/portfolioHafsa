import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Globe,
  Mail,
  MapPin,
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import ButtonLink from "./ButtonLink";

function Contact() {
  const contactItems = [
    {
      label: "Email",
      value: "hafsaabdulrazaq333@gmail.com",
      href: "mailto:hafsaabdulrazaq333@gmail.com",
      icon: <Mail size={18} />,
    },
    {
      label: "GitHub",
      value: "hafsa-AbdulRazzaq333",
      href: "https://github.com/hafsa-AbdulRazzaq333",
      icon: <Globe size={18} />,
    },
    {
      label: "LinkedIn",
      value: "Hafsa Abdul Razaq",
      href: "https://www.linkedin.com/in/hafsa-abdul-razaq-492b26322/",
      icon: <BriefcaseBusiness size={18} />,
    },
    {
      label: "Location",
      value: "Punjab, Pakistan",
      href: "https://maps.app.goo.gl/bHerjTM1fxbXturQA",
      icon: <MapPin size={18} />,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-secondary/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Title */}

        <div className="flex justify-center">
          <SectionTitle
            eyebrow="Contact"
            title="Let's Build Something Meaningful Together."
            description="Open to collaborations, opportunities, and conversations that turn ideas into impactful digital experiences."
          />
        </div>

        {/* Contact Content */}
        {/* ===================== Contact Showcase ===================== */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-20"
        >
          {/* Background Text */}

          <span className="pointer-events-none absolute -top-10 left-0 hidden text-7xl font-black uppercase tracking-tight text-violet-100 dark:text-white/[0.03] md:block lg:text-[9rem]">
            CONTACT
          </span>

          <div className="relative grid items-start gap-10 lg:grid-cols-[260px_1fr]">
            {/* Timeline */}

            <div className="relative mx-auto flex w-full max-w-xs flex-col gap-8">
              <div className="absolute left-5 top-3 bottom-3 w-[2px] bg-gradient-to-b from-primary via-secondary to-cyan-400 opacity-40" />

              {[
                "Let's Connect",
                "Discuss Ideas",
                "Build Together",
                "Create Impact",
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

            {/* Contact Cards */}

            <div className="grid gap-6 md:grid-cols-2">
              {contactItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noreferrer"
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
                  className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-white/[0.06] via-card-bg to-bg-secondary/90 p-7 backdrop-blur-3xl transition-all duration-700 hover:border-primary/40 hover:shadow-[0_35px_80px_-35px_rgba(139,92,246,.35)]"
                >
                  {/* Glow */}

                  <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-[100px] opacity-0 transition-all duration-700 group-hover:opacity-100" />

                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-primary via-secondary to-primary transition-all duration-700 group-hover:w-full" />

                  {/* Number */}

                  <span className="absolute right-6 top-5 text-6xl font-black text-white/[0.04] group-hover:text-primary/10">
                    0{index + 1}
                  </span>

                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-[22px] border border-primary/20 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent text-primary shadow-[0_20px_40px_-18px_rgba(139,92,246,.4)] transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                        {item.icon}
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-text-muted">
                          {item.label}
                        </span>

                        <h3 className="mt-2 text-base sm:text-lg lg:text-xl font-bold leading-snug text-text-primary break-all">
                          {item.value}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Divider */}
                    <div className="my-7 h-px bg-gradient-to-r from-primary/40 via-border to-transparent" />
                    {/* Bottom */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-muted">
                        Click to open
                      </span>

                      <div className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary transition group-hover:bg-primary group-hover:text-white">
                        Open
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-20">{/* Grid starts here */}</div>
      </div>
    </section>
  );
}

export default Contact;
