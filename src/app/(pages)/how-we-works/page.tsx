import Container from "@/components/container";
import { Grid } from "@/components/ui/grid";
import siteInfo from "@/config/site-info";
import { HowWeWorksComponents } from "@/features/how-it-works";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `How We Works`,
  description: `Learn how to book flights and travel services on ${siteInfo.name}.`,
};
const { ClientJourneyMap, ProcessFlow, TeamCollaboration, TimelineSection } =
  HowWeWorksComponents;
export default function HowItWorks() {
  return (
    <>
      <div className="header">
        <Container className="h-40 lg:h-60 flex items-end justify-start max-w-screen-xl">
          <h1 className="text-xl lg:text-4xl text-primary font-semibold bg-primary/20 backdrop-blur-sm px-2 relative z-10">
            How We Bring Your Ideas to Life
          </h1>
        </Container>
      </div>
      <div className="overflow-hidden w-full relative">
        <Grid size={35} />
        <ProcessFlow />
        <TimelineSection />
        <TeamCollaboration />
        <ClientJourneyMap />
      </div>
    </>
  );
}
