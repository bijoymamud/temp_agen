"use client";

import { useEffect, useId, useState } from "react";

// Utility function to generate a unique pattern
function generateUniquePattern(count: number): number[][] {
  const uniqueSquares = new Set<string>();
  const pattern: number[][] = [];

  while (pattern.length < count) {
    const x = Math.floor(Math.random() * 4) + 7;
    const y = Math.floor(Math.random() * 6) + 1;
    const key = `${x}-${y}`;

    if (!uniqueSquares.has(key)) {
      uniqueSquares.add(key);
      pattern.push([x, y]);
    }
  }

  return pattern;
}

// Main Grid Component
export const Grid = ({ size = 20 }: { size?: number }) => {
  const [pattern, setPattern] = useState<number[][] | null>(null);

  // Generate the pattern only on the client
  useEffect(() => {
    setPattern(generateUniquePattern(5));
  }, []);

  if (!pattern) return null;

  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size}
          height={size}
          x="-12"
          y="4"
          squares={pattern}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

// GridPattern Component
export function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: {
  width: number;
  height: number;
  x: string;
  y: string;
  squares: number[][];
  className?: string;
}) {
  const patternId = useId();

  // Ensure squares are unique before rendering
  const uniqueSquares = Array.from(
    new Set(squares.map(([x, y]: number[]) => `${x}-${y}`))
  ).map((key) => (key as string).split("-").map(Number));

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {uniqueSquares && (
        <svg x={x} y={y} className="overflow-visible">
          {uniqueSquares.map(([x, y]: number[]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
