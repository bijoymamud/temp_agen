"use client";

import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from "@/components/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

interface Category {
  id: string;
  name: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

const categories: Category[] = [
  { id: "services", name: "Our Services" },
  { id: "partnerships", name: "Partnerships" },
  { id: "billing", name: "Billing & Payments" },
  { id: "support", name: "Support & Policies" },
];

const faqData: Record<string, FaqItem[]> = {
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

export function Faq() {
  const [activeCategory, setActiveCategory] = useState<string>("services");

  return (
    <Section className="">
      <SectionHeader>
        <SectionTitle> Frequently Asked Questions</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Table of Contents */}
          <nav className="mb-6 col-span-full md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Table of Contents</h3>
            <ul className="flex flex-col space-y-4">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    className={`text-lg font-medium ${
                      activeCategory === category.id
                        ? "text-blue-600"
                        : "text-gray-800"
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Accordion for FAQs */}
          <div className="col-span-full md:col-span-2 lg:col-span-3">
            <Accordion type="single" collapsible className="w-full">
              {faqData[activeCategory].map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
