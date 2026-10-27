import { ProjectCoinSlide } from "./components/project-coin-slide";
import { ProjectCta } from "./components/project-cta";
import { ProjectFigmaCaseStudyDetail } from "./components/project-figma-case-study-detail";
import { ProjectHero } from "./components/project-hero";
import { ProjectLookbookShowcase } from "./components/project-lookbook-showcase";
import { ProjectPlainDetail } from "./components/project-plain-detail";

export * from "./figma-case-studies.data";
export * from "./figma-case-studies.type";
export * from "./projects.data";
export * from "./projects.type";

export const ProjectsComponents = {
  Hero: ProjectHero,
  LookbookShowcase: ProjectLookbookShowcase,
  CoinSlide: ProjectCoinSlide,
  PlainDetail: ProjectPlainDetail,
  FigmaCaseStudyDetail: ProjectFigmaCaseStudyDetail,
  Cta: ProjectCta,
};
