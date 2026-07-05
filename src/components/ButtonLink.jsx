function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  download = false,
  onClick,
}) {
  const shared =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-violet-400/60";

  const variants = {
    primary: `
    border border-violet-500/20
    bg-gradient-to-r
    from-violet-600
    via-indigo-600
    to-cyan-500
    text-white

    shadow-[0_16px_40px_rgba(99,102,241,.28)]

    hover:-translate-y-1
    hover:shadow-[0_24px_60px_rgba(99,102,241,.38)]

    active:scale-[.98]
  `,

    secondary: `
    border border-violet-200/70
    bg-white/80
    backdrop-blur-xl

    text-slate-800

    hover:-translate-y-1
    hover:border-violet-400
    hover:bg-violet-50

    dark:border-white/10
    dark:bg-white/5
    dark:text-white
    dark:hover:border-cyan-400/40
    dark:hover:bg-white/10

    active:scale-[.98]
  `,

    ghost: `
    border border-slate-300
    bg-transparent

    text-slate-700

    hover:-translate-y-1
    hover:border-violet-300
    hover:bg-violet-50

    dark:border-slate-700
    dark:text-slate-300
    dark:hover:border-violet-400/40
    dark:hover:bg-slate-800/40
    dark:hover:text-white

    active:scale-[.98]
  `,
  };

  return (
    <a
      href={href}
      download={download}
      onClick={onClick}
      className={`${shared} ${variants[variant]} ${className}`}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
    >
      {/* Shine Effect */}
      {variant === "primary" && (
        <span
          className="
            absolute inset-0
            -translate-x-[130%]
            bg-gradient-to-r
            from-transparent
            via-white/25
            to-transparent
            transition-transform
            duration-700
            group-hover:translate-x-[130%]
          "
        />
      )}

      {/* Glow */}
      {variant === "primary" && (
        <span
          className="
            absolute inset-0
            rounded-2xl
            opacity-0
            blur-xl
            transition-opacity
            duration-500
            group-hover:opacity-100
            bg-gradient-to-r
            from-violet-500/30
            via-indigo-500/20
            to-cyan-500/30
          "
        />
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </a>
  );
}

export default ButtonLink;