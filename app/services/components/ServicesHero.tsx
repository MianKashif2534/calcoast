"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import servicesBg from "@/app/assets/servicesBg.png";

export function ServicesHero() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={servicesBg}
        alt="Freight Services Background"
        fill
        priority
        sizes="100vw"
        className="object-cover scale-110 animate-[zoomOut_6s_ease-out_forwards]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center px-4">
        {/* Small Heading */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-blue-400 text-sm md:text-base font-medium tracking-wide"
        >
          Our Services
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-2 text-white text-2xl md:text-5xl font-bold leading-tight drop-shadow-lg"
        >
          Freight Services
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-3 max-w-xl text-gray-300 text-sm md:text-base leading-relaxed"
        >
          Reliable, efficient freight transportation solutions tailored to your
          business needs.
        </motion.p>
      </div>
    </section>
  );
}
