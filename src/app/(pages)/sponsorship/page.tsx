import Container from "@/components/container";
import { Grid } from "@/components/ui/grid";
import siteInfo from "@/config/site-info";
import { SponsorshipComponents } from "@/features/sponsorship";
import { Metadata } from "next";
import { Fragment } from "react";
export const metadata: Metadata = {
  title: `Sponsorship`,
  description: `Learn about ${siteInfo.name} and how we provide cutting-edge web development templates and solutions.`,
};

const {
  BecomeSponsor,
  SponsorshipBenefits,
  SponsorshipCTA,
  SponsorshipFAQ,
  SponsorshipProcess,
} = SponsorshipComponents;

const page = () => {
  return (
    <Fragment>
      <div className="header">
        <Container className="h-40 lg:h-60 flex items-end justify-start max-w-screen-xl">
          <h1 className="text-xl lg:text-4xl text-primary font-semibold bg-primary/20 backdrop-blur-sm px-2 relative z-10">
            Sponsorship Opportunities
          </h1>
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
    </Fragment>
  );
};

export default page;
