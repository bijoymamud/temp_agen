import { motion } from "framer-motion";

export function HexagonGrid() {
  return (
    <div className="absolute inset-0 grid grid-cols-6 gap-4">
      {Array.from({ length: 36 }).map((_, i) => (
        <Hexagon key={i} delay={i * 0.05} />
      ))}
    </div>
  );
}

function Hexagon({ delay }: { delay: number }) {
  return (
    <motion.div
      className="w-full pt-[86.6%] relative"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full bg-primary/10 rotate-[33deg] rounded-xl" />
      </div>
    </motion.div>
  );
}
