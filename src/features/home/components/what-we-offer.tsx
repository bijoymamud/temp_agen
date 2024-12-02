import { what_we_offer } from "@/assets/data";
import {
  Section,
  SectionBackground,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "@/components/section";
import { Grid } from "@/components/ui/grid";
import { cn } from "@/lib/utils";

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature ",
        (index === 0 || index === 4) && "lg:border-l ",
        index < 4 && "lg:border-b "
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-primary/20  pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-primary/20  pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-primary">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export function WhatWeOffer() {
  return (
    <Section>
      <SectionBackground>
        <Grid size={35} />
      </SectionBackground>
      <SectionHeader>
        <SectionTitle>What We Offer</SectionTitle>
        <SectionDescription>
          We offer a wide range of features to make your travel experience
          seamless and enjoyable.
        </SectionDescription>
      </SectionHeader>
      <SectionContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10">
          {what_we_offer.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </SectionContent>
    </Section>
  );
}
