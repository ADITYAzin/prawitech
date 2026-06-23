import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getFeaturedProject } from "@/lib/projects";

export default function FeaturedSpotlight() {
  const project = getFeaturedProject();

  // Kalau nggak ada project yang di-set "featured: true", jangan ngerender apa-apa
  if (!project) return null;

  return (
    <section className="bg-[#E8ECF2]/60 py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* BAGIAN KIRI: TEKS DESKRIPSI */}
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

          {/* BAGIAN KANAN: GAMBAR / THUMBNAIL */}
          <Link
            href={`/work/${project.slug}`}
            className="group relative aspect-[16/10] overflow-hidden rounded-3xl shadow-lg"
          >
            {/* FIX: LOGIKA MENAMPILKAN THUMBNAIL ATAU GRADASI */}
            {project.thumbnail ? (
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br transition-transform duration-700 group-hover:scale-[1.02]",
                  project.gradient
                )}
              />
            )}

            {/* OVERLAY: Efek gelap di bawah biar teks kategori & judul tetep kebaca jelas di atas foto */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-sm font-medium uppercase tracking-widest text-white/80 drop-shadow-md">
                {project.categoryLabel}
              </p>
              <p className="mt-1 font-heading text-2xl font-bold text-white sm:text-3xl drop-shadow-lg">
                {project.title}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}