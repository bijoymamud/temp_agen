import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const sectionVariants = cva("w-full", {
  variants: {
    size: {
      default: "pb-8 pt-10",
      sm: "py-4 md:py-8",
      lg: "py-16 md:py-32",
    },
    position: {
      relative: "relative overflow-hidden",
      static: "static",
    },
  },
  defaultVariants: {
    size: "default",
    position: "relative",
  },
});
const sectionContentVariants = cva("", {
  variants: {
    size: {
      default: "space-y-8",
      sm: "space-y-4",
      lg: "space-y-12",
    },
    variant: {
      "full-w": "w-full",
      padded: "px-4 md:px-8",
      container: "px-4 md:px-8 mx-auto max-w-screen-xl",
    },
    position: {
      relative: "relative overflow-hidden",
      static: "static",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "container",
    position: "relative",
  },
});

const titleVariants = cva("text-3xl lg:text-4xl font-bold", {
  variants: {
    variant: {
      container: "px-4 md:px-8 mx-auto max-w-screen-xl",
      none: "",
    },
  },
  defaultVariants: {
    variant: "none",
  },
});

const Section = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & VariantProps<typeof sectionVariants>
>(({ className, size, position, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn(sectionVariants({ size, position, className }))}
      {...props}
    />
  );
});
Section.displayName = "Section";

const SectionHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof sectionContentVariants>
>(({ className, size, variant, position, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      sectionContentVariants({ size, variant, position }),
      "space-y-1.5   text-center",
      className
    )}
    {...props}
  />
));
SectionHeader.displayName = "SectionHeader";

const SectionTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof titleVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(titleVariants({ variant, className }))}
      {...props}
    />
  );
});
SectionTitle.displayName = "SectionTitle";

const SectionDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-muted-foreground leading-none tracking-tight max-w-[700px] mx-auto pb-1",
      className
    )}
    {...props}
  />
));
SectionDescription.displayName = "SectionDescription";

const SectionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof sectionContentVariants>
>(({ className, size, variant, position, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "mt-12 py-2",
        sectionContentVariants({ size, variant, position, className })
      )}
      {...props}
    />
  );
});
SectionContent.displayName = "SectionContent";

const SectionBackground = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("absolute inset-0 z-0", className)} {...props} />
));
SectionBackground.displayName = "SectionBackground";

export {
  Section,
  SectionBackground,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
};
