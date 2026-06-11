import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import CoreValues from "@/components/about/CoreValues";
import OurApproach from "@/components/about/OurApproach";
import TeamSection from "@/components/about/TeamSection";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
  title: "About — Prawitech",
  description:
    "Prawitech unites imagination and logic—bridging creative design and technical performance for future-ready businesses.",
};

export default function About() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <OurStory />
      <CoreValues />
      <OurApproach />
      <TeamSection />
      <AboutCTA />
    </div>
  );
}
