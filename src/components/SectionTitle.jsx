// //

// import { motion } from "framer-motion";
// import { Sparkles } from "lucide-react";

// function SectionTitle({ eyebrow, title, description }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//       className="relative mx-auto mb-24 max-w-5xl"
//     >
//       {/* Glow */}
//       <div className="absolute inset-0 rounded-[36px] bg-gradient-to-r from-violet-600/20 via-blue-500/15 to-cyan-400/20 blur-3xl" />

//       {/* Animated Border */}
//       <div className="group relative overflow-hidden rounded-[34px] p-[1.5px]">
//         <div className="absolute inset-0 bg-[linear-gradient(120deg,#8B5CF6,#6366F1,#06B6D4,#8B5CF6)] bg-[length:300%_300%] animate-[gradient_8s_linear_infinite]" />

//         {/* Card */}
//         <div className="relative rounded-[33px] border border-white/10 bg-[#111827]/90 px-8 py-14 text-center backdrop-blur-2xl transition-all duration-500 group-hover:scale-[1.015]">
//           {/* Floating Glow */}
//           <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl opacity-60 transition-all duration-700 group-hover:opacity-100" />
//           <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl opacity-60 transition-all duration-700 group-hover:opacity-100" />

//           {/* Badge */}
//           <motion.div
//             whileHover={{ scale: 1.08 }}
//             className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-violet-300"
//           >
//             <Sparkles size={14} />
//             {eyebrow}
//           </motion.div>

//           {/* Heading */}
//           <h2 className="mt-8 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
//             {title}
//           </h2>

//           {/* Divider */}
//           <div className="mt-7 flex items-center justify-center gap-4">
//             <div className="h-[2px] w-16 rounded-full bg-gradient-to-r from-transparent to-violet-500" />
//             <div className="h-3 w-3 rotate-45 rounded-sm bg-gradient-to-r from-violet-500 to-cyan-400 shadow-[0_0_18px_rgba(139,92,246,.8)]" />
//             <div className="h-[2px] w-16 rounded-full bg-gradient-to-l from-transparent to-cyan-400" />
//           </div>

//           {/* Description */}
//           <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300">
//             {description}
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default SectionTitle;

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

function SectionTitle({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative mx-auto mb-24 max-w-5xl"
    >
      {/* Glow */}

      <div className="absolute inset-0 rounded-[36px] bg-gradient-to-r from-primary/20 via-secondary/15 to-cyan-400/20 blur-3xl" />

      {/* Animated Border */}

      <div className="group relative overflow-hidden rounded-[34px] p-[1.5px]">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#8B5CF6,#6366F1,#06B6D4,#8B5CF6)] bg-[length:300%_300%] animate-[gradient_8s_linear_infinite]" />

        {/* Card */}

        <div className="relative rounded-[33px] border border-violet-200/60 dark:border-white/10 bg-white/80 dark:bg-[#111827]/90 px-8 py-14 text-center backdrop-blur-2xl transition-all duration-500 group-hover:scale-[1.015]">
          {/* Floating Glow */}

          <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-60 transition-all duration-700 group-hover:opacity-100" />

          <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-secondary/20 blur-3xl opacity-60 transition-all duration-700 group-hover:opacity-100" />

          {/* Badge */}

          <motion.div
            whileHover={{ scale: 1.08 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary"
          >
            <Sparkles size={14} />
            {eyebrow}
          </motion.div>

          {/* Heading */}

          <h2 className="mt-8 text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            {title}
          </h2>

          {/* Divider */}

          <div className="mt-7 flex items-center justify-center gap-4">
            <div className="h-[2px] w-16 rounded-full bg-gradient-to-r from-transparent to-primary" />

            <div className="h-3 w-3 rotate-45 rounded-sm bg-gradient-to-r from-primary to-secondary shadow-[0_0_18px_rgba(139,92,246,.55)]" />

            <div className="h-[2px] w-16 rounded-full bg-gradient-to-l from-transparent to-secondary" />
          </div>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-800 dark:text-slate-300">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default SectionTitle;