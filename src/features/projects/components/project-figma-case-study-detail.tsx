import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Layers,
  Palette,
  Sparkles,
  Target,
  Type,
  UserCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FigmaCaseStudy } from "../figma-case-studies.type";

interface FigmaCaseStudyDetailProps {
  caseStudy: FigmaCaseStudy;
  prevSlug?: string;
  nextSlug?: string;
  prevTitle?: string;
  nextTitle?: string;
}

export function ProjectFigmaCaseStudyDetail({
  caseStudy,
  prevSlug,
  nextSlug,
  prevTitle,
  nextTitle,
}: FigmaCaseStudyDetailProps) {
  return (
    <div className="py-12 sm:py-20">
      <Container className="max-w-4xl space-y-12 sm:space-y-16">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to all projects</span>
          </Link>

          <Badge
            variant="outline"
            className="border-primary/40 bg-primary/10 text-primary text-xs font-mono uppercase tracking-wider py-1 px-3"
          >
            UI/UX Case Study
          </Badge>
        </div>

        {/* ======================================================== */}
        {/* 1. Header Section: Title, Tagline & Meta                */}
        {/* ======================================================== */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-muted-foreground">
            <span className="text-primary font-semibold">Figma & Design Thinking</span>
            <span>•</span>
            <span>{caseStudy.year}</span>
            <span>•</span>
            <span>{caseStudy.clientIndustry}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            {caseStudy.title}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            {caseStudy.tagline}
          </p>

          {/* Metadata Row & Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-y border-border/50 py-4 text-sm text-muted-foreground">
            <div className="flex flex-wrap items-center gap-6">
              <div>
                <span className="text-foreground font-semibold">Client:</span> {caseStudy.client}
              </div>
              <div>
                <span className="text-foreground font-semibold">Role:</span> {caseStudy.role}
              </div>
              <div>
                <span className="text-foreground font-semibold">Timeline:</span> {caseStudy.timeline}
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              {caseStudy.links.figmaPrototype && (
                <Button
                  asChild
                  size="sm"
                  className="gap-1.5 text-xs rounded-md font-medium"
                >
                  <a
                    href={caseStudy.links.figmaPrototype}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Figma Prototype</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
              )}
              {caseStudy.links.figmaFile && (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="gap-1.5 text-xs rounded-md font-medium"
                >
                  <a
                    href={caseStudy.links.figmaFile}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Figma File</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Tools & Deliverables Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs font-mono text-muted-foreground uppercase mr-1">
              Tools:
            </span>
            {caseStudy.tools.map((tool) => (
              <Badge
                key={tool}
                variant="secondary"
                className="text-xs font-mono py-0.5 px-2.5 bg-secondary/80 text-secondary-foreground"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. Hero Cover Artboard Showcase                          */}
        {/* ======================================================== */}
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-border/60 bg-muted shadow-lg">
          <Image
            src={caseStudy.coverImage}
            alt={caseStudy.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>

        {/* ======================================================== */}
        {/* 3. Verified Impact & Usability Metrics                   */}
        {/* ======================================================== */}
        {caseStudy.stats && caseStudy.stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-border/50">
            {caseStudy.stats.map((stat, i) => (
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
        {/* 4. Case Study Story: Overview & Problem Statement        */}
        {/* ======================================================== */}
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              Executive Overview & Design Intent
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {caseStudy.overview}
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              The User Friction & Problem Statement
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {caseStudy.problemStatement}
            </p>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 5. User Research & Target Persona                        */}
        {/* ======================================================== */}
        <div className="space-y-6 pt-4 border-t border-border/40">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary font-bold">
              <Target className="h-4 w-4" />
              <span>User Empathy & Research</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              Research Insights & User Persona
            </h2>
          </div>

          {/* Key Research Findings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {caseStudy.researchInsights.keyFindings.map((finding, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-lg border border-border/50 bg-card/60 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>{finding}</span>
              </div>
            ))}
          </div>

          {/* Persona Card */}
          {caseStudy.researchInsights.persona && (
            <div className="mt-4 p-5 sm:p-6 rounded-xl border border-border/60 bg-gradient-to-br from-card to-card/50 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold">
                  <UserCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">
                    {caseStudy.researchInsights.persona.name}
                  </h3>
                  <div className="text-xs text-muted-foreground font-mono">
                    {caseStudy.researchInsights.persona.role} •{" "}
                    {caseStudy.researchInsights.persona.demographics}
                  </div>
                </div>
              </div>

              <blockquote className="italic text-sm text-foreground/90 pl-3 border-l-2 border-primary">
                &ldquo;{caseStudy.researchInsights.persona.quote}&rdquo;
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="space-y-1.5">
                  <span className="font-semibold text-destructive uppercase tracking-wide">
                    Pain Points:
                  </span>
                  <ul className="space-y-1 text-muted-foreground list-disc pl-4">
                    {caseStudy.researchInsights.persona.painPoints.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-1.5">
                  <span className="font-semibold text-primary uppercase tracking-wide">
                    Core Goals:
                  </span>
                  <ul className="space-y-1 text-muted-foreground list-disc pl-4">
                    {caseStudy.researchInsights.persona.goals.map((g, i) => (
                      <li key={i}>{g}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ======================================================== */}
        {/* 6. 5-Stage Design Thinking Process                       */}
        {/* ======================================================== */}
        <div className="space-y-6 pt-4 border-t border-border/40">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary font-bold">
              <Sparkles className="h-4 w-4" />
              <span>Design Process</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              End-to-End Design Methodology
            </h2>
            <p className="text-sm text-muted-foreground">
              How we took this project from exploratory discovery to validated Figma deliverables:
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {caseStudy.designProcess.map((step, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl border border-border/60 bg-card/40 space-y-2.5 transition-all hover:border-primary/40"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                      STAGE {step.number}
                    </span>
                    <h3 className="text-base font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[11px] font-mono text-muted-foreground mr-1">
                    Deliverables:
                  </span>
                  {step.deliverables.map((d) => (
                    <Badge
                      key={d}
                      variant="outline"
                      className="text-[11px] py-0 px-2 text-foreground/80 bg-background/50 border-border/60"
                    >
                      {d}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* 7. Figma Design System & Token Architecture              */}
        {/* ======================================================== */}
        {caseStudy.designSystem && (
          <div className="space-y-6 pt-4 border-t border-border/40">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary font-bold">
                <Palette className="h-4 w-4" />
                <span>Design System Foundations</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Token Architecture & Component Matrix
              </h2>
              <p className="text-sm text-muted-foreground">
                Figma Variable collections, color tokens, and typographic hierarchy constructed for this system:
              </p>
            </div>

            {/* Design System Stats */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl border border-border/60 bg-card/50 text-center">
              <div>
                <div className="text-2xl font-extrabold text-foreground">
                  {caseStudy.designSystem.componentsCount}
                </div>
                <div className="text-xs text-muted-foreground font-mono">Components</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-foreground">
                  {caseStudy.designSystem.variantsCount}
                </div>
                <div className="text-xs text-muted-foreground font-mono">Component Variants</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-foreground">
                  {caseStudy.designSystem.designTokensCount}
                </div>
                <div className="text-xs text-muted-foreground font-mono">Design Tokens</div>
              </div>
            </div>

            {/* Color Palette Swatches */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                <Palette className="h-4 w-4 text-primary" />
                <span>Color Token Taxonomy</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {caseStudy.designSystem.colorPalette.map((token, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg border border-border/60 bg-card/40 space-y-2"
                  >
                    <div
                      className="h-10 w-full rounded-md border border-border/30 shadow-inner"
                      style={{ backgroundColor: token.hex }}
                    />
                    <div>
                      <div className="text-xs font-bold text-foreground truncate">
                        {token.name}
                      </div>
                      <div className="text-[11px] font-mono text-primary">
                        {token.hex}
                      </div>
                      <div className="text-[10px] text-muted-foreground line-clamp-1">
                        {token.usage}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography Scale Table */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                <Type className="h-4 w-4 text-primary" />
                <span>Typographic Hierarchy</span>
              </h3>
              <div className="border border-border/60 rounded-xl overflow-hidden divide-y divide-border/50 text-xs">
                {caseStudy.designSystem.typographyScale.map((t, idx) => (
                  <div
                    key={idx}
                    className="p-3 flex items-center justify-between bg-card/30 hover:bg-card/60 transition-colors"
                  >
                    <div className="font-semibold text-foreground">{t.level}</div>
                    <div className="text-muted-foreground font-mono">{t.font}</div>
                    <div className="text-primary font-mono font-bold">{t.size}</div>
                    <div className="text-muted-foreground">{t.weight}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 8. Visual Screens & Deliverables Gallery                 */}
        {/* ======================================================== */}
        {caseStudy.screens && caseStudy.screens.length > 0 && (
          <div className="space-y-6 pt-4 border-t border-border/40">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary font-bold">
                <Layers className="h-4 w-4" />
                <span>Visual Deliverables</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Figma Workspace & Production Screens
              </h2>
            </div>

            <div className="space-y-8 pt-2">
              {caseStudy.screens.map((screen, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-border/60 bg-muted shadow-md">
                    <Image
                      src={screen.image}
                      alt={screen.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 896px"
                    />
                    {screen.tag && (
                      <div className="absolute top-3 right-3 z-10">
                        <Badge className="bg-background/90 text-foreground backdrop-blur-md border border-border/60 text-xs font-mono shadow-sm">
                          {screen.tag}
                        </Badge>
                      </div>
                    )}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-foreground">
                      {screen.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {screen.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 9. Client Endorsement / Testimonial                      */}
        {/* ======================================================== */}
        {caseStudy.testimonial && (
          <div className="pt-6 border-t border-border/40 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary font-bold">
              <span>Client Review & Impact</span>
            </div>

            <blockquote className="border-l-2 border-primary pl-4 py-1 italic text-base sm:text-lg text-foreground/90 leading-relaxed font-medium">
              &ldquo;{caseStudy.testimonial.quote}&rdquo;
            </blockquote>

            <div className="flex items-center gap-3 pl-4 pt-1">
              {caseStudy.testimonial.avatar && (
                <div className="relative h-10 w-10 rounded-full overflow-hidden border border-border/60">
                  <Image
                    src={caseStudy.testimonial.avatar}
                    alt={caseStudy.testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <div className="text-sm font-bold text-foreground">
                  {caseStudy.testimonial.author}
                </div>
                <div className="text-xs text-muted-foreground font-mono">
                  {caseStudy.testimonial.role},{" "}
                  <span className="text-foreground">
                    {caseStudy.testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 10. Navigation Between Projects / Case Studies           */}
        {/* ======================================================== */}
        <div className="pt-8 border-t border-border/50 flex items-center justify-between text-sm">
          {prevSlug ? (
            <Link
              href={`/projects/${prevSlug}`}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span>{prevTitle || "Previous Project"}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextSlug && (
            <Link
              href={`/projects/${nextSlug}`}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span>{nextTitle || "Next Project"}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
}
