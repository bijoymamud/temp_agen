import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Cpu } from "lucide-react";
import { Project } from "../projects.type";

interface ProjectDetailFeaturesProps {
  project: Project;
}

export function ProjectDetailFeatures({ project }: ProjectDetailFeaturesProps) {
  return (
    <section className="py-12 md:py-20 border-t border-border/50 bg-muted/20 relative">
      <Container className="max-w-screen-xl space-y-12">
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          <Badge
            variant="outline"
            className="px-3 py-1 text-xs tracking-wider uppercase bg-primary/10 border-primary/30 text-primary font-semibold rounded-full"
          >
            Capabilities
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Key Engineering Features
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            A comprehensive look at the mission-critical modules and specialized functionality
            implemented in this project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.keyFeatures.map((feature, i) => (
            <Card
              key={i}
              className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-md hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Cpu className="h-5 w-5" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
              </div>

              <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
