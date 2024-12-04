"use client";

import homeWorkImage from "@/assets/svg/howwework.svg";
import {
  Section,
  SectionBackground,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "@/components/section";
import RetroGrid from "@/components/ui/retro-grid";
import Image from "next/image";

export function HowWeWork() {
  return (
    <Section className="pb-1">
      <SectionHeader className="text-center">
        <SectionTitle>How We Work</SectionTitle>
        <SectionDescription>
          We work with you to understand your business and your customers. We
          then design and build a solution that will help you achieve your
          goals.
        </SectionDescription>
      </SectionHeader>
      <div className="relative">
        <SectionBackground>
          <RetroGrid angle={30} />
        </SectionBackground>
        <SectionContent className=" h-[300px] md:h-[500px] lg:h-[70vh]">
          <Image src={homeWorkImage} className="" alt="Home Work" fill />
        </SectionContent>
      </div>
    </Section>
  );
}
