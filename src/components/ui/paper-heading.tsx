import { cn } from "@/lib/utils"; // Optional utility for merging classNames if needed
import React from "react";

// Define props interface for the component
interface PaperStyledHeadingProps {
  text: string;
  bgColor?: string;
  shapeColor?: string;
  className?: string;
}

const PaperStyledHeading: React.FC<PaperStyledHeadingProps> = ({
  text,
  bgColor = "bg-primary/10",
  shapeColor = "bg-foreground/50",
  className = "",
}) => {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <h1
        className={cn(
          "text-4xl font-semibold",
          bgColor,
          "backdrop-blur-lg px-3 relative z-10"
        )}
      >
        {text}
      </h1>
      <div
        className={cn(
          "absolute top-0 left-0 h-full w-8",
          shapeColor,
          "skew-y-12"
        )}
      ></div>
      <div
        className={cn(
          "absolute top-0 right-0 h-full w-8",
          shapeColor,
          "skew-y-12"
        )}
      ></div>
    </div>
  );
};

export default PaperStyledHeading;
