export default function ProjectNarrative({ project }) {
  const { detail } = project;

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-3xl">
          <div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Unraveling Complexity.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#1A1A1A]/70 sm:text-lg">
              {detail.challenge}
            </p>
          </div>

          <div className="mt-16 lg:mt-24">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Our Strategic Approach.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#1A1A1A]/70 sm:text-lg">
              {detail.solution}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
