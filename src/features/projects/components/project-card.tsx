"use client";

import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, ExternalLink, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../projects.type";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const detailUrl = `/projects/${project.slug}`;

  return (
    <Card className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-b from-card/80 to-card/40 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10">
      {/* Featured Beam Effect */}
      {project.featured && (
        <BorderBeam
          size={250}
          duration={12}
          delay={2}
          colorFrom="hsl(var(--primary))"
          colorTo="hsl(var(--primary) / 0.15)"
        />
      )}

      {/* Clickable Image Container */}
      <Link
        href={detailUrl}
        className="relative aspect-[16/10] w-full overflow-hidden bg-muted/60 block"
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Soft Darkened Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-75" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-none">
          <Badge
            variant="secondary"
            className="bg-background/85 backdrop-blur-md text-foreground border border-border/60 text-[11px] font-semibold px-2.5 py-0.5 shadow-sm"
          >
            {project.category}
          </Badge>

          {project.featured && (
            <Badge className="bg-primary text-primary-foreground text-[10px] gap-1 px-2.5 py-0.5 shadow-sm font-semibold">
              <Star className="h-3 w-3 fill-current" />
              Featured
            </Badge>
          )}
        </div>

        {/* Floating Action Arrow */}
        <div className="absolute bottom-3.5 right-3.5 h-10 w-10 rounded-full bg-background/90 backdrop-blur-md border border-border/70 flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-lg z-10">
          <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </Link>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-6 space-y-3.5">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <span>{project.year}</span>
            <span>•</span>
            <span className="truncate">{project.client}</span>
          </div>

          <Link href={detailUrl} className="block group/title">
            <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover/title:text-primary line-clamp-1">
              {project.title}
            </h3>
          </Link>

          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Stats Snippet */}
        {project.stats && project.stats.length > 0 && (
          <div className="grid grid-cols-2 gap-2 py-2 px-3 rounded-lg bg-muted/40 border border-border/40 text-xs">
            <div>
              <div className="font-bold text-foreground">{project.stats[0].value}</div>
              <div className="text-[10px] text-muted-foreground truncate">
                {project.stats[0].label}
              </div>
            </div>
            {project.stats[1] && (
              <div>
                <div className="font-bold text-foreground">{project.stats[1].value}</div>
                <div className="text-[10px] text-muted-foreground truncate">
                  {project.stats[1].label}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-secondary/60 text-secondary-foreground border border-border/40"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-[11px] text-muted-foreground self-center px-1 font-mono">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Bottom Actions */}
        <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
          <Link
            href={detailUrl}
            className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 group/link"
          >
            <span>Explore Case Study</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>

          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-muted/70 transition-colors"
            >
              <span>Live Demo</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
