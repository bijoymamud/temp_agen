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
  Quote,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getNextAndPrevProject } from "../projects.data";
import { Project } from "../projects.type";

interface ProjectEditorialSpreadProps {
  project: Project;
}

export function ProjectEditorialSpread({ project }: ProjectEditorialSpreadProps) {
  const { prev, next } = getNextAndPrevProject(project.slug);

  return (
    <div className="relative py-16 md:py-24 bg-background text-foreground transition-colors">
      <Container className="max-w-6xl relative z-10 space-y-12 sm:space-y-16">
        {/* Navigation Breadcrumb Bar */}
        <div className="flex items-center justify-between border-b border-border/50 pb-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 hover:text-primary transition-colors font-medium"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Projects</span>
          </Link>
          <span className="font-bold text-foreground">
            {project.category} // CASE STUDY
          </span>
          <span className="hidden sm:inline font-mono">{project.year}</span>
        </div>

        {/* ======================================================== */}
        {/* SPREAD 1: MONOGRAPH COVER (WAKO Portfolio layout)        */}
        {/* ======================================================== */}
        <section className="relative rounded-2xl overflow-hidden border border-border/70 bg-card p-6 sm:p-10 md:p-14 flex flex-col justify-between min-h-[380px] sm:min-h-[460px]">
          {/* Top Folio Watermark */}
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-muted-foreground border-b border-border/50 pb-4">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              — Synth-ko Engineering & Design
            </span>
            <span className="font-bold text-primary">FOLIO ARCHIVE // 01</span>
          </div>

          {/* Center Monograph Typography */}
          <div className="py-8 sm:py-12 space-y-4 max-w-3xl">
            <Badge
              variant="outline"
              className="px-2.5 py-0.5 text-xs font-mono uppercase tracking-wider text-primary border-primary/30 bg-primary/5"
            >
              {project.category}
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-foreground leading-[1.1]">
              {project.title}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {project.tagline}
            </p>
          </div>

          {/* Bottom 4-Column Metadata Grid (Matching WAKO Portfolio) */}
          <div className="pt-6 border-t border-border/50 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-xs font-mono text-muted-foreground">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground/80 mb-0.5">
                Client / Brand
              </div>
              <div className="text-foreground font-sans font-semibold text-sm">
                {project.client}
              </div>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground/80 mb-0.5">
                Discipline
              </div>
              <div className="text-foreground font-sans font-semibold text-sm">
                {project.category}
              </div>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground/80 mb-0.5">
                Timeline
              </div>
              <div className="text-foreground font-sans font-semibold text-sm">
                {project.duration} ({project.year})
              </div>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground/80 mb-0.5">
                Status
              </div>
              <div className="text-primary font-sans font-semibold text-sm flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Production Live</span>
              </div>
            </div>
          </div>
        </section>

        {/* Action Link Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl border border-border/60 bg-card">
          <div className="text-xs font-mono text-muted-foreground">
            PROJECT DEPLOYMENTS & REPOSITORY:
          </div>
          <div className="flex items-center gap-2.5">
            {project.links.live && (
              <Button asChild size="sm" className="gap-2 text-xs font-semibold">
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  <span>Visit Production App</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>
            )}
            {project.links.github && (
              <Button asChild variant="outline" size="sm" className="gap-2 text-xs font-semibold">
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-3.5 w-3.5" />
                  <span>Inspect Code</span>
                </a>
              </Button>
            )}
            <Button asChild variant="secondary" size="sm" className="gap-2 text-xs font-semibold">
              <Link href="/contact-us">
                <span>Start Similar Project</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* SPREAD 2: CONTENTS & CHAPTER INDEX (Contents 01-06)      */}
        {/* ======================================================== */}
        <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4 space-y-2 border-b md:border-b-0 md:border-r border-border/50 pb-6 md:pb-0 md:pr-8">
              <div className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">
                TABLE OF CONTENTS
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-foreground">
                Folio Index
              </h2>
              <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                Decomposition of system objectives, core engineering deliverables,
                specifications, and production benchmarks.
              </p>
            </div>

            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:pl-4">
              <div className="space-y-5">
                <div>
                  <div className="text-xs font-mono font-bold text-primary">01</div>
                  <div className="text-sm font-bold uppercase tracking-wide text-foreground">
                    Executive Scope & Brief
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Background, business objectives, and constraints.
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono font-bold text-primary">02</div>
                  <div className="text-sm font-bold uppercase tracking-wide text-foreground">
                    Engineered Solution
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Microservice topology and data pipelines.
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono font-bold text-primary">03</div>
                  <div className="text-sm font-bold uppercase tracking-wide text-foreground">
                    Key Deliverables
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Four production technical components.
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="text-xs font-mono font-bold text-primary">04</div>
                  <div className="text-sm font-bold uppercase tracking-wide text-foreground">
                    Technology Index
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Frontend, APIs, Database & Cloud infrastructure.
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono font-bold text-primary">05</div>
                  <div className="text-sm font-bold uppercase tracking-wide text-foreground">
                    Verified Performance
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Uptime, latency benchmarks, and verified ROI.
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono font-bold text-primary">06</div>
                  <div className="text-sm font-bold uppercase tracking-wide text-foreground">
                    Visual Lookbook
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Interface screens, tokens, and stakeholder colophon.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SPREAD 3: EDITORIAL NARRATIVE (Sibyl Vane aesthetic)     */}
        {/* ======================================================== */}
        <section className="rounded-2xl border border-border/60 bg-card overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Large Visual Page */}
          <div className="lg:col-span-6 relative min-h-[340px] lg:min-h-full bg-muted border-b lg:border-b-0 lg:border-r border-border/50">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 600px"
              priority
            />
            <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-background/80 backdrop-blur-md text-foreground text-[10px] font-mono uppercase tracking-widest border border-border/50">
              Fig. 01 — System Architecture
            </div>
          </div>

          {/* Right Typography Page */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
                CHAPTER 01 // NARRATIVE
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-foreground">
                Challenge & Scope
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.overview}
              </p>

              {/* Problem Highlight Box */}
              <div className="p-3.5 rounded-xl bg-muted/40 border border-border/60 text-xs text-muted-foreground space-y-0.5">
                <div className="font-bold text-foreground font-mono uppercase text-[10px]">
                  Technical Challenge:
                </div>
                <p className="leading-relaxed">{project.problem}</p>
              </div>

              {/* Solution Highlight Box */}
              <div className="p-3.5 rounded-xl bg-primary/5 border border-primary/20 text-xs text-foreground/90 space-y-0.5">
                <div className="font-bold text-primary font-mono uppercase text-[10px]">
                  Applied Solution:
                </div>
                <p className="leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Architectural Highlights */}
            <div className="space-y-2 pt-4 border-t border-border/50">
              <div className="text-[10px] font-mono uppercase text-muted-foreground tracking-widest font-bold">
                ENGINEERING PILLARS
              </div>
              <div className="space-y-1.5">
                {project.architectureHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-foreground/90">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SPREAD 4: KEY CAPABILITIES MATRIX (01, 02, 03, 04)       */}
        {/* ======================================================== */}
        <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-border/50 pb-4 gap-2">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">
                CHAPTER 02 // SPECIFICATIONS
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-foreground">
                Core Capabilities
              </h2>
            </div>
            <span className="text-xs font-mono text-muted-foreground">
              4 PRODUCTION DELIVERABLES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {project.keyFeatures.map((feat, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-border/60 bg-muted/20 space-y-1.5"
              >
                <div className="text-xs font-mono text-primary font-bold">
                  SPECIFICATION // 0{i + 1}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-foreground">
                  {feat.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Verified Results Row */}
          <div className="pt-4 border-t border-border/50 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.stats.map((s, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-background border border-border/60 text-center">
                <div className="text-xl sm:text-2xl font-black text-foreground">
                  {s.value}
                </div>
                <div className="text-[10px] font-mono uppercase text-primary font-semibold mt-0.5">
                  {s.label}
                </div>
                {s.subtext && (
                  <div className="text-[10px] text-muted-foreground mt-0.5 truncate">
                    {s.subtext}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* SPREAD 5: VISUAL LOOKBOOK GALLERY                        */}
        {/* ======================================================== */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-10 space-y-6">
            <div className="flex items-center justify-between border-b border-border/50 pb-4">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">
                  CHAPTER 03 // VISUAL DIRECTION
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-foreground">
                  Interface Lookbook
                </h2>
              </div>
              <span className="text-xs font-mono text-muted-foreground">
                FIG. 02 — EXHIBIT SPREAD
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {project.gallery.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl overflow-hidden border border-border/60 bg-muted/20 flex flex-col"
                >
                  <div className="relative aspect-[16/10] w-full bg-muted">
                    <Image
                      src={item.url}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  <div className="p-3.5 space-y-1">
                    <div className="text-xs font-bold text-foreground">{item.title}</div>
                    <div className="text-[11px] text-muted-foreground leading-relaxed">
                      {item.caption}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ======================================================== */}
        {/* SPREAD 6: COLOPHON, TECH INDEX & STAKEHOLDER TESTIMONIAL  */}
        {/* ======================================================== */}
        <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-10 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Testimonial */}
            <div className="lg:col-span-6 space-y-3.5 border-b lg:border-b-0 lg:border-r border-border/50 pb-6 lg:pb-0 lg:pr-8">
              <div className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">
                STAKEHOLDER ENDORSEMENT
              </div>
              {project.testimonial ? (
                <div className="space-y-3">
                  <Quote className="h-6 w-6 text-primary/40" />
                  <p className="text-sm sm:text-base font-medium italic text-foreground leading-relaxed">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="relative h-9 w-9 rounded-full overflow-hidden border border-border/70">
                      <Image
                        src={project.testimonial.avatar}
                        alt={project.testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-foreground">
                        {project.testimonial.author}
                      </div>
                      <div className="text-[11px] text-muted-foreground font-mono">
                        {project.testimonial.role}, {project.testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-muted-foreground">
                  Production application delivered and verified under Synth-ko SLA.
                </p>
              )}
            </div>

            {/* Right: Technical Colophon Stack */}
            <div className="lg:col-span-6 space-y-3.5 sm:pl-4">
              <div className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">
                SYSTEM BLUEPRINT & STACK
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                {project.techStackCategorized.map((group, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-muted-foreground uppercase text-[10px] font-bold">
                      {group.category}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {group.items.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-muted text-foreground text-[10px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* TWO-WAY NAVIGATION: PREV & NEXT LOOKBOOK SPREADS         */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {prev && (
            <Link
              href={`/projects/${prev.slug}`}
              className="p-5 rounded-xl border border-border/60 bg-card hover:border-primary transition-colors flex items-center gap-3.5 group"
            >
              <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <ArrowLeft className="h-4 w-4" />
              </div>
              <div className="space-y-0.5 overflow-hidden">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">
                  Previous Folio
                </div>
                <div className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors truncate">
                  {prev.title}
                </div>
              </div>
            </Link>
          )}

          {next && (
            <Link
              href={`/projects/${next.slug}`}
              className="p-5 rounded-xl border border-border/60 bg-card hover:border-primary transition-colors flex items-center justify-end text-right gap-3.5 group ml-auto w-full"
            >
              <div className="space-y-0.5 overflow-hidden">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">
                  Next Folio
                </div>
                <div className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors truncate">
                  {next.title}
                </div>
              </div>
              <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
}
