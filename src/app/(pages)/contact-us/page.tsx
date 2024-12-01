"use client";
import Container from "@/components/container";
import { Grid } from "@/components/ui/grid";
import Address from "@/features/contact-us/components/address";
import ContactForm from "@/features/contact-us/components/contact-form";
import { CTASection } from "@/features/contact-us/components/cta-section";
import { FAQSection } from "@/features/contact-us/components/faq-section";

const ContactUs = () => {
  return (
    <section className="">
      <div className="header">
        <Container className="h-60 flex items-end justify-start max-w-screen-xl">
          <div className="h-20">
            <h1 className="text-4xl font-semibold text-primary">
              Get in Touch
            </h1>
          </div>
        </Container>
      </div>
      <div className="space-y-10">
        <div className="overflow-hidden w-full relative pt-10">
          <Grid size={35} />
          <Address />
        </div>
        <CTASection />
        <div className="pb-10">
          <Container className="max-w-screen-xl flex flex-col md:flex-row w-full gap-4">
            <div className="w-full lg:w-2/3">
              <FAQSection />
            </div>
            <ContactForm />
          </Container>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
