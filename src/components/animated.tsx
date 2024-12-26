"use client";

import { motion, MotionProps } from "framer-motion";
import * as React from "react";

interface AnimateProps extends MotionProps {
  as?: keyof JSX.IntrinsicElements;
  index: number;
  delay?: number;
}

const Animate = React.forwardRef<HTMLElement, AnimateProps>(
  ({ as: Component = "div", children, index, delay = 0.1, ...props }, ref) => {
    const MotionComponent = (motion as any)[Component];

    return (
      <MotionComponent
        ref={ref}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * delay, duration: 0.5 }}
        {...props}
      >
        {children}
      </MotionComponent>
    );
  }
);

Animate.displayName = "Animate";

export { Animate };
