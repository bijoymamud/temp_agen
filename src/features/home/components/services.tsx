import { services } from "@/assets/data";
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Bolt,
  Clock,
  Code,
  Database,
  Monitor,
  Server,
  Shield,
} from "lucide-react";
import React from "react";

export const Icons = {
  bolt: Bolt,
  server: Server,
  shield: Shield,
  monitor: Monitor,
  database: Database,
  code: Code,
  clock: Clock,
};

export const Services = () => {
  return (
    <Section className="header">
      <SectionHeader>
        <SectionTitle>Our IT Services</SectionTitle>
        <SectionDescription>
          Discover our range of IT services designed to empower your business
        </SectionDescription>
      </SectionHeader>
      <SectionContent className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon as keyof typeof Icons}
            title={service.title}
            description={service.description}
            price={service.price}
            duration={service.duration}
          />
        ))}
      </SectionContent>
    </Section>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: keyof typeof Icons;
  price: number;
  duration: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  price,
  duration,
}) => {
  const Icon = Icons[icon];

  return (
    <Card className=" w-full justify-between  flex overflow-hidden relative bg-primary/20 backdrop-blur-3xl shadow-none border-none">
      {/* left side */}
      <div className="flex flex-col p-[15px] lg:p-[20px] gap-[18px] flex-grow">
        <h1 className="text-[1rem] lg:text-[1.3rem] font-bold ">{title}</h1>
        <div className="flex items-center gap-[10px]">
          <div className="p-[8px] lg:p-[10px] rounded bg-background text-primary">
            <Icon className="w-[1.5rem] h-[1.5rem] lg:w-[2rem] lg:h-[2rem]" />
          </div>
          <div>
            <p className="text-[0.8rem] lg:text-[1.1rem] font-[600] ">
              Service Type
            </p>
            <p className="text-[0.6rem] lg:text-[0.9rem] font-[400] text-muted-foreground max-w-sm">
              {description}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="p-[8px] lg:p-[10px] rounded bg-background text-primary">
            <Icons.clock className="w-[1.5rem] h-[1.5rem] lg:w-[2rem] lg:h-[2rem]" />
          </div>
          <div>
            <p className="text-[0.8rem] lg:text-[1.1rem] font-[600] ">
              Duration
            </p>
            <p className="text-[0.6rem] lg:text-[0.9rem] font-[400] text-muted-foreground">
              {duration}
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex flex-col justify-between relative w-[45%] lg:w-[40%] items-center border-l-[2px] p-[15px] lg:p-[20px] border-dashed border-foreground/30 ">
        {/* top curve */}
        <div className="w-[45px] h-[45px] rounded-full bg-background absolute top-[-15%] lg:top-[-13%] sm:left-[-13.5%] left-[-19%] lg:left-[-11.5%]"></div>

        <p className="text-[0.9rem] lg:text-[1.3rem] font-bold ">IT Service</p>

        <Button variant={"gooeyRight"}>Get Started</Button>

        <p className="text-[0.9rem] lg:text-[1.1rem] text-gray-500">
          Price: <span className="text-destructive font-semibold"> Talk</span>
        </p>

        {/* bottom curve */}
        <div className="w-[45px] h-[45px] rounded-full  bg-background  absolute bottom-[-15%] lg:bottom-[-13%] left-[-18.5%] sm:left-[-13.5%] lg:left-[-11.5%]"></div>
      </div>
    </Card>
  );
};
