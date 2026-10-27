export interface FigmaColorToken {
  name: string;
  hex: string;
  usage: string;
}

export interface FigmaTypographyToken {
  level: string;
  font: string;
  size: string;
  weight: string;
}

export interface FigmaDesignProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface FigmaUserPersona {
  name: string;
  role: string;
  demographics: string;
  quote: string;
  painPoints: string[];
  goals: string[];
}

export interface FigmaScreenShowcase {
  title: string;
  description: string;
  image: string;
  tag?: string;
}

export interface FigmaCaseStudy {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  client: string;
  clientIndustry: string;
  year: string;
  timeline: string;
  role: string;
  coverImage: string;
  thumbnail: string;
  tags: string[];
  featured?: boolean;

  // External / Embed Links
  links: {
    figmaFile?: string;
    figmaPrototype?: string;
    figmaEmbed?: string;
    live?: string;
  };

  // Metrics
  stats: {
    label: string;
    value: string;
    subtext?: string;
  }[];

  // Case Study Story
  overview: string;
  problemStatement: string;
  researchInsights: {
    keyFindings: string[];
    persona: FigmaUserPersona;
  };
  designProcess: FigmaDesignProcessStep[];

  // Design System Foundations
  designSystem: {
    colorPalette: FigmaColorToken[];
    typographyScale: FigmaTypographyToken[];
    componentsCount: string;
    variantsCount: string;
    designTokensCount: string;
  };

  // Deliverables & Tools
  deliverables: string[];
  tools: string[];
  screens: FigmaScreenShowcase[];

  // Client feedback
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar?: string;
  };
}
