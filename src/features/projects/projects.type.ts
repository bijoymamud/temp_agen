export type ProjectCategory =
  | "All"
  | "SaaS"
  | "Web Apps"
  | "Mobile Apps"
  | "AI & Cloud"
  | "UI/UX Design";

export interface ProjectStat {
  label: string;
  value: string;
  subtext?: string;
}

export interface ProjectKeyFeature {
  title: string;
  description: string;
  iconName?: string;
}

export interface ProjectGalleryItem {
  url: string;
  title: string;
  caption: string;
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface CategorizedTech {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: Exclude<ProjectCategory, "All">;
  client: string;
  clientIndustry?: string;
  year: string;
  duration: string;
  status?: string;
  longDescription?: string;
  highlights?: string[];
  thumbnail: string;
  heroBanner?: string;
  tags: string[];
  featured?: boolean;
  overview: string;
  problem: string;
  solution: string;
  architectureHighlights: string[];
  keyFeatures: ProjectKeyFeature[];
  stats: ProjectStat[];
  techStackCategorized: CategorizedTech[];
  techStack: string[];
  gallery: ProjectGalleryItem[];
  testimonial?: ProjectTestimonial;
  links: {
    live?: string;
    github?: string;
  };
}
