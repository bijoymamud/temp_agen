import { siteConfig } from "@/config/site-info";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const baseLogoClass = "size-10 rounded-md object-contain";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src={siteConfig.logo}
      alt={`${siteConfig.name} logo`}
      width={40}
      height={40}
      className={twMerge(
        baseLogoClass,
        "transition-transform duration-300 hover:scale-105",
        className
      )}
    />
  );
}

export function StaticLogo({ className }: { className?: string }) {
  return (
    <Image
      src={siteConfig.logo}
      alt={`${siteConfig.name} logo`}
      width={40}
      height={40}
      className={twMerge(baseLogoClass, className)}
    />
  );
}
