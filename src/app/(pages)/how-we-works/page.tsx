import Container from "@/components/container";
import { Grid } from "@/components/ui/grid";
import siteInfo from "@/config/site-info";
import ClientJourneyMap from "@/features/how-it-works/components/client-journey-map";
import ProcessFlow from "@/features/how-it-works/components/process-flow";
import TeamCollaboration from "@/features/how-it-works/components/team-collaboration";
import Timeline from "@/features/how-it-works/components/timeline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `How We Works`,
  description: `Learn how to book flights and travel services on ${siteInfo.name}.`,
};

export default function HowItWorks() {
  return (
    <section className=" ">
      <div className="header">
        <Container className="h-40 lg:h-60 flex items-end justify-start max-w-screen-xl">
          <div className="h-10 lg:h-20">
            <h1 className="text-xl lg:text-4xl text-primary font-semibold bg-primary/20 backdrop-blur-sm px-2 relative z-10">
              How We Bring Your Ideas to Life
            </h1>
          </div>
        </Container>
      </div>
      <div className="overflow-hidden w-full relative">
        <Grid size={35} />
        <ProcessFlow />
        <Timeline />
        <TeamCollaboration />
        <ClientJourneyMap />
      </div>
    </section>
  );
}
