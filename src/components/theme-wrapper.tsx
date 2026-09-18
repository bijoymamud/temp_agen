"use client";

import { cn } from "@/lib/utils";
import { useEffect } from "react";

interface ThemeWrapperProps extends React.ComponentProps<"div"> {
  defaultTheme?: string;
}

export function ThemeWrapper({
  children,
  className,
}: ThemeWrapperProps) {
  useEffect(() => {
    try {
      document.body.classList.forEach((c) => {
        if (c.startsWith("theme-")) document.body.classList.remove(c);
      });
      document.documentElement.classList.forEach((c) => {
        if (c.startsWith("theme-")) document.documentElement.classList.remove(c);
      });
      localStorage.removeItem("config-store");
    } catch (_) {}
  }, []);

  return (
    <div className={cn("w-full", className)}>
      {children}
    </div>
  );
}
