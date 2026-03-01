import Container from "@/components/container";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <div className="py-12 bg-primary/20  ">
      <Container className=" text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="mb-8">
          Let&apos;s bring your vision to life. Our team is ready to help you
          create an amazing digital experience.
        </p>
        <Button size="lg">Get Started Now</Button>
      </Container>
    </div>
  );
}

