"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiTrendingUp } from "react-icons/fi";
import { FaTruck, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";

export function StatsSection() {
  const [years, setYears] = useState(0);
  const [fleet, setFleet] = useState(0);
  const [miles, setMiles] = useState(0);
  const [rating, setRating] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    const interval = window.setInterval(() => {
      setYears((prev) => (prev < 10 ? prev + 1 : 10));
      setFleet((prev) => (prev < 35 ? prev + 1 : 35));
      setMiles((prev) => (prev < 14 ? prev + 1 : 14));
      setRating((prev) => (prev < 5 ? Math.min(5, prev + 0.1) : 5));
    }, 80);

    return () => window.clearInterval(interval);
  }, [hasStarted]);

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardAnim = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section className="py-16 bg-[#0C0D74]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-[16px] text-white/60 font-medium tracking-wide">
            By The Numbers
          </h2>

          <p className="text-[40px] font-semibold text-white mt-1">
            Cal Coast at a Glance
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          onViewportEnter={() => setHasStarted(true)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"
        >
          {[
            {
              icon: <FiTrendingUp />,
              value: `${years}+`,
              title: "Years Active",
              sub: "Since Nov 2015",
            },
            {
              icon: <FaTruck />,
              value: `${fleet}+`,
              title: "Fleet Assets",
              sub: "Owned Fleet",
            },
            {
              icon: <FaMapMarkerAlt />,
              value: `${miles / 10}M+`,
              title: "Miles Covered",
              sub: "Annual Mileage",
            },
            {
              icon: <IoIosStarOutline />,
              value: rating.toFixed(1),
              title: "Carrier Rating",
              sub: "Verified Broker Reviews",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={cardAnim}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.07, y: -8 }}
              className="relative w-[240px] h-[220px] rounded-xl p-[2px] group overflow-hidden"
            >
              {/* 🔥 Animated Gradient Border  */}
              <div
                className="absolute inset-0 rounded-xl blur-[8px] opacity-70 group-hover:opacity-100 transition duration-300"
                style={{
                  background:
                    "conic-gradient(from 0deg, red, orange, yellow, green, cyan, blue, purple, red)",
                  animation: "spin 6s linear infinite",
                }}
              />

              {/* Inner Card */}
              <div className="relative w-full h-full bg-[#0C0D74] rounded-xl flex flex-col items-center justify-center text-center p-6 border border-white/10 backdrop-blur-md shadow-lg group-hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300">
                {/* Icon */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-white text-3xl mb-3"
                >
                  {item.icon}
                </motion.div>

                {/* Value */}
                <div className="text-[42px] font-bold text-white leading-none">
                  {item.value}
                </div>

                {/* Title */}
                <p className="text-[20px] text-white mt-2 font-medium">
                  {item.title}
                </p>

                {/* Sub */}
                <p className="text-[12px] text-white/60">{item.sub}</p>
              </div>

              {/* 🔥 Inline Keyframes */}
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
