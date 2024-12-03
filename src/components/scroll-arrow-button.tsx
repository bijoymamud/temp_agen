"use client";

import { ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ScrollArrowButton({ scrollThreshold = 300 }) {
  const [isVisible, setIsVisible] = useState(false);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling.current) {
        isScrolling.current = true;
        requestAnimationFrame(() => {
          setIsVisible(window.scrollY > scrollThreshold);
          isScrolling.current = false;
        });
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]);

  if (isVisible) return null;
  return (
    <div
      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce transition-opacity duration-1000 hidden lg:block"
      aria-hidden="true"
    >
      <ArrowDown className="h-6 w-6 text-primary" />
    </div>
  );
}
