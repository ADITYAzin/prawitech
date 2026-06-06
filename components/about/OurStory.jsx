export default function OurStory() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
              Driven by a Shared Challenge
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#1A1A1A]/75 sm:text-xl">
              Too many organizations are forced to choose between stunning but
              slow design, or robust systems that confuse users. Prawitech was
              founded to prove that you can—and should—have both
            </p>
            <p className="mt-5 text-base leading-relaxed text-[#1A1A1A]/60 sm:text-lg">
              We partner with startups, enterprises, and institutions that refuse
              to compromise. Every engagement begins with understanding the real
              operational friction behind the brief—not just the deliverables on
              paper.
            </p>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-md">
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full border border-[#0768FB]/20" />
              <div className="absolute bottom-8 left-0 h-56 w-56 rounded-2xl border border-[#1A1A1A]/8 bg-white/50" />
              <div className="absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#0768FB]/30" />
              <svg
                viewBox="0 0 300 300"
                fill="none"
                className="relative h-full w-full"
                aria-hidden="true"
              >
                <line x1="0" y1="150" x2="300" y2="150" stroke="#1A1A1A" strokeOpacity="0.06" />
                <line x1="150" y1="0" x2="150" y2="300" stroke="#1A1A1A" strokeOpacity="0.06" />
                <circle cx="150" cy="150" r="80" stroke="#0768FB" strokeOpacity="0.25" strokeWidth="1.5" />
                <circle cx="150" cy="150" r="40" fill="#0768FB" fillOpacity="0.08" />
                <rect x="110" y="110" width="80" height="80" rx="4" stroke="#1A1A1A" strokeOpacity="0.1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
