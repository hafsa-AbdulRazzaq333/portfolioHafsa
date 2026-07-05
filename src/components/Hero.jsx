import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";
import ButtonLink from "./ButtonLink";

function Hero() {
  const phrases = [
    "Frontend Developer.",
    "Full-Stack Learner.",
    "Modern Builder.",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < currentPhrase.length) {
            setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1400);
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText(currentPhrase.slice(0, displayedText.length - 1));
          } else {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 35 : 55,
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, phraseIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden px-6 pt-40 pb-40"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(34,211,238,0.12),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_30%)]" />

      <div className="absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 dark:bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-10 -z-10 h-80 w-80 rounded-full bg-violet-400/10 dark:bg-violet-500/10 blur-[140px]" />

      <div className="mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Typing Heading */}

          <h1 className="mx-auto max-w-5xl min-h-[170px] text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
              {displayedText}
            </span>

            <span className="ml-2 inline-block h-12 w-[3px] animate-pulse rounded-full bg-cyan-400 align-middle" />
          </h1>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <ButtonLink href="#projects" variant="primary">
              View Projects
              <ArrowRight size={17} />
            </ButtonLink>

            <ButtonLink href="#contact" variant="secondary">
              Contact Me
            </ButtonLink>

            {/* <ButtonLink href="/Hafsa_Resume.txt" variant="ghost" download>
              <Download size={17} />
              Download Resume
            </ButtonLink> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;