import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of web development and design services, including custom website creation, e-commerce solutions, and mobile app development.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while a more complex application could take 2-3 months or more.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes, we offer various support and maintenance packages to ensure your website or application continues to perform optimally after launch.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is project-based and depends on your specific requirements. We provide detailed quotes after our initial consultation.",
  },
];

export function FAQSection() {
  return (
    <div className="py-12 w-full">
      <h2 className="text-3xl font-bold text-start mb-8">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
