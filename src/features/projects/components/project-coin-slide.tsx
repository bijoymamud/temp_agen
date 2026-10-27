"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight, FolderOpen } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Project } from "../projects.type";

interface ProjectCoinSlideProps {
  project: Project;
  onFlipStart?: () => void;
}

export function ProjectCoinSlide({
  project,
  onFlipStart,
}: ProjectCoinSlideProps) {
  const router = useRouter();
  const [isFlipping, setIsFlipping] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isFlipping) return;
    setIsFlipping(true);
    onFlipStart?.();

    // Smooth coin flip delay before routing
    setTimeout(() => {
      router.push(`/projects/${project.slug}`);
    }, 700);
  };

  return (
    <div
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleClick(e as any);
      }}
      aria-label={`Open project ${project.title}`}
      className={cn(
        "relative shrink-0 cursor-pointer select-none rounded-none",
        "w-[340px] sm:w-[420px] md:w-[460px] aspect-[16/12]",
        "perspective-[1400px]",
        isFlipping ? "z-50" : "z-10",
      )}
    >
      {/* 3D Flip Container (Border 0, Rounded-0) */}
      <div
        className={cn(
          "w-full h-full relative transition-transform duration-700 ease-out rounded-none",
          "[transform-style:preserve-3d]",
          isFlipping && "[transform:rotateY(180deg)]",
        )}
      >
        {/* ========================================================= */}
        {/* FRONT FACE: Professional Project Card (Border 0, Rounded 0)*/}
        {/* ========================================================= */}
        <div
          className={cn(
            "absolute inset-0 w-full h-full rounded-none overflow-hidden border-0 bg-card text-card-foreground",
            "shadow-sm hover:shadow-md transition-shadow duration-300",
            "[backface-visibility:hidden] flex flex-col",
          )}
        >
          {/* Project Image */}
          <div className="relative h-[65%] w-full bg-muted overflow-hidden rounded-none">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 ease-out hover:scale-105"
              sizes="(max-width: 768px) 100vw, 460px"
            />
          </div>

          {/* Project Content: Title, Category & Description */}
          <div className="h-[35%] p-4 sm:p-5 flex flex-col justify-center space-y-1.5 bg-card rounded-none">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground truncate">
                {project.title}
              </h3>
              <span className="text-xs font-mono text-primary font-medium shrink-0 flex items-center gap-1">
                <span>{project.category === "UI/UX Design" ? "Figma Case Study" : project.category}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>

            {/* Professional Project Description */}
            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* BACK FACE: Clean Coin Flip (Border 0, Rounded 0)          */}
        {/* ========================================================= */}
        <div
          className={cn(
            "absolute inset-0 w-full h-full rounded-none overflow-hidden border-0",
            "[transform:rotateY(180deg)] [backface-visibility:hidden]",
            "bg-card text-card-foreground flex flex-col items-center justify-center p-6 text-center space-y-2 shadow-sm",
          )}
        >
          <div className="h-12 w-12 rounded-full border border-primary/40 flex items-center justify-center bg-primary/10">
            <FolderOpen className="h-5 w-5 text-primary animate-pulse" />
          </div>

          <h4 className="text-base font-bold text-foreground truncate max-w-xs">
            {project.title}
          </h4>
          <p className="text-xs text-muted-foreground">
            {project.category === "UI/UX Design"
              ? "Opening Figma case study..."
              : "Opening project..."}
          </p>
        </div>
      </div>
    </div>
  );
}
