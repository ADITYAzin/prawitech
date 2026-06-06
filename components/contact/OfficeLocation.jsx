import { MapPin } from "lucide-react";

export default function OfficeLocation() {
  return (
    <section className="border-t border-[#1A1A1A]/8 pb-20 pt-20 lg:pb-28 lg:pt-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Visit Our Headquarters.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#1A1A1A]/70 sm:text-lg">
              Our doors are always open for collaborative discussions and
              strategic insights.
            </p>
            <address className="mt-8 not-italic">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#0768FB]" />
                <div className="text-sm leading-relaxed text-[#1A1A1A]/80 sm:text-base">
                  <p className="font-semibold text-[#1A1A1A]">Prawitech HQ</p>
                  <p className="mt-1">Sidoarjo, Jawa Timur</p>
                  <p>Indonesia</p>
                </div>
              </div>
            </address>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#1A1A1A]/8 bg-[#1A1A1A]/[0.03]">
            <svg
              viewBox="0 0 600 450"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
              aria-hidden="true"
            >
              <rect width="600" height="450" fill="#F4F7FB" />
              <path
                d="M0 200 H600 M0 280 H600 M150 0 V450 M400 0 V450"
                stroke="#1A1A1A"
                strokeOpacity="0.06"
                strokeWidth="1"
              />
              <path
                d="M80 120 Q200 80 320 140 T520 100"
                stroke="#1A1A1A"
                strokeOpacity="0.08"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M60 350 Q250 300 400 340 T560 310"
                stroke="#1A1A1A"
                strokeOpacity="0.06"
                strokeWidth="1.5"
                fill="none"
              />
              <rect
                x="220"
                y="160"
                width="160"
                height="120"
                rx="4"
                fill="#1A1A1A"
                fillOpacity="0.04"
                stroke="#1A1A1A"
                strokeOpacity="0.1"
                strokeWidth="1"
              />
              <circle cx="300" cy="220" r="28" fill="#0768FB" fillOpacity="0.15" />
              <circle cx="300" cy="220" r="10" fill="#0768FB" fillOpacity="0.6" />
              <circle cx="300" cy="220" r="4" fill="#0768FB" />
            </svg>
            <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-3 py-2 text-xs font-medium text-[#1A1A1A]/60 backdrop-blur-sm">
              Sidoarjo, East Java
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
