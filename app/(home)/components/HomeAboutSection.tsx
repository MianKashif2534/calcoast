"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import mainImage from "@/app/assets/frame779.png";
import overlayImage from "@/app/assets/frame781.png";
import mobileImage from "@/app/assets/frame782.png";

const MotionLink = motion.create(Link);

export default function HomeAboutSection() {
  const router = useRouter(); // ✅ use router

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center rounded-3xl bg-white/90 backdrop-blur-md ring-1 ring-black/5 p-6 lg:p-10">
          {/* Images */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {/* Mobile */}
            <div className="lg:hidden space-y-4">
              <motion.div
                variants={fadeUp}
                className="bg-black text-white px-4 py-3 rounded-lg"
              >
                <p className="text-sm font-semibold">
                  35+ Vehicles <br /> Owned Fleet
                </p>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Image
                  src={mobileImage}
                  alt="Truck"
                  className="w-full rounded-xl border-4 transition duration-700 hover:scale-105"
                />
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="bg-indigo-700 text-white px-4 py-3 rounded-lg"
              >
                <p className="text-sm font-semibold">
                  Since 2015 <br /> FMCSA Authorized
                </p>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Image
                  src={mainImage}
                  alt="Fleet"
                  className="w-full rounded-xl transition duration-700 hover:scale-105"
                />
              </motion.div>
            </div>

            {/* Desktop */}
            <div className="hidden lg:block relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Image
                  src={mainImage}
                  alt="Fleet"
                  width={640}
                  height={483}
                  className="rounded-xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 80, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute top-16 left-16"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Image
                    src={overlayImage}
                    alt="Truck"
                    width={640}
                    height={483}
                    className="rounded-xl shadow-xl border-[6px]"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="text-center lg:text-left space-y-4"
          >
            <motion.p
              variants={fadeUp}
              className="text-about-cal text-2xl font-semibold"
            >
              About Cal Coast Logistics
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-4xl font-bold leading-tight"
            >
              Fresno's Trusted <br />
              <span className="text-freight">Freight Partner</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-text-about text-lg leading-relaxed"
            >
              Cal Coast Logistics is an active interstate freight carrier based
              out of Fresno, California. We specialize in general freight, fresh
              produce, and full truckload transport with a proven track record
              of reliability and on time performance.
            </motion.p>

            {/* Animated Button with navigation */}
            <motion.div
              variants={fadeUp}
              className="flex justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => router.push("/services")}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-block rounded-full p-[2px] overflow-hidden w-full lg:w-auto"
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
                <span
                  className="relative z-10 flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white font-medium transition-all duration-300 hover:bg-blue-700
    shadow-[0_10px_25px_rgba(0,0,0,0.4),0_0_20px_rgba(255,0,0,0.4)]"
                >
                  Explore Our Services
                  <motion.span
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    →
                  </motion.span>
                </span>

                {/* 🔥 Shine Effect */}
                <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-40"></span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
