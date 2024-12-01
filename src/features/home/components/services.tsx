import { Button } from "@/components/ui/button";
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

const services = [
  {
    icon: "bolt",
    title: "Fast IT Support",
    description: "Get quick and efficient IT support for your business needs.",
    price: 99,
    duration: "24/7 Support",
  },
  {
    icon: "server",
    title: "Cloud Solutions",
    description: "Secure and scalable cloud infrastructure for your company.",
    price: 199,
    duration: "Monthly",
  },
  {
    icon: "shield",
    title: "Cybersecurity",
    description: "Protect your business with advanced cybersecurity measures.",
    price: 299,
    duration: "Annual Plan",
  },
  {
    icon: "monitor",
    title: "Network Management",
    description: "Efficient management and optimization of your network.",
    price: 149,
    duration: "Monthly",
  },
  {
    icon: "database",
    title: "Data Analytics",
    description: "Harness the power of your data with advanced analytics.",
    price: 399,
    duration: "Quarterly",
  },
  {
    icon: "code",
    title: "Custom Software",
    description: "Tailored software solutions for your unique business needs.",
    price: 999,
    duration: "Per Project",
  },
];

export const Icons = {
  bolt: Bolt,
  server: Server,
  shield: Shield,
  monitor: Monitor,
  database: Database,
  code: Code,
  clock: Clock,
};

const Services: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-start md:text-center">
        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
          Our IT Services
        </h2>
        <p className="text-muted-foreground mt-6">
          Discover our range of IT services designed to empower your business
        </p>
      </div>

      <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
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
        </div>
      </div>
    </div>
  );
};

export default Services;

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
  price,
  duration,
}) => {
  const Icon = Icons[icon];

  return (
    <div className="bg-muted w-full justify-between rounded flex overflow-hidden">
      {/* left side */}
      <div className="flex flex-col p-[15px] lg:p-[20px] gap-[18px] flex-grow">
        <h1 className="text-[1rem] lg:text-[1.3rem] font-bold ">{title}</h1>
        <div className="flex items-center gap-[10px]">
          <div className="p-[8px] lg:p-[10px] rounded bg-background text-primary">
            <Icon className="w-[1.5rem] h-[1.5rem] lg:w-[2rem] lg:h-[2rem]" />
          </div>
          <div>
            <h4 className="text-[0.8rem] lg:text-[1.1rem] font-[600] ">
              Service Type
            </h4>
            <p className="text-[0.6rem] lg:text-[0.9rem] font-[400] text-gray-500">
              {description}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="p-[8px] lg:p-[10px] rounded bg-background text-primary">
            <Icons.clock className="w-[1.5rem] h-[1.5rem] lg:w-[2rem] lg:h-[2rem]" />
          </div>
          <div>
            <h4 className="text-[0.8rem] lg:text-[1.1rem] font-[600] ">
              Duration
            </h4>
            <p className="text-[0.6rem] lg:text-[0.9rem] font-[400]">
              {duration}
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex flex-col justify-between relative w-[45%] lg:w-[40%] items-center border-l-[2px] p-[15px] lg:p-[20px] border-dashed">
        {/* top curve */}
        <div className="w-[45px] h-[45px] rounded-full bg-background absolute top-[-15%] lg:top-[-13%] sm:left-[-13.5%] left-[-19%] lg:left-[-11.5%]"></div>

        <h4 className="text-[0.9rem] lg:text-[1.3rem] font-bold ">
          IT Service
        </h4>

        <Button variant={"gooeyRight"}>Get Started</Button>

        <p className="text-[0.9rem] lg:text-[1.1rem] text-gray-500">
          Price: <span className="text-red-600 font-semibold">${price}</span>
        </p>

        {/* bottom curve */}
        <div className="w-[45px] h-[45px] rounded-full  bg-background  absolute bottom-[-15%] lg:bottom-[-13%] left-[-18.5%] sm:left-[-13.5%] lg:left-[-11.5%]"></div>
      </div>
    </div>
  );
};
