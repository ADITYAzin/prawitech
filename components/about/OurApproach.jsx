const steps = [
  {
    number: "01",
    title: "Discovery & Alignment",
    description:
      "We immerse ourselves in your business context—mapping goals, stakeholders, and constraints to establish a shared strategic foundation.",
  },
  {
    number: "02",
    title: "Design & Architecture",
    description:
      "Creative direction and technical architecture are developed in parallel, ensuring every design decision is backed by scalable engineering.",
  },
  {
    number: "03",
    title: "Build & Integrate",
    description:
      "Agile development cycles with transparent milestones. Your team stays informed at every sprint, with zero black-box delivery.",
  },
  {
    number: "04",
    title: "Launch & Evolve",
    description:
      "Deployment, performance validation, and post-launch optimization—because a flawless launch is only the beginning of sustained growth.",
  },
];

export default function OurApproach() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            How We Transform Vision into Reality
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#1A1A1A]/70 sm:text-lg">
            Our systematic approach ensures every phase remains transparent, on
            schedule, and aligned with your broader business objectives.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex gap-8 pb-12 last:pb-0">
              {index < steps.length - 1 && (
                <div
                  className="absolute top-14 left-[27px] h-[calc(100%-3.5rem)] w-px bg-[#1A1A1A]/10"
                  aria-hidden="true"
                />
              )}
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center">
                <span className="font-heading text-2xl font-extrabold text-[#0768FB]">
                  {step.number}
                </span>
              </div>
              <div className="pt-2">
                <h3 className="font-heading text-xl font-bold text-[#1A1A1A] sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#1A1A1A]/65 sm:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
