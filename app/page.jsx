import HeroSection from "@/components/home/HeroSection";
import TrustBanner from "@/components/home/TrustBanner";
import ValueProposition from "@/components/home/ValueProposition";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturedPortfolio from "@/components/home/FeaturedPortfolio";
import BottomCTA from "@/components/home/BottomCTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TrustBanner />
      <ValueProposition />
      <ServicesOverview />
      <FeaturedPortfolio />
      <BottomCTA />
    </div>
  );
}
