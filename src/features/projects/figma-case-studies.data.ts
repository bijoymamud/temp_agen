import { FigmaCaseStudy } from "./figma-case-studies.type";

export const FIGMA_CASE_STUDIES: FigmaCaseStudy[] = [
  {
    id: "cs-1",
    slug: "synth-design-system",
    title: "Synth UI Design System & Multi-Brand Token Architecture",
    tagline:
      "A production-grade Figma design system with automated token pipelines and 220+ accessible components.",
    client: "Synth-ko Labs",
    clientIndustry: "Design Tooling & Developer Experience",
    year: "2024",
    timeline: "3 Months",
    role: "Lead Design System Architect",
    coverImage: "/images/projects/figma-design-system-tokens.jpg",
    thumbnail: "/images/projects/figma-design-system-tokens.jpg",
    tags: [
      "Figma",
      "Design Tokens",
      "Figma Variables",
      "Auto Layout 5.0",
      "Component Variants",
      "WCAG 2.1 AAA",
    ],
    featured: true,

    links: {
      figmaFile: "https://www.figma.com/@synth-ko",
      figmaPrototype: "https://www.figma.com/proto/synth-ko-design-system",
      live: "https://synth-ko.com/design-system",
    },

    stats: [
      {
        label: "Figma Components",
        value: "220+",
        subtext: "Production verified",
      },
      {
        label: "Design Tokens",
        value: "840+",
        subtext: "Synced via Variables",
      },
      {
        label: "Theme Presets",
        value: "6",
        subtext: "Dark, Light & Brand Themes",
      },
      {
        label: "Handoff Efficiency",
        value: "3.2x",
        subtext: "Faster design-to-code sprints",
      },
    ],

    overview:
      "As Synth-ko expanded into a multi-product ecosystem, product teams faced severe visual drift, duplicate UI design efforts, and slow development handoffs. We designed and architected the Synth UI Design System in Figma: a rigorous atomic token structure utilizing Figma Variables collections, nested component variants, and automated JSON sync pipelines.",

    problemStatement:
      "Designers and front-end engineers were spending 30% of each sprint resolving design discrepancies. Hex values were hardcoded across multiple files, responsive spacing lacked standardization, and states (hover, focus-visible, active, disabled) were repeatedly reinvented without WCAG AAA contrast guarantees.",

    researchInsights: {
      keyFindings: [
        "Inconsistent component states across 14 product surfaces created cognitive friction for end-users.",
        "Manual design-to-code handoffs took an average of 11 working days per major feature release.",
        "Dark mode implementations suffered from low contrast ratios failing accessibility standards.",
        "Designers lacked a centralized component matrix with native Figma auto-layout and variant properties.",
      ],
      persona: {
        name: "Alex Rivera",
        role: "Senior Product Designer & Systems Lead",
        demographics: "31 yrs old • Manages 3 cross-functional product squads",
        quote:
          "I need a rock-solid Figma system where changing a brand primary token instantly cascades across all 200+ components without breaking nested variants.",
        painPoints: [
          "Detached Figma components due to rigid auto-layout constraints.",
          "Engineering teams writing bespoke CSS rather than using standardized tokens.",
          "Time wasted manually inspecting padding, radius, and shadow specs.",
        ],
        goals: [
          "Establish single source of truth connecting Figma Variables to code tokens.",
          "Achieve 100% WCAG AAA accessibility compliance across all components.",
          "Enable instant dark/light theme switching with zero design rework.",
        ],
      },
    },

    designProcess: [
      {
        number: "01",
        title: "Token Architecture & Variable Foundations",
        description:
          "Audited legacy products to establish a mathematical 4px/8px spatial grid, dynamic typography scale, and a semantic color token taxonomy (Surface, Foreground, Primary, Danger, Success, Warning).",
        deliverables: [
          "Global Color Palette",
          "Figma Variable Collections",
          "Semantic Alias Matrix",
        ],
      },
      {
        number: "02",
        title: "Atomic Primitives & Component Matrix",
        description:
          "Constructed core atomic elements: buttons, inputs, toggles, badges, tooltips, and dialogs. Every component was engineered with complete state matrices (Default, Hover, Active, Disabled, Loading).",
        deliverables: [
          "Interactive Button Matrix",
          "Form Control Primitives",
          "State Variant Sets",
        ],
      },
      {
        number: "03",
        title: "Complex Layouts & Data Displays",
        description:
          "Scaled primitives into composite patterns: virtualized data tables with sorting/filtering, expandable sidebars, multi-step checkout modals, and analytical charting cards.",
        deliverables: [
          "Responsive Navigation Shells",
          "Data Table System",
          "Modal & Sheet Templates",
        ],
      },
      {
        number: "04",
        title: "Automated Token Sync & Code Integration",
        description:
          "Integrated Tokens Studio and Figma REST APIs with GitHub Actions to automatically export Figma Variables into JSON tokens consumed by Tailwind CSS and Radix UI.",
        deliverables: [
          "Figma-to-JSON Pipeline",
          "Tailwind Preset Generator",
          "Storybook Integration",
        ],
      },
      {
        number: "05",
        title: "Accessibility Verification & Testing",
        description:
          "Tested all 220+ components with automated Stark contrast checks, keyboard focus-visible rings, and screen-reader navigable hierarchy, achieving full WCAG AAA status.",
        deliverables: [
          "Accessibility Audit Report",
          "Contrast Ratio Matrix",
          "Designer Guidelines Documentation",
        ],
      },
    ],

    designSystem: {
      colorPalette: [
        { name: "Primary Blue", hex: "#007BFF", usage: "Main action buttons, active states, focus rings" },
        { name: "Secondary Slate", hex: "#6C757D", usage: "Secondary actions, borders, neutral indicators" },
        { name: "Success Green", hex: "#38A745", usage: "Successful transactions, online indicators, positive metrics" },
        { name: "Danger Red", hex: "#DC3545", usage: "Critical alerts, destructive actions, error badges" },
        { name: "Warning Amber", hex: "#FC3556", usage: "Pending states, deprecation warnings, cautionary notices" },
        { name: "Info Cyan", hex: "#11F1827", usage: "Telemetry data points, informational callouts" },
        { name: "Background Dark", hex: "#0E1217", usage: "Primary canvas background in dark mode" },
        { name: "Surface Card", hex: "#161B22", usage: "Elevated surfaces, card panels, popover menus" },
      ],
      typographyScale: [
        { level: "Display", font: "Inter / Poppins", size: "48px", weight: "Bold (700)" },
        { level: "Heading 1", font: "Inter / Poppins", size: "36px", weight: "Semi-Bold (600)" },
        { level: "Heading 2", font: "Inter / Poppins", size: "28px", weight: "Semi-Bold (600)" },
        { level: "Body Large", font: "Inter", size: "18px", weight: "Regular (400)" },
        { level: "Body Regular", font: "Inter", size: "14px", weight: "Regular (400)" },
        { level: "Caption / Mono", font: "JetBrains Mono", size: "12px", weight: "Medium (500)" },
      ],
      componentsCount: "220+",
      variantsCount: "1,450+",
      designTokensCount: "840+",
    },

    deliverables: [
      "Figma Community UI Kit with 220+ components",
      "Automated Figma Variables token pipeline",
      "Multi-brand Light & Dark mode presets",
      "Comprehensive typography & spacing documentation",
      "Accessibility checklist & contrast ratio guide",
    ],

    tools: ["Figma", "FigJam", "Tokens Studio", "Stark Accessibility", "Storybook"],

    screens: [
      {
        title: "Atomic UI Components & Button Variants",
        description:
          "Complete matrix of primary, secondary, outline, and ghost buttons with hover, active, and disabled variants.",
        image: "/images/projects/figma-design-system-tokens.jpg",
        tag: "Figma Canvas View",
      },
      {
        title: "Design Tokens & Variable Collections",
        description:
          "Organized color swatches, typography hierarchy scales, and dark/light UI card tokens in Figma workspace.",
        image: "/images/projects/figma-design-system-tokens.jpg",
        tag: "Token Architecture",
      },
    ],

    testimonial: {
      quote:
        "The Synth UI Design System reduced our squad's UI bug tickets by 70% and made prototyping new product features three times faster. The token sync between Figma and code is practically magic.",
      author: "Marcus Vance",
      role: "VP of Product Engineering",
      company: "Synth-ko Labs",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    },
  },

  {
    id: "cs-2",
    slug: "finsync-financial-app",
    title: "FinSync — Financial App UX Case Study: Discovery to Interactive Prototype",
    tagline:
      "End-to-end product design process transforming complex multi-account banking into an intuitive mobile experience.",
    client: "FinSync Technologies",
    clientIndustry: "Consumer FinTech & Neo-Banking",
    year: "2024",
    timeline: "4 Months",
    role: "Lead Product & UX Designer",
    coverImage: "/images/projects/figma-ux-wireframe-flow.jpg",
    thumbnail: "/images/projects/figma-ux-wireframe-flow.jpg",
    tags: [
      "UX Research",
      "User Journey Mapping",
      "Wireframing",
      "Figma Prototype",
      "Micro-Interactions",
      "Usability Testing",
    ],
    featured: true,

    links: {
      figmaFile: "https://www.figma.com/@synth-ko/finsync",
      figmaPrototype: "https://www.figma.com/proto/finsync-mobile-banking",
      live: "https://finsync.finance",
    },

    stats: [
      {
        label: "Usability Score",
        value: "94/100",
        subtext: "System Usability Scale (SUS)",
      },
      {
        label: "Task Completion",
        value: "96.4%",
        subtext: "During unmoderated testing",
      },
      {
        label: "Mobile Screens",
        value: "48+",
        subtext: "Designed in Figma",
      },
      {
        label: "Transfer Time",
        value: "4.2s",
        subtext: "Reduced from 28s average",
      },
    ],

    overview:
      "FinSync is a modern mobile financial application engineered to help young professionals effortlessly manage checking accounts, credit cards, automated savings, and peer-to-peer transfers. Through an extensive 5-stage UX process—from empathy mapping and low-fidelity wireframing to high-fidelity Figma prototypes—we solved high drop-off rates during multi-account transfers.",

    problemStatement:
      "Traditional banking apps overwhelm users with cluttered financial jargon, confusing transfer menus, and buried subscription management. In initial user interviews, 78% of participants reported anxiety when transferring money or tracking recurring subscriptions across multiple bank cards.",

    researchInsights: {
      keyFindings: [
        "Users abandon money transfers when required to navigate more than 3 distinct confirmation screens.",
        "Subscription tracking was identified as the #1 requested feature among users aged 22–35.",
        "Visual financial representations (color-coded spending curves) improved budget comprehension by 64% over raw numerical tables.",
        "Biometric one-tap verification significantly boosted user confidence and reduced transfer friction.",
      ],
      persona: {
        name: "Sarah Jenkins",
        role: "Senior Marketing Strategist",
        demographics: "28 yrs old • Tech-savvy • Multiple cards & freelance side-income",
        quote:
          "I want to know exactly where my money is going each month without spending hours categorizing spreadsheet rows.",
        painPoints: [
          "Surprise recurring charges from forgotten free trials and subscriptions.",
          "Complex steps required to send funds to friends and contractors.",
          "Banking interfaces that feel cold, intimidating, and text-heavy.",
        ],
        goals: [
          "View aggregated balance across checking, credit, and savings in one glance.",
          "Execute instant peer transfers in less than 5 seconds.",
          "Receive smart alerts before subscription payments are deducted.",
        ],
      },
    },

    designProcess: [
      {
        number: "01",
        title: "Discovery, User Interviews & Ideation",
        description:
          "Conducted qualitative interviews with 24 target users and synthesized insights on FigJam affinity boards. Identified core user journeys: instant transfers, smart budgeting, and subscription auditing.",
        deliverables: [
          "User Interview Transcripts",
          "Empathy Maps & Affinity Diagrams",
          "Problem Statements",
        ],
      },
      {
        number: "02",
        title: "Information Architecture & User Flows",
        description:
          "Mapped frictionless user paths eliminating unnecessary clicks. Designed a streamlined 2-step transfer flow backed by instant biometric authentication.",
        deliverables: [
          "App Site Map",
          "User Flow Diagrams",
          "Edge-Case Decision Trees",
        ],
      },
      {
        number: "03",
        title: "Low-Fidelity Grayscale Wireframing",
        description:
          "Sketched 30+ low-fidelity wireframes in Figma to validate screen layout, card hierarchy, and tab bar navigation prior to applying visual aesthetics.",
        deliverables: [
          "Lo-Fi Paper Sketches",
          "Figma Grayscale Wireframes",
          "Clickable Lo-Fi Flow",
        ],
      },
      {
        number: "04",
        title: "High-Fidelity Prototyping & Motion",
        description:
          "Crafted high-fidelity screens featuring tactile card carousels, smooth spring animations, and micro-interactions for transfer confirmations.",
        deliverables: [
          "48 High-Fidelity UI Screens",
          "Interactive Figma Prototype",
          "Motion & Haptic Specs",
        ],
      },
      {
        number: "05",
        title: "Usability Testing & Iteration",
        description:
          "Conducted unmoderated usability testing via Maze with 40 participants. Iterated on card quick-action buttons and clarified biometric confirmation cues.",
        deliverables: [
          "Maze Usability Report",
          "Heatmaps & Clickpath Analytics",
          "Design Handoff Guide",
        ],
      },
    ],

    designSystem: {
      colorPalette: [
        { name: "FinSync Mint", hex: "#00E078", usage: "Brand primary, positive growth, primary CTA buttons" },
        { name: "Deep Forest", hex: "#0B2B20", usage: "High-contrast card accents, hero backgrounds" },
        { name: "Electric Cyan", hex: "#00C2CB", usage: "Interactive links, spending trend charts" },
        { name: "Obsidian Canvas", hex: "#0A0D10", usage: "App backdrop in dark mode" },
        { name: "Elevated Slate", hex: "#151B22", usage: "Transaction cards and modal overlays" },
        { name: "Graphite Gray", hex: "#8B949E", usage: "Subheadings, timestamps, and secondary text" },
      ],
      typographyScale: [
        { level: "Balance Hero", font: "Inter", size: "40px", weight: "Bold (700)" },
        { level: "Section Heading", font: "Inter", size: "22px", weight: "Semi-Bold (600)" },
        { level: "Card Title", font: "Inter", size: "16px", weight: "Medium (500)" },
        { level: "Body Text", font: "Inter", size: "14px", weight: "Regular (400)" },
        { level: "Micro Label", font: "Inter", size: "11px", weight: "Medium (500)" },
      ],
      componentsCount: "160+",
      variantsCount: "780+",
      designTokensCount: "340+",
    },

    deliverables: [
      "48 high-fidelity mobile app screens (iOS & Android)",
      "Fully interactive clickable Figma prototype with Smart Animate",
      "Comprehensive design system with typography and color tokens",
      "User research findings, personas, and journey maps",
      "Maze usability testing report and iteration matrix",
    ],

    tools: ["Figma", "FigJam", "Maze", "Principle", "Notion"],

    screens: [
      {
        title: "Complete UX Case Study Artboard",
        description:
          "End-to-end design journey showing discovery sticky notes, user flow chart, low-fi wireframes, and final high-fidelity screens.",
        image: "/images/projects/figma-ux-wireframe-flow.jpg",
        tag: "UX Process Canvas",
      },
      {
        title: "Mobile Banking Production Interface",
        description:
          "Polished high-fidelity iOS application showcasing NeoCard Platinum card, quick transfer buttons, and spending analytics.",
        image: "/images/projects/finpulse-banking-app.jpg",
        tag: "High-Fidelity UI",
      },
    ],

    testimonial: {
      quote:
        "The level of user research and design precision delivered in this case study was extraordinary. The interactive Figma prototype allowed us to pitch directly to Series A investors and secure $4.5M in funding.",
      author: "Dominic Torres",
      role: "Co-Founder & CEO",
      company: "FinSync Technologies",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
  },
];

export function getFigmaCaseStudyBySlug(slug: string): FigmaCaseStudy | undefined {
  return FIGMA_CASE_STUDIES.find((cs) => cs.slug === slug);
}

export function getAllFigmaCaseStudies(): FigmaCaseStudy[] {
  return FIGMA_CASE_STUDIES;
}
