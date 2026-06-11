import ServiceHero from "@/components/services/shared/ServiceHero";
import ServiceWhySection from "@/components/services/shared/ServiceWhySection";
import ServiceProcessCarousel from "@/components/services/shared/ServiceProcessCarousel";
import ServiceBottomCTA from "@/components/services/shared/ServiceBottomCTA";
import { webDevelopmentContent } from "@/lib/services/web-development";

export const metadata = webDevelopmentContent.metadata;

export default function WebDevelopmentPage() {
  const { hero, why, process, bottomCta } = webDevelopmentContent;

  return (
    <div className="flex flex-col">
      <ServiceHero
        headline={hero.headline}
        subheadline={hero.subheadline}
        ctaLabel={hero.ctaLabel}
        ctaHref={hero.ctaHref}
      />
      <ServiceWhySection
        label={why.label}
        headline={why.headline}
        solutions={why.solutions}
      />
      <ServiceProcessCarousel
        title={process.title}
        subtitle={process.subtitle}
        phases={process.phases}
      />
      <ServiceBottomCTA
        headline={bottomCta.headline}
        subheadline={bottomCta.subheadline}
        ctaLabel={bottomCta.ctaLabel}
        ctaHref={bottomCta.ctaHref}
      />
    </div>
  );
}
