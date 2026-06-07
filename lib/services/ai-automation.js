import { getContactHref } from "./contact";

const SERVICE_SLUG = "ai-automation";

export const aiAutomationContent = {
  slug: SERVICE_SLUG,
  metadata: {
    title: "AI Automation — Prawitech",
    description:
      "Optimize workflows through intelligent automation. Integrate AI into repetitive tasks to boost efficiency and scale your business effortlessly.",
  },
  hero: {
    headline: "Optimizing Workflows Through Intelligent Automation.",
    subheadline:
      "Boost operational efficiency by integrating artificial intelligence into repetitive administrative tasks, allowing your business to scale effortlessly.",
    ctaLabel: "Audit Our Workflow Efficiency",
    ctaHref: getContactHref(SERVICE_SLUG),
  },
  why: {
    label: "WHY YOUR BUSINESS NEEDS THIS",
    headline:
      "We integrate smart automation to free your team from manual routines, shifting your focus toward high-value business growth.",
    solutions: [
      {
        title: "Eliminating Clerical Bottlenecks",
        description:
          "Automation takes over repetitive data entry and administrative tasks, minimizing human error while saving operational hours in a highly efficient manner.",
      },
      {
        title: "Accelerating Client Response Times",
        description:
          "Integrating intelligent systems ensures that initial inquiries and customer communications are handled instantly 24/7, significantly boosting client engagement.",
      },
      {
        title: "Optimizing Cost and Resources",
        description:
          "By shifting structured, repetitive tasks to smart systems, your internal team can be effectively redirected to focus on strategic analysis and business innovation.",
      },
    ],
  },
  process: {
    title: "Our Working Process",
    subtitle:
      "A structured, five-phase approach to identify bottlenecks, deploy intelligent systems, and sustain measurable efficiency gains.",
    phases: [
      {
        phase: "Phase 1",
        title: "Workflow Mapping",
        description:
          "We analyze your daily operations to identify time-consuming bottlenecks that are ideal for automation, ensuring a highly efficient start.",
      },
      {
        phase: "Phase 2",
        title: "Automation Strategy",
        description:
          "We design tailored system workflows and select the right artificial intelligence tools to meet your business objectives effectively.",
      },
      {
        phase: "Phase 3",
        title: "System Integration",
        description:
          "We build robust connections (APIs) to ensure your new automated workflows sync smoothly and efficiently with your existing software ecosystem.",
      },
      {
        phase: "Phase 4",
        title: "Calibration & Fine-Tuning",
        description:
          "We adjust system parameters and response logic to ensure high accuracy while strictly aligning with your corporate data security guidelines.",
      },
      {
        phase: "Phase 5",
        title: "Performance Monitoring",
        description:
          "We continuously evaluate the automated systems to guarantee that your target efficiency and productivity metrics are consistently met.",
      },
    ],
  },
  bottomCta: {
    headline: "Efficiency is the Key to Growth.",
    subheadline:
      "Contact us to analyze how much time and cost your organization can save through smart automation.",
    ctaLabel: "Analyze My Workflow",
    ctaHref: getContactHref(SERVICE_SLUG),
  },
};
