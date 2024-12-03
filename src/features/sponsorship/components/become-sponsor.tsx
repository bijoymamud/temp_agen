"use client";

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
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Gift, Globe, Users, Zap } from "lucide-react";
import { useState } from "react";

const sponsorshipTiers = [
  {
    name: "Silver",
    icon: Zap,
    benefits: [
      "Logo on our website",
      "Social media shoutouts",
      "1 guest post on our blog",
      "Access to attendee list",
      "Booth space at our annual conference",
    ],
    price: "Talk",
    color: "bg-accent hover:bg-accent/80",
  },
  {
    name: "Gold",
    icon: Globe,
    benefits: [
      "All Silver benefits",
      "Sponsored webinar",
      "Logo on event banners",
      "2 VIP passes to our annual conference",
      "Featured in our monthly newsletter",
    ],
    price: "Talk",
    color: "bg-accent hover:bg-accent/80",
  },
  {
    name: "Platinum",
    icon: Users,
    benefits: [
      "All Gold benefits",
      "Keynote speaking opportunity",
      "VIP networking events",
      "Exclusive roundtable with industry leaders",
      "Custom content collaboration",
    ],
    price: "Talk",
    color: "bg-accent hover:bg-accent/80",
  },
];

const whySponsorCards = [
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Access our worldwide network of IT professionals and decision-makers.",
    stats: "100K+ Members",
    bgPattern: (
      <svg
        className="absolute inset-0 w-full h-full text-primary/10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="globe-pattern"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="10" cy="10" r="1.5" fill="currentColor" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#globe-pattern)" />
      </svg>
    ),
  },
  {
    icon: Calendar,
    title: "Year-Round Exposure",
    description:
      "Benefit from continuous visibility through our events and platforms.",
    stats: "50+ Annual Events",
    bgPattern: (
      <svg
        className="absolute inset-0 w-full h-full text-primary/10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="calendar-pattern"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path d="M0 0h10v10H0zm10 10h10v10H10z" fill="currentColor" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#calendar-pattern)" />
      </svg>
    ),
  },
  {
    icon: Gift,
    title: "Exclusive Opportunities",
    description:
      "Gain access to unique collaboration and co-creation possibilities.",
    stats: "10+ Exclusive Perks",
    bgPattern: (
      <svg
        className="absolute inset-0 w-full h-full text-primary/10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="gift-pattern"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 0l5 5l-5 5l5 5l-5 5m20 0l-5 -5l5 -5l-5 -5l5 -5"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#gift-pattern)" />
      </svg>
    ),
  },
];

export default function BecomeSponsor() {
  const [selectedTier, setSelectedTier] = useState("Silver");

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Become a Sponsor</SectionTitle>
        <SectionDescription>
          Join our community of industry leaders and innovators
        </SectionDescription>
      </SectionHeader>
      <SectionContent>
        <Card>
          <CardHeader>
            <CardTitle>Choose Your Sponsorship Tier</CardTitle>
            <CardDescription>
              Select the package that best fits your goals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="Silver" onValueChange={setSelectedTier}>
              <TabsList className="grid w-full grid-cols-3 mb-8 ">
                {sponsorshipTiers.map((tier) => (
                  <TabsTrigger
                    key={tier.name}
                    value={tier.name}
                    className="text-sm md:text-base "
                  >
                    {tier.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {sponsorshipTiers.map((tier) => (
                <TabsContent key={tier.name} value={tier.name}>
                  <div
                    className={`mt-4 grid gap-6 p-6 rounded-lg ${tier.color}`}
                  >
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="outline"
                        className="text-lg py-1 px-3 bg-background"
                      >
                        <tier.icon className="mr-2 h-5 w-5" />
                        {tier.name} Tier
                      </Badge>
                      <span className="text-2xl font-bold">{tier.price}</span>
                    </div>
                    <ul className="space-y-3">
                      {tier.benefits.map((benefit, index) => (
                        <motion.li
                          key={index}
                          className="flex items-center bg-background/80 backdrop-blur-sm rounded-md p-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <ArrowRight className="mr-2 h-5 w-5 text-primary" />
                          <span>{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <Button size="lg" className="w-full md:w-auto">
              Apply for {selectedTier} Sponsorship
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              * Custom packages available. Contact us for more information.
            </p>
          </CardFooter>
        </Card>
      </SectionContent>

      <SectionHeader className="mt-16">
        <SectionTitle>Why Sponsor Us?</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whySponsorCards.map((card, index) => (
            <Card key={index} className="relative overflow-hidden">
              {card.bgPattern}
              <CardHeader className="relative">
                <card.icon className="h-12 w-12 text-primary mb-2" />
                <CardTitle className="text-2xl">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground mb-4">{card.description}</p>
                <Badge variant="secondary" className="text-lg py-1 px-3">
                  {card.stats}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContent>
    </Section>
  );
}
