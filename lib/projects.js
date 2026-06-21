export const PROJECT_CATEGORIES = [
  { id: "all", label: "All Work" },
  { id: "graphic-design", label: "Graphic Design" },
  { id: "web-development", label: "Web Development" },
  { id: "ai-automation", label: "AI Automation" },
];

export const projects = [
  {
    slug: "nexacorp-platform",
    client: "Oriena",
    title: "Oriena Sales Platform",
    heroImage: "/img/projects/oriena-1.png",
    category: "web-development",
    categoryLabel: "Web Development",
    metric: "45% increase in conversion",
    gradient: "from-[#0768FB]/80 to-[#1A1A1A]/90",
    heroGradient: "from-[#0768FB]/90 via-[#1A1A1A]/80 to-[#1A1A1A]",
    gridSize: "tall",
    featured: true,
    spotlightDescription:
      "NexaCorp needed a unified digital platform to replace fragmented legacy systems and accelerate B2B sales cycles. We engineered a performant, conversion-focused web application that streamlined lead capture, automated quoting, and gave stakeholders real-time visibility into pipeline performance — driving a 45% lift in qualified conversions within the first quarter post-launch.",
    detail: {
      services: "Web Development",
      industry: "Enterprise SaaS",
      year: "2026",
      summary: [
        "NexaCorp is a B2B technology distributor serving mid-market enterprises across Southeast Asia. Their growth outpaced their digital infrastructure — sales teams relied on spreadsheets, disconnected CRM exports, and manual quoting workflows that introduced costly delays.",
        "Prawitech partnered with NexaCorp leadership to design and engineer a unified enterprise platform that centralizes lead management, automates proposal generation, and surfaces real-time pipeline analytics to every stakeholder.",
      ],
      challenge:
        "NexaCorp's sales organization operated across five disconnected tools with no single source of truth. Manual data entry consumed over 12 hours per rep weekly, quote turnaround averaged 4 days, and leadership lacked visibility into conversion bottlenecks. Legacy systems could not scale with their aggressive regional expansion targets.",
      solution:
        "We architected a modular web platform built on a performant React stack with a centralized API layer. Custom automation pipelines replaced manual quoting with rule-based proposal generation. A real-time analytics dashboard gave leadership instant pipeline visibility. The result: streamlined workflows, faster deal cycles, and a 45% increase in qualified conversions within 90 days of launch.",
      visuals: [
        // FOTO 2: Buat ditaruh di bagian bawah, full memanjang
        { 
          type: "full", 
          image: "/img/projects/oriena-2.png", 
          gradient: "from-[#0768FB]/70 to-[#1A1A1A]/90", 
          caption: "Collab produk" 
        }
      ],
    },
  },
  {
    slug: "velostart-branding",
    client: "VeloStart",
    title: "VeloStart Brand Identity",
    category: "graphic-design",
    categoryLabel: "Graphic Design",
    metric: "60% increase in brand recall",
    gradient: "from-[#1A1A1A]/80 to-[#0768FB]/70",
    heroGradient: "from-[#1A1A1A]/90 via-[#0768FB]/40 to-[#0768FB]/70",
    gridSize: "default",
    detail: {
      services: "Graphic Design",
      industry: "Mobility & Lifestyle",
      year: "2024",
      summary: [
        "VeloStart is an urban cycling startup positioning itself as the accessible entry point for commuters transitioning from cars to two wheels. Their original visual identity felt generic and failed to resonate with their target demographic of young professionals.",
        "Prawitech developed a complete brand identity system — from logo architecture and color palette to typography guidelines and application templates — engineered to communicate innovation, reliability, and urban energy.",
      ],
      challenge:
        "VeloStart launched with a placeholder brand that blended into the crowded micromobility market. Customer surveys revealed low brand recall, inconsistent visual application across touchpoints, and a disconnect between their premium product quality and budget-tier visual presentation.",
      solution:
        "We conducted competitive landscape analysis and audience research to define a distinctive brand positioning. A modular logo system, vibrant yet professional color palette, and custom typography guidelines were delivered alongside comprehensive brand application templates for digital, print, and environmental contexts — achieving 60% higher brand recall in post-launch testing.",
      visuals: [
        { type: "full", gradient: "from-[#1A1A1A]/75 to-[#0768FB]/65", caption: "Primary brand identity suite" },
        {
          type: "dual",
          gradients: ["from-[#0768FB]/40 to-[#1A1A1A]/80", "from-[#1A1A1A]/70 to-[#0768FB]/50"],
          captions: ["Logo system variations", "Typography & color palette"],
        },
        { type: "interactive", gradient: "from-[#1A1A1A]/80 to-[#0768FB]/60", caption: "Brand application mockups" },
      ],
    },
  },
  {
    slug: "artha-automation",
    client: "Artha Group",
    title: "Artha Operations Automation",
    category: "ai-automation",
    categoryLabel: "AI Automation",
    metric: "3x operational efficiency",
    gradient: "from-[#0768FB]/60 to-[#0768FB]/90",
    heroGradient: "from-[#0768FB]/80 via-[#0768FB]/50 to-[#1A1A1A]/80",
    gridSize: "default",
    detail: {
      services: "AI Automation",
      industry: "Financial Services",
      year: "2023",
      summary: [
        "Artha Group manages investment portfolios and financial advisory services for over 2,000 clients. Their operations team was drowning in repetitive document processing, compliance checks, and client onboarding paperwork.",
        "Prawitech designed and deployed an intelligent automation layer that handles document classification, data extraction, and compliance validation — freeing the operations team to focus on high-value client relationships.",
      ],
      challenge:
        "Artha's operations team processed an average of 400 documents daily through entirely manual workflows. Compliance validation required cross-referencing multiple systems, onboarding new clients took 5–7 business days, and error rates in data entry created downstream reconciliation issues that consumed senior staff time.",
      solution:
        "We built a custom AI automation pipeline combining intelligent document processing, rule-based compliance engines, and seamless CRM integration. Automated workflows now handle 85% of routine document processing, client onboarding reduced to under 24 hours, and operational throughput increased 3x without additional headcount.",
      visuals: [
        { type: "full", gradient: "from-[#0768FB]/65 to-[#1A1A1A]/85", caption: "Automation pipeline architecture" },
        {
          type: "dual",
          gradients: ["from-[#1A1A1A]/75 to-[#0768FB]/55", "from-[#0768FB]/70 to-[#0768FB]/40"],
          captions: ["Document processing interface", "Compliance validation dashboard"],
        },
        { type: "interactive", gradient: "from-[#0768FB]/75 to-[#1A1A1A]/80", caption: "Workflow automation in action" },
      ],
    },
  },
  {
    slug: "kreasi-digital",
    client: "Kreasi Digital",
    title: "Kreasi Digital Experience",
    category: "graphic-design",
    categoryLabel: "Graphic Design",
    metric: "80% increase in engagement",
    gradient: "from-[#1A1A1A]/70 to-[#0768FB]/50",
    heroGradient: "from-[#1A1A1A]/85 via-[#0768FB]/30 to-[#0768FB]/60",
    gridSize: "wide",
    detail: {
      services: "Graphic Design & UI/UX",
      industry: "Digital Media",
      year: "2024",
      summary: [
        "Kreasi Digital is a content creation agency producing video, podcast, and social media campaigns for regional brands. Their digital presence failed to reflect the creative caliber of their output, resulting in lost pitch opportunities.",
        "Prawitech reimagined their entire digital experience — from visual identity refinement to interface design — creating a portfolio platform that converts visitors into qualified leads.",
      ],
      challenge:
        "Kreasi Digital's website was a static brochure with poor mobile performance, no case study storytelling, and a contact flow that leaked 70% of interested visitors before conversion. Their visual identity was inconsistent across platforms, undermining credibility during new business pitches.",
      solution:
        "We delivered a refined brand system and a conversion-optimized digital experience featuring immersive case study layouts, performance-tuned responsive design, and strategic micro-interactions. The new platform increased average session duration by 80% and generated a 3x lift in inbound project inquiries within 60 days.",
      visuals: [
        { type: "full", gradient: "from-[#1A1A1A]/70 to-[#0768FB]/55", caption: "Redesigned homepage experience" },
        {
          type: "dual",
          gradients: ["from-[#0768FB]/45 to-[#1A1A1A]/75", "from-[#1A1A1A]/65 to-[#0768FB]/45"],
          captions: ["Mobile-responsive layouts", "Case study presentation system"],
        },
        { type: "interactive", gradient: "from-[#0768FB]/60 to-[#1A1A1A]/75", caption: "Interactive portfolio transitions" },
      ],
    },
  },
  {
    slug: "meridian-logistics",
    client: "Meridian Logistics",
    title: "Meridian Fleet Dashboard",
    category: "web-development",
    categoryLabel: "Web Development",
    metric: "Real-time tracking across 200+ vehicles",
    gradient: "from-[#0768FB]/50 to-[#1A1A1A]/85",
    heroGradient: "from-[#0768FB]/60 via-[#1A1A1A]/70 to-[#1A1A1A]/90",
    gridSize: "default",
    detail: {
      services: "Web Development",
      industry: "Logistics & Supply Chain",
      year: "2023",
      summary: [
        "Meridian Logistics operates a fleet of 200+ vehicles across three distribution hubs, serving retail and e-commerce clients with same-day and next-day delivery commitments.",
        "Prawitech engineered a real-time fleet management dashboard that unifies GPS telemetry, route optimization, and driver performance metrics into a single operational command center.",
      ],
      challenge:
        "Meridian relied on third-party tracking tools that did not integrate with their internal dispatch system. Dispatchers toggled between four applications to coordinate routes, delays were communicated via phone calls, and leadership had no consolidated view of fleet utilization or delivery performance trends.",
      solution:
        "We built a custom web dashboard with real-time WebSocket data feeds, integrated mapping with dynamic route visualization, and automated alert systems for delays and exceptions. Dispatch efficiency improved 40%, on-time delivery rates increased to 96%, and leadership gained actionable fleet analytics for capacity planning.",
      visuals: [
        { type: "full", gradient: "from-[#0768FB]/55 to-[#1A1A1A]/88", caption: "Fleet command center dashboard" },
        {
          type: "dual",
          gradients: ["from-[#1A1A1A]/80 to-[#0768FB]/50", "from-[#0768FB]/40 to-[#1A1A1A]/80"],
          captions: ["Live route mapping", "Driver performance analytics"],
        },
        { type: "interactive", gradient: "from-[#0768FB]/65 to-[#1A1A1A]/85", caption: "Real-time fleet tracking demo" },
      ],
    },
  },
  {
    slug: "pulse-health-ai",
    client: "Pulse Health",
    title: "Pulse Patient Intake System",
    category: "ai-automation",
    categoryLabel: "AI Automation",
    metric: "70% reduction in manual data entry",
    gradient: "from-[#1A1A1A]/75 to-[#0768FB]/65",
    heroGradient: "from-[#1A1A1A]/85 via-[#0768FB]/35 to-[#0768FB]/70",
    gridSize: "tall",
    detail: {
      services: "AI Automation & Web Development",
      industry: "Healthcare",
      year: "2024",
      summary: [
        "Pulse Health operates a network of primary care clinics serving over 15,000 patients annually. Their front-desk teams spent disproportionate time on paperwork instead of patient care.",
        "Prawitech developed an intelligent patient intake system that automates form processing, insurance verification, and medical history compilation — dramatically reducing administrative burden while improving data accuracy.",
      ],
      challenge:
        "Patient check-in at Pulse Health clinics averaged 18 minutes due to redundant paper forms, manual insurance verification calls, and duplicate data entry across EMR systems. Staff burnout was rising, patient satisfaction scores were declining, and data entry errors created billing discrepancies.",
      solution:
        "We deployed an AI-powered intake platform with intelligent form recognition, automated insurance eligibility checks, and seamless EMR integration. Check-in time dropped to under 5 minutes, manual data entry reduced by 70%, and patient satisfaction scores recovered to their highest levels in three years.",
      visuals: [
        { type: "full", gradient: "from-[#1A1A1A]/78 to-[#0768FB]/62", caption: "Patient intake interface" },
        {
          type: "dual",
          gradients: ["from-[#0768FB]/50 to-[#1A1A1A]/78", "from-[#1A1A1A]/72 to-[#0768FB]/48"],
          captions: ["Insurance verification flow", "EMR integration dashboard"],
        },
        { type: "interactive", gradient: "from-[#0768FB]/70 to-[#1A1A1A]/82", caption: "Automated form processing demo" },
      ],
    },
  },
];

export function getFeaturedProject() {
  return projects.find((p) => p.featured) ?? projects[0];
}

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) ?? null;
}

export function getNextProject(slug) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return projects[0];
  return projects[(index + 1) % projects.length];
}
