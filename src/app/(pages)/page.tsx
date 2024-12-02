import Cta from "@/features/home/components/cta";
import Discover from "@/features/home/components/discover";
import HeroSection from "@/features/home/components/hero";
import { HowWeWork } from "@/features/home/components/how-we-work";
import { Pricing } from "@/features/home/components/pricing";
import Promotional from "@/features/home/components/promotional";
import { Reviews } from "@/features/home/components/reviews";
import Services from "@/features/home/components/services";
import { TechMarquee } from "@/features/home/components/tech-merquee";
import { WhatWeOffer } from "@/features/home/components/what-we-offer";

export default function Page() {
  return (
    <div className="relative">
      <HeroSection />
      <Promotional />
      <HowWeWork />
      <TechMarquee />
      <Discover />
      <WhatWeOffer />
      <Cta />
      <Services />
      <Pricing />
      <Reviews />
    </div>
  );
}
