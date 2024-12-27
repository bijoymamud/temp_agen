"use client";

import {
  AnimationControls,
  motion,
  useAnimation,
  Variants,
} from "framer-motion";
import * as React from "react";
import { useCallback, useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";

interface AnimateProps {
  index?: number;
  delay?: number;
  children: React.ReactNode;
}

const animationVariants: Variants[] = [
  {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0 },
  },
];

const Animate: React.FC<AnimateProps> = React.memo(
  ({ children, index = 0, delay = 0.1, ...props }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    });

    const startAnimation = useCallback((controls: AnimationControls) => {
      controls.start("visible");
    }, []);

    useEffect(() => {
      if (inView) {
        startAnimation(controls);
      }
    }, [inView, controls, startAnimation]);

    const selectedVariant = useMemo(() => {
      const randomIndex = Math.floor(Math.random() * animationVariants.length);
      return animationVariants[randomIndex];
    }, []);

    const memoizedMotionProps = useMemo(
      () => ({
        ref,
        initial: "hidden",
        animate: controls,
        variants: selectedVariant,
        transition: {
          delay: index * delay,
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
        },
        ...props,
      }),
      [ref, controls, index, delay, props, selectedVariant]
    );

    return (
      <motion.div className="w-full h-full" {...memoizedMotionProps}>
        {children}
      </motion.div>
    );
  }
);

Animate.displayName = "Animate";

export { Animate };
