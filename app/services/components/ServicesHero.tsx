"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroBg from "@/app/assets/HeroBg.png";

export function ServicesHero() {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
      {/* 🔥 Moving Background */}
      <motion.div
        animate={{
          scale: [1.1, 1.2, 1.1],
          x: [0, -20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
      >
        <Image
          src={heroBg}
          alt="Freight Services Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center px-4"
      >
        {/* Small Heading */}
        <motion.p
          variants={fadeUp}
          className="text-blue-400 text-sm md:text-base font-medium tracking-wide"
        >
          Our Services
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          variants={fadeUp}
          className="mt-2 text-white text-2xl md:text-5xl font-bold leading-tight drop-shadow-lg"
        >
          Freight Services
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="mt-3 max-w-xl text-gray-300 text-sm md:text-base leading-relaxed"
        >
          Reliable, efficient freight transportation solutions tailored to your
          business needs.
        </motion.p>
      </motion.div>
    </section>
  );
}
