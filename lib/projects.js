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
    thumbnail: "/img/projects/oriena-depan.png",
    heroImage: "/img/projects/oriena-1.png",
    category: "web-development",
    categoryLabel: "Web Development",
    metric: "45% increase in conversion",
    gradient: "from-[#0768FB]/80 to-[#1A1A1A]/90",
    heroGradient: "from-[#0768FB]/90 via-[#1A1A1A]/80 to-[#1A1A1A]",
    gridSize: "tall",
    featured: true,
    spotlightDescription:
      "Oriena is an artisan bakery brand requiring a premium digital storefront to scale their seasonal gifting and corporate orders. We engineered an interactive e-commerce platform featuring a gamified hamper builder and a personalized taste profile matcher, delivering a seamless transition from visual product discovery to direct WhatsApp checkout.",
    detail: {
      services: "Web Development",
      industry: "Enterprise SaaS",
      year: "2026",
      summary: [
        "Oriena specializes in premium artisan cookies and custom seasonal hampers, particularly for peak gifting seasons like Lebaran and Natal. To elevate their brand presence and support their entry into the 2026 Web Creation Competition, they needed more than just a standard digital catalog.",
        "Prawitech developed a highly interactive web application designed to gamify the purchasing experience. By blending a sophisticated aesthetic with engaging frontend mechanics, the platform transforms how retail customers and B2B clients configure and order their custom cookie hampers.",
      ],
      challenge:
        "Selling customized hampers online typically involves confusing forms, rigid package options, or endless back-and-forth messaging. Oriena needed a system that allowed customers to visually and intuitively build their own hampers without overwhelming them. Additionally, the platform had to cater to a B2B collaboration portal to facilitate large-volume corporate orders seamlessly.",
      solution:
        "We built a performant, modern web application utilizing React, Vite, Tailwind CSS, and Framer Motion. The core innovation is a drag-and-drop hamper builder coupled with a taste profile matcher, giving users complete creative control over their gifts. To streamline operations, the entire custom configuration is securely routed through a direct WhatsApp checkout integration, creating a frictionless path from product exploration to purchase.",
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
    slug: "xpact-interactive-web",
    client: "Ficpact",
    title: "XPACT-Interactive Web",
    thumbnail: "/img/projects/xpact-depan.png",
    heroImage: "/img/projects/xpact-1.png",
    category: "web-development",
    categoryLabel: "Web Development",
    metric: "Real-time tracking across 200+ vehicles",
    gradient: "from-[#0768FB]/50 to-[#1A1A1A]/85",
    heroGradient: "from-[#0768FB]/60 via-[#1A1A1A]/70 to-[#1A1A1A]/90",
    gridSize: "default",
    spotlightDescription:
      "XPACT is an innovative web platform that gamifies the growth and learning process for UMKM (Small and Medium Enterprises). Developed by team Fsociety, it features a retro pixel-art aesthetic that turns business development and digital transformation into an engaging RPG-style quest.",
    detail: {
      services: "Web Development",
      industry: "Localize UMKM ",
      year: "2026",
      summary: [
        "XPACT was built as an official entry for the FICPACT CUP 2026 competition. The core mission was to create a unique approach to UMKM empowerment by transitioning away from standard, dry business learning modules into a highly interactive digital adventure.",
        "Team Fsociety engineered a web platform where users can complete 'Quests' to level up their business knowledge. The nostalgic pixel-art aesthetic was deliberately chosen to appeal to a modern demographic, making the educational process feel less like a classroom and more like a game.",
      ],
      challenge:
        "Traditional UMKM training platforms often suffer from low engagement and high dropout rates. The challenge was to build an educational tool that captured users' attention immediately, while effectively managing complex backend logic for user progress tracking, quest completion, and dynamic UMKM data.",
      solution:
        "We developed a gamified web application deployed on Vercel, utilizing Supabase for robust backend management and user authentication. The interface was fully customized with a retro 8-bit design system. Features include a quest-tracking dashboard, an interactive UMKM directory, and progress mechanics that directly reward user engagement and learning milestones.",
      visuals: [
        // FOTO 2: Buat ditaruh di bagian bawah, full memanjang
        { 
          type: "full", 
          image: "/img/projects/xpact-2.png", 
          gradient: "from-[#0768FB]/70 to-[#1A1A1A]/90", 
          caption: "Footer of Website" 
        }
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
