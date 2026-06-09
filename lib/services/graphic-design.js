import { getContactHref } from "./contact";

const SERVICE_SLUG = "graphic-design";

export const graphicDesignContent = {
  slug: SERVICE_SLUG,
  metadata: {
    title: "Graphic Design — Prawitech",
    description:
      "Crafting Visual Identities That Connect and Stand Out. Beyond aesthetics, our designs are strategically built to communicate your core business values effectively.",
  },
  hero: {
    headline: "Crafting Visual Identities That Connect and Stand Out.",
    subheadline:
      "Beyond aesthetics, our designs are strategically built to communicate your core business values effectively, driving true engagement with the right audience.",
    ctaLabel: "Request a Design Consultation",
    ctaHref: getContactHref(SERVICE_SLUG),
  },
  why: {
    label: "WHY YOUR BUSINESS NEEDS THIS",
    headline:
      "We design visual experiences that turn passive interest into active engagement and tangible results.",
    solutions: [
      {
        title: "Revitalizing Stagnant Brands",
        description:
          "When growth slows down, an effective visual refresh sparks new market interest and re-engages your audience efficiently.",
      },
      {
        title: "Empowering Launches & Campaigns",
        description:
          "Well-structured visuals are crucial to ensure your product launches or promotions are delivered clearly, professionally, and effectively.",
      },
      {
        title: "Maintaining Brand Consistency",
        description:
          "A cohesive design system ensures your business communicates with a unified character across all platforms, creating highly efficient and trusted interactions.",
      },
    ],
  },
  process: {
    title: "Our Working Process",
    subtitle:
      "A structured, five-phase approach designed for professional clarity, ensuring a secure and logical investment in your brand's future.",
    phases: [
      {
        phase: "Phase 1",
        title: "Audit & Discovery",
        description:
          "We analyze your business vision, audience behavior, and industry positioning to ensure a highly effective starting point.",
      },
      {
        phase: "Phase 2",
        title: "Concept Development",
        description:
          "We build the initial visual direction and moodboards to align our creative strategy efficiently before full execution.",
      },
      {
        phase: "Phase 3",
        title: "Visual Execution",
        description:
          "We meticulously craft the core elements—such as your Logo, Color Palette, and Typography—designed to maximize user engagement.",
      },
      {
        phase: "Phase 4",
        title: "Design Implementation",
        description:
          "We apply your new visual identity across operational materials, B2B presentations, and digital marketing channels for maximum effectiveness.",
      },
      {
        phase: "Phase 5",
        title: "Guideline Handover",
        description:
          "We deliver all ready-to-use assets along with a comprehensive brand guideline, ensuring your team can manage the brand efficiently in the future.",
      },
    ],
  },
  bottomCta: {
    headline: "Start Your Visual Transformation.",
    subheadline:
      "Schedule a free discovery session with our creative team today.",
    ctaLabel: "Let's Talk Design",
    ctaHref: getContactHref(SERVICE_SLUG),
  },
};
