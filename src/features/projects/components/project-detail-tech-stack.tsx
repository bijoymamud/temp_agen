import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";
import { Project } from "../projects.type";

interface ProjectDetailTechStackProps {
  project: Project;
}

export function ProjectDetailTechStack({ project }: ProjectDetailTechStackProps) {
  return (
    <section className="py-12 md:py-20 border-t border-border/50">
      <Container className="max-w-screen-xl space-y-12">
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          <Badge
            variant="outline"
            className="px-3 py-1 text-xs tracking-wider uppercase bg-primary/10 border-primary/30 text-primary font-semibold rounded-full"
          >
            Engineering Stack
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Technologies & Frameworks
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            The modern, battle-tested ecosystem powering the stability, performance, and
            scalability of this application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.techStackCategorized.map((categoryGroup, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-border/70 bg-card/50 backdrop-blur-sm space-y-4 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <Layers className="h-4 w-4" />
                <span>{categoryGroup.category}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {categoryGroup.items.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs font-mono py-1 px-2.5 bg-secondary/80 hover:bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
