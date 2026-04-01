"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedWrapperProps {
  children: ReactNode;
  className?: string;
  borderGradient?: string;
  hoverScale?: number;
  hoverY?: number;
  spinDuration?: number; // in seconds
  onClick?: () => void; // ✅ add click handler
  rounded?: string; // optional, for border radius (default rounded-xl)
}

export function AnimatedWrapper({
  children,
  className = "",
  borderGradient = "conic-gradient(from 0deg, red, orange, yellow, green, cyan, blue, purple, red)",
  hoverScale = 1.07,
  hoverY = -8,
  spinDuration = 6,
  onClick,
  rounded = "rounded-xl",
}: AnimatedWrapperProps) {
  return (
    <motion.div
      whileHover={{ scale: hoverScale, y: hoverY }}
      className={`relative group cursor-pointer ${className}`} // ✅ cursor-pointer
      onClick={onClick} // ✅ click handler
    >
      {/* Animated Gradient Border */}
      <div
        className={`absolute inset-0 ${rounded} blur-[8px] opacity-70 group-hover:opacity-100 transition duration-300`}
        style={{
          background: borderGradient,
          animation: `spin ${spinDuration}s linear infinite`,
        }}
      />

      {/* Children content */}
      <div className="relative z-10">{children}</div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </motion.div>
  );
}
