import { HomeComponents } from "@/features/home";

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
