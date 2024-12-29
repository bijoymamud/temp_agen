import { ICategory, IFaqItem } from "./about-us.type";

//! 1. the our-team component in the about-us page.
export const ContactUsTestimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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