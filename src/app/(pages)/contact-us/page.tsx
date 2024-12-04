import Container from "@/components/container";
import {
  Section,
  SectionBackground,
  SectionContent,
} from "@/components/section";
import { Grid } from "@/components/ui/grid";
import GridPattern from "@/components/ui/grid-pattern";
import siteInfo from "@/config/site-info";
import Address from "@/features/contact-us/components/address";
import ContactForm from "@/features/contact-us/components/contact-form";
import { CTASection } from "@/features/contact-us/components/cta-section";
import { FAQSection } from "@/features/contact-us/components/faq-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact`,
  description: `Learn about ${siteInfo.name} and how we provide cutting-edge web development templates and solutions.`,
};

const ContactUs = () => {
  return (
    <section className="">
      <div className="header">
        <Container className="h-40 lg:h-60 flex items-end justify-start max-w-screen-xl">
          <div className="h-10 lg:h-20">
            <h1 className="text-xl lg:text-4xl text-primary font-semibold bg-primary/20 backdrop-blur-sm px-2 relative z-10">
              Git in Touch
            </h1>
          </div>
        </Container>
      </div>
      <Section>
        <SectionBackground>
          <Grid size={35} />
        </SectionBackground>
        <SectionContent className="mt-0">
          <Address />
        </SectionContent>
      </Section>

      <CTASection />
      <Section>
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
        <SectionContent className="">
          <div className="max-w-screen-xl flex flex-col md:flex-row w-full gap-4">
            <div className="w-full lg:w-2/3">
              <FAQSection />
            </div>
            <ContactForm />
          </div>
        </SectionContent>
      </Section>
    </section>
  );
};

export default ContactUs;
