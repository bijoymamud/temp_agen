import { Section, SectionContent } from "@/components/section";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, TrendingUp, Users, Zap } from "lucide-react";

const benefits = [
  {
    title: "Global Exposure",
    description:
      "Reach a worldwide audience of IT professionals and decision-makers.",
    icon: Globe,
    color: "bg-blue-500 dark:bg-blue-600",
  },
  {
    title: "Networking Opportunities",
    description:
      "Connect with industry leaders and potential clients at our events.",
    icon: Users,
    color: "bg-green-500 dark:bg-green-600",
  },
  {
    title: "Brand Recognition",
    description: "Increase your brand visibility within the IT community.",
    icon: Zap,
    color: "bg-yellow-500 dark:bg-yellow-600",
  },
  {
    title: "Thought Leadership",
    description: "Showcase your expertise through speaking engagements.",
    icon: TrendingUp,
    color: "bg-purple-500 dark:bg-purple-600",
  },
];

export function SponsorshipBenefits() {
  return (
    <Section>
      <SectionContent className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index}>
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
            </div>
          ))}
        </div>
      </SectionContent>
    </Section>
  );
}
