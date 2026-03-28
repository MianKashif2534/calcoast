"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import heroBg from "@/app/assets/HeroBg.png";
import heroRightImage from "@/app/assets/heroRightImage.png";

const features = ["On Time Delivery", "35+ Assets", "Interstate Authority"];

function CheckIcon() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs shadow-lg"
    >
      ✓
    </motion.div>
  );
}

function PhoneIcon() {
  return (
    <motion.span
      animate={{ rotate: [0, 15, -15, 0] }}
      transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
    >
      📞
    </motion.span>
  );
}

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<
    Array<{ x: number; duration: number; delay: number }>
  >([]);

  const words = [
    "Reliable Freight Solutions",
    "On-Time Delivery Guaranteed",
    "Fresh Produce Specialists",
    "Full Truckload Services",
  ];

  const currentWord = words[loopNum % words.length];

  // Handle typing effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentWord.substring(0, typedText.length + 1));
        if (typedText === currentWord) {
          setIsDeleting(true);
          setTimeout(() => {}, 2000);
        }
      } else {
        setTypedText(currentWord.substring(0, typedText.length - 1));
        if (typedText === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentWord]);

  // Handle particles initialization on client side only
  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const newParticles = Array.from({ length: 20 }, () => ({
        x: Math.random() * window.innerWidth,
        duration: Math.random() * 8 + 5,
        delay: Math.random() * 5,
      }));
      setParticles(newParticles);
    }
  }, []);

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

  // Floating animation for right image - Fixed with proper types
  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  return (
    <section className="relative z-0 min-h-screen overflow-hidden">
      {/* Background with Parallax */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="h-full w-full"
        >
          <Image src={heroBg} alt="" fill className="object-cover" priority />
        </motion.div>

        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-slate-900/80 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(52,116,244,0.15),transparent_50%)]" />
      </div>

      {/* Animated Particles - Only render on client side */}
      {mounted && particles.length > 0 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              initial={{ x: particle.x, y: -20 }}
              animate={{
                y:
                  (typeof window !== "undefined" ? window.innerHeight : 800) +
                  100,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "linear",
              }}
              style={{ left: particle.x }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-8 px-4 py-16 lg:flex-row lg:gap-12 lg:px-8 lg:py-24">
        {/* LEFT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-1 flex-col items-center text-center gap-6 lg:items-start lg:text-left lg:max-w-xl"
        >
          {/* Animated Badge */}
          <motion.div variants={fadeUp} className="relative">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0px rgba(52,116,244,0)",
                  "0 0 20px rgba(52,116,244,0.5)",
                  "0 0 0px rgba(52,116,244,0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl"
            />
            <p className="relative text-sm font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
              🚛 Fresno, California • Since 2015
            </p>
          </motion.div>

          {/* Typing Effect Heading */}
          <motion.div variants={fadeUp} className="space-y-4">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                {typedText || words[0]}
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1 h-8 ml-1 bg-blue-500"
              />
            </div>
            <motion.p
              variants={fadeUp}
              className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300"
            >
              Across California & Beyond
            </motion.p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-base text-gray-300 max-w-md leading-relaxed"
          >
            Cal Coast Logistics delivers dependable cargo and freight
            transportation. Full Truckload and Fresh Produce services with on
            time performance you can trust.
          </motion.p>

          {/* Features with Hover Effects */}
          <motion.div
            variants={container}
            className="flex flex-wrap justify-center lg:justify-start gap-5"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={feature}
                variants={fadeUp}
                className="group relative"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <CheckIcon />
                  <span className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors">
                    {feature}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons with 3D Effect */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="relative group overflow-hidden rounded-xl px-8 py-3.5 text-white font-bold shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                Request a Quote
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="tel:+15594816441"
              className="relative group overflow-hidden rounded-xl px-8 py-3.5 text-white font-bold border-2 border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <span className="relative flex items-center gap-2">
                <PhoneIcon /> Call Now
              </span>
            </motion.a>
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={fadeUp} className="flex gap-8 pt-4">
            {[
              { value: "99%", label: "On-Time Delivery" },
              { value: "500+", label: "Happy Clients" },
              { value: "24/7", label: "Support" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE with Enhanced Effects */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotateY: 45 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex w-full flex-1 justify-center lg:max-w-lg"
        >
          <motion.div
            animate={floatAnimation}
            className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-2xl"
          >
            {/* Glowing Border Effect */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0px rgba(52,116,244,0)",
                  "0 0 30px rgba(52,116,244,0.5)",
                  "0 0 0px rgba(52,116,244,0)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-2xl pointer-events-none"
            />

            <Image
              src={heroRightImage}
              alt="truck"
              width={600}
              height={400}
              className="w-full object-cover rounded-2xl"
            />

            {/* Animated Badges */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl text-white text-xs font-medium border border-blue-500/30"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                FMCSA Active • Fully Insured
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-bold border border-yellow-500/30"
            >
              <div className="flex items-center gap-1">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ⭐
                </motion.span>
                5.0 Rating
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  ⭐
                </motion.span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
