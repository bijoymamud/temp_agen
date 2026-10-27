"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle2, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../projects.type";

interface ProjectDetailsDialogProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDetailsDialog({
  project,
  open,
  onOpenChange,
}: ProjectDetailsDialogProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0 overflow-hidden flex flex-col bg-background/95 backdrop-blur-xl border-border">
        {/* Header Thumbnail */}
        <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-muted">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
            <Badge className="bg-primary text-primary-foreground font-medium">
              {project.category}
            </Badge>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-md border text-foreground">
              {project.year} • {project.duration || "Production"}
            </span>
          </div>
        </div>

        <ScrollArea className="flex-1 px-6 pb-6 pt-2 overflow-y-auto">
          <DialogHeader className="text-left space-y-1.5">
            <DialogTitle className="text-2xl font-bold tracking-tight text-foreground">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-sm font-medium text-primary">
              {project.tagline}
            </DialogDescription>
          </DialogHeader>

          {/* Client & Metadata */}
          {project.client && (
            <div className="mt-3 text-xs text-muted-foreground flex items-center gap-2">
              <span className="font-semibold text-foreground">Client:</span> {project.client}
            </div>
          )}

          {/* Description */}
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            {project.overview || project.description}
          </p>

          {/* Stats Grid */}
          {project.stats && project.stats.length > 0 && (
            <div className="mt-5 grid grid-cols-3 gap-3 p-3.5 rounded-lg border bg-muted/40">
              {project.stats.map((s, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-lg font-bold text-foreground">{s.value}</div>
                  <div className="text-[11px] text-muted-foreground uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Key Highlights */}
          {project.architectureHighlights && project.architectureHighlights.length > 0 && (
            <div className="mt-5 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Key Architectural Highlights
              </h4>
              <ul className="space-y-1.5">
                {project.architectureHighlights.map((h, i) => (
                  <li key={i} className="flex items-start text-xs sm:text-sm text-foreground/90 gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mt-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs font-mono py-0.5 px-2 bg-secondary/60 hover:bg-secondary"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="mt-6 pt-4 border-t flex flex-wrap gap-3 justify-end">
            {project.links?.github && (
              <Button asChild variant="outline" size="sm" className="gap-2 text-xs">
                <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-3.5 w-3.5" />
                  Source Code
                </Link>
              </Button>
            )}
            {project.links?.live && (
              <Button asChild size="sm" className="gap-2 text-xs">
                <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live Preview
                </Link>
              </Button>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
