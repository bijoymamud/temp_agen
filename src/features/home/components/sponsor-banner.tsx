"use client";

import {
  Section,
  SectionBackground,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "@/components/section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SponsorBanner() {
  return (
    <Section className="mb-0 py-20">
      <SectionBackground>
        <div className="absolute inset-0 z-0">
          <svg
            className="h-full w-full"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M0,1000 C300,800 400,600 500,300 C600,600 700,800 1000,1000 Z"
              fill="url(#gradient)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(45)">
                <stop
                  offset="0%"
                  stopColor="var(--primary)"
                  stopOpacity="0.1"
                />
                <stop
                  offset="100%"
                  stopColor="var(--secondary)"
                  stopOpacity="0.1"
                />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </SectionBackground>
      <SectionHeader>
        <SectionTitle className="mb-6 bg-primary bg-clip-text text-transparent">
          Become A Sponsor
        </SectionTitle>
        <SectionDescription>
          Join us in shaping the future of technology. Your support empowers
          innovation and drives progress in the IT industry.
        </SectionDescription>
      </SectionHeader>
      <SectionContent className="relative flex items-center justify-center">
        <Button
          variant={"ringHover"}
          asChild
          size="lg"
          className="text-lg px-8 py-6 rounded-full"
        >
          <Link href="/sponsorship">Learn More About Sponsorship</Link>
        </Button>
      </SectionContent>
    </Section>
    // <section className="relative overflow-hidden ">
    //   <div className="absolute inset-0 z-0">
    //     <svg
    //       className="h-full w-full"
    //       viewBox="0 0 1000 1000"
    //       preserveAspectRatio="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <motion.path
    //         d="M0,1000 C300,800 400,600 500,300 C600,600 700,800 1000,1000 Z"
    //         fill="url(#gradient)"
    //         initial={{ pathLength: 0 }}
    //         animate={{ pathLength: 1 }}
    //         transition={{ duration: 2, ease: "easeInOut" }}
    //       />
    //       <defs>
    //         <linearGradient id="gradient" gradientTransform="rotate(45)">
    //           <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.1" />
    //           <stop
    //             offset="100%"
    //             stopColor="var(--secondary)"
    //             stopOpacity="0.1"
    //           />
    //         </linearGradient>
    //       </defs>
    //     </svg>
    //   </div>
    //   <div className="relative z-10 container mx-auto px-4">
    //     <div className="max-w-3xl mx-auto text-center">
    //       <motion.h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
    //         Become A Sponsor
    //       </motion.h2>
    //       <motion.p
    //         className="text-xl mb-8 text-muted-foreground"
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ delay: 0.7, duration: 0.8 }}
    //       >
    //         Join us in shaping the future of technology. Your support empowers
    //         innovation and drives progress in the IT industry.
    //       </motion.p>
    //       <motion.div
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ delay: 0.9, duration: 0.8 }}
    //       >
    //         <Button
    //           asChild
    //           size="lg"
    //           className="text-lg px-8 py-6 rounded-full"
    //         >
    //           <Link href="/sponsorship">Learn More About Sponsorship</Link>
    //         </Button>
    //       </motion.div>
    //     </div>
    //   </div>
    // </section>
  );
}
