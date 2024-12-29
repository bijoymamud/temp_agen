import { Animate } from "@/components/animated";
import { Section, SectionContent } from "@/components/section";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { benefits } from "../sponsorship.data";

export function SponsorshipBenefits() {
  return (
    <Section>
      <SectionContent className="mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <Animate key={index} index={index}>
            <Card className="h-full flex flex-col overflow-hidden">
              <CardHeader
                className={`${benefit.color} text-primary-foreground p-4 flex flex-col items-center`}
              >
                <benefit.icon className="h-12 w-12 mb-2" />
                <CardTitle className="text-center">{benefit.title}</CardTitle>
              </CardHeader>
              {/* <CardContent className="p-4 flex flex-col flex-grow">
                  <p className="text-muted-foreground text-center mb-4 flex-grow">
                    {benefit.description}
                  </p>
                  <div className="flex justify-center mt-auto">
                    <Badge variant="outline" className="text-sm">
                      Premium Benefit
                    </Badge>
                  </div>
                </CardContent> */}
            </Card>
          </Animate>
        ))}
      </SectionContent>
    </Section>
  );
}
