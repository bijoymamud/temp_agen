import {
  Award,
  BarChart,
  BookOpen,
  Briefcase,
  Code,
  FileText,
  Globe,
  Layers,
  Lightbulb,
  MessageCircle,
  Microscope,
  Palette,
  Repeat,
  Rocket,
  Search,
  Shield,
  Target,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

//! client journey map
export const journeySteps = [
  {
    title: "Discovery",
    description: "Initial consultation and project scoping",
    outcomes: ["Project brief", "Initial timeline", "Budget estimate"],
  },
  {
    title: "Planning",
    description: "Detailed project planning and strategy development",
    outcomes: [
      "Project roadmap",
      "Technical specifications",
      "Design concepts",
    ],
  },
  {
    title: "Design",
    description: "Creating the visual and interactive elements",
    outcomes: ["Wireframes", "UI designs", "Prototype"],
  },
  {
    title: "Development",
    description: "Building the website or application",
    outcomes: ["Frontend code", "Backend systems", "Content integration"],
  },
  {
    title: "Testing",
    description: "Rigorous quality assurance and user testing",
    outcomes: ["Bug fixes", "Performance optimization", "User feedback"],
  },
  {
    title: "Launch",
    description: "Deploying the project and going live",
    outcomes: ["Site deployment", "Final checks", "Handover documents"],
  },
];

//! ProcessFlow data
export const steps = [
  {
    title: "Consultation",
    description: "A  consultation to understand your needs and goals.",
  },
  {
    title: "Strategy",
    description: "A tailored strategy to achieve your objectives.",
  },
  {
    title: "Execution",
    description:
      "We implement the strategy with precision and attention to detail.",
  },
  {
    title: "Refinement",
    description: " Refine and optimize to ensure the best results.",
  },
];

//! ProjectShowcase data
export const projects = [
  {
    name: "E-commerce Platform",
    description:
      "A fully responsive e-commerce platform with advanced search and filtering capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "PostgreSQL"],
    results: [
      "50% increase in conversion rate",
      "30% reduction in page load time",
    ],
  },
  {
    name: "Social Media Dashboard",
    description:
      "A comprehensive dashboard for managing multiple social media accounts with analytics.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    results: [
      "40% improvement in engagement metrics",
      "25% increase in client retention",
    ],
  },
  {
    name: "Real Estate Listing App",
    description:
      "A mobile-first web application for browsing and managing real estate listings.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React Native", "GraphQL", "AWS", "Elasticsearch"],
    results: ["60% faster property search", "35% increase in lead generation"],
  },
];

//! TeamCollaboration data
export const teamMembers = [
  {
    name: "Al Mamud Bijoy",
    role: "Frontend Developer",
    avatar: "https://i.ibb.co.com/R4DQDT7X/image-12.jpg?height=100&width=100",
  },
  {
    name: "Md Shakeeb",
    role: "Mern-Stack Developer",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Kawsar Hossain Suzan ",
    role: "Mobile App Developer",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Raihan Rafi",
    role: "Mobile App Developer",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Nilutpal Majumder",
    role: "UI/UX Designer",
    avatar: "https://i.ibb.co.com/mVdBJH5d/Image-14.jpg",
  },
  {
    name: "Khairul Kabir",
    role: "Data Scientist",
    avatar: "https://i.ibb.co.com/Sgqj6CP/freepik-skin-enhancer-42171.jpg",
  },

];

