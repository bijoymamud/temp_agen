import siteInfo from "@/config/site-info";
import { HomeComponents } from "@/features/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: `Explore ${siteInfo.name} services, process, and solutions for modern web products.`,
};

const {
  Cta,
  Discover,
  Hero,
  HowWeWork,
  Pricing,
  Promotional,
  Reviews,
  Services,
  SponsorBanner,
  TechMarquee,
  WhatWeOffer,
} = HomeComponents;

export default function Page() {
  return (
    <div className="relative">
      <Hero />
      <Promotional />
      <HowWeWork />
      <TechMarquee />
      <Discover />
      <WhatWeOffer />
      <Cta />
      {/* <FeaturesSectionDemo /> */}
      <Services />
      <Pricing />
      <Reviews />
      <SponsorBanner />
    </div>
  );
}
