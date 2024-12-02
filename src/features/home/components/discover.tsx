import { discover_data } from "@/assets/data";
import Icons from "@/components/icons";
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "@/components/section";

const Discover = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Discover our powerful features</SectionTitle>
        <SectionDescription>
          Our platform is packed with features to help you grow your business.
          We've got you covered from start to finish.
        </SectionDescription>
        <div className="flex w-full items-center justify-center pt-4">
          <Icons.feature className="h-40" />
        </div>
      </SectionHeader>
      <SectionContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
          {discover_data.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-start lg:items-start px-0 md:px-0"
            >
              <div className="flex items-center justify-center bg-primary rounded-full h-10 w-10">
                <feature.icon className="w-7 h-7 " />
              </div>
              <h3 className="text-lg font-medium mt-4">{feature.title}</h3>
              <p className="text-muted-foreground mt-2 text-start lg:text-start">
                {feature.info}
              </p>
            </div>
          ))}
        </div>
      </SectionContent>
    </Section>
  );
};

export default Discover;
