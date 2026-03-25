"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiTrendingUp } from "react-icons/fi";
import { FaTruck, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";

export function StatsSection() {
  const [years, setYears] = useState(0);
  const [fleet, setFleet] = useState(0);
  const [miles, setMiles] = useState(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setYears((prev) => (prev < 10 ? prev + 1 : 10));
      setFleet((prev) => (prev < 35 ? prev + 1 : 35));
      setMiles((prev) => (prev < 14 ? prev + 1 : 14));
      setRating((prev) => (prev < 5 ? prev + 0.1 : 5));
    }, 80);

    return () => clearInterval(interval);
  }, []);

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

        {/* Stats Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"
        >
          {/* Card */}
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
              whileHover={{ scale: 1.07, y: -5 }}
              className="w-[240px] h-[220px] bg-[#0055FF]/60 rounded-xl border border-white/20 flex flex-col items-center justify-center text-center p-6 backdrop-blur-md"
            >
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
              <p className="text-[25px] text-white mt-2 font-medium">
                {item.title}
              </p>

              {/* Sub */}
              <p className="text-[12px] text-white/60">{item.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
