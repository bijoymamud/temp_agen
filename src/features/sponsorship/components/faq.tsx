import { Animate } from "@/components/animated";
import {
  Section,
  SectionBackground,
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
import GridPattern from "@/components/ui/grid-pattern";

const faqs = [
  {
    question: "What are the benefits of sponsoring?",
    answer:
      "Sponsoring offers numerous benefits including increased brand visibility, networking opportunities with industry leaders, access to our events and platforms, and the chance to showcase your expertise to a targeted audience in the IT sector.",
  },
  {
    question: "How long does a sponsorship last?",
    answer:
      "Our standard sponsorship packages are annual, but we also offer custom durations to fit your specific needs and goals. We can discuss options ranging from single-event sponsorships to multi-year partnerships.",
  },
  {
    question: "Can we customize a sponsorship package?",
    answer:
      "While we offer standard tiers, we understand that each sponsor has unique objectives. We're happy to work with you to create a tailored sponsorship package that aligns with your specific goals and budget.",
  },
  {
    question: "How do we measure the ROI of our sponsorship?",
    answer:
      "We provide regular reports on key metrics such as brand exposure, lead generation, and event participation. We also work closely with our sponsors to establish specific KPIs at the outset of the partnership to ensure we're tracking the most relevant data for your objectives.",
  },
];

export function SponsorshipFAQ() {
  return (
    <Section className="">
      <SectionBackground>
        <GridPattern
          width={40}
          height={40}
          x={-1}
          y={-1}
          className={
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
          }
        />
      </SectionBackground>
      <SectionHeader>
        <SectionTitle> Frequently Asked Questions</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <Animate index={index}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </Animate>
            </AccordionItem>
          ))}
        </Accordion>
      </SectionContent>
    </Section>
  );
}
