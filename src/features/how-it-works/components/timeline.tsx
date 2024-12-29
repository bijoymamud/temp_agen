import { Animate } from "@/components/animated";
import {
  Section,
  SectionBackground,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineContentDescription,
  TimelineContentLabel,
  TimelineDot,
  TimelineItem,
  TimelineItemLabel,
} from "@/components/ui/timeline";

import { Fragment } from "react";
import { developmentProcess } from "../how-it-works.data";

export function TimelineSection() {
  return (
    <Section className="">
      <SectionBackground>
        <svg
          className="absolute top-0 left-0 w-full h-full  opacity-5"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L100,0 C60,50 40,50 0,100 Z" fill="currentColor" />
        </svg>
      </SectionBackground>

      <SectionHeader>
        <SectionTitle>Our Development Process</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <Timeline className="">
          {developmentProcess.map((phase, phaseIndex) => (
            <Fragment key={phaseIndex}>
              <TimelineItemLabel className="mb-5">
                {phase.phase}
              </TimelineItemLabel>
              {phase.steps.map((step, stepIndex) => (
                <TimelineItem key={stepIndex}>
                  <TimelineConnector
                    hideLine={stepIndex === phase.steps.length - 1}
                  >
                    <TimelineDot size="lg" variant="outline">
                      {step.icon}
                    </TimelineDot>
                  </TimelineConnector>
                  <Animate key={stepIndex}>
                    <TimelineContent>
                      <Card className="">
                        <CardContent className="p-3 text-sm text-muted-foreground">
                          <TimelineContentLabel>
                            {step.title}
                          </TimelineContentLabel>
                          <TimelineContentDescription>
                            {step.description}
                          </TimelineContentDescription>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {step.skills.map((skill, skillIndex) => (
                              <Badge key={skillIndex}>{skill}</Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </TimelineContent>
                  </Animate>
                </TimelineItem>
              ))}
            </Fragment>
          ))}
        </Timeline>
      </SectionContent>
    </Section>
  );
}
