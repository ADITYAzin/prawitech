export default function ProjectDetailHero({ project }) {
  return (
    <section className="relative h-[50vh] min-h-[400px] max-h-[640px] w-full overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.heroGradient ?? project.gradient} animate-project-hero-zoom`}
      />
      <div className="absolute inset-0 bg-[#1A1A1A]/10" />
      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-[1440px] px-6 pb-12 sm:px-10 lg:px-20 lg:pb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-white/70">
            {project.categoryLabel}
          </p>
          <h1 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
        </div>
      </div>
    </section>
  );
}
