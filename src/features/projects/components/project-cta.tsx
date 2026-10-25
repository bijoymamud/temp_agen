import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquareCode } from "lucide-react";
import Link from "next/link";

export function ProjectCta() {
  return (
    <section className="py-16 md:py-24 border-t border-border/50 relative overflow-hidden bg-muted/20">
      <Container className="max-w-screen-xl relative z-10">
        <div className="rounded-3xl border border-border/60 bg-card p-8 sm:p-12 md:p-16 text-center space-y-6 max-w-4xl mx-auto shadow-sm">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
            <MessageSquareCode className="h-6 w-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Have a project in mind?{" "}
            <span className="text-primary">Let&apos;s build it together.</span>
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            From architecture planning and UI/UX design to enterprise-grade full-stack
            deployment, our team turns ambitious ideas into high-impact digital products.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button asChild size="lg" className="w-full sm:w-auto gap-2 text-sm font-semibold">
              <Link href="/contact-us">
                <span>Start a Project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-sm font-semibold">
              <Link href="/how-we-works">
                Explore Our Process
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
