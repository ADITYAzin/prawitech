"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { projects, PROJECT_CATEGORIES } from "@/lib/projects";

const GRID_SIZE_CLASSES = {
  default: "",
  tall: "lg:row-span-2",
  wide: "lg:col-span-2",
};

function ProjectCard({ project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        "group relative block overflow-hidden rounded-2xl",
        project.gridSize === "tall" ? "min-h-[320px] lg:min-h-0" : "aspect-[4/3]",
        GRID_SIZE_CLASSES[project.gridSize]
      )}
    >
      {/* FIX: LOGIKA MENAMPILKAN THUMBNAIL ATAU GRADASI */}
      {project.thumbnail ? (
        <Image
          src={project.thumbnail}
          alt={project.client}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br transition-transform duration-700 group-hover:scale-105",
            project.gradient
          )}
        />
      )}

      {/* OVERLAY: Efek gelap pas di-hover biar teks putihnya nyala */}
      <div className="absolute inset-0 bg-[#1A1A1A]/10 transition-colors duration-300 group-hover:bg-[#1A1A1A]/60" />
      
      {/* TEKS & KONTEN HOVER */}
      <div className="absolute inset-0 flex items-center justify-center p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl drop-shadow-lg">
            {project.client}
          </h3>
          <p className="mt-2 text-base font-medium text-white/90 drop-shadow-md">
            {project.categoryLabel}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function WorkShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isFading, setIsFading] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(projects);

  const handleCategoryChange = useCallback((categoryId) => {
    if (categoryId === activeCategory) return;

    setIsFading(true);
    setTimeout(() => {
      const filtered =
        categoryId === "all"
          ? projects
          : projects.filter((p) => p.category === categoryId);
      setVisibleProjects(filtered);
      setActiveCategory(categoryId);
      setIsFading(false);
    }, 200);
  }, [activeCategory]);

  return (
    <section className="pb-16 lg:pb-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <nav
          className="sticky top-[72px] z-40 -mx-6 mb-12 border-b border-[#1A1A1A]/8 bg-[#F4F7FB]/80 px-6 py-4 backdrop-blur-md sm:-mx-10 sm:px-10 lg:-mx-20 lg:px-20"
          aria-label="Filter projects by service"
        >
          <ul className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8">
            {PROJECT_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <li key={cat.id}>
                  <button
                    type="button"
                    onClick={() => handleCategoryChange(cat.id)}
                    className={cn(
                      "relative pb-2 text-sm font-medium transition-colors duration-200 sm:text-[15px]",
                      isActive
                        ? "font-bold text-[#1A1A1A]"
                        : "text-[#1A1A1A]/45 hover:text-[#1A1A1A]/70"
                    )}
                  >
                    {cat.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#0768FB]" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className={cn(
            "grid grid-cols-1 gap-6 transition-opacity duration-300 ease-out lg:grid-cols-2 lg:gap-8 lg:auto-rows-[minmax(280px,auto)]",
            isFading ? "opacity-0" : "opacity-100"
          )}
        >
          {visibleProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <p className="py-16 text-center text-[#1A1A1A]/50">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}