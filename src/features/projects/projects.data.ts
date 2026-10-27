import { Project, ProjectCategory } from "./projects.type";

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "All",
  "SaaS",
  "Web Apps",
  "Mobile Apps",
  "AI & Cloud",
  "UI/UX Design",
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "1",
    slug: "collabify",
    title: "Collabify — Developer Collaboration Platform",
    tagline: "Turning Ideas into Reality Through Collaboration.",
    description:
      "A developer collaboration platform designed to help developers share project ideas, find collaborators, organize project teams, track development tasks, and work toward better software quality.",

    category: "SaaS",
    client: "Collabify",
    clientIndustry: "Software Development & Developer Collaboration",
    year: "2026",
    duration: "Ongoing Development",
    status: "BETA",

    thumbnail:
      "https://res.cloudinary.com/k3z91ydz/image/upload/f_auto/q_auto/collabify.png?q=80&w=1200&auto=format&fit=crop",
    heroBanner:
      "https://res.cloudinary.com/k3z91ydz/image/upload/f_auto/q_auto/collabify.png?q=80&w=1600&auto=format&fit=crop",

    tags: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Developer Collaboration",
      "Project Management",
      "Quality Assurance",
    ],

    featured: true,

    overview:
      "Collabify is a BETA-stage developer collaboration platform built to bring project discovery, team collaboration, task management, and software quality assurance opportunities into one ecosystem. Developers can share innovative ideas, showcase ongoing work, and publish partially completed projects to attract potential contributors. The platform aims to help developers connect with collaborators, coordinate work through dedicated project groups, and organize development activities using project tracking boards. It also plans to connect project owners with professional QA testers through a human-led hiring solution.",

    problem:
      "Developers often struggle to turn promising software ideas into completed products because finding suitable collaborators and building a capable team can be difficult. Ongoing projects may become challenging to manage when communication is fragmented, responsibilities are unclear, and development progress is difficult to track. Additionally, AI-assisted coding does not guarantee reliable software; applications may still contain functional bugs, security vulnerabilities, performance issues, and overlooked edge cases. Developers need a more connected environment for finding collaborators, coordinating development, organizing tasks, and obtaining professional software testing support.",

    solution:
      "Collabify aims to connect the essential stages of collaborative software development in one platform. Developers can publish ideas and ongoing projects, discover potential contributors, communicate through project-focused groups, and organize development tasks using project tracking boards. The backend uses Node.js and Express.js, with Prisma for database access and PostgreSQL as the database. The frontend uses TypeScript. The platform is under active development, with some features implemented and others still in progress. A human-led QA hiring solution is planned to help project owners connect with professional testers for manual testing and software quality assessment.",

    architectureHighlights: [
      "TypeScript-based frontend for the developer-facing platform",
      "Node.js and Express.js backend for server-side application functionality and API development",
      "Prisma for database access and data operations",
      "PostgreSQL relational database for application data",
      "Project discovery and collaboration workflows for sharing ideas and finding contributors",
      "Project-focused developer groups and tracking boards for team communication and task organization",
      "Planned QA hiring workflow for connecting project owners with professional software testers",
    ],

    keyFeatures: [
      {
        title: "Project & Idea Sharing",
        description:
          "Developers can share software ideas, showcase ongoing projects, and publish partially completed work to help potential contributors discover opportunities to participate. Feature availability may vary during the BETA development stage.",
      },
      {
        title: "Developer Collaboration",
        description:
          "The platform is designed to help developers discover collaboration opportunities and connect with people who can contribute complementary technical skills, including frontend development, backend development, and UI/UX design.",
      },
      {
        title: "Dedicated Developer Groups",
        description:
          "Project-focused groups provide a dedicated space for team communication, technical discussions, development updates, and coordination around shared project goals.",
      },
      {
        title: "Project Tracking Board",
        description:
          "A project management feature designed to help teams organize development tasks, clarify responsibilities, monitor progress, and maintain visibility into outstanding work.",
      },
      {
        title: "Human-Led Quality Assurance",
        description:
          "A planned QA hiring solution intended to connect project owners with professional testers who can manually test applications, identify defects, validate functionality, and assess software quality before release.",
      },
      {
        title: "Collaborative Development Ecosystem",
        description:
          "Collabify brings project discovery, developer collaboration, team communication, task organization, and planned quality assurance opportunities together in a unified development ecosystem.",
      },
    ],

    stats: [
      {
        label: "Product Stage",
        value: "BETA",
        subtext: "Platform under development",
      },
      {
        label: "Frontend Language",
        value: "TypeScript",
        subtext: "Verified technology",
      },
      {
        label: "Backend",
        value: "Node.js",
        subtext: "Express.js application framework",
      },
      {
        label: "Database",
        value: "PostgreSQL",
        subtext: "Accessed using Prisma",
      },
    ],

    techStackCategorized: [
      {
        category: "Frontend",
        items: ["TypeScript"],
      },
      {
        category: "Backend & API",
        items: ["Node.js", "Express.js"],
      },
      {
        category: "Database & ORM",
        items: ["PostgreSQL", "Prisma"],
      },
      {
        category: "Authentication & Integrations",
        items: ["Not specified"],
      },
      {
        category: "Deployment & DevOps",
        items: ["Not specified"],
      },
    ],

    techStack: ["TypeScript", "Node.js", "Express.js", "Prisma", "PostgreSQL"],

    gallery: [
      {
        url: "/images/projects/collabify-kanban-board.jpg",
        title: "Sprint Kanban & Task Board",
        caption:
          "Production developer task tracking board with Backlog, In Progress, Code Review, and QA Testing columns.",
      },
      {
        url: "https://res.cloudinary.com/k3z91ydz/image/upload/f_auto/q_auto/collabify.png?q=80&w=1200&auto=format&fit=crop",
        title: "Developer Collaboration Workspace",
        caption:
          "Live Collabify platform interface showcasing project discovery, group communications, and contributor matching.",
      },
      {
        url: "/images/projects/aurora-ai-dashboard.jpg",
        title: "Integrated Team Monitoring",
        caption:
          "Automated developer metrics and software quality tracking dashboard.",
      },
    ],

    testimonial: {
      quote: "No verified testimonial is currently available for this project.",
      author: "Not provided",
      role: "Not provided",
      company: "Collabify",
      avatar:
        "https://ui-avatars.com/api/?name=Collabify&background=334155&color=ffffff",
    },

    links: {
      live: "",
      github: "",
    },
  },
  {
    id: "2",
    slug: "aurora-ai-analytics",
    title: "Aurora AI Intelligence Hub",
    tagline:
      "Autonomous telemetry, predictive model deployment, and real-time observability.",
    description:
      "An AI-powered operational copilot that ingests millions of telemetry data points to forecast system degradation, detect infrastructure anomalies, and suggest automated remediation workflows.",
    category: "AI & Cloud",
    client: "HyperScale Cloud Systems",
    clientIndustry: "Cloud Infrastructure & SRE Tooling",
    year: "2024",
    duration: "4 Months",
    thumbnail: "/images/projects/aurora-ai-dashboard.jpg",
    heroBanner: "/images/projects/aurora-ai-dashboard.jpg",
    tags: [
      "Python",
      "FastAPI",
      "React",
      "Docker",
      "PyTorch",
      "Kubernetes",
      "Vector DB",
    ],
    featured: true,
    overview:
      "HyperScale Cloud provides hosting infrastructure for thousands of microservices. They sought an AI-first intelligence cockpit capable of digesting gigabytes of distributed telemetry every second and automatically isolating root causes before end-user degradation occurred.",
    problem:
      "High alert fatigue among DevOps engineers caused slow response times during cascading outages. Legacy rule-based monitors generated hundreds of false alerts, making it difficult to pinpoint the actual origin of systemic degradation.",
    solution:
      "We architected Aurora AI: a hybrid cloud solution leveraging custom transformer-based anomaly detectors trained on time-series telemetry. Integrated with ChromaDB vector indices and a high-performance FastAPI backend, it provides natural language root-cause summaries.",
    architectureHighlights: [
      "Custom autoencoders and LSTM neural networks executing edge inference on Kubernetes clusters",
      "Vector embeddings search using ChromaDB for matching live stack traces against historical incident postmortems",
      "Ultra-low latency streaming architecture processing 2.4 million log events per second",
      "Automated webhook integrations with Slack, Datadog, PagerDuty, and GitHub pull request bots",
    ],
    keyFeatures: [
      {
        title: "Predictive Degradation Forecasting",
        description:
          "Neural network alerts operators up to 45 minutes before memory leaks or database connection exhaustion cause crashes.",
      },
      {
        title: "Autonomous Remediation Workflows",
        description:
          "Pre-approved automated runbooks can automatically restart pods, scale worker replicas, or route around failing nodes.",
      },
      {
        title: "Natural Language Incident Copilot",
        description:
          "On-call engineers can ask questions like 'Why did API latency spike at 02:14?' and receive precise diagnostic explanations.",
      },
      {
        title: "Topology Dependency Visualizer",
        description:
          "Interactive WebGL graph showing real-time service-to-service communication dependencies and bottleneck nodes.",
      },
    ],
    stats: [
      { label: "Anomaly Accuracy", value: "99.4%", subtext: "Precision rate" },
      {
        label: "MTTR Reduction",
        value: "58%",
        subtext: "Mean time to resolution",
      },
      {
        label: "Events Ingested / Sec",
        value: "2.4M",
        subtext: "Continuous telemetry",
      },
      {
        label: "False Positives Cut",
        value: "81%",
        subtext: "Compared to legacy rules",
      },
    ],
    techStackCategorized: [
      {
        category: "Frontend & UI",
        items: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Cytoscape.js",
          "Lucide React",
        ],
      },
      {
        category: "AI & Machine Learning",
        items: ["PyTorch", "Hugging Face", "ChromaDB", "LangChain", "NumPy"],
      },
      {
        category: "Backend & Ingestion",
        items: ["FastAPI", "Python 3.12", "Celery", "Kafka", "TimescaleDB"],
      },
      {
        category: "Infrastructure",
        items: ["Kubernetes", "Helm", "Docker", "Prometheus", "Grafana"],
      },
    ],
    techStack: [
      "React",
      "FastAPI",
      "Python",
      "Kubernetes",
      "PyTorch",
      "TimescaleDB",
      "ChromaDB",
    ],
    gallery: [
      {
        url: "/images/projects/aurora-ai-dashboard.jpg",
        title: "Telemetry Observability Cockpit",
        caption:
          "Enterprise telemetry dashboard featuring real-time CPU usage, p95 API latency charts, and anomaly alert timelines.",
      },
      {
        url: "/images/projects/zenith-crypto-terminal.jpg",
        title: "Cluster Topology & Real-Time Metrics",
        caption:
          "Live distributed microservice health analytics and high-frequency event monitoring.",
      },
    ],
    testimonial: {
      quote:
        "Aurora AI transformed our engineering culture. During our Black Friday traffic surge, it caught three subtle database connection deadlocks before any customer experienced a dropped basket.",
      author: "Elena Rostova",
      role: "Chief Architect",
      company: "HyperScale Cloud Systems",
      avatar:
        "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1789758023/khairul_kpeizm.jpg",
    },
    links: {
      live: "https://example.com/aurora-ai",
      github: "https://github.com/info-mdshakeeb/aurora-ai",
    },
  },
  {
    id: "3",
    slug: "finpulse-mobile-banking",
    title: "FinPulse NeoBanking App",
    tagline:
      "Next-gen cross-platform digital banking with zero-fee cross-border payments.",
    description:
      "A fluid, high-security mobile neo-banking client with instant virtual card issuance, peer-to-peer lightning payments, biometrics authentication, and budgeting AI.",
    category: "Mobile Apps",
    client: "FinPulse Financial UK",
    clientIndustry: "Consumer FinTech & Banking",
    year: "2024",
    duration: "5 Months",
    thumbnail: "/images/projects/finpulse-banking-app.jpg",
    heroBanner: "/images/projects/finpulse-banking-app.jpg",
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Stripe API",
      "Zustand",
    ],
    featured: true,
    overview:
      "FinPulse is an innovative UK-based financial technology company striving to make international personal banking instantaneous and zero-cost for digital nomads, travelers, and remote contractors.",
    problem:
      "Traditional banking apps suffered from sluggish interfaces, cumbersome 5-step biometric authentications, and opaque foreign exchange fees with 3-day settlement delays.",
    solution:
      "We engineered FinPulse as a native-feel cross-platform application utilizing React Native and Expo with native C++ bridge bindings. It incorporates frictionless FaceID biometrics, instantaneous multi-currency wallets, and dynamic spending forecasts.",
    architectureHighlights: [
      "Offline-first architecture with encrypted local SQLite synchronization and optimistic UI updates",
      "Secure SecureEnclave biometric key storage satisfying strict Open Banking PSD2 regulations",
      "Fluid 60-120fps animations powered by React Native Reanimated 3 and Skia graphics engine",
      "WebSocket streaming connection for sub-500ms peer-to-peer money transfers",
    ],
    keyFeatures: [
      {
        title: "Instant Virtual Mastercard Issuance",
        description:
          "Generate single-use disposable cards for secure online shopping with dynamic CVV security codes.",
      },
      {
        title: "Multi-Currency Sub-Accounts",
        description:
          "Hold, convert, and spend 32 global currencies with live interbank FX spot pricing and zero hidden markups.",
      },
      {
        title: "AI Smart Budgeting & Round-Ups",
        description:
          "Automatically rounds up daily purchases to the nearest dollar and diverts spare change into yield-bearing vaults.",
      },
      {
        title: "One-Tap Split Bill with Friends",
        description:
          "Scan restaurant receipts with on-device OCR and split costs with friends in seconds without manual calculations.",
      },
    ],
    stats: [
      {
        label: "App Store Rating",
        value: "4.9 ★",
        subtext: "Over 28,000 reviews",
      },
      {
        label: "Monthly Transfer Volume",
        value: "$18M+",
        subtext: "Processed securely",
      },
      {
        label: "KYC Account Onboarding",
        value: "30 Sec",
        subtext: "Automated verification",
      },
      {
        label: "Active Mobile Users",
        value: "180K+",
        subtext: "In UK & European Union",
      },
    ],
    techStackCategorized: [
      {
        category: "Mobile Core",
        items: [
          "React Native",
          "Expo SDK 52",
          "TypeScript",
          "Reanimated 3",
          "React Navigation",
        ],
      },
      {
        category: "Backend Services",
        items: ["Node.js", "Fastify", "Stripe Connect API", "Plaid API"],
      },
      {
        category: "Data & Storage",
        items: ["PostgreSQL", "Redis", "SQLite (Offline)", "AWS KMS"],
      },
      {
        category: "Security & Testing",
        items: ["SecureEnclave", "Detox E2E", "Jest", "Appium"],
      },
    ],
    techStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Stripe",
      "Node.js",
      "Zustand",
    ],
    gallery: [
      {
        url: "/images/projects/finpulse-banking-app.jpg",
        title: "NeoCard Platinum & Account Dashboard",
        caption:
          "Sleek mobile visualizer showing $48,290.50 balance, instant send/transfer controls, and spending analytics curves.",
      },
      {
        url: "/images/projects/figma-ux-wireframe-flow.jpg",
        title: "UX Flow & Architecture Wireframe",
        caption:
          "Comprehensive user onboarding journey and biometric checkout verification flow.",
      },
    ],
    testimonial: {
      quote:
        "The Synth-ko engineering team exceeded every expectation. Our users constantly praise how snappy and intuitive the app feels compared to major high street banks.",
      author: "David Sterling",
      role: "Founder & CEO",
      company: "FinPulse Financial UK",
      avatar:
        "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1789758023/shakeeb_pebhkn.jpg",
    },
    links: {
      live: "https://example.com/finpulse",
      github: "https://github.com/info-mdshakeeb/finpulse-mobile",
    },
  },
  {
    id: "4",
    slug: "synth-design-system",
    title: "Synth UI Design System & Kit",
    tagline:
      "Unified atomic component library and token architecture for multi-brand apps.",
    description:
      "A comprehensive design system comprising over 200+ accessible primitives, dark/light token palettes, interactive Figma variants, and zero-runtime Tailwind presets.",
    category: "UI/UX Design",
    client: "Synth-ko Labs",
    clientIndustry: "Design Tooling & Developer Experience",
    year: "2023",
    duration: "3 Months",
    thumbnail: "/images/projects/figma-design-system-tokens.jpg",
    heroBanner: "/images/projects/figma-design-system-tokens.jpg",
    tags: [
      "Figma",
      "Design Tokens",
      "Radix UI",
      "Tailwind CSS",
      "Storybook",
      "TypeScript",
    ],
    featured: false,
    overview:
      "As Synth-ko’s product ecosystem expanded to multiple customer-facing and internal tools, front-end teams faced increasing UI divergence, redundant styling code, and accessibility inconsistencies.",
    problem:
      "Design-to-code handoffs took weeks. Inconsistent button states, padding conventions, and hardcoded hex colors across codebases degraded visual quality and slowed release cycles.",
    solution:
      "We built the Synth UI Design System: a multi-tiered token architecture connecting Figma variable collections to Tailwind configuration presets, supported by 220+ accessible React components built on Radix UI primitives.",
    architectureHighlights: [
      "Automated token sync connecting Figma Variables to JSON design tokens via GitHub Actions",
      "Zero-runtime CSS variable injection with support for infinite runtime theme variations",
      "Automated visual regression testing using Chromatic and Playwright across all components",
      "Full WCAG 2.1 AAA accessibility compliance with automated axe-core linting checks",
    ],
    keyFeatures: [
      {
        title: "220+ Accessible Primitives",
        description:
          "Everything from comboboxes, virtualized data tables, date pickers, and charts to toast systems.",
      },
      {
        title: "Multi-Brand Dynamic Theming",
        description:
          "Instant swap between dark/light modes and custom brand palettes with CSS variables.",
      },
      {
        title: "Interactive Storybook Documentation",
        description:
          "Live interactive playground with props editors, keyboard shortcuts guides, and code snippet copy.",
      },
      {
        title: "Zero-Overhead Tailwind Preset",
        description:
          "Installable npm package allowing any React or Next.js app to inherit the design system in seconds.",
      },
    ],
    stats: [
      {
        label: "Component Primitives",
        value: "220+",
        subtext: "Production tested",
      },
      {
        label: "Frontend Speed Boost",
        value: "2.5x",
        subtext: "Faster sprint delivery",
      },
      {
        label: "Accessibility Score",
        value: "100%",
        subtext: "Lighthouse verified",
      },
      {
        label: "Design Debt Cut",
        value: "70%",
        subtext: "Fewer one-off styles",
      },
    ],
    techStackCategorized: [
      {
        category: "Design Tools",
        items: ["Figma", "Figma Tokens", "FigJam", "Penpot"],
      },
      {
        category: "Code Primitives",
        items: [
          "React 19",
          "Radix UI",
          "Tailwind CSS",
          "Class Variance Authority",
        ],
      },
      {
        category: "Documentation",
        items: ["Storybook 8", "MDX", "Docusaurus"],
      },
      {
        category: "Tooling & CI",
        items: ["TypeScript", "Chromatic", "Axe Core", "Changesets"],
      },
    ],
    techStack: [
      "Figma",
      "React",
      "Storybook",
      "Radix UI",
      "Tailwind CSS",
      "TypeScript",
    ],
    gallery: [
      {
        url: "/images/projects/figma-design-system-tokens.jpg",
        title: "Atomic UI Components & Token Palette",
        caption:
          "Production Figma design system canvas showing component variants, color variable tokens, and typography hierarchy.",
      },
    ],
    links: {
      live: "https://example.com/synth-ui",
      github: "https://github.com/info-mdshakeeb/synth-ui",
    },
  },
  {
    id: "5",
    slug: "stride-health-telemedicine",
    title: "Stride Telehealth Platform",
    tagline:
      "HIPAA-compliant video consultations and electronic health record management.",
    description:
      "Secure healthcare platform connecting certified doctors with patients via WebRTC HD video calls, prescription dispatching, and secure chat messaging.",
    category: "Web Apps",
    client: "Stride Healthcare Network",
    clientIndustry: "Digital Health & Clinical Care",
    year: "2023",
    duration: "7 Months",
    thumbnail: "/images/projects/stride-telehealth-dashboard.jpg",
    heroBanner: "/images/projects/stride-telehealth-dashboard.jpg",
    tags: ["Next.js", "WebRTC", "HIPAA", "Tailwind CSS", "Socket.io", "Prisma"],
    featured: false,
    overview:
      "Stride Healthcare sought to modernize rural and outpatient care delivery by offering high-definition remote medical appointments with certified clinicians, encrypted patient file transfers, and automated electronic prescriptions.",
    problem:
      "Patients faced weeks of wait times for basic medical checkups, while doctors struggled with fragmented teleconferencing software that lacked HIPAA medical record synchronization.",
    solution:
      "We engineered Stride as an end-to-end encrypted medical consultation platform built with Next.js, WebRTC mesh video feeds, and an encrypted FHIR-compliant electronic health records repository.",
    architectureHighlights: [
      "Selective Forwarding Unit (SFU) WebRTC video engine optimizing stream bitrate based on patient network stability",
      "End-to-end encryption for video, audio, and stored clinical consultations using AES-256-GCM",
      "Automated pharmacy fulfillment webhook pipeline sending digital prescriptions instantly",
      "HIPAA Business Associate Agreement (BAA) certified AWS cloud architecture",
    ],
    keyFeatures: [
      {
        title: "HD Encrypted Video Consultations",
        description:
          "Zero-install browser video calls with screen sharing, digital whiteboard, and real-time medical note taking.",
      },
      {
        title: "Digital Prescription Dispatch",
        description:
          "Doctors issue e-prescriptions sent directly to the patient's nearest licensed pharmacy.",
      },
      {
        title: "Self-Service Scheduling Calendar",
        description:
          "Automatic calendar reconciliation across physician specialties, availability slots, and timezones.",
      },
      {
        title: "Encrypted Patient Vitals Vault",
        description:
          "Connects with Apple HealthKit and Google Fit to display live blood pressure, glucose, and heart rate vitals during calls.",
      },
    ],
    stats: [
      {
        label: "Consultations Completed",
        value: "120K+",
        subtext: "Across 24 specialties",
      },
      {
        label: "Call Quality SLA",
        value: "99.98%",
        subtext: "Zero dropped connections",
      },
      {
        label: "Patient Satisfaction",
        value: "98%",
        subtext: "Post-appointment surveys",
      },
      {
        label: "Appointment Wait Time",
        value: "<15 Min",
        subtext: "Down from 14 days",
      },
    ],
    techStackCategorized: [
      {
        category: "Web Frontend",
        items: ["Next.js", "React", "Tailwind CSS", "Radix UI", "Lucide React"],
      },
      {
        category: "Realtime & Video",
        items: ["WebRTC", "Socket.io", "Mediasoup SFU", "Twilio API"],
      },
      {
        category: "Backend Services",
        items: ["Node.js", "Express", "Prisma ORM", "FHIR Standard"],
      },
      {
        category: "Cloud & Compliance",
        items: [
          "AWS HIPAA Vault",
          "PostgreSQL (Encrypted)",
          "S3 Glacier",
          "Terraform",
        ],
      },
    ],
    techStack: [
      "Next.js",
      "WebRTC",
      "Socket.io",
      "Tailwind CSS",
      "Prisma",
      "AWS",
    ],
    gallery: [
      {
        url: "/images/projects/stride-telehealth-dashboard.jpg",
        title: "Clinical Consultation & Vitals Portal",
        caption:
          "Web-based telemedicine dashboard showing upcoming video calls, patient vitals, and medical records.",
      },
    ],
    testimonial: {
      quote:
        "Stride transformed the way our clinical network serves patients. The video quality is rock-solid even over rural cellular connections, and compliance audits have been flawless.",
      author: "Dr. Evelyn Reed",
      role: "Medical Director",
      company: "Stride Healthcare Network",
      avatar:
        "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1789760635/mahfuzur_pubklw.jpg",
    },
    links: {
      live: "https://example.com/stride-health",
    },
  },
  {
    id: "6",
    slug: "zenith-crypto-dex",
    title: "Zenith Decentralized Exchange",
    tagline:
      "Ultra-fast automated market maker with cross-chain atomic liquidity routing.",
    description:
      "A high-frequency web3 swapping and liquidity protocol supporting EVM chains with slippage protection, MEV defense, and real-time Candlestick charts.",
    category: "Web Apps",
    client: "Zenith DAO",
    clientIndustry: "Decentralized Finance (DeFi) & Web3",
    year: "2024",
    duration: "5 Months",
    thumbnail: "/images/projects/zenith-crypto-terminal.jpg",
    heroBanner: "/images/projects/zenith-crypto-terminal.jpg",
    tags: ["Web3", "Ethers.js", "Wagmi", "Next.js", "Solidity", "TradingView"],
    featured: true,
    overview:
      "Zenith DAO aimed to create a lightning-fast trading experience for EVM decentralized finance traders, overcoming slow RPC confirmations, front-running bots, and poor mobile crypto UX.",
    problem:
      "Traders on existing AMMs lost thousands to sandwich bot attacks (MEV) and faced high gas fees during volatile periods without advance warning or smart slippage controls.",
    solution:
      "We built Zenith DEX with Next.js, Wagmi, and Viem, integrating private mempool routing (MEV blocker) and real-time WebSocket orderbook depth charts via TradingView libraries.",
    architectureHighlights: [
      "Private mempool transaction broadcasting eliminating MEV front-running and sandwich exploits",
      "Aggregated liquidity routing identifying optimal swap paths across Uniswap, Curve, and Balancer pools",
      "Dynamic gas estimator caching block fees and notifying users of cheaper gas windows",
      "Support for 150+ decentralized wallets via RainbowKit and WalletConnect v2",
    ],
    keyFeatures: [
      {
        title: "Zero-Slippage Atomic Swaps",
        description:
          "Multi-hop routing algorithm executing token swaps across the deepest decentralized liquidity pools.",
      },
      {
        title: "Pro-Grade TradingView Charts",
        description:
          "Sub-second candlestick pricing updates, MACD/RSI indicators, and depth charts.",
      },
      {
        title: "MEV Shielding Protection",
        description:
          "Routes transactions directly to verified validator builders, preventing predatory bots from taking slippage.",
      },
      {
        title: "Decentralized Limit Orders",
        description:
          "Off-chain signed orders executed automatically on-chain when target price thresholds are met.",
      },
    ],
    stats: [
      {
        label: "Total Value Locked",
        value: "$85M+",
        subtext: "Across 4 EVM chains",
      },
      {
        label: "Gas Cost Optimized",
        value: "24%",
        subtext: "Savings per transaction",
      },
      {
        label: "Avg Execution Speed",
        value: "1.2s",
        subtext: "Block inclusion time",
      },
      {
        label: "Cumulative Volume",
        value: "$420M+",
        subtext: "Traded to date",
      },
    ],
    techStackCategorized: [
      {
        category: "Web3 Frontend",
        items: ["Next.js 15", "Wagmi", "Viem", "RainbowKit", "TradingView"],
      },
      {
        category: "Smart Contracts",
        items: ["Solidity 0.8.24", "Foundry", "OpenZeppelin", "Hardhat"],
      },
      {
        category: "Indexers & Data",
        items: ["The Graph", "Alchemy RPC", "Etherscan API", "Socket.io"],
      },
      {
        category: "Auditing & Security",
        items: ["CertiK", "Slither", "Mythril", "OpenZeppelin Defender"],
      },
    ],
    techStack: [
      "Next.js",
      "Wagmi",
      "Viem",
      "Tailwind CSS",
      "TradingView",
      "Solidity",
    ],
    gallery: [
      {
        url: "/images/projects/zenith-crypto-terminal.jpg",
        title: "Pro Trading Terminal & Token Swap",
        caption:
          "Live candlestick charts, order book depth, and decentralized token swap interface with connected Web3 wallet.",
      },
    ],
    testimonial: {
      quote:
        "The interface is so silky and responsive that our community often forgets they are interacting with on-chain smart contracts. Synth-ko set a new benchmark for DeFi UX.",
      author: "Kaelen Voss",
      role: "Lead Contributor",
      company: "Zenith DAO",
      avatar:
        "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1789758023/shakeeb_pebhkn.jpg",
    },
    links: {
      live: "https://example.com/zenith-dex",
      github: "https://github.com/info-mdshakeeb/zenith-dex",
    },
  },
  {
    id: "7",
    slug: "finsync-financial-app",
    title: "FinSync — Mobile Banking UX Case Study",
    tagline:
      "End-to-end product design process transforming multi-account banking into a clean mobile experience.",
    description:
      "A complete UX design case study covering user research, persona creation, user flows, low-fidelity wireframing, and interactive Figma prototyping for a modern neo-banking app.",
    category: "UI/UX Design",
    client: "FinSync Technologies",
    clientIndustry: "Consumer FinTech & Neo-Banking",
    year: "2024",
    duration: "4 Months",
    thumbnail: "/images/projects/figma-ux-wireframe-flow.jpg",
    heroBanner: "/images/projects/figma-ux-wireframe-flow.jpg",
    tags: [
      "Figma",
      "UX Research",
      "Wireframing",
      "Interactive Prototype",
      "User Journey",
      "Design System",
    ],
    featured: true,
    overview:
      "FinSync is a modern mobile financial application engineered to help users effortlessly manage bank accounts, cards, and instant peer transfers through a verified 5-stage UX design process.",
    problem:
      "Traditional banking apps suffer from cluttered menus, confusing multi-screen transfer flows, and lack of visual spending intelligence, leading to high abandonment rates.",
    solution:
      "We executed a comprehensive UX case study in Figma: from user interviews and low-fidelity wireframing to high-fidelity clickable prototypes with smart animation.",
    architectureHighlights: [
      "Comprehensive 5-stage UX methodology: Discovery, User Flows, Lo-Fi, Hi-Fi, Usability Testing",
      "Atomic design token taxonomy for typography, color palette, and component variants",
      "Interactive Figma prototype with smart animate transitions and haptic feedback specs",
      "94/100 System Usability Scale (SUS) score validated across 40 user test participants",
    ],
    keyFeatures: [
      {
        title: "End-to-End UX Process Canvas",
        description:
          "Detailed design journey documenting empathy mapping, user flow charts, wireframes, and final screens.",
      },
      {
        title: "Instant 2-Step Peer Transfers",
        description:
          "Frictionless money transfer flow reducing task completion time from 28s down to 4.2s.",
      },
      {
        title: "Figma Component Library",
        description:
          "Over 160+ reusable components and 780+ variants built with Figma Auto Layout 5.0.",
      },
      {
        title: "Visual Spending Analytics",
        description:
          "Color-coded budget curves and transaction intelligence validated with target users.",
      },
    ],
    stats: [
      { label: "Usability Score", value: "94/100", subtext: "SUS validated" },
      { label: "Task Completion", value: "96.4%", subtext: "During user tests" },
      { label: "Mobile Screens", value: "48+", subtext: "Crafted in Figma" },
      { label: "Transfer Time", value: "4.2s", subtext: "Reduced from 28s" },
    ],
    techStackCategorized: [
      {
        category: "Design & Prototyping",
        items: ["Figma", "FigJam", "Principle", "Tokens Studio"],
      },
      {
        category: "Research & Testing",
        items: ["Maze", "Notion", "Hotjar", "UserTesting"],
      },
    ],
    techStack: ["Figma", "FigJam", "Maze", "Principle"],
    gallery: [
      {
        url: "/images/projects/figma-ux-wireframe-flow.jpg",
        title: "Complete UX Case Study Canvas",
        caption: "Figma UX case study board mapping the entire design thinking process.",
      },
      {
        url: "/images/projects/finpulse-banking-app.jpg",
        title: "High-Fidelity Production UI",
        caption: "Polished iOS mobile banking interface showing NeoCard Platinum and spending analytics.",
      },
    ],
    testimonial: {
      quote:
        "The level of user research and design precision delivered in this case study was extraordinary. The interactive Figma prototype allowed us to pitch directly to Series A investors.",
      author: "Dominic Torres",
      role: "Co-Founder & CEO",
      company: "FinSync Technologies",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
    links: {
      live: "https://www.figma.com/@synth-ko",
      github: "https://www.figma.com/proto/finsync-mobile-banking",
    },
  },
];

export const PROJECT_METRICS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "99.2%", label: "Client Satisfaction" },
  { value: "12+", label: "Global Industry Awards" },
  { value: "500K+", label: "Active End Users" },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS_DATA.find((p) => p.slug === slug);
}

export function getNextAndPrevProject(slug: string) {
  const currentIndex = PROJECTS_DATA.findIndex((p) => p.slug === slug);
  if (currentIndex === -1) return { prev: null, next: null };

  const prevIndex =
    (currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
  const nextIndex = (currentIndex + 1) % PROJECTS_DATA.length;

  return {
    prev: PROJECTS_DATA[prevIndex],
    next: PROJECTS_DATA[nextIndex],
  };
}

export * from "./figma-case-studies.data";
export * from "./figma-case-studies.type";

