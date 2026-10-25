import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Github,
  Lightbulb,
  Quote,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getNextAndPrevProject } from "../projects.data";
import { Project } from "../projects.type";

interface ProjectPlainDetailProps {
  project: Project;
}

export function ProjectPlainDetail({ project }: ProjectPlainDetailProps) {
  const { prev, next } = getNextAndPrevProject(project.slug);
  const displayImage = project.heroBanner || project.thumbnail;

  return (
    <div className="py-12 sm:py-20">
      <Container className="max-w-4xl space-y-12 sm:space-y-16">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to all projects</span>
          </Link>
        </div>

        {/* ======================================================== */}
        {/* 1. Header Section: Title, Tagline & Meta                */}
        {/* ======================================================== */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-muted-foreground">
            <span className="text-primary font-semibold">{project.category}</span>
            <span>•</span>
            <span>{project.year}</span>
            {project.clientIndustry && (
              <>
                <span>•</span>
                <span>{project.clientIndustry}</span>
              </>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            {project.tagline}
          </p>

          {/* Metadata Row & Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-y border-border/50 py-4 text-sm text-muted-foreground">
            <div className="flex flex-wrap items-center gap-6">
              <div>
                <span className="text-foreground font-semibold">Client:</span> {project.client}
              </div>
              <div>
                <span className="text-foreground font-semibold">Timeline:</span> {project.duration}
              </div>
              <div>
                <span className="text-foreground font-semibold">Discipline:</span> {project.category}
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              {project.links.live && (
                <Button asChild size="sm" className="gap-1.5 text-xs rounded-md font-medium">
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <span>Live Website</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
              )}
              {project.links.github && (
                <Button asChild variant="outline" size="sm" className="gap-1.5 text-xs rounded-md font-medium">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-3.5 w-3.5" />
                    <span>Source</span>
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. Main Hero Mockup / Visual (Border 0, Rounded-XL)      */}
        {/* ======================================================== */}
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border-0 bg-muted shadow-sm">
          <Image
            src={displayImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>

        {/* ======================================================== */}
        {/* 3. Verified Results & Impact Metrics                     */}
        {/* ======================================================== */}
        {project.stats && project.stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-border/50">
            {project.stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-primary uppercase tracking-wide">
                  {stat.label}
                </div>
                {stat.subtext && (
                  <div className="text-[11px] text-muted-foreground truncate">
                    {stat.subtext}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ======================================================== */}
        {/* 4. Project Story: Background, Challenge & Solution      */}
        {/* ======================================================== */}
        <div className="space-y-8">
          {/* Executive Overview */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              Project Overview & Objectives
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* The Challenge */}
          <div className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              The Challenge & Pain Points
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* The Engineered Solution */}
          <div className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              The Engineered Solution
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 5. Core Capabilities & What We Built                     */}
        {/* ======================================================== */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <div className="space-y-6 pt-4 border-t border-border/40">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Core Capabilities & Deliverables
              </h2>
              <p className="text-sm text-muted-foreground">
                Key user experiences, algorithms, and backend systems implemented in this project:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {project.keyFeatures.map((feature, index) => (
                <div key={index} className="space-y-1.5">
                  <div className="text-xs font-mono font-bold text-primary">
                    0{index + 1} //
                  </div>
                  <h3 className="text-base font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 6. Architectural Highlights                              */}
        {/* ======================================================== */}
        {project.architectureHighlights && project.architectureHighlights.length > 0 && (
          <div className="space-y-4 pt-4 border-t border-border/40">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              System Architecture & Infrastructure Highlights
            </h2>
            <div className="space-y-2.5 pt-1">
              {project.architectureHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 7. Technology Stack                                      */}
        {/* ======================================================== */}
        {project.techStackCategorized && project.techStackCategorized.length > 0 && (
          <div className="space-y-4 pt-4 border-t border-border/40">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              Technology Stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-1">
              {project.techStackCategorized.map((group, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-foreground font-bold">
                    {group.category}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-mono py-0.5 px-2 rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 8. Interface Screenshots Gallery                         */}
        {/* ======================================================== */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="space-y-6 pt-4 border-t border-border/40">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Interface & Visual Showcase
              </h2>
              <p className="text-sm text-muted-foreground">
                High-resolution captures demonstrating the production interface and workflows:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {project.gallery.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border-0 bg-muted shadow-sm">
                    <Image
                      src={item.url}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 450px"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-sm font-semibold text-foreground">{item.title}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">
                      {item.caption}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 9. Client Endorsement / Testimonial                      */}
        {/* ======================================================== */}
        {project.testimonial && (
          <div className="pt-6 border-t border-border/40 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary font-bold">
              <Quote className="h-4 w-4" />
              <span>Client Endorsement</span>
            </div>

            <blockquote className="border-l-2 border-primary pl-4 py-1 italic text-base sm:text-lg text-foreground/90 leading-relaxed font-medium">
              &ldquo;{project.testimonial.quote}&rdquo;
            </blockquote>

            <div className="flex items-center gap-3 pl-4 pt-1">
              <div className="relative h-10 w-10 rounded-full overflow-hidden border border-border/60">
                <Image
                  src={project.testimonial.avatar}
                  alt={project.testimonial.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">
                  {project.testimonial.author}
                </div>
                <div className="text-xs text-muted-foreground font-mono">
                  {project.testimonial.role}, <span className="text-foreground">{project.testimonial.company}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 10. Previous / Next Project Navigation & Conversion      */}
        {/* ======================================================== */}
        <div className="space-y-8 pt-8 border-t border-border/50">
          <div className="flex items-center justify-between text-sm">
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Previous: {prev.title}</span>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium ml-auto transition-colors"
              >
                <span>Next: {next.title}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <div />
            )}
          </div>

          {/* Project Inquire Banner */}
          <div className="p-8 sm:p-10 rounded-2xl bg-muted/30 border border-border/50 text-center space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
              <Lightbulb className="h-3.5 w-3.5" />
              <span>Looking for similar engineering?</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Let&apos;s build your next digital breakthrough.
            </h3>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Have an ambitious vision or complex requirements? Discuss your project with our engineering team today.
            </p>
            <div className="pt-2">
              <Button asChild size="default" className="font-semibold text-xs rounded-md">
                <Link href="/contact-us">
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
