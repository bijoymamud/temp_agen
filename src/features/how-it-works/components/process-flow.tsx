import { Animate } from "@/components/animated";
import { Section, SectionContent } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Consultation",
    description: "A  consultation to understand your needs and goals.",
  },
  {
    title: "Strategy",
    description: "A tailored strategy to achieve your objectives.",
  },
  {
    title: "Execution",
    description:
      "We implement the strategy with precision and attention to detail.",
  },
  {
    title: "Refinement",
    description: " Refine and optimize to ensure the best results.",
  },
];

export function ProcessFlow() {
  return (
    <Section className="">
      <SectionContent className="mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <Animate key={index} index={index}>
            <div className="relative">
              <Card className="h-full bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300 relative">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden lg:block w-8 h-8 text-primary absolute top-1/2 -right-4 transform -translate-y-1/2 translate-x-full" />
              )}
            </div>
          </Animate>
        ))}
      </SectionContent>
    </Section>
  );
}
