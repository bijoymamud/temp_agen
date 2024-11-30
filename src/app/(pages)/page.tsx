import Cta from "@/features/home/components/cta";
import DevelopmentExperience from "@/features/home/components/development-experience";
import Discover from "@/features/home/components/discover";
import { Features } from "@/features/home/components/feature";
import HeroSection from "@/features/home/components/hero";
import { Reviews } from "@/features/home/components/reviews";
import Services from "@/features/home/components/services";

export default function Page() {
  return (
    <div className="relative">
      <HeroSection />
      <Services />
      <DevelopmentExperience />
      <Discover />
      <Features />
      <Cta />
      <Reviews />
    </div>
  );
}
