import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronRight } from "lucide-react";

const journeySteps = [
  {
    title: "Discovery",
    description: "Initial consultation and project scoping",
    outcomes: ["Project brief", "Initial timeline", "Budget estimate"],
  },
  {
    title: "Planning",
    description: "Detailed project planning and strategy development",
    outcomes: [
      "Project roadmap",
      "Technical specifications",
      "Design concepts",
    ],
  },
  {
    title: "Design",
    description: "Creating the visual and interactive elements",
    outcomes: ["Wireframes", "UI designs", "Prototype"],
  },
  {
    title: "Development",
    description: "Building the website or application",
    outcomes: ["Frontend code", "Backend systems", "Content integration"],
  },
  {
    title: "Testing",
    description: "Rigorous quality assurance and user testing",
    outcomes: ["Bug fixes", "Performance optimization", "User feedback"],
  },
  {
    title: "Launch",
    description: "Deploying the project and going live",
    outcomes: ["Site deployment", "Final checks", "Handover documents"],
  },
];

export default function ClientJourneyMap() {
  return (
    <div className="w-full pb-10 relative overflow-hidden">
      <svg
        className="absolute top-0 left-0 w-full h-full  opacity-5"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0,0 C50,0 50,100 100,100 L0,100 Z" fill="currentColor" />
      </svg>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
        Your Journey With Us
      </h2>
      <Container className="max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 lg:gap-4">
          {journeySteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative">
              <Card className="w-full h-full bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300">
                <CardHeader className="p-4">
                  <CardTitle className="text-center text-lg">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm text-center text-muted-foreground mb-4">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {step.outcomes.map((outcome, i) => (
                      <Badge
                        key={i}
                        className="text-xs  duration-300 whitespace-nowrap truncate"
                      >
                        {outcome}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              {index < journeySteps.length - 1 && (
                <>
                  <ChevronRight className="hidden xl:block w-6 h-6 text-primary absolute -right-3 top-1/2 transform -translate-y-1/2" />
                  <ChevronDown className="block xl:hidden w-6 h-6 text-primary mt-4" />
                </>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
