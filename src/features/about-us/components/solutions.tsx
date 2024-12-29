import { Animate } from "@/components/animated";
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
} from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { solutionsCardData } from "../about-us.data";

export const Solutions = () => {
  return (
    <Section>
      <SectionHeader className="text-start">
        <SectionDescription className="mx-0">
          Our mission is to empower developers and businesses with cutting-edge
          web development templates and tools. We are dedicated to streamlining
          the development process and helping you create stunning,
          high-performance web applications with ease.
        </SectionDescription>
      </SectionHeader>

      <SectionContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4">
          {solutionsCardData.map((card, index) => (
            <Animate key={index} index={index} className="">
              <Card
                key={index}
                className="transition-transform transform hover:scale-105 relative h-full"
              >
                <GridPattern
                  width={10}
                  height={10}
                  x={-1}
                  y={-1}
                  className={cn(
                    "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
                  )}
                />
                <CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {card.content.map((paragraph, idx) => (
                    <p key={idx} className={idx === 0 ? "mb-4" : ""}>
                      {paragraph}
                    </p>
                  ))}
                </CardContent>
              </Card>
            </Animate>
          ))}
        </div>
      </SectionContent>
    </Section>
  );
};
