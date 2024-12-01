import { Grid } from "@/components/ui/grid";
import siteInfo from "@/config/site-info";
import { WhyUs } from "@/features/about-us/components/why-us";

import Container from "@/components/container";
import CoreValue from "@/features/about-us/components/core-value";
import OurStory from "@/features/about-us/components/our-story";

import GridPattern from "@/components/ui/grid-pattern";
import { Faq } from "@/features/about-us/components/faq";
import { OurTeam } from "@/features/about-us/components/our-team";
import SolutionsOverview from "@/features/about-us/components/solutions-overview";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About Us - ${siteInfo.name}`,
  description: `Learn about ${siteInfo.name} and how we provide cutting-edge web development templates and solutions.`,
};

export default function AboutUs() {
  return (
    <section>
      <div className="header">
        <Container className="h-60 flex items-end justify-start max-w-screen-xl">
          <div className="h-20">
            <h1 className="text-4xl font-semibold text-primary">
              Your Trusted Partner
            </h1>
          </div>
        </Container>
      </div>
      <div className="overflow-hidden relative space-y-10">
        <Grid size={35} />
        <Container className="max-w-screen-xl space-y-10">
          <SolutionsOverview />
          <OurStory />
        </Container>
        <div className="bg-muted py-4">
          <Container className="max-w-screen-xl">
            <CoreValue />
          </Container>
        </div>
        <Container className="max-w-screen-xl ">
          <WhyUs />
        </Container>

        <div className="relative border-t">
          <GridPattern
            width={40}
            height={40}
            x={-1}
            y={-1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
            )}
          />
          <Container className="max-w-screen-xl pt-10">
            <OurTeam />
            <Faq />
          </Container>
        </div>
      </div>
    </section>
  );
}
