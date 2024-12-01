import Container from "@/components/container";
import Marquee from "@/components/ui/marquee";
import * as LucideIcons from "lucide-react";
import React from "react";

const technologies = [
  { slug: "typescript", name: "TypeScript" },
  { slug: "javascript", name: "JavaScript" },
  { slug: "react", name: "React" },
  { slug: "nextjs", name: "Next.js" },
  { slug: "nodejs", name: "Node.js" },
  { slug: "express", name: "Express" },
  { slug: "postgresql", name: "PostgreSQL" },
  { slug: "mongodb", name: "MongoDB" },
  { slug: "firebase", name: "Firebase" },
  { slug: "aws", name: "AWS" },
  { slug: "docker", name: "Docker" },
  { slug: "kubernetes", name: "Kubernetes" },
  { slug: "graphql", name: "GraphQL" },
  { slug: "tailwindcss", name: "Tailwind CSS" },
  { slug: "sass", name: "Sass" },
  { slug: "figma", name: "Figma" },
];

const iconMap: { [key: string]: keyof typeof LucideIcons } = {
  typescript: "FileType",
  javascript: "FileJson",
  react: "Atom",
  nextjs: "Server",
  nodejs: "Server",
  express: "Server",
  postgresql: "Database",
  mongodb: "Database",
  firebase: "Flame",
  aws: "Cloud",
  docker: "Box",
  kubernetes: "Boxes",
  graphql: "GitGraph",
  tailwindcss: "Paintbrush",
  sass: "Palette",
  figma: "Figma",
};

function TechCard({ slug, name }: { slug: string; name: string }) {
  const IconComponent = LucideIcons[iconMap[slug] || "Code"];
  return (
    <div className="flex h-16 w-48 flex-none items-center justify-start gap-4 rounded-xl bg-white p-4 shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground dark:bg-gray-800 dark:hover:bg-primary">
      {IconComponent &&
        React.createElement(
          IconComponent as React.ComponentType<React.SVGProps<SVGSVGElement>>,
          { className: "h-8 w-8 flex-none" }
        )}
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}

export function TechMarquee() {
  const midpoint = Math.ceil(technologies.length / 2);
  const firstRow = technologies.slice(0, midpoint);
  const secondRow = technologies.slice(midpoint);

  return (
    <Container className=" max-w-screen-xl py-10">
      <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden ">
        <Marquee pauseOnHover className="[--duration:40s] ">
          {firstRow.map((tech) => (
            <TechCard key={tech.slug} {...tech} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s] ">
          {secondRow.map((tech) => (
            <TechCard key={tech.slug} {...tech} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
      </div>
    </Container>
  );
}
