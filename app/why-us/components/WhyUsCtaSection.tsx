"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function WhyUsCtaSection() {
  return (
    <section
      className="px-4 py-16 md:py-20 flex justify-center"
      style={{
        background:
          "linear-gradient(90deg, rgba(245, 247, 255, 1) 0%, rgba(230, 235, 255, 1) 100%)",
      }}
    >
      {/* ✅ Center Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex max-w-2xl flex-col items-center text-center"
      >
        {/* 🔥 Heading */}
        <h2 className="text-2xl font-bold text-[#1A1A1A] sm:text-3xl lg:text-4xl">
          Ready to Experience the Difference?
        </h2>

        {/* 🔥 Subtext */}
        <p className="mt-4 text-base font-medium text-[#555555] sm:text-lg">
          Partner with a carrier that puts your freight first.
        </p>

        {/* 🔥 BUTTON */}
        <motion.div className="mt-8 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-block rounded-full p-[2px] overflow-hidden"
          >
            {/* 🔥 Animated Border */}
            <span
              className="absolute inset-0 rounded-full animate-[spin_3s_linear_infinite] blur-[6px] opacity-80"
              style={{
                background:
                  "conic-gradient(from 0deg, #ff0000, #ffff00, #ff0000)",
              }}
            ></span>

            {/* 🔥 Inner Glass Layer */}
            <span className="absolute inset-[2px] rounded-full bg-black/70 backdrop-blur-md"></span>

            {/* 🔥 Button Content */}
            <Link
              href="/contact"
              className="relative z-10 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00138E] to-[#3474F4] px-8 py-4 text-base font-semibold text-white
              transition-all duration-300 hover:brightness-110
              shadow-[0_10px_25px_rgba(0,0,0,0.4),0_0_25px_rgba(52,116,244,0.5)]"
            >
              Get Started Today
              {/* 🔥 Arrow Animation */}
              <motion.span
                className="inline-block"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                →
              </motion.span>
            </Link>

            {/* 🔥 Shine Effect */}
            <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-40"></span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
