export default function ServiceWhySection({ label, headline, solutions }) {
  return (
    <section className="py-[clamp(64px,8vw,128px)]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-medium uppercase tracking-wider text-[#0768FB]">
              {label}
            </p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-[2.75rem]">
              {headline}
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {solutions.map((item) => (
              <div
                key={item.title}
                className="rounded-[12px] border border-[#1A1A1A]/8 bg-white p-6 transition-all duration-200 hover:border-[#0768FB]/25 hover:shadow-[0_8px_30px_rgba(7,104,251,0.08)] sm:p-8"
              >
                <h3 className="font-heading text-lg font-bold text-[#1A1A1A] sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#1A1A1A]/70 sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
