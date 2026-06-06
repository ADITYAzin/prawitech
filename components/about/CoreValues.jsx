import { Users, Minimize2, Zap } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Human-Centric",
    description:
      "Technology is engineered for people, never the other way around.",
  },
  {
    icon: Minimize2,
    title: "Impactful Simplicity",
    description:
      "Streamlining complexity into intuitive, high-utility solutions.",
  },
  {
    icon: Zap,
    title: "Agile & Adaptive",
    description:
      "Moving rapidly and staying aligned with shifting industry trends.",
  },
];

export default function CoreValues() {
  return (
    <section className="border-y border-[#1A1A1A]/5 py-20 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            The Principles That Drive Us
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#1A1A1A]/70 sm:text-lg">
            The uncompromised standards we embed into every line of code and every
            pixel of design.
          </p>
        </div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="text-center lg:text-left">
                <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#0768FB]/20 lg:mx-0">
                  <Icon
                    className="h-6 w-6 text-[#0768FB]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#1A1A1A]">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#1A1A1A]/65 sm:text-base">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
