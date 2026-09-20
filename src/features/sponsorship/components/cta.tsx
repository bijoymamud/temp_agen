import { Section, SectionContent } from "@/components/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function SponsorshipCTA() {
  return (
    <Section className="bg-primary/20">
      <SectionContent className="mt-0  flex items-center justify-center flex-col">
        <h2 className="text-3xl font-bold ">Ready to Become a Sponsor?</h2>
        <p className="text-xl  max-w-2xl mx-auto text-center">
          Join us in shaping the future of the IT industry. Your support can
          make a significant impact.
        </p>
        <Button asChild size="lg" className="mt-4">
          <Link href="/contact-us">Apply for Sponsorship</Link>
        </Button>
      </SectionContent>
    </Section>
  );
}
