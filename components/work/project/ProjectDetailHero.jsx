import Image from "next/image";

export default function ProjectDetailHero({ project }) {
  return (
    <section className="relative h-[50vh] min-h-[400px] max-h-[640px] w-full overflow-hidden animate-project-hero-zoom">
      
      {/* BACKGROUND: FOTO ATAU GRADASI */}
      {project.heroImage ? (
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
      ) : (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.heroGradient ?? project.gradient}`}
        />
      )}

      {/* OVERLAY: Biar teks putihnya tetep kebaca jelas walaupun background fotonya terang */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/30 to-transparent" />

      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-[1440px] px-6 pb-12 sm:px-10 lg:px-20 lg:pb-16 relative z-10">
          <p className="text-sm font-medium uppercase tracking-widest text-white/80">
            {project.categoryLabel}
          </p>
          <h1 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl drop-shadow-md">
            {project.title}
          </h1>
        </div>
      </div>
    </section>
  );
}