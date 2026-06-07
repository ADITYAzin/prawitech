"use client";

import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ServiceProcessCarousel({ title, subtitle, phases }) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index) => {
    const track = trackRef.current;
    if (!track) return;

    const clamped = Math.max(0, Math.min(index, phases.length - 1));
    const card = track.children[clamped];
    if (!card) return;

    card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    setActiveIndex(clamped);
  }, [phases.length]);

  function handleScroll() {
    const track = trackRef.current;
    if (!track || !track.children.length) return;

    const trackLeft = track.getBoundingClientRect().left;
    let closest = 0;
    let closestDistance = Infinity;

    Array.from(track.children).forEach((child, index) => {
      const distance = Math.abs(child.getBoundingClientRect().left - trackLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = index;
      }
    });

    setActiveIndex(closest);
  }

  return (
    <section className="py-[clamp(64px,8vw,128px)]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-5 text-base leading-relaxed text-[#1A1A1A]/70 sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>

        <div className="relative mt-12 lg:mt-16">
          <div className="mb-6 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => scrollToIndex(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Previous phase"
              className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] border border-[#1A1A1A]/10 bg-white text-[#1A1A1A] transition-all duration-200 hover:border-[#0768FB]/30 hover:text-[#0768FB] disabled:pointer-events-none disabled:opacity-35"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex(activeIndex + 1)}
              disabled={activeIndex === phases.length - 1}
              aria-label="Next phase"
              className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] border border-[#1A1A1A]/10 bg-white text-[#1A1A1A] transition-all duration-200 hover:border-[#0768FB]/30 hover:text-[#0768FB] disabled:pointer-events-none disabled:opacity-35"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {phases.map((phase, index) => (
              <article
                key={phase.title}
                className="w-[min(100%,340px)] shrink-0 snap-start rounded-[12px] border border-[#1A1A1A]/8 bg-white p-6 sm:w-[380px] sm:p-8"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-[#0768FB]">
                  {phase.phase}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold text-[#1A1A1A] sm:text-2xl">
                  {phase.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#1A1A1A]/70 sm:text-base">
                  {phase.description}
                </p>
                <div className="mt-8 flex items-center gap-2">
                  <span className="font-heading text-3xl font-extrabold text-[#0768FB]/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {phases.map((phase, index) => (
              <button
                key={phase.title}
                type="button"
                onClick={() => scrollToIndex(index)}
                aria-label={`Go to ${phase.title}`}
                aria-current={activeIndex === index ? "step" : undefined}
                className={`h-2 rounded-full transition-all duration-200 ${
                  activeIndex === index
                    ? "w-8 bg-[#0768FB]"
                    : "w-2 bg-[#1A1A1A]/15 hover:bg-[#1A1A1A]/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
