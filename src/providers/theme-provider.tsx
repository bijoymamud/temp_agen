"use client";

import { ThemeWrapper } from "@/components/theme-wrapper";
import { TooltipProvider } from "@/components/ui/tooltip";
import { type ThemeProviderProps } from "next-themes";
import dynamic from "next/dynamic";
const NextThemesProvider = dynamic(
  () => import("next-themes").then((e) => e.ThemeProvider),
  { ssr: false }
);

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <TooltipProvider delayDuration={0}>
        <ThemeWrapper>{children}</ThemeWrapper>
      </TooltipProvider>
    </NextThemesProvider>
  );
}
