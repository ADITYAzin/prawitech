import { getContactHref } from "./contact";

const SERVICE_SLUG = "web-development";

export const webDevelopmentContent = {
  slug: SERVICE_SLUG,
  metadata: {
    title: "Web Development — Prawitech",
    description:
      "Develop fast, secure, and highly functional digital platforms. Custom-built website infrastructures with seamless UX for maximum user engagement.",
  },
  hero: {
    headline: "Developing Fast, Secure, and Highly Functional Digital Platforms.",
    subheadline:
      "Custom-built website infrastructures designed to support your daily operations with a seamless user experience (UX) for maximum user engagement.",
    ctaLabel: "Plan Your Web Architecture",
    ctaHref: getContactHref(SERVICE_SLUG),
  },
  why: {
    label: "WHY YOUR BUSINESS NEEDS THIS",
    headline:
      "We build reliable website infrastructures that turn every visit into a meaningful and effective business interaction.",
    solutions: [
      {
        title: "Accelerating Client Access",
        description:
          "An optimized website minimizes the risk of losing potential customers due to slow load times, ensuring an efficient and seamless browsing experience.",
      },
      {
        title: "Streamlining User Navigation",
        description:
          "A clean architectural layout helps both corporate partners and retail customers find your services or contact information in seconds, boosting overall engagement.",
      },
      {
        title: "Future-Proof Scalability",
        description:
          "Clean code structures ensure your digital platform is highly effective, easy to scale, adaptable to new features, and secure against cyber threats as your organization grows.",
      },
    ],
  },
  process: {
    title: "Our Working Process",
    subtitle:
      "A structured, six-phase approach from requirements analysis through deployment and ongoing maintenance.",
    phases: [
      {
        phase: "Phase 1",
        title: "System Requirements Analysis",
        description:
          "We map out your information flow and determine the most efficient technology stack tailored specifically to your operational needs.",
      },
      {
        phase: "Phase 2",
        title: "Interactive Prototyping",
        description:
          "We design the visual layout and user flow (UI/UX) for your review before coding begins, ensuring early alignment and highly efficient execution.",
      },
      {
        phase: "Phase 3",
        title: "Robust Development",
        description:
          "We write clean, scalable code to build responsive front-end interfaces and highly effective back-end databases.",
      },
      {
        phase: "Phase 4",
        title: "Quality Assurance (QA)",
        description:
          "We conduct rigorous testing on functionality, security, load speed, and cross-device compatibility to guarantee a flawless user experience.",
      },
      {
        phase: "Phase 5",
        title: "Secure Deployment",
        description:
          "We safely migrate your website to the main domain and production server without disrupting your daily business operations.",
      },
      {
        phase: "Phase 6",
        title: "System Maintenance",
        description:
          "We provide post-launch technical support to ensure your platform remains effective, secure, and continuously engages your users at peak performance.",
      },
    ],
  },
  bottomCta: {
    headline: "Build a Solid Digital Ecosystem.",
    subheadline:
      "Discuss your technical specifications and digital infrastructure needs with our tech experts today.",
    ctaLabel: "Consult Web Development",
    ctaHref: getContactHref(SERVICE_SLUG),
  },
};
