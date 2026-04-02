"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import truck from "@/app/assets/truck.png";

const cities = [
  "Fresno, CA",
  "Little Rock, AR",
  "Cleveland, OH",
  "Tulsa, OK",
  "Charlotte, NC",
  "New Orleans, LA",
  "Chicago, IL",
  "Las Vegas, NV",
  "Kansas City, MO",
  "Pittsburgh, PA",
];

const getDisplayCities = (isDesktop: boolean) => {
  if (isDesktop) {
    return cities.slice(0, 9); // Remove last city (Pittsburgh, PA) for desktop
  }
  return cities;
};

const easeOut = [0.22, 1, 0.36, 1] as const;

const viewport = { once: true, margin: "-80px" };

const headingBlock: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.08 },
  },
};

const labelVariant: Variants = {
  hidden: { opacity: 0, y: -8, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: easeOut },
  },
};

const titleLineLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

const titleLineRight: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

const titleGroup: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14 },
  },
};

const subcopyVariant: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const gridContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
};

const chipOuter: Variants = {
  hidden: { opacity: 0, y: 18, rotateX: -8 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.45,
      ease: easeOut,
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

const chipIcon: Variants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -12 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 380, damping: 22 },
  },
};

const chipLabel: Variants = {
  hidden: { opacity: 0, x: 10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: easeOut },
  },
};

const ctaVariant: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export function CoverageSection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 text-white">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.15, ease: easeOut }}
      >
        <Image
          src={truck}
          alt="Cal Coast freight truck"
          fill
          priority
          className="object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-black/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: easeOut }}
        />
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={headingBlock}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p
            className="text-xs sm:text-sm font-medium text-blue-400"
            variants={labelVariant}
          >
            Service Coverage
          </motion.p>

          <motion.h2
            className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug"
            variants={titleGroup}
          >
            <motion.span className="block" variants={titleLineLeft}>
              Interstate Routes &
            </motion.span>
            <motion.span className="block" variants={titleLineRight}>
              Nationwide Coverage
            </motion.span>
          </motion.h2>

          <motion.p
            className="mx-auto mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm text-gray-300 px-2"
            variants={subcopyVariant}
          >
            Serving the most popular freight lanes across the country with
            reliable, on time delivery.
          </motion.p>
        </motion.div>

        {/* Desktop Grid (3x3 = 9 cities) */}
        <motion.div
          className="hidden lg:grid mt-8 sm:mt-10 grid-cols-3 gap-3 sm:gap-4 px-2 sm:px-0"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {getDisplayCities(true).map((city) => (
            <motion.div
              key={city}
              className="flex h-[44px] sm:h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-white px-2 sm:px-3 py-2 text-center text-xs sm:text-sm font-medium text-blue-600 shadow-md hover:shadow-lg transition-shadow"
              variants={chipOuter}
              whileHover={{ scale: 1.03, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              <motion.span
                className="inline-flex shrink-0 text-blue-600 text-xs sm:text-sm"
                variants={chipIcon}
              >
                <FaMapMarkerAlt aria-hidden className="shrink-0" />
              </motion.span>
              <motion.span
                className="leading-tight truncate"
                variants={chipLabel}
              >
                {city}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        {/* Tablet & Mobile Grid (2 columns on tablet, 1 column on mobile) */}
        <motion.div
          className="grid lg:hidden mt-8 sm:mt-10 grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 px-2 sm:px-0"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {getDisplayCities(false).map((city) => (
            <motion.div
              key={city}
              className="flex h-[44px] sm:h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-white px-2 sm:px-3 py-2 text-center text-xs sm:text-sm font-medium text-blue-600 shadow-md hover:shadow-lg transition-shadow"
              variants={chipOuter}
              whileHover={{ scale: 1.03, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              <motion.span
                className="inline-flex shrink-0 text-blue-600 text-xs sm:text-sm"
                variants={chipIcon}
              >
                <FaMapMarkerAlt aria-hidden className="shrink-0" />
              </motion.span>
              <motion.span
                className="leading-tight truncate"
                variants={chipLabel}
              >
                {city}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={ctaVariant}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-6 sm:mt-8 md:mt-10 flex justify-center px-4"
        >
          <motion.div className="flex justify-center w-full sm:w-auto">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-block rounded-full p-[2px] overflow-hidden w-full sm:w-auto"
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
                className="relative z-10 flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700 shadow-[0_10px_25px_rgba(0,0,0,0.4),0_0_20px_rgba(255,0,0,0.4)] w-full sm:w-auto whitespace-nowrap"
              >
                Get a Quote for Your Route
                <motion.span
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-block"
                >
                  →
                </motion.span>
              </Link>

              {/* 🔥 Shine Effect */}
              <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-40"></span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
