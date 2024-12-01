import Cta from "@/features/home/components/cta";
import DevelopmentExperience from "@/features/home/components/development-experience";
import Discover from "@/features/home/components/discover";
import { Features } from "@/features/home/components/feature";
import HeroSection from "@/features/home/components/hero";
import Promotional from "@/features/home/components/promotional";
import { Reviews } from "@/features/home/components/reviews";
import Services from "@/features/home/components/services";
import { TechMarquee } from "@/features/home/components/tech-merquee";

export default function Page() {
  return (
    <div className="relative">
      <HeroSection />
      <Promotional />
      <DevelopmentExperience />
      <TechMarquee />
      <Discover />
      <Features />
      <Cta />
      <Services />
      <Reviews />
    </div>
  );
}
