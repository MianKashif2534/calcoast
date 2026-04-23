"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import heroBg from "@/app/assets/Frame 820 (1).png";
import heroRightImage from "@/app/assets/Three-DTL-Trucks 1.png";
import { useScrollState } from "@/app/components/ScrollContext";
import mainImage from "@/app/assets/frame779.png";
import overlayImage from "@/app/assets/frame781.png";
import mobileImage from "@/app/assets/frame782.png";

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

export function Hero() {
  const router = useRouter();
  const { scrolled } = useScrollState();
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
  const longestWord = words.reduce(
    (longest, w) => (w.length > longest.length ? w : longest),
    "",
  );

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

  const fadeUpAbout = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  // Floating animation for right image - Fixed with proper types
  const floatAnimation = {
    y: [0, -15, 0], // aage-peeche move
    transition: {
      duration: 4,
      repeat: 2,
      ease: "easeInOut" as const,
    },
  };

  return (
    <>
      <section className="relative z-0 min-h-screen overflow-hidden">
        {/* Hero background (Hero only) */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
            className="h-full w-full"
          >
            <Image src={heroBg} alt="" fill className="object-cover" priority />
          </motion.div>
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />
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
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-10 px-4 py-16 lg:gap-12 lg:px-8 lg:py-24">
          {/* LEFT */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex w-full max-w-3xl flex-col items-center gap-2 md:gap-6 text-center mt-6"
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
            <motion.div variants={fadeUp} className="space-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                <span className="relative inline-block align-top">
                  {/* Reserve height (prevents jump on wrap/line changes) */}
                  <span className="invisible block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    {longestWord}
                  </span>
                  <span className="absolute inset-0 inline-flex items-end bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    <span>{typedText || words[0]}</span>
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-1 h-[1em] ml-1 bg-blue-500"
                    />
                  </span>
                </span>
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
              className="flex flex-wrap justify-center gap-5"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature}
                  variants={fadeUp}
                  className="group relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm"
                  >
                    <CheckIcon />
                    <span className="text-sm font-medium text-white transition-colors group-hover:text-blue-300">
                      {feature}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE with Enhanced Effects */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 45 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex w-full justify-center pt-2 lg:pt-6"
          >
            <motion.div
              animate={floatAnimation}
              className={`relative w-full rounded-2xl shadow-2xl transition-[max-width] duration-700 ease-in-out overflow-visible ${
                scrolled ? "max-w-xl" : "max-w-md"
              }`}
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

              <motion.div
                animate={{ scale: scrolled ? 1.5 : 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ transformOrigin: "center" }}
                className="will-change-transform"
              >
                <Image
                  src={heroRightImage}
                  alt="truck"
                  width={900}
                  height={520}
                  className="w-full object-contain rounded-2xl"
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About section merged here (previously HomeAboutSection) */}
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
                  variants={fadeUpAbout}
                  className="bg-black text-white px-4 py-3 rounded-lg"
                >
                  <p className="text-sm font-semibold">
                    35+ Vehicles <br /> Owned Fleet
                  </p>
                </motion.div>

                <motion.div variants={fadeUpAbout}>
                  <Image
                    src={mobileImage}
                    alt="Truck"
                    className="w-full rounded-xl border-4 transition duration-700 hover:scale-105"
                  />
                </motion.div>

                <motion.div
                  variants={fadeUpAbout}
                  className="bg-indigo-700 text-white px-4 py-3 rounded-lg"
                >
                  <p className="text-sm font-semibold">
                    Since 2015 <br /> FMCSA Authorized
                  </p>
                </motion.div>

                <motion.div variants={fadeUpAbout}>
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
                variants={fadeUpAbout}
                className="text-about-cal text-2xl font-semibold"
              >
                About Cal Coast Logistics
              </motion.p>

              <motion.h2
                variants={fadeUpAbout}
                className="text-4xl font-bold leading-tight"
              >
                Fresno's Trusted <br />
                <span className="text-freight">Freight Partner</span>
              </motion.h2>

              <motion.p
                variants={fadeUpAbout}
                className="text-text-about text-lg leading-relaxed"
              >
                Cal Coast Logistics is an active interstate freight carrier
                based out of Fresno, California. We specialize in general
                freight, fresh produce, and full truckload transport with a
                proven track record of reliability and on time performance.
              </motion.p>

              <motion.div
                variants={fadeUpAbout}
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
                    className="relative z-10 flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 transition-all duration-300
    shadow-[0_10px_25px_rgba(0,0,0,0.4),0_0_20px_rgba(255,0,0,0.4)]"
                  >
                    Explore Our Services
                    {/* Arrow */}
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
    </>
  );
}
