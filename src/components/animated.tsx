"use client";

import { AnimationControls, motion, useAnimation } from "framer-motion";
import * as React from "react";
import { useCallback, useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";

interface AnimateProps {
  index?: number;
  delay?: number;
  children: React.ReactNode;
}

const Animate: React.FC<AnimateProps> = React.memo(
  ({ children, index = 0, delay = 0.1, ...props }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    });

    const startAnimation = useCallback((controls: AnimationControls) => {
      controls.start({ opacity: 1, x: 0 });
    }, []);

    useEffect(() => {
      if (inView) {
        startAnimation(controls);
      }
    }, [inView, controls, startAnimation]);

    const memoizedMotionProps = useMemo(
      () => ({
        ref,
        initial: { opacity: 0, x: 0 },
        animate: controls,
        transition: { delay: index * delay, duration: 0.5 },
        ...props,
      }),
      [ref, controls, index, delay, props]
    );

    return <motion.div {...memoizedMotionProps}>{children}</motion.div>;
  }
);

Animate.displayName = "Animate";

export { Animate };
