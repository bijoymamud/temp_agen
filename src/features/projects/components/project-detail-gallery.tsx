import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Project } from "../projects.type";

interface ProjectDetailGalleryProps {
  project: Project;
}

export function ProjectDetailGallery({ project }: ProjectDetailGalleryProps) {
  if (!project.gallery || project.gallery.length === 0) return null;

  return (
    <section className="py-12 md:py-20 border-t border-border/50 bg-muted/20">
      <Container className="max-w-screen-xl space-y-12">
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          <Badge
            variant="outline"
            className="px-3 py-1 text-xs tracking-wider uppercase bg-primary/10 border-primary/30 text-primary font-semibold rounded-full"
          >
            Visual Showcase
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Interface & Workflow Gallery
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            High-resolution visual highlights demonstrating the user experience and interface
            craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.gallery.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm flex flex-col hover:border-primary/50 transition-all duration-300 shadow-lg"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                <Image
                  src={item.url}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-5 space-y-1.5 flex-1 flex flex-col justify-center">
                <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
