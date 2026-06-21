import Image from "next/image";
import InteractiveVisual from "./InteractiveVisual";

function VisualPlaceholder({ gradient, image, caption, className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className} group`}>
      {image ? (
        <Image
          src={image}
          alt={caption || "Project visual"}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      )}
      
      {/* Menambahkan efek gelap di bawah supaya caption tetap terbaca */}
      {caption && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-transparent to-transparent opacity-70" />
          <p className="absolute bottom-6 left-6 right-6 text-sm font-medium text-white z-10">
            {caption}
          </p>
        </>
      )}
    </div>
  );
}

export default function ProjectVisualShowcase({ project }) {
  const { visuals } = project.detail;

  return (
    <section className="space-y-8 pb-16 lg:space-y-12 lg:pb-24">
      {visuals.map((visual, index) => {
        if (visual.type === "full") {
          return (
            <div
              key={index}
              className="relative aspect-[21/9] min-h-[280px] w-full overflow-hidden"
            >
              {visual.image ? (
                <Image
                  src={visual.image}
                  alt={visual.caption || "Full width project visual"}
                  fill
                  className="object-cover"
                />
              ) : (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${visual.gradient}`}
                />
              )}
              
              {visual.caption && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent opacity-70" />
                  <p className="absolute bottom-8 left-8 text-sm font-medium text-white lg:left-20 z-10">
                    {visual.caption}
                  </p>
                </>
              )}
            </div>
          );
        }

        if (visual.type === "dual") {
          return (
            <div
              key={index}
              className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-6 sm:px-10 lg:grid-cols-2 lg:gap-12 lg:px-20"
            >
              {visual.gradients.map((gradient, i) => (
                <VisualPlaceholder
                  key={i}
                  gradient={gradient}
                  image={visual.images?.[i]} // Tarik gambar dari array images
                  caption={visual.captions?.[i]}
                  className="aspect-[4/3]"
                />
              ))}
            </div>
          );
        }

        if (visual.type === "interactive") {
          return (
            <div
              key={index}
              className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20"
            >
              <InteractiveVisual
                gradient={visual.gradient}
                image={visual.image} // Lempar prop image ke InteractiveVisual
                caption={visual.caption}
              />
            </div>
          );
        }

        return null;
      })}
    </section>
  );
}