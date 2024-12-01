import Container from "@/components/container";
import { Grid } from "@/components/ui/grid";
import siteInfo from "@/config/site-info";
import ClientJourneyMap from "@/features/how-it-works/components/client-journey-map";
import ProcessFlow from "@/features/how-it-works/components/process-flow";
import TeamCollaboration from "@/features/how-it-works/components/team-collaboration";
import Timeline from "@/features/how-it-works/components/timeline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `How It Works - ${siteInfo.name}`,
  description: `Learn how to book flights and travel services on ${siteInfo.name}.`,
};

export default function HowItWorks() {
  return (
    <section className=" ">
      <div className="header">
        <Container className="h-60 flex items-end justify-start max-w-screen-xl">
          <div className="h-20">
            <h1 className="text-4xl font-semibold text-primary">
              How We Bring Your Ideas to Life
            </h1>
          </div>
        </Container>
      </div>
      <div className="overflow-hidden w-full relative">
        <Grid size={35} />
        <Container className="mt-10 mb-16 max-w-screen-xl space-y-10">
          <ProcessFlow />
          <Timeline />
          <TeamCollaboration />
        </Container>
        <ClientJourneyMap />
      </div>
    </section>
  );
}
