"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import heroBg from "@/app/assets/HeroBg.png";
import heroRightImage from "@/app/assets/heroRightImage.png";

const features = ["On Time Delivery", "35+ Assets", "Interstate Authority"];

function CheckIcon() {
  return (
    <div className="flex h-5 w-5 items-center justify-center rounded bg-[#3474F4] text-white text-xs">
      ✓
    </div>
  );
}

function PhoneIcon() {
  return <span>📞</span>;
}

export function Hero() {
  // Stagger container
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Common fade up
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative z-0 min-h-[90vh] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
          className="h-full w-full"
        >
          <Image src={heroBg} alt="" fill className="object-cover" priority />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-slate-900/70 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center gap-8 px-4 py-16 lg:flex-row lg:gap-12 lg:px-8 lg:py-24">
        {/* LEFT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-1 flex-col items-center text-center gap-6 lg:items-start lg:text-left lg:max-w-xl"
        >
          <motion.p variants={fadeUp} className="text-sm text-[#3474F4]">
            Fresno, California Since 2015
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            Reliable Freight Solutions Across California & Beyond
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-sm text-gray-300 max-w-md"
          >
            Cal Coast Logistics delivers dependable cargo and freight
            transportation. Full Truckload and Fresh Produce services with on
            time performance you can trust.
          </motion.p>

          {/* Features */}
          <motion.div
            variants={container}
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            {features.map((feature) => (
              <motion.div
                key={feature}
                variants={fadeUp}
                className="flex items-center gap-2"
              >
                <CheckIcon />
                <span className="text-sm text-white">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3"
          >
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="bg-[#3474F4] px-6 py-3 rounded-lg text-white font-semibold"
            >
              Request a Quote →
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+15594816441"
              className="border-2 border-white px-6 py-3 rounded-lg text-white font-semibold"
            >
              <PhoneIcon /> Call Now
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex w-full flex-1 justify-center lg:max-w-lg"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-2xl"
          >
            <Image
              src={heroRightImage}
              alt="truck"
              width={600}
              height={400}
              className="w-full object-cover"
            />

            {/* Badge */}
            <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-2 rounded-lg text-white text-xs backdrop-blur">
              FMCSA Active
            </div>

            {/* Rating */}
            <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-2 rounded-full text-white text-sm backdrop-blur">
              ★ 5.0
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
