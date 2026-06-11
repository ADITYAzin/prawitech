export default function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-hero-glow absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0768FB]/[0.06] blur-3xl" />
        <div className="animate-hero-glow-delayed absolute top-[20%] right-[10%] h-48 w-48 rounded-full bg-[#0768FB]/[0.04] blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20 pt-20 pb-24 text-center lg:pt-28 lg:pb-32">
        <div className="mx-auto mb-12 flex justify-center gap-4 opacity-60">
          <svg viewBox="0 0 48 80" className="h-16 w-10 text-[#1A1A1A]/15" aria-hidden="true">
            <ellipse cx="24" cy="14" rx="12" ry="12" fill="currentColor" />
            <path d="M8 80 C8 50 40 50 40 80 Z" fill="currentColor" />
          </svg>
          <svg viewBox="0 0 48 80" className="h-20 w-10 text-[#1A1A1A]/20" aria-hidden="true">
            <ellipse cx="24" cy="14" rx="12" ry="12" fill="currentColor" />
            <path d="M8 80 C8 50 40 50 40 80 Z" fill="currentColor" />
          </svg>
          <svg viewBox="0 0 48 80" className="h-16 w-10 text-[#1A1A1A]/15" aria-hidden="true">
            <ellipse cx="24" cy="14" rx="12" ry="12" fill="currentColor" />
            <path d="M8 80 C8 50 40 50 40 80 Z" fill="currentColor" />
          </svg>
        </div>

        <h1 className="mx-auto max-w-4xl font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
          Uniting Imagination and Logic
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#1A1A1A]/70 sm:text-lg lg:text-xl">
          We are creative thinkers and problem solvers. Prawitech
          bridges the gap between visual aesthetics and technological performance
          for future-ready businesses.
        </p>
      </div>
    </section>
  );
}
