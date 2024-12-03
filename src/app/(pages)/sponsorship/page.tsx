import Container from "@/components/container";
import { Grid } from "@/components/ui/grid";
import BecomeSponsor from "@/features/sponsorship/components/become-sponsor";
import SponsorshipBenefits from "@/features/sponsorship/components/benefits";
import SponsorshipCTA from "@/features/sponsorship/components/cta";
import SponsorshipFAQ from "@/features/sponsorship/components/faq";
import SponsorshipProcess from "@/features/sponsorship/components/process";

const page = () => {
  return (
    <section className="">
      <div className="header">
        <Container className="h-40 lg:h-60 flex items-end justify-start max-w-screen-xl">
          <div className="h-10 lg:h-20">
            <h1 className="text-xl lg:text-4xl text-primary font-semibold bg-primary/20 backdrop-blur-sm px-2 relative z-10">
              Sponsorship Opportunities
            </h1>
          </div>
        </Container>
      </div>

      <div className="overflow-hidden relative">
        <Grid size={35} />
        <SponsorshipBenefits />
        <BecomeSponsor />
        <SponsorshipProcess />
        <SponsorshipCTA />
        <SponsorshipFAQ />
      </div>
    </section>
  );
};

export default page;
