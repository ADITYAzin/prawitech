import WorkHero from "@/components/work/WorkHero";
import WorkShowcase from "@/components/work/WorkShowcase";
import FeaturedSpotlight from "@/components/work/FeaturedSpotlight";
import WorkBottomCTA from "@/components/work/WorkBottomCTA";

export const metadata = {
  title: "Work — Prawitech",
  description:
    "Explore how Prawitech merges creative strategy and technical engineering to deliver measurable business results across graphic design, web development, and AI automation.",
};

export default function Work() {
  return (
    <div className="flex flex-col">
      <WorkHero />
      <WorkShowcase />
      <FeaturedSpotlight />
      <WorkBottomCTA />
    </div>
  );
}
