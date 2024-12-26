import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface PricingTier {
  name: string;
  description: string;
  features: string[];
  deliveryTime: string;
  ctaText: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Standard",
    description: "For small to medium-sized projects with flexible timelines.",
    features: [
      "Full project scoping and analysis",
      "Regular progress updates",
      "Post-project support (30 days)",
      "Up to 3 revisions",
    ],
    deliveryTime: "4-6 weeks",
    ctaText: "Get Started",
  },
  {
    name: "Premium",
    description: "For complex projects requiring faster turnaround.",
    features: [
      "Priority project management",
      "Daily progress updates",
      "Extended post-project support (60 days)",
      "Up to 5 revisions",
      "Dedicated project manager",
    ],
    deliveryTime: "2-3 weeks",
    ctaText: "Contact Us",
  },
  {
    name: "Enterprise",
    description:
      "For large-scale, mission-critical projects with tight deadlines.",
    features: [
      "24/7 dedicated support team",
      "Real-time project tracking",
      "Unlimited revisions",
      "Long-term maintenance plan",
      "Custom feature development",
      "On-site consultation available",
    ],
    deliveryTime: "Custom",
    ctaText: "Schedule a Call",
  },
];

export function Pricing() {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle> Tailored IT Solutions for Your Business</SectionTitle>
        <SectionDescription>
          Two flexible plans, each with a <b>14-day free consultation</b>. No
          commitment required.
        </SectionDescription>
      </SectionHeader>
      <SectionContent position={"static"}>
        <div className="flex sm:flex-row flex-col gap-10 sm:gap-0 items-center">
          <Card className=" flex-1">
            <CardHeader className="">
              <CardTitle className="text-[1.3rem] font-[500]">
                Standard Plan
              </CardTitle>
              <CardDescription className="text-[1rem] font-[400] mb-[20px]">
                Ideal for small to medium-sized projects with flexible
                timelines.
              </CardDescription>
              <ul className="list-disc marker:text-gray-400 pl-[16px] text-muted-foreground">
                <li>Comprehensive project analysis</li>
                <li>Regular progress updates</li>
                <li>30-day post-project support</li>
              </ul>
            </CardHeader>

            <CardFooter className="bg-primary/10 rounded-bl-xl">
              <div>
                <h2 className="text-[1.4rem] flex items-end gap-[6px] font-[600]">
                  4-6 weeks
                  <span className="text-[1rem]  font-[400] mb-1">
                    delivery time
                  </span>
                </h2>
                <p className="text-[1rem] mt-[10px] mb-[20px]">
                  <b>Pricing based on project scope.</b> <br />
                  Contact us for a personalized quote.
                </p>
                <Button className="">Get Started</Button>
              </div>
            </CardFooter>
          </Card>

          <Card className="border-[3px] border-primary  relative flex-1">
            <Badge className="bg-primary  rounded-md px-5 uppercase text-[0.8rem] py-[7px] rotate-[-7deg] absolute top-[-30px] z-20 right-[-20px]">
              Best for <br />
              complex projects
            </Badge>

            <CardHeader className="">
              <div className="flex flex-col sm:flex-row items-center gap-[5px] sm:gap-[20px] mb-[10px]">
                <CardTitle className="text-[1.3rem] font-[500]">
                  Premium Plan
                </CardTitle>
                <Badge className="py-[5px] px-4 bg-secondary  rounded-full text-[0.6rem] sm:text-[0.9rem] uppercase">
                  Priority Service
                </Badge>
              </div>
              <CardDescription className="text-[1rem] font-[400] mb-[20px]">
                Perfect for complex projects requiring faster turnaround and
                premium support.
              </CardDescription>
              <div className="flex sm:flex-row flex-col justify-between gap-[20px]">
                <ul className="list-disc marker:text-primary/80 pl-[16px] text-muted-foreground">
                  <li>Dedicated project manager</li>
                  <li>Daily progress updates</li>
                  <li>60-day extended support</li>
                </ul>
                <ul className="list-disc marker:text-primary/80 pl-[16px] text-muted-foreground">
                  <li>Priority development queue</li>
                  <li>Customized solution design</li>
                  <li>24/7 emergency support</li>
                </ul>
              </div>
            </CardHeader>
            <CardFooter className="bg-primary/10  rounded-b-xl">
              <div>
                <h2 className="text-[1.4rem] sm:flex-row flex-col flex sm:items-end gap-[6px] font-[400]">
                  <b>2-3 weeks</b> typical delivery time
                </h2>
                <p className="text-[1rem] mt-[10px] mb-[20px]">
                  <b>Expedited service for critical projects.</b>
                  <br />
                  Custom pricing based on project requirements.
                </p>
                <Button className="text-[0.9rem]">Contact Us</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </SectionContent>
    </Section>
  );
}
