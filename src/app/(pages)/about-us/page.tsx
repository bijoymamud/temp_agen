import { Section, SectionHeader, SectionTitle } from "@/components/section";
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

const { SolutionsOverview, OurStory, CoreValue, WhyUs, OurTeam, Faq } =
  AboutUsComponents;
export default function AboutUs() {
  return (
    <Section>
      <SectionHeader variant={"full-w"} className="header h-40 flex items-end">
        <SectionTitle className="text-primary font-semibold bg-primary/20 backdrop-blur-sm px-2">
          Your Trusted Partner
        </SectionTitle>
      </SectionHeader>
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
    </Section>
  );
}
