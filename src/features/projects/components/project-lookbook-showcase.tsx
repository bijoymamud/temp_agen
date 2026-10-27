"use client";

import Container from "@/components/container";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { Filter } from "lucide-react";
import { useMemo, useState } from "react";
import { PROJECT_CATEGORIES, PROJECTS_DATA } from "../projects.data";
import { ProjectCategory } from "../projects.type";
import { ProjectCoinSlide } from "./project-coin-slide";

export function ProjectLookbookShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [isRow1Paused, setIsRow1Paused] = useState(false);
  const [isRow2Paused, setIsRow2Paused] = useState(false);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const row1 = filteredProjects;
  const row2 = [...filteredProjects].reverse();

  return (
    <section className="relative py-12 md:py-16 overflow-hidden border-b border-border/40">
      <div className="space-y-8">
        {/* Header Filter Bar */}
        <Container className="max-w-screen-xl">
          <div className="flex items-center justify-end pb-3 border-b border-border/40">
            {/* Category Filter Pills (Rounded-full according to website) */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 scrollbar-none justify-start md:justify-end">
              <Filter className="h-3.5 w-3.5 text-muted-foreground shrink-0 mr-1 hidden sm:block" />
              {PROJECT_CATEGORIES.map((category) => {
                const isSelected = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "whitespace-nowrap px-3.5 py-1 rounded-full text-xs font-medium transition-colors border",
                      isSelected
                        ? "bg-primary text-primary-foreground border-primary font-semibold"
                        : "bg-background text-muted-foreground border-border/60 hover:text-foreground hover:bg-muted"
                    )}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </Container>

        {/* Row 1: Completely Clean from Both Sides (Zero edge overlays) */}
        <div className="relative w-full overflow-hidden">
          <Marquee
            pauseOnHover={false}
            isPaused={isRow1Paused}
            repeat={4}
            className="[--duration:60s] [--gap:1.5rem] py-1"
          >
            {row1.map((project, idx) => (
              <ProjectCoinSlide
                key={`r1-${project.id}-${idx}`}
                project={project}
                onFlipStart={() => setIsRow1Paused(true)}
              />
            ))}
          </Marquee>
        </div>

        {/* Row 2: Moves in opposite direction (Left to Right) */}
        <div className="relative w-full overflow-hidden">
          <Marquee
            reverse
            pauseOnHover={false}
            isPaused={isRow2Paused}
            repeat={4}
            className="[--duration:70s] [--gap:1.5rem] py-1"
          >
            {row2.map((project, idx) => (
              <ProjectCoinSlide
                key={`r2-${project.id}-${idx}`}
                project={project}
                onFlipStart={() => setIsRow2Paused(true)}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
