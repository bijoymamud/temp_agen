import Container from "@/components/container";
import { DotPattern } from "@/components/dot-pattern";
import { Card } from "@/components/ui/card";
import { Shield, Star, Zap } from "lucide-react";

const service_data = [
  {
    icon: Zap,
    title: "Innovative Design",
    description:
      "We deliver creative designs that align with your brand, focusing on usability and modern aesthetics.",
  },
  {
    icon: Shield,
    title: "Secure Solutions",
    description:
      "Protect your digital assets with advanced encryption, threat detection, and robust security protocols.",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description:
      "Our projects reflect top-tier quality, combining precision, innovation, and a commitment to excellence.",
  },
];

const Services = () => {
  return (
    <section className="relative py-8 bg-muted/20">
      <DotPattern />
      <Container className="max-w-screen-xl">
        <div className="grid gap-12 lg:grid-cols-3">
          {service_data.map((service, i) => (
            <Card key={i} className="border-none relative z-10">
              <div
                key={i}
                className="w-full bg-background px-4 py-2 relative overflow-hidden group cursor-pointer rounded-md before:bg-primary before:w-[38px] before:h-[38px] before:absolute before:top-0 before:right-0 before:rounded-bl-[35px] before:z-[-1] hover:before:scale-[31] hover:before:duration-700 before:transition-all before:ease-out before:duration-[600ms] z-[0] shadow h-full"
              >
                <service.icon className="absolute top-2 z-20 right-2 text-[1rem] size-4 text-background " />
                <h3 className="text-[1.5rem] font-bold transition-all duration-500 group-hover:text-background ease-out">
                  {service.title}
                </h3>
                <p className="text-[0.9rem]  transition-all ease-out duration-500 mt-1 group-hover:text-background">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
