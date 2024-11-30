"use client";

import homeWorkImage from "@/assets/svg/howwework.svg";
import Container from "@/components/container";
import RetroGrid from "@/components/ui/retro-grid";
import Image from "next/image";

export default function DevelopmentExperience() {
  return (
    <div className="relative pt-10">
      <RetroGrid />
      <Container className="max-w-screen-xl ">
        <div className="lg:mb-10">
          <h2 className="text-3xl font-bold   text-center">How We Work</h2>
          <p className=" max-w-3xl mx-auto text-center ">
            We work with you to understand your business and your customers. We
            then design and build a solution that will help you achieve your
            goals.
          </p>
        </div>
        <div className=" relative h-[40vh] md:h-[60vh] lg:h-[80vh]">
          <Image src={homeWorkImage} className="" alt="Home Work" fill />
        </div>
      </Container>
    </div>
  );
}
