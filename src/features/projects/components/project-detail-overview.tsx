import Container from "@/components/container";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import { Project } from "../projects.type";

interface ProjectDetailOverviewProps {
  project: Project;
}

export function ProjectDetailOverview({ project }: ProjectDetailOverviewProps) {
  const displayImage = project.heroBanner || project.thumbnail;

  return (
    <section className="py-12 md:py-20">
      <Container className="max-w-screen-xl space-y-16">
        {/* Mock Browser Frame Preview */}
        <div className="relative rounded-2xl border border-border/70 bg-card/60 backdrop-blur-md shadow-2xl overflow-hidden group">
          {/* Browser Top Window Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-muted/60 border-b border-border/50">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <div className="text-[11px] font-mono text-muted-foreground px-3 py-0.5 rounded-full bg-background/60 border border-border/40">
              https://synth-ko.com/showcase/{project.slug}
            </div>
            <div className="w-12" />
          </div>

          {/* Screenshot Display */}
          <div className="relative aspect-[16/9] w-full bg-muted">
            <Image
              src={displayImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
          </div>
        </div>

        {/* Narrative Grid: Overview, Problem & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Context & Problem */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                <Zap className="h-4 w-4" />
                <span>Executive Overview</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                The Mission & Scope
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-destructive/5 border border-destructive/20">
              <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                <span>The Core Challenge & Pain Points</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-primary/5 border border-primary/20">
              <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                <span>The Engineered Solution</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Right Column: Architectural Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-card/90 to-card/50 border border-border/70 backdrop-blur-md shadow-lg space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                <ShieldCheck className="h-4 w-4" />
                <span>Architectural Highlights</span>
              </div>

              <h3 className="text-xl font-bold text-foreground">
                Engineered for High-Concurreny & Zero Downtime
              </h3>

              <div className="space-y-4 pt-2">
                {project.architectureHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-1" />
                    <span className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
