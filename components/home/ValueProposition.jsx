import { Target, Sparkles, ArrowUpRight } from "lucide-react";

const propositions = [
  {
    icon: Target,
    title: "Focus on Business Goals",
    description: "Every solution is designed to address real challenges and drive measurable growth for your business.",
  },
  {
    icon: Sparkles,
    title: "Modern Design & Functionality",
    description: "Work that is not only visually stunning, but also delivers an optimal user experience.",
  },
  {
    icon: ArrowUpRight,
    title: "The Right Technology",
    description: "Using the latest tech stack that fits your needs, not just following trends.",
  },
];

export default function ValueProposition() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            Why Choose Us?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#1A1A1A]/70 sm:text-lg">
            We combine creativity and technology to deliver maximum impact for your brand.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {propositions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-[#1A1A1A]/8 bg-[#F4F7FB] p-8 transition-all duration-300 hover:border-[#0768FB]/30 hover:shadow-[0_8px_30px_rgba(7,104,251,0.08)]"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0768FB]/10 transition-colors duration-300 group-hover:bg-[#0768FB]/15">
                  <Icon className="h-5 w-5 text-[#0768FB]" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#1A1A1A]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/70">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
