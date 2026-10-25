import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github, Star } from "lucide-react";
import Link from "next/link";
import { Project } from "../projects.type";

interface ProjectDetailHeroProps {
  project: Project;
}

export function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  return (
    <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 border-b border-border/40 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-primary/10 blur-3xl pointer-events-none rounded-full" />

      <Container className="max-w-screen-xl relative z-10 space-y-6">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors font-medium"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Projects</span>
          </Link>
          <span>/</span>
          <span className="text-foreground font-semibold truncate">{project.title}</span>
        </div>

        {/* Title & Metadata Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge className="bg-primary text-primary-foreground font-semibold text-xs px-3 py-1">
              {project.category}
            </Badge>

            {project.featured && (
              <Badge variant="outline" className="gap-1 border-primary/40 text-primary text-xs px-2.5 py-1">
                <Star className="h-3 w-3 fill-current" />
                Featured Case Study
              </Badge>
            )}

            <span className="text-xs text-muted-foreground font-mono">
              {project.year} • {project.duration}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            {project.tagline}
          </p>

          {/* Client Details Row */}
          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-muted-foreground border-y border-border/40 py-3">
            <div>
              <span className="font-semibold text-foreground">Client:</span> {project.client}
            </div>
            {project.clientIndustry && (
              <div>
                <span className="font-semibold text-foreground">Industry:</span> {project.clientIndustry}
              </div>
            )}
            <div>
              <span className="font-semibold text-foreground">Timeline:</span> {project.duration}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.links.live && (
              <Button asChild size="default" className="gap-2 text-xs sm:text-sm font-semibold">
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  <span>Visit Live Project</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}

            {project.links.github && (
              <Button asChild variant="outline" size="default" className="gap-2 text-xs sm:text-sm font-semibold">
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span>GitHub Repository</span>
                </a>
              </Button>
            )}

            <Button asChild variant="secondary" size="default" className="gap-2 text-xs sm:text-sm font-semibold">
              <Link href="/contact-us">
                <span>Request Similar Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Highlight Stats Bar */}
        {project.stats && project.stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-card/80 to-card/40 border border-border/60 backdrop-blur-md shadow-xl mt-8">
            {project.stats.map((stat, i) => (
              <div key={i} className="flex flex-col space-y-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-foreground">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                  {stat.label}
                </span>
                {stat.subtext && (
                  <span className="text-[11px] text-muted-foreground">
                    {stat.subtext}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
