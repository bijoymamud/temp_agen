import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";
import { getNextAndPrevProject } from "../projects.data";
import { Project } from "../projects.type";

interface ProjectDetailNavigationProps {
  currentProject: Project;
}

export function ProjectDetailNavigation({ currentProject }: ProjectDetailNavigationProps) {
  const { prev, next } = getNextAndPrevProject(currentProject.slug);

  return (
    <section className="py-16 md:py-24 border-t border-border/50 bg-gradient-to-b from-card/30 to-background">
      <Container className="max-w-screen-xl space-y-12">
        {/* Previous & Next Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {prev && (
            <Link
              href={`/projects/${prev.slug}`}
              className="group p-6 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 flex items-center gap-4 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </div>
              <div className="space-y-1 overflow-hidden">
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                  Previous Project
                </div>
                <div className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors truncate">
                  {prev.title}
                </div>
                <div className="text-xs text-muted-foreground truncate font-mono">
                  {prev.category}
                </div>
              </div>
            </Link>
          )}

          {next && (
            <Link
              href={`/projects/${next.slug}`}
              className="group p-6 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 flex items-center justify-end text-right gap-4 hover:shadow-xl hover:shadow-primary/5 ml-auto w-full"
            >
              <div className="space-y-1 overflow-hidden">
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                  Next Project
                </div>
                <div className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors truncate">
                  {next.title}
                </div>
                <div className="text-xs text-muted-foreground truncate font-mono">
                  {next.category}
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <ArrowRight className="h-5 w-5" />
              </div>
            </Link>
          )}
        </div>

        {/* Conversion Banner */}
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 p-8 sm:p-12 text-center space-y-5 max-w-3xl mx-auto shadow-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary">
            <Rocket className="h-3.5 w-3.5" />
            <span>Ready for your own case study?</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Let&apos;s engineer your next digital breakthrough.
          </h3>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Discuss your requirements with our engineering and design architects today.
          </p>
          <div className="pt-2">
            <Button asChild size="lg" className="font-semibold text-sm">
              <Link href="/contact-us">
                Start a Conversation
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
