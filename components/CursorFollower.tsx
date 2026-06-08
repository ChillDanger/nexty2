"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect } from "react";


export default function CursorFollower() {
  const mouseX = useSpring(0, {
    stiffness: 500,
    damping: 40,
  });

  const mouseY = useSpring(0, {
    stiffness: 500,
    damping: 40,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{
        x: mouseX,
        y: mouseY,
      }}
    >
      <div className="relative">
        {/* Outer glow */}
        <div className="absolute inset-0 h-20 w-20 -translate-x-8 -translate-y-8 rounded-full bg-blue-500/20 blur-2xl" />

        {/* Inner dot */}
        <div className="h-5 w-5 rounded-full bg-blue-500 shadow-[0_0_20px_#3b82f6]" />
      </div>
    </motion.div>
  );
}