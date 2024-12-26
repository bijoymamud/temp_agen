import Container from "@/components/container";
import { Grid } from "@/components/ui/grid";
import GridPattern from "@/components/ui/grid-pattern";
import siteInfo from "@/config/site-info";
import { AboutUsComponents } from "@/features/about-us";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About`,
  description: `Learn about ${siteInfo.name} and how we provide cutting-edge web development templates and solutions.`,
};
const { Solutions, OurStory, CoreValue, WhyUs, OurTeam, Faq } =
  AboutUsComponents;

export default function AboutUs() {
  return (
    <>
      <div className="header">
        <Container className="h-40 lg:h-60 flex items-end justify-start max-w-screen-xl">
          <h1 className="text-xl lg:text-4xl text-primary font-semibold bg-primary/20 backdrop-blur-sm px-2 relative z-10">
            Your Trusted Partner
          </h1>
        </Container>
      </div>

      <div className="overflow-hidden relative">
        <Grid size={35} />
        <Solutions />
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
    </>
  );
}
