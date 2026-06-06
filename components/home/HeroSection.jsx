import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20 pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
            Accelerating business through creative technology
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[#1A1A1A]/70 sm:text-lg">
            We engineer efficient digital experiences and scalable technology ecosystems designed to drive sustainable growth for businesses of all sizes.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[12px] bg-[#0768FB] px-8 py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(7,104,251,0.35)] transition-all duration-200 hover:opacity-90 hover:shadow-[0_6px_20px_rgba(7,104,251,0.45)]"
              >
                Start a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative aspect-square w-full max-w-md lg:max-w-lg">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0768FB]/10 via-[#0768FB]/5 to-transparent" />
              <div className="absolute top-[8%] right-[10%] h-32 w-32 rounded-full bg-[#0768FB]/20 blur-2xl" />
              <div className="absolute bottom-[12%] left-[5%] h-40 w-40 rounded-full bg-[#0768FB]/15 blur-3xl" />
              <svg
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative h-full w-full"
                aria-hidden="true"
              >
                <rect
                  x="60"
                  y="80"
                  width="140"
                  height="180"
                  rx="16"
                  className="fill-[#0768FB]/15 stroke-[#0768FB]/30"
                  strokeWidth="1.5"
                />
                <rect
                  x="200"
                  y="120"
                  width="140"
                  height="140"
                  rx="16"
                  className="fill-white/80 stroke-[#1A1A1A]/10"
                  strokeWidth="1.5"
                />
                <circle cx="130" cy="170" r="24" className="fill-[#0768FB]/40" />
                <path
                  d="M230 180 L270 210 L230 240 Z"
                  className="fill-[#0768FB]/60"
                />
                <rect
                  x="100"
                  y="280"
                  width="200"
                  height="8"
                  rx="4"
                  className="fill-[#1A1A1A]/10"
                />
                <rect
                  x="100"
                  y="300"
                  width="140"
                  height="8"
                  rx="4"
                  className="fill-[#1A1A1A]/6"
                />
                <path
                  d="M280 60 Q340 100 320 160 Q300 220 240 200"
                  className="stroke-[#0768FB]"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
