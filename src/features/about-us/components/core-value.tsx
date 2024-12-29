import { Animate } from "@/components/animated";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const CoreValue = () => {
  return (
    <Section className="header">
      <SectionHeader>
        <SectionTitle>Our Core Values</SectionTitle>
      </SectionHeader>

      <SectionContent className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          {["Innovation", "Quality", "Developer Experience"].map(
            (value, _i) => (
              <Animate key={value} index={_i}>
                <Card key={value} className="h-full">
                  <CardHeader>
                    <CardTitle>{value}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      {`Our commitment to ${value.toLowerCase()} drives us every day as we work to provide the best web development templates and solutions.`}
                    </p>
                  </CardContent>
                </Card>
              </Animate>
            )
          )}
        </div>
      </SectionContent>
    </Section>
  );
};
