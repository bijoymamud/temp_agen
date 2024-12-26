import { discover_data } from "@/assets/data";
import Icons from "@/components/icons";
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Ripple from "@/components/ui/ripple";

export const Discover = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Discover our powerful features</SectionTitle>
        <SectionDescription>
          Our platform is packed with features to help you grow your business.
          We&apos;ve got you covered from start to finish.
        </SectionDescription>
        <div className="flex w-full items-center justify-center pt-4">
          <Icons.feature className="h-40" />
        </div>
      </SectionHeader>
      <SectionContent>
        <Card className="overflow-hidden">
          <div className="flex h-8 items-center gap-2 border-b bg-muted px-4">
            <Button
              size="sm"
              variant="outline"
              className="w-3 h-3 p-0 rounded-full bg-red-500 border-red-500"
            />
            <Button
              size="sm"
              variant="outline"
              className="w-3 h-3 p-0 rounded-full bg-yellow-500 border-yellow-500"
            />
            <Button
              size="sm"
              variant="outline"
              className="w-3 h-3 p-0 rounded-full bg-green-500 border-green-500"
            />
          </div>
          <div className=" relative ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 p-4 ">
              {discover_data.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-start lg:items-center px-0 md:px-0"
                >
                  <div className="flex items-center justify-center bg-primary rounded-full h-10 w-10">
                    <feature.icon className="w-7 h-7 " />
                  </div>
                  <h3 className="text-lg font-medium mt-4">{feature.title}</h3>
                  <p className="text-muted-foreground mt-2 text-center">
                    {feature.info}
                  </p>
                </div>
              ))}
            </div>
            <Ripple />
          </div>
        </Card>
      </SectionContent>
    </Section>
  );
};
