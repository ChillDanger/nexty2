"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
  text = "Build Amazing",
  words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
  duration = 3000,
}: {
  text: string;
  words: string[];
  duration?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, words.length]);

  return (
    <>
      <motion.span
  layoutId="subtext"
  className="shrink-0 text-2xl font-bold tracking-tight drop-shadow-lg md:text-4xl whitespace-nowrap"
>
        {text}
      </motion.span>

      <motion.span
        layout
        className="relative inline-flex max-w-full items-center justify-center overflow-hidden rounded-xl border border-neutral-200 bg-white/80 px-4 py-2 font-sans text-lg md:text-2xl lg:text-3xl font-bold tracking-tight text-black shadow-lg backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-white"
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)" }}
            animate={{
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className={cn("inline-block whitespace-nowrap")}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
};
