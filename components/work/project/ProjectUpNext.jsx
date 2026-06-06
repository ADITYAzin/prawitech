import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjectUpNext({ nextProject }) {
  return (
    <section className="border-t border-[#1A1A1A]/8">
      <div className="grid lg:grid-cols-2">
        <div className="relative overflow-hidden border-b border-[#1A1A1A]/8 px-6 py-16 sm:px-10 lg:border-b-0 lg:border-r lg:px-20 lg:py-24">
          <Link
            href={`/work/${nextProject.slug}`}
            className="group relative inline-flex flex-col"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1A1A1A]/45">
              Next Project
            </span>
            <span className="mt-3 font-heading text-2xl font-bold text-[#1A1A1A] transition-colors duration-200 group-hover:text-[#0768FB] sm:text-3xl">
              {nextProject.client}
              <ArrowRight className="ml-2 inline-block h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
            <span className="mt-1 text-sm text-[#1A1A1A]/50">
              {nextProject.categoryLabel}
            </span>

            <div
              className="pointer-events-none absolute top-1/2 -right-4 hidden h-28 w-44 -translate-y-1/2 translate-x-full overflow-hidden rounded-xl opacity-0 shadow-xl transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 lg:block"
              aria-hidden="true"
            >
              <div
                className={`h-full w-full bg-gradient-to-br ${nextProject.gradient}`}
              />
            </div>
          </Link>
        </div>

        <div className="flex flex-col justify-center bg-[#0768FB] px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Let&apos;s Replicate This Success for Your Business.
          </h2>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[12px] bg-white px-8 py-3.5 text-[15px] font-bold text-[#0768FB] transition-all duration-200 hover:bg-white/90"
            >
              Discuss Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
