import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const pageContainerVariants = cva("min-h-screen", {
  variants: {
    layout: {
      default: "flex flex-col",
      custom: "",
    },
    padding: {
      none: "",
      sm: "py-4",
      md: "py-8",
      lg: "py-16",
    },
  },
  defaultVariants: {
    layout: "default",
    padding: "none",
  },
});

const pageContentVariants = cva("flex-grow", {
  variants: {
    width: {
      full: "w-full",
      container: "w-full max-w-screen-xl mx-auto px-4 md:px-8",
    },
  },
  defaultVariants: {
    width: "container",
  },
});

const PageContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof pageContainerVariants>
>(({ className, layout, padding, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(pageContainerVariants({ layout, padding, className }))}
      {...props}
    />
  );
});
PageContainer.displayName = "PageContainer";

const PageContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof pageContentVariants>
>(({ className, width, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(pageContentVariants({ width, className }))}
      {...props}
    />
  );
});
PageContent.displayName = "PageContent";

const PageHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("mb-8 text-center", className)} {...props} />
));
PageHeader.displayName = "PageHeader";

const PageTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn("text-4xl font-bold tracking-tight lg:text-5xl", className)}
    {...props}
  />
));
PageTitle.displayName = "PageTitle";

const PageDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("mt-4 text-muted-foreground", className)}
    {...props}
  />
));
PageDescription.displayName = "PageDescription";

export { PageContainer, PageContent, PageDescription, PageHeader, PageTitle };