//! timeline data
export const developmentProcess = [
  {
    phase: "Inception and Planning",
    steps: [
      {
        icon: <Lightbulb className="w-6 h-6" />,
        title: "Concept Ideation",
        description:
          "Generate innovative website concepts, focusing on unique value propositions. Conduct thorough market research to identify gaps and opportunities.",
        skills: ["Creative Thinking", "Market Analysis", "Trend Forecasting"],
      },
      {
        icon: <Target className="w-6 h-6" />,
        title: "Goal Definition",
        description:
          "Clearly define project objectives, target audience, and key success metrics. Establish a vision statement to guide the development process.",
        skills: ["Strategic Planning", "Goal Setting", "Audience Segmentation"],
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Stakeholder Alignment",
        description:
          "Organize workshops with key stakeholders to align on project goals and vision. Establish communication channels and reporting structures.",
        skills: [
          "Stakeholder Management",
          "Workshop Facilitation",
          "Communication Planning",
        ],
      },
      {
        icon: <Briefcase className="w-6 h-6" />,
        title: "Resource Allocation",
        description:
          "Assess and allocate necessary resources, including team members, budget, and technologies. Identify potential constraints and plan mitigation strategies.",
        skills: ["Resource Management", "Budgeting", "Risk Assessment"],
      },
    ],
  },
  {
    phase: "Research and Analysis",
    steps: [
      {
        icon: <Search className="w-6 h-6" />,
        title: "Market Research",
        description:
          "Conduct in-depth market analysis, including competitor benchmarking and industry trend identification. Gather insights on user preferences and pain points.",
        skills: ["Competitive Analysis", "Trend Analysis", "User Research"],
      },
      {
        icon: <Microscope className="w-6 h-6" />,
        title: "User Research",
        description:
          "Perform comprehensive user research through surveys, interviews, and focus groups. Develop detailed user personas and journey maps.",
        skills: ["User Interviews", "Survey Design", "Persona Creation"],
      },
      {
        icon: <BarChart className="w-6 h-6" />,
        title: "Data Analysis",
        description:
          "Analyze collected data to derive actionable insights. Use predictive modeling to forecast user behavior and market trends.",
        skills: ["Data Analysis", "Statistical Modeling", "Insight Generation"],
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: "Technology Assessment",
        description:
          "Evaluate potential technologies and frameworks. Conduct feasibility studies for proposed technical solutions.",
        skills: [
          "Tech Stack Evaluation",
          "Feasibility Analysis",
          "Performance Benchmarking",
        ],
      },
    ],
  },
  {
    phase: "Design and Prototyping",
    steps: [
      {
        icon: <Layers className="w-6 h-6" />,
        title: "Information Architecture",
        description:
          "Develop the site's structure and organization. Create sitemaps and user flows to optimize navigation and content hierarchy.",
        skills: ["Sitemap Creation", "User Flow Mapping", "Content Strategy"],
      },
      {
        icon: <Palette className="w-6 h-6" />,
        title: "UI/UX Design",
        description:
          "Create wireframes, mockups, and interactive prototypes. Develop a comprehensive design system for consistent implementation.",
        skills: ["Wireframing", "Prototyping", "Design Systems"],
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Accessibility Planning",
        description:
          "Incorporate accessibility considerations into the design process. Ensure compliance with WCAG guidelines and other accessibility standards.",
        skills: [
          "Accessibility Standards",
          "Inclusive Design",
          "WCAG Compliance",
        ],
      },
      {
        icon: <MessageCircle className="w-6 h-6" />,
        title: "User Testing",
        description:
          "Conduct usability testing sessions with target users. Gather feedback and iterate on designs based on user insights.",
        skills: [
          "Usability Testing",
          "User Feedback Analysis",
          "Iterative Design",
        ],
      },
    ],
  },
  {
    phase: "Development and Implementation",
    steps: [
      {
        icon: <FileText className="w-6 h-6" />,
        title: "Project Planning",
        description:
          "Develop a detailed project plan, including sprints, milestones, and deliverables. Set up project management tools and define development workflows.",
        skills: [
          "Agile Methodologies",
          "Sprint Planning",
          "Task Prioritization",
        ],
      },
      {
        icon: <Code className="w-6 h-6" />,
        title: "Development",
        description:
          "Implement front-end and back-end development. Integrate third-party APIs and services. Set up CI/CD pipelines for efficient deployment.",
        skills: [
          "Front-end Development",
          "Back-end Development",
          "API Integration",
          "CI/CD",
        ],
      },
      {
        icon: <Globe className="w-6 h-6" />,
        title: "Content Creation",
        description:
          "Develop and integrate website content, including text, images, and multimedia elements. Implement SEO best practices for content optimization.",
        skills: [
          "Content Writing",
          "SEO Optimization",
          "Multimedia Integration",
        ],
      },
      {
        icon: <BookOpen className="w-6 h-6" />,
        title: "Documentation",
        description:
          "Create comprehensive technical documentation, user manuals, and API documentation. Establish a knowledge base for ongoing maintenance and support.",
        skills: [
          "Technical Writing",
          "API Documentation",
          "Knowledge Management",
        ],
      },
    ],
  },
  {
    phase: "Testing and Launch",
    steps: [
      {
        icon: <Repeat className="w-6 h-6" />,
        title: "Quality Assurance",
        description:
          "Conduct thorough testing, including functional, performance, security, and cross-browser compatibility tests. Implement automated testing where possible.",
        skills: ["Test Planning", "Automated Testing", "Bug Tracking"],
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Security Audit",
        description:
          "Perform comprehensive security audits and penetration testing. Address vulnerabilities and implement security best practices.",
        skills: [
          "Security Testing",
          "Vulnerability Assessment",
          "Compliance Checks",
        ],
      },
      {
        icon: <Rocket className="w-6 h-6" />,
        title: "Launch Preparation",
        description:
          "Prepare marketing materials and launch strategies. Set up analytics and monitoring tools. Plan and execute a phased rollout strategy.",
        skills: [
          "Launch Strategy",
          "Marketing Coordination",
          "Analytics Setup",
        ],
      },
      {
        icon: <Award className="w-6 h-6" />,
        title: "Post-Launch Evaluation",
        description:
          "Monitor initial user feedback and performance metrics. Conduct a post-launch review to identify areas for immediate improvement.",
        skills: [
          "Performance Monitoring",
          "User Feedback Analysis",
          "Rapid Iteration",
        ],
      },
    ],
  },
  {
    phase: "Maintenance and Growth",
    steps: [
      {
        icon: <Wrench className="w-6 h-6" />,
        title: "Ongoing Maintenance",
        description:
          "Implement regular updates and security patches. Monitor and optimize website performance. Provide continuous user support and issue resolution.",
        skills: [
          "Performance Optimization",
          "Security Updates",
          "User Support",
        ],
      },
      {
        icon: <BarChart className="w-6 h-6" />,
        title: "Analytics and Reporting",
        description:
          "Analyze user behavior and website performance data. Generate regular reports on key metrics and insights for stakeholders.",
        skills: [
          "Data Analysis",
          "Performance Reporting",
          "Insight Generation",
        ],
      },
      {
        icon: <Repeat className="w-6 h-6" />,
        title: "Continuous Improvement",
        description:
          "Regularly gather and analyze user feedback. Identify opportunities for feature enhancements and optimizations. Implement iterative improvements.",
        skills: [
          "Feature Prioritization",
          "A/B Testing",
          "User-Centered Design",
        ],
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: "Innovation and Scaling",
        description:
          "Stay updated on emerging technologies and industry trends. Plan and implement innovative features to keep the website competitive and scalable.",
        skills: [
          "Technology Forecasting",
          "Scalability Planning",
          "Innovation Management",
        ],
      },
    ],
  },
];
