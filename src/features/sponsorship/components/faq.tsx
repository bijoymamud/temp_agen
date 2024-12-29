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
import { faqs } from "../sponsorship.data";

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
