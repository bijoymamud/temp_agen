"use client";

import { Animate } from "@/components/animated";
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
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { sponsorshipTiers, whySponsorCards } from "../sponsorship.data";
import Link from "next/link";

export function BecomeSponsor() {
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
              <Animate>
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
              </Animate>
              <Animate index={2}>
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
              </Animate>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            {/* <Button size="lg" className="w-full md:w-auto">
              Apply for {selectedTier} Sponsorship
            </Button> */}
            <Link href="/contact-us">
              <Button size="lg" className="w-full md:w-auto">
                Apply for {selectedTier} Sponsorship
              </Button>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              * Custom packages available. Contact us for more information.
            </p>
          </CardFooter>
        </Card>
      </SectionContent>

      {/* //! Why Sponsor Us Section*/}
      <SectionHeader className="mt-16">
        <SectionTitle>Why Sponsor Us?</SectionTitle>
      </SectionHeader>
      <SectionContent className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {whySponsorCards.map((card, index) => (
          <Animate key={index} index={index}>
            <Card className="relative overflow-hidden">
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
          </Animate>
        ))}
      </SectionContent>
    </Section>
  );
}
