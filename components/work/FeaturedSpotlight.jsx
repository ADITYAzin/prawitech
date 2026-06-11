import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getFeaturedProject } from "@/lib/projects";

export default function FeaturedSpotlight() {
  const project = getFeaturedProject();

  return (
    <section className="bg-[#E8ECF2]/60 py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Project Spotlight: {project.client}.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#1A1A1A]/70 sm:text-lg">
              {project.spotlightDescription}
            </p>
            <div className="mt-10">
              <Link
                href={`/work/${project.slug}`}
                className="inline-flex items-center gap-2 rounded-[12px] bg-[#0768FB] px-8 py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(7,104,251,0.35)] transition-all duration-200 hover:opacity-90 hover:shadow-[0_6px_20px_rgba(7,104,251,0.45)]"
              >
                Read Case Study
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <Link
            href={`/work/${project.slug}`}
            className="group relative aspect-[16/10] overflow-hidden rounded-3xl"
          >
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br transition-transform duration-500 group-hover:scale-[1.02]",
                project.gradient
              )}
            />
            <div className="absolute inset-0 bg-[#1A1A1A]/0 transition-colors duration-300 group-hover:bg-[#1A1A1A]/30" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-white/70">
                {project.categoryLabel}
              </p>
              <p className="mt-1 font-heading text-2xl font-bold text-white sm:text-3xl">
                {project.title}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
