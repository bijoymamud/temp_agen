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
    slug: "nexus-cloud-erp",
    title: "Nexus Enterprise ERP",
    tagline: "Next-generation ERP & resource planning suite for global distributed teams.",
    description:
      "A mission-critical enterprise resource planning platform engineered with Next.js, GraphQL, and microservices architecture. Coordinates financial accounting, automated payroll, and multi-tenant inventory.",
    category: "SaaS",
    client: "Nexus Global Inc.",
    clientIndustry: "Enterprise Supply Chain & Logistics",
    year: "2024",
    duration: "6 Months",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    heroBanner:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    tags: ["Next.js 15", "TypeScript", "GraphQL", "Tailwind CSS", "PostgreSQL", "Docker"],
    featured: true,
    overview:
      "Nexus Global needed a unified digital operating backbone to replace 4 legacy fragmented software silos across their European and North American operational hubs. The goal was sub-second financial reconciliations, instant inventory synching, and strict SOC2-compliant role governance.",
    problem:
      "The client was experiencing data discrepancies across disconnected ERP modules, manual export/import delays averaging 18 hours weekly, and frequent bottlenecks during end-of-month reconciliations affecting 45,000 internal enterprise users.",
    solution:
      "We engineered an event-driven microservices architecture fronted by Next.js and Turbopack. We implemented Redis pub/sub for real-time ledger updates, GraphQL federated gateways for unified entity resolution, and dynamic TanStack tables capable of rendering 100k+ rows with smooth virtualized scrolling.",
    architectureHighlights: [
      "Distributed event bus powered by Redis Streams and Apache Kafka for asynchronous ledger ingestion",
      "Multi-tenant data isolation with dynamic row-level security policies in PostgreSQL",
      "Federated GraphQL API layer caching responses at cloud edge nodes with Redis",
      "Automated CI/CD deployment pipelines on Kubernetes with zero-downtime rolling upgrades",
    ],
    keyFeatures: [
      {
        title: "Multi-Currency Automated Ledger",
        description:
          "Real-time exchange rate ingestion with automated double-entry ledger bookkeeping and one-click reconciliation reports.",
      },
      {
        title: "Predictive Inventory Replenishment",
        description:
          "Machine learning algorithms forecasting stock depletion thresholds and generating automated purchase requests.",
      },
      {
        title: "Granular RBAC & Audit Trails",
        description:
          "Tamper-proof audit logs recording every financial mutation with biometric authorization prompts for high-value transactions.",
      },
      {
        title: "Executive Observability Dashboard",
        description:
          "Interactive analytics visualizing cash flows, burn rates, warehouse throughput, and employee performance in real-time.",
      },
    ],
    stats: [
      { label: "Active Enterprise Users", value: "45K+", subtext: "Across 14 countries" },
      { label: "Ledger Mutation Latency", value: "<120ms", subtext: "99th percentile" },
      { label: "Monthly Operational Savings", value: "34%", subtext: "Verified ROI" },
      { label: "System Uptime", value: "99.98%", subtext: "Over 12 consecutive months" },
    ],
    techStackCategorized: [
      { category: "Frontend", items: ["Next.js 15", "React 19", "Tailwind CSS", "TanStack Table", "Framer Motion"] },
      { category: "Backend & API", items: ["Node.js", "GraphQL Federation", "Apollo Server", "Express"] },
      { category: "Database & Caching", items: ["PostgreSQL", "Prisma ORM", "Redis Streams", "TimescaleDB"] },
      { category: "DevOps & Cloud", items: ["Docker", "Kubernetes", "AWS ECS", "Terraform", "GitHub Actions"] },
    ],
    techStack: ["Next.js", "React 19", "Tailwind CSS", "Node.js", "PostgreSQL", "Redis", "GraphQL"],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        title: "Unified Financial Operations Console",
        caption: "High-density ledger reconciliation screen with virtualized rows and automated discrepancy flags.",
      },
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        title: "Real-Time Warehouse Stock Telemetry",
        caption: "Global supply chain tracking overview showing live transit checkpoints and inventory levels.",
      },
      {
        url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop",
        title: "Executive KPI & Cashflow Engine",
        caption: "Comprehensive performance overview delivering predictive forecasts and expenditure tracking.",
      },
    ],
    testimonial: {
      quote:
        "Synth-ko did not just build an ERP; they transformed our business operations. What previously took our accounting staff 3 days every month is now reconciled in under 4 minutes.",
      author: "Marcus Vance",
      role: "VP of Digital Operations",
      company: "Nexus Global Inc.",
      avatar: "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1789760364/rafi_ntmx5q.jpg",
    },
    links: {
      live: "https://example.com/nexus-erp",
      github: "https://github.com/info-mdshakeeb/nexus-erp",
    },
  },
  {
    id: "2",
    slug: "aurora-ai-analytics",
    title: "Aurora AI Intelligence Hub",
    tagline: "Autonomous telemetry, predictive model deployment, and real-time observability.",
    description:
      "An AI-powered operational copilot that ingests millions of telemetry data points to forecast system degradation, detect infrastructure anomalies, and suggest automated remediation workflows.",
    category: "AI & Cloud",
    client: "HyperScale Cloud Systems",
    clientIndustry: "Cloud Infrastructure & SRE Tooling",
    year: "2024",
    duration: "4 Months",
    thumbnail:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    heroBanner:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop",
    tags: ["Python", "FastAPI", "React", "Docker", "PyTorch", "Kubernetes", "Vector DB"],
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
      { label: "MTTR Reduction", value: "58%", subtext: "Mean time to resolution" },
      { label: "Events Ingested / Sec", value: "2.4M", subtext: "Continuous telemetry" },
      { label: "False Positives Cut", value: "81%", subtext: "Compared to legacy rules" },
    ],
    techStackCategorized: [
      { category: "Frontend & UI", items: ["React", "TypeScript", "Tailwind CSS", "Cytoscape.js", "Lucide React"] },
      { category: "AI & Machine Learning", items: ["PyTorch", "Hugging Face", "ChromaDB", "LangChain", "NumPy"] },
      { category: "Backend & Ingestion", items: ["FastAPI", "Python 3.12", "Celery", "Kafka", "TimescaleDB"] },
      { category: "Infrastructure", items: ["Kubernetes", "Helm", "Docker", "Prometheus", "Grafana"] },
    ],
    techStack: ["React", "FastAPI", "Python", "Kubernetes", "PyTorch", "TimescaleDB", "ChromaDB"],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
        title: "Live Microservice Anomaly Radar",
        caption: "Real-time cluster telemetry monitoring highlighting anomalous latency deviations.",
      },
      {
        url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
        title: "Automated Incident Root Cause Summary",
        caption: "AI-generated contextual breakdown explaining root cause factors and remediation options.",
      },
      {
        url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
        title: "Cluster Topology & Mesh Traffic Visualizer",
        caption: "Service graph showing live throughput, error rates, and inter-service dependencies.",
      },
    ],
    testimonial: {
      quote:
        "Aurora AI transformed our engineering culture. During our Black Friday traffic surge, it caught three subtle database connection deadlocks before any customer experienced a dropped basket.",
      author: "Elena Rostova",
      role: "Chief Architect",
      company: "HyperScale Cloud Systems",
      avatar: "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1789758023/khairul_kpeizm.jpg",
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
    tagline: "Next-gen cross-platform digital banking with zero-fee cross-border payments.",
    description:
      "A fluid, high-security mobile neo-banking client with instant virtual card issuance, peer-to-peer lightning payments, biometrics authentication, and budgeting AI.",
    category: "Mobile Apps",
    client: "FinPulse Financial UK",
    clientIndustry: "Consumer FinTech & Banking",
    year: "2024",
    duration: "5 Months",
    thumbnail:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    heroBanner:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1600&auto=format&fit=crop",
    tags: ["React Native", "Expo", "TypeScript", "Node.js", "Stripe API", "Zustand"],
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
      { label: "App Store Rating", value: "4.9 ★", subtext: "Over 28,000 reviews" },
      { label: "Monthly Transfer Volume", value: "$18M+", subtext: "Processed securely" },
      { label: "KYC Account Onboarding", value: "30 Sec", subtext: "Automated verification" },
      { label: "Active Mobile Users", value: "180K+", subtext: "In UK & European Union" },
    ],
    techStackCategorized: [
      { category: "Mobile Core", items: ["React Native", "Expo SDK 52", "TypeScript", "Reanimated 3", "React Navigation"] },
      { category: "Backend Services", items: ["Node.js", "Fastify", "Stripe Connect API", "Plaid API"] },
      { category: "Data & Storage", items: ["PostgreSQL", "Redis", "SQLite (Offline)", "AWS KMS"] },
      { category: "Security & Testing", items: ["SecureEnclave", "Detox E2E", "Jest", "Appium"] },
    ],
    techStack: ["React Native", "Expo", "TypeScript", "Stripe", "Node.js", "Zustand"],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
        title: "Digital Multi-Currency Wallet",
        caption: "Sleek card visualizer with real-time balance conversion across 32 currencies.",
      },
      {
        url: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
        title: "Interactive Transaction History",
        caption: "Categorized expenses and live spending trend analytics with search filtering.",
      },
      {
        url: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=1200&auto=format&fit=crop",
        title: "Instant Virtual Card Generator",
        caption: "Frictionless card freeze, spending limit settings, and digital issuance.",
      },
    ],
    testimonial: {
      quote:
        "The Synth-ko engineering team exceeded every expectation. Our users constantly praise how snappy and intuitive the app feels compared to major high street banks.",
      author: "David Sterling",
      role: "Founder & CEO",
      company: "FinPulse Financial UK",
      avatar: "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1789758023/shakeeb_pebhkn.jpg",
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
    tagline: "Unified atomic component library and token architecture for multi-brand apps.",
    description:
      "A comprehensive design system comprising over 200+ accessible primitives, dark/light token palettes, interactive Figma variants, and zero-runtime Tailwind presets.",
    category: "UI/UX Design",
    client: "Synth-ko Labs",
    clientIndustry: "Design Tooling & Developer Experience",
    year: "2023",
    duration: "3 Months",
    thumbnail:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    heroBanner:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1600&auto=format&fit=crop",
    tags: ["Figma", "Design Tokens", "Radix UI", "Tailwind CSS", "Storybook", "TypeScript"],
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
      { label: "Component Primitives", value: "220+", subtext: "Production tested" },
      { label: "Frontend Speed Boost", value: "2.5x", subtext: "Faster sprint delivery" },
      { label: "Accessibility Score", value: "100%", subtext: "Lighthouse verified" },
      { label: "Design Debt Cut", value: "70%", subtext: "Fewer one-off styles" },
    ],
    techStackCategorized: [
      { category: "Design Tools", items: ["Figma", "Figma Tokens", "FigJam", "Penpot"] },
      { category: "Code Primitives", items: ["React 19", "Radix UI", "Tailwind CSS", "Class Variance Authority"] },
      { category: "Documentation", items: ["Storybook 8", "MDX", "Docusaurus"] },
      { category: "Tooling & CI", items: ["TypeScript", "Chromatic", "Axe Core", "Changesets"] },
    ],
    techStack: ["Figma", "React", "Storybook", "Radix UI", "Tailwind CSS", "TypeScript"],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
        title: "Design Token Variable Matrix",
        caption: "Figma variable collections synchronized directly with Tailwind theme variables.",
      },
      {
        url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop",
        title: "Accessible Component Gallery",
        caption: "Storybook interactive workbench validating keyboard accessibility across dark and light modes.",
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
    tagline: "HIPAA-compliant video consultations and electronic health record management.",
    description:
      "Secure healthcare platform connecting certified doctors with patients via WebRTC HD video calls, prescription dispatching, and secure chat messaging.",
    category: "Web Apps",
    client: "Stride Healthcare Network",
    clientIndustry: "Digital Health & Clinical Care",
    year: "2023",
    duration: "7 Months",
    thumbnail:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    heroBanner:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1600&auto=format&fit=crop",
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
      { label: "Consultations Completed", value: "120K+", subtext: "Across 24 specialties" },
      { label: "Call Quality SLA", value: "99.98%", subtext: "Zero dropped connections" },
      { label: "Patient Satisfaction", value: "98%", subtext: "Post-appointment surveys" },
      { label: "Appointment Wait Time", value: "<15 Min", subtext: "Down from 14 days" },
    ],
    techStackCategorized: [
      { category: "Web Frontend", items: ["Next.js", "React", "Tailwind CSS", "Radix UI", "Lucide React"] },
      { category: "Realtime & Video", items: ["WebRTC", "Socket.io", "Mediasoup SFU", "Twilio API"] },
      { category: "Backend Services", items: ["Node.js", "Express", "Prisma ORM", "FHIR Standard"] },
      { category: "Cloud & Compliance", items: ["AWS HIPAA Vault", "PostgreSQL (Encrypted)", "S3 Glacier", "Terraform"] },
    ],
    techStack: ["Next.js", "WebRTC", "Socket.io", "Tailwind CSS", "Prisma", "AWS"],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
        title: "Clinician Live Video Interface",
        caption: "Doctor view featuring split-screen video call alongside patient medical history and prescription tools.",
      },
      {
        url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop",
        title: "Patient Appointment & Vitals Portal",
        caption: "Mobile-responsive patient dashboard showing upcoming visits and wearable health diagnostics.",
      },
    ],
    testimonial: {
      quote:
        "Stride transformed the way our clinical network serves patients. The video quality is rock-solid even over rural cellular connections, and compliance audits have been flawless.",
      author: "Dr. Evelyn Reed",
      role: "Medical Director",
      company: "Stride Healthcare Network",
      avatar: "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1789760635/mahfuzur_pubklw.jpg",
    },
    links: {
      live: "https://example.com/stride-health",
    },
  },
  {
    id: "6",
    slug: "zenith-crypto-dex",
    title: "Zenith Decentralized Exchange",
    tagline: "Ultra-fast automated market maker with cross-chain atomic liquidity routing.",
    description:
      "A high-frequency web3 swapping and liquidity protocol supporting EVM chains with slippage protection, MEV defense, and real-time Candlestick charts.",
    category: "Web Apps",
    client: "Zenith DAO",
    clientIndustry: "Decentralized Finance (DeFi) & Web3",
    year: "2024",
    duration: "5 Months",
    thumbnail:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop",
    heroBanner:
      "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1600&auto=format&fit=crop",
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
      { label: "Total Value Locked", value: "$85M+", subtext: "Across 4 EVM chains" },
      { label: "Gas Cost Optimized", value: "24%", subtext: "Savings per transaction" },
      { label: "Avg Execution Speed", value: "1.2s", subtext: "Block inclusion time" },
      { label: "Cumulative Volume", value: "$420M+", subtext: "Traded to date" },
    ],
    techStackCategorized: [
      { category: "Web3 Frontend", items: ["Next.js 15", "Wagmi", "Viem", "RainbowKit", "TradingView"] },
      { category: "Smart Contracts", items: ["Solidity 0.8.24", "Foundry", "OpenZeppelin", "Hardhat"] },
      { category: "Indexers & Data", items: ["The Graph", "Alchemy RPC", "Etherscan API", "Socket.io"] },
      { category: "Auditing & Security", items: ["CertiK", "Slither", "Mythril", "OpenZeppelin Defender"] },
    ],
    techStack: ["Next.js", "Wagmi", "Viem", "Tailwind CSS", "TradingView", "Solidity"],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop",
        title: "Pro Trading & Swap Interface",
        caption: "Integrated TradingView chart with instant token swap terminal and slippage setting controls.",
      },
      {
        url: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1200&auto=format&fit=crop",
        title: "Liquidity Pool & Yield Farming Console",
        caption: "User LP position management showing real-time fees earned and APR breakdown.",
      },
    ],
    testimonial: {
      quote:
        "The interface is so silky and responsive that our community often forgets they are interacting with on-chain smart contracts. Synth-ko set a new benchmark for DeFi UX.",
      author: "Kaelen Voss",
      role: "Lead Contributor",
      company: "Zenith DAO",
      avatar: "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1789758023/shakeeb_pebhkn.jpg",
    },
    links: {
      live: "https://example.com/zenith-dex",
      github: "https://github.com/info-mdshakeeb/zenith-dex",
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

  const prevIndex = (currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
  const nextIndex = (currentIndex + 1) % PROJECTS_DATA.length;

  return {
    prev: PROJECTS_DATA[prevIndex],
    next: PROJECTS_DATA[nextIndex],
  };
}
