import Container from "@/components/container";
import { Quote } from "lucide-react";
import Image from "next/image";
import { Project } from "../projects.type";

interface ProjectDetailTestimonialProps {
  project: Project;
}

export function ProjectDetailTestimonial({ project }: ProjectDetailTestimonialProps) {
  if (!project.testimonial) return null;

  const { quote, author, role, company, avatar } = project.testimonial;

  return (
    <section className="py-16 md:py-24 border-t border-border/50 relative overflow-hidden bg-background">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-3xl pointer-events-none rounded-full" />
      <Container className="max-w-screen-md relative z-10 text-center space-y-6">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
          <Quote className="h-6 w-6" />
        </div>

        <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-foreground leading-snug italic">
          &ldquo;{quote}&rdquo;
        </blockquote>

        <div className="flex items-center justify-center gap-4 pt-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-primary/40">
            <Image src={avatar} alt={author} fill className="object-cover" />
          </div>
          <div className="text-left">
            <div className="font-bold text-foreground text-sm sm:text-base">{author}</div>
            <div className="text-xs text-muted-foreground">
              {role}, <span className="text-primary">{company}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
