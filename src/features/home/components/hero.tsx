import Container from "@/components/container";
import ScrollArrowButton from "@/components/scroll-arrow-button";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Grid } from "@/components/ui/grid";
import { WorldMap } from "@/components/ui/world-map";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-20  lg:pt-0 flex items-center justify-center overflow-hidden">
      <Container className="flex flex-col items-center  text-center max-w-screen-xl">
        <Grid size={30} />
        <div className="lg:mt-36">
          <div className="space-y-2 mb-8">
            <Badge variant="secondary" className="px-3 py-2  border relative">
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
              Innovative Digital Solutions
              <BorderBeam size={30} duration={8} delay={9} />
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Transform Your Digital Presence
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              We create cutting-edge digital experiences that elevate your brand
              and drive results.
            </p>
          </div>
          <div className="space-x-4">
            <Button size="lg" variant={"gooeyLeft"} className="md:h-12 md:px-8">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="md:h-12 md:px-8">
              Learn More
            </Button>
          </div>

          <WorldMap
            dots={[
              {
                start: { lat: 64.2008, lng: -149.4937 },
                end: { lat: 34.0522, lng: -118.2437 },
              },
              {
                start: { lat: 64.2008, lng: -149.4937 },
                end: { lat: -15.7975, lng: -47.8919 },
              },
              {
                start: { lat: -15.7975, lng: -47.8919 },
                end: { lat: 38.7223, lng: -9.1393 },
              },
              {
                start: { lat: 51.5074, lng: -0.1278 },
                end: { lat: 28.6139, lng: 77.209 },
              },
              {
                start: { lat: 28.6139, lng: 77.209 },
                end: { lat: 43.1332, lng: 131.9113 },
              },
              {
                start: { lat: 28.6139, lng: 77.209 },
                end: { lat: -1.2921, lng: 36.8219 },
              },
            ]}
          />
        </div>
      </Container>
      <ScrollArrowButton />
    </section>
  );
}
