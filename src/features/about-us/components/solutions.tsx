import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
} from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export const Solutions = () => {
  const cardData = [
    {
      title: "Next.js & React Expertise",
      content: [
        "Our templates leverage the power of Next.js and React, providing you with server-side rendering, static site generation, and seamless client-side transitions.",
        "Experience the perfect blend of performance and developer experience with our meticulously crafted components and layouts.",
      ],
    },
    {
      title: "Full-Stack Solutions",
      content: [
        "From frontend to backend, we've got you covered. Our templates include Express.js server setups and Node.js best practices for a complete development ecosystem.",
        "Build robust, scalable applications with our full-stack templates that seamlessly integrate frontend and backend technologies.",
      ],
    },
    {
      title: "Modern Frontend Tooling",
      content: [
        "Stay ahead of the curve with our templates featuring the latest frontend technologies. From CSS-in-JS solutions to state management libraries, we provide you with the tools to create stunning, responsive user interfaces.",
      ],
    },
  ];

  return (
    <Section>
      <SectionHeader className="text-start">
        <SectionDescription className="mx-0">
          Our mission is to empower developers and businesses with cutting-edge
          web development templates and tools. We are dedicated to streamlining
          the development process and helping you create stunning,
          high-performance web applications with ease.
        </SectionDescription>
      </SectionHeader>

      <SectionContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4">
          {cardData.map((card, index) => (
            <Card
              key={index}
              className="transition-transform transform hover:scale-105 relative"
            >
              <GridPattern
                width={10}
                height={10}
                x={-1}
                y={-1}
                className={cn(
                  "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
                )}
              />
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {card.content.map((paragraph, idx) => (
                  <p key={idx} className={idx === 0 ? "mb-4" : ""}>
                    {paragraph}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContent>
    </Section>
  );
};
