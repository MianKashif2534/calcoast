"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState } from "react";

type InteractiveButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function InteractiveButton({
  children,
  className = "",
  onClick,
}: InteractiveButtonProps) {
  const [hover, setHover] = useState(false);

  // Snow + sparkle burst
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 0.3,
    duration: Math.random() * 1 + 0.8,
    sway: Math.random() * 15 - 7.5, // left-right sway
  }));

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden rounded-xl ${className}
                  bg-gradient-to-r from-blue-500 to-indigo-600
                  text-white font-bold px-6 py-3 shadow-xl hover:shadow-2xl`}
    >
      {/* Button Text */}
      <span className="relative z-10">{children}</span>

      {/* Particles Burst */}
      <AnimatePresence>
        {hover &&
          particles.map(({ id, x, y, size, delay, duration, sway }) => (
            <motion.span
              key={id}
              initial={{ y: 0, x: 0, opacity: 0, scale: 0.5 }}
              animate={{
                y: [0, 40, 80],
                x: [0, sway, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              exit={{ opacity: 0 }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                delay,
                duration,
                ease: "easeInOut",
              }}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: size,
                height: size,
                borderRadius: "50%",
                backgroundColor: "white",
                position: "absolute",
                filter: "blur(1px)",
                pointerEvents: "none",
                mixBlendMode: "screen",
              }}
            />
          ))}
      </AnimatePresence>

      {/* Glow / Ice overlay */}
      <motion.div
        animate={
          hover ? { opacity: 0.25, scale: 1.1 } : { opacity: 0, scale: 1 }
        }
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0 rounded-xl bg-white/20 mix-blend-screen pointer-events-none"
      />

      {/* Shimmer light streaks */}
      <motion.div
        animate={hover ? { x: [0, 100], opacity: [0, 0.5, 0] } : { opacity: 0 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        className="absolute top-0 left-0 h-full w-1 bg-white/30 rounded-full pointer-events-none"
      />
    </motion.button>
  );
}
