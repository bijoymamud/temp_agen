import { ICategory, IFaqItem } from "./about-us.type";

//! 1. the our-team component in the about-us page.
export const ContactUsTestimonials = [
  {
    quote:
      "Leading our strategic vision to build cutting-edge solutions, scale our agency, and empower teams through innovative technology.",
    name: "Raihan Rafi",
    designation: "CEO",
    src: "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1789760364/rafi_ntmx5q.jpg",
  },
  {
    quote:
      "Fostering strategic partnerships and innovation to drive long-term business growth and sustainable impact across industries.",
    name: "Shakeebul Islam",
    designation: "Co Founder & Software Engineer",
    src: "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1789758023/shakeeb_pebhkn.jpg",
  },
  {
    quote:
      "Developing state-of-the-art AI algorithms, predictive models, and scalable machine learning workflows that solve complex challenges.",
    name: "Khairul Kabir",
    designation: "Machine Learning Engineer",
    src: "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1789758023/khairul_kpeizm.jpg",
  },
  {
    quote:
      "Architecting resilient full-stack systems and performant modern web applications with seamless user experiences.",
    name: "Tamim Ahmed",
    designation: "Full-Stack Developer",
    src: "/images/team/tamim.jpg",
  },
  {
    quote:
      "Designing human-centered interfaces and intuitive design systems that bridge technology and elegance.",
    name: "Nilutpal Majumder",
    designation: "UI/UX Design",
    src: "/images/team/nilutpal-maj.png",
  },
  {
    quote:
      "Managing robust cloud infrastructure, automated CI/CD pipelines, and ensuring 99.9% uptime and reliability.",
    name: "Mahfuzur Rahman",
    designation: "Cloud & DevOps Engineer",
    src: "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1789760635/mahfuzur_pubklw.jpg",
  },
];
//? end data for our-team components

//! 2. Start data for the -> Faq component
export const ContactUsFaqCategories: ICategory[] = [
  { id: "services", name: "Our Services" },
  { id: "partnerships", name: "Partnerships" },
  { id: "billing", name: "Billing & Payments" },
  { id: "support", name: "Support & Policies" },
];

export const ContactUsFaqData: Record<string, IFaqItem[]> = {
  services: [
    {
      question: "What services do you offer for agencies?",
      answer:
        "We provide a range of services tailored for agencies, including digital marketing, web design, content creation, and analytics reporting.",
    },
    {
      question: "Can you handle custom projects?",
      answer:
        "Yes, we specialize in custom projects that align with your agency's unique requirements. Contact us to discuss your needs.",
    },
    {
      question: "Do you provide white-label services?",
      answer:
        "Absolutely. Our white-label services allow you to offer our solutions under your agency's brand, maintaining your client relationships seamlessly.",
    },
    {
      question: "Are your services scalable?",
      answer:
        "Yes, our services are designed to scale with your agency’s growth, ensuring consistent quality as your client base expands.",
    },
  ],
  partnerships: [
    {
      question: "How can we partner with your agency?",
      answer:
        "We welcome partnership opportunities! Reach out to us via our 'Partnerships' page to explore how we can collaborate.",
    },
    {
      question: "Do you offer referral programs?",
      answer:
        "Yes, we have a referral program that rewards you for bringing in new clients. Details are available on our website.",
    },
    {
      question: "Can we integrate your services into our existing workflow?",
      answer:
        "Yes, we ensure our services are compatible with your current systems and can provide integration support if needed.",
    },
    {
      question: "Are there any long-term contracts required?",
      answer:
        "We offer flexible plans with no long-term commitments, allowing agencies to work with us on a project-by-project basis.",
    },
  ],
  billing: [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards, wire transfers, and PayPal for your convenience.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "Yes, we provide payment plans for larger projects to accommodate your budgeting needs.",
    },
    {
      question: "What should I do if there’s an issue with my invoice?",
      answer:
        "If you encounter any issues with your invoice, please contact our billing department immediately for assistance.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "No, we believe in transparency. All costs are outlined clearly in our proposals and agreements.",
    },
  ],
  support: [
    {
      question: "How can I reach customer support?",
      answer:
        "Our customer support team is available via email, phone, and live chat. Visit our 'Contact Us' page for details.",
    },
    {
      question: "Do you offer training for agency staff?",
      answer:
        "Yes, we provide training sessions to help your team understand and utilize our services effectively.",
    },
    {
      question: "What happens if a project is delayed?",
      answer:
        "We strive to meet deadlines, but in case of delays, we’ll communicate promptly and work with you to adjust timelines as needed.",
    },
    {
      question: "Where can I find your terms and conditions?",
      answer:
        "Our terms and conditions are available on our website. Please review them for detailed information on our policies.",
    },
  ],
};
//? end data for the faq component

//! 3. Solutions component data

export const solutionsCardData = [
  {
    title: "Next.js & React Expertise",
    content: [
      "Our templates leverage the power of Next.js and React, providing you with server-side rendering, static site generation, and seamless client-side transitions.",
      "Experience the perfect blend of performance and developer experience with our meticulously crafted components and layouts.",
    ],
  },
  {
    title: "Full-Stack Solutions",
    content: [
      "From frontend to backend, we've got you covered. Our templates include Express.js server setups and Node.js best practices for a complete development ecosystem.",
      "Build robust, scalable applications with our full-stack templates that seamlessly integrate frontend and backend technologies.",
    ],
  },
  {
    title: "Modern Frontend Tooling",
    content: [
      "Stay ahead of the curve with our templates featuring the latest frontend technologies. From CSS-in-JS solutions to state management libraries, we provide you with the tools to create stunning, responsive user interfaces.",
    ],
  },
];
