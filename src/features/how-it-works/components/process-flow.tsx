import { Animate } from "@/components/animated";
import { Section, SectionContent } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ChevronsRight } from "lucide-react";
import { steps } from "../how-it-works.data";

export function ProcessFlow() {
  return (
    <Section className="">
      <SectionContent className="mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <Animate key={index} index={index}>
            {/* <div className="relative">
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
            </div> */}
            <div className="relative">
              <Card className="h-full bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300">
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

              {/* Added z-10 and adjusted positioning to ensure it sits above the next card */}
              {index < steps.length - 1 && (
                <ChevronsRight
                  className="hidden lg:block w-9 h-9 text-primary absolute top-1/2 -right-10 z-10 transform -translate-y-1/2"
                />


              )}
            </div>
          </Animate>
        ))}
      </SectionContent>
    </Section>
  );
}

