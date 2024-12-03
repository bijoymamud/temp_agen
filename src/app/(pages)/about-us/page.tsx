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
  title: `About`,
  description: `Learn about ${siteInfo.name} and how we provide cutting-edge web development templates and solutions.`,
};

export default function AboutUs() {
  return (
    <section>
      <div className="header">
        <Container className="h-40 lg:h-60 flex items-end justify-start max-w-screen-xl">
          <div className="h-10 lg:h-20">
            <h1 className="text-xl lg:text-4xl text-primary font-semibold bg-primary/20 backdrop-blur-sm px-2 relative z-10">
              Your Trusted Partner
            </h1>
          </div>
        </Container>
      </div>
      <div className="overflow-hidden relative">
        <Grid size={35} />

        <SolutionsOverview />
        <OurStory />
        <CoreValue />
        <WhyUs />

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

          <OurTeam />
          <Faq />
        </div>
      </div>
    </section>
  );
}
