export default function WorkHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-hero-glow absolute top-1/3 right-0 h-[500px] w-[500px] translate-x-1/4 rounded-full bg-[#0768FB]/[0.05] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20 pt-16 pb-12 lg:pt-24 lg:pb-16">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
            A Record of Transformation and Tangible Results.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[#1A1A1A]/70 sm:text-lg">
            Explore how we merge creative strategy and technical engineering to
            help businesses of all sizes achieve their core performance metrics.
          </p>
        </div>
      </div>
    </section>
  );
}
