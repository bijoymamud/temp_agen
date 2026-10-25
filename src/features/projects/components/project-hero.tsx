import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { PROJECT_METRICS } from "../projects.data";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { BorderBeam } from "@/components/ui/border-beam";
import { Globe2, NotebookPen } from "lucide-react";

export function ProjectHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16 border-b border-border/40">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      <Container className="max-w-screen-xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
          <Badge variant="secondary" className="px-3 py-2  border relative">
            <AnimatedShinyText className="inline-flex items-center justify-center  transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <NotebookPen className="w-4 h-4 mr-2 text-primary" />
              Portfolio & Case Studies
            </AnimatedShinyText>
            <BorderBeam size={50} duration={8} delay={9} />
          </Badge>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
            Transformative Solutions Built for{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
              Scale & Impact
            </span>
          </h1>

          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
            Explore our curated showcase of production-ready enterprise
            applications, AI-driven workflows, mobile experiences, and modern
            web platforms engineered by our team.
          </p>

          {/* Quick Metrics */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 w-full border-t border-border/50 mt-6">
            {PROJECT_METRICS.map((metric, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center rounded-none"
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-foreground">
                  {metric.value}
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-wide mt-1">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
