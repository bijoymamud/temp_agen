import siteInfo from "@/config/site-info";
import { ProjectsComponents } from "@/features/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Folio Archive",
  description: `Explore our floating editorial showcase of cutting-edge web applications, enterprise platforms, and digital products engineered by ${siteInfo.name}.`,
};

const { Hero, LookbookShowcase, Cta } = ProjectsComponents;

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <div className="relative overflow-hidden w-full">
        {/* Floating Lookbook Stream with 3D Coin-Flip Navigation */}
        <LookbookShowcase />
        <Cta />
      </div>
    </main>
  );
}
