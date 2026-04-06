"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";

// Animated "Welcome to" with character-by-character spring effect
const AnimatedWelcomeText = ({ className }: { className?: string }) => {
  const text = "Welcome to";
  const characters = text.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const characterVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -90, scale: 0.5 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
        mass: 0.8,
      },
    },
  };

  return (
    <motion.div
      className={`flex flex-nowrap justify-center overflow-visible ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={characterVariants}
          style={{ display: "inline-block", whiteSpace: "pre" }}
          className="text-white/90 font-bold tracking-wider uppercase"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function VideoLoader() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [progress, setProgress] = useState(0);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const mobile =
      window.innerWidth < 768 ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    setIsMobile(mobile);

    document.documentElement.classList.remove("cc-video-loader-pending");

    const hasLoaded = sessionStorage.getItem("hasLoaded");
    if (hasLoaded) return;

    sessionStorage.setItem("hasLoaded", "true");
    setVisible(true);
  }, []);

  // Desktop Loader Timer
  useEffect(() => {
    if (!visible || isMobile) return;

    const startTime = Date.now();
    const duration = 3000;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => setVisible(false), 200);
      }
    };

    requestAnimationFrame(updateProgress);
  }, [visible, isMobile]);

  // Desktop Text Cycling
  useEffect(() => {
    if (!visible || isMobile) return;

    const messages = [
      "LOADING EXPERIENCE",
      "INITIALIZING SYSTEMS",
      "CALCULATING ROUTES",
      "SYNCING DATA",
      "ALMOST READY",
      "WELCOME ABOARD",
    ];

    let index = 0;
    const textElement = document.getElementById("desktopStatusText");

    const interval = setInterval(() => {
      if (textElement) {
        index = (index + 1) % messages.length;
        textElement.textContent = messages[index];
      }
    }, 400);

    return () => clearInterval(interval);
  }, [visible, isMobile]);

  // Mobile Text Cycling
  useEffect(() => {
    if (!visible || !isMobile) return;

    const messages = [
      "LOADING EXPERIENCE",
      "INITIALIZING SYSTEMS",
      "CALCULATING ROUTES",
      "SYNCING DATA",
      "ALMOST READY",
      "WELCOME ABOARD",
    ];

    let index = 0;
    const textElement = document.getElementById("mobileStatusText");

    const interval = setInterval(() => {
      if (textElement) {
        index = (index + 1) % messages.length;
        textElement.textContent = messages[index];
      }
    }, 400);

    return () => clearInterval(interval);
  }, [visible, isMobile]);

  // Mobile auto-hide timer
  useEffect(() => {
    if (!visible || !isMobile) return;

    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [visible, isMobile]);

  const brandBgColor = "#0814a0";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[999999] flex items-center justify-center"
          style={{ background: brandBgColor }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {isMobile ? (
            // 📱 MOBILE LOADER
            <div
              className="relative flex flex-col items-center justify-center text-center w-full h-full overflow-hidden"
              style={{ background: brandBgColor }}
            >
              {/* Grid Pattern Overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Animated Gradient Orbs */}
              <motion.div
                className="absolute w-[500px] h-[500px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,180,255,0.12), transparent 70%)",
                  top: "-30%",
                  left: "-30%",
                }}
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="absolute w-[400px] h-[400px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,215,0,0.08), transparent 70%)",
                  bottom: "-20%",
                  right: "-20%",
                }}
                animate={{ scale: [1, 1.3, 1], rotate: [0, -60, 0] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1,
                }}
              />

              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 px-4 w-full"
              >
                {/* "Welcome to" - animated, smaller font for mobile */}
                <AnimatedWelcomeText className="text-4xl sm:text-3xl mb-4 justify-center w-full" />

                {/* Logo */}
                <motion.div
                  className="relative w-40 h-16 mx-auto my-2"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                >
                  <Image
                    src={logo}
                    alt="Cal Coast Logistics"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </motion.div>

                {/* Small logo mark below */}
                <motion.div
                  className="mt-4 text-white/40 text-[10px] tracking-[0.2em] uppercase"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="inline-block w-6 h-px bg-white/30 align-middle mr-2"></span>
                  EST. 2015
                  <span className="inline-block w-6 h-px bg-white/30 align-middle ml-2"></span>
                </motion.div>

                <motion.div
                  className="w-12 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-6"
                  animate={{ width: ["0%", "80%", "0%"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Loader Ring */}
              <div className="relative mt-8 z-10">
                <svg
                  className="w-32 h-32 sm:w-36 sm:h-36"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="2"
                    strokeDasharray="3 6"
                    fill="none"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 50 50"
                      to="360 50 50"
                      dur="10s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="url(#gradientRing)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="264"
                    initial={{ strokeDashoffset: 264 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    style={{
                      transformOrigin: "50% 50%",
                      transform: "rotate(-90deg)",
                    }}
                  />
                  <defs>
                    <linearGradient
                      id="gradientRing"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#FFD700" />
                      <stop offset="50%" stopColor="#00B4FF" />
                      <stop offset="100%" stopColor="#FFFFFF" />
                    </linearGradient>
                  </defs>
                </svg>

                <motion.div
                  className="absolute top-1/2 left-1/2"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ transformOrigin: "0 0" }}
                >
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,215,0,0.8)]" />
                </motion.div>

                <motion.div
                  className="absolute inset-0 rounded-full border border-white/20"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{
                    margin: "auto",
                    width: "35%",
                    height: "35%",
                    top: "32.5%",
                    left: "32.5%",
                  }}
                />
              </div>

              {/* Status Messages */}
              <motion.div
                className="mt-8 text-center z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-white/70 text-xs font-mono tracking-wider">
                  <span id="mobileStatusText">LOADING EXPERIENCE</span>
                  <span className="inline-flex ml-1">
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                    >
                      .
                    </motion.span>
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                    >
                      .
                    </motion.span>
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
                    >
                      .
                    </motion.span>
                  </span>
                </p>
              </motion.div>

              {/* Bottom Progress Bar */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/5 z-10"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                style={{ transformOrigin: "left" }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-[#FFD700] via-[#00B4FF] to-white"
                  animate={{ x: ["-100%", "0%"] }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Bottom Tagline */}
              <motion.div
                className="absolute bottom-6 left-0 right-0 text-center z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-white/30 text-[8px] tracking-[0.2em] uppercase">
                  FRESNO, CALIFORNIA • SINCE 2015
                </p>
              </motion.div>
            </div>
          ) : (
            // 💻 DESKTOP LOADER
            <div
              className="relative flex flex-col items-center justify-center text-center w-full h-full overflow-hidden"
              style={{ background: brandBgColor }}
            >
              {/* Grid Pattern Overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
                  backgroundSize: "50px 50px",
                }}
              />

              {/* Animated Gradient Orbs */}
              <motion.div
                className="absolute w-[800px] h-[800px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,180,255,0.1), transparent 70%)",
                  top: "-30%",
                  left: "-20%",
                }}
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="absolute w-[600px] h-[600px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,215,0,0.07), transparent 70%)",
                  bottom: "-20%",
                  right: "-15%",
                }}
                animate={{ scale: [1, 1.3, 1], rotate: [0, -60, 0] }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1,
                }}
              />

              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 px-6"
              >
                <motion.p
                  className="text-white/50 text-[10px] tracking-[0.3em] uppercase mb-2 font-medium"
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ON-TIME DELIVERY GUARANTEE
                </motion.p>

                {/* "Welcome to" - animated, larger for desktop */}
                <AnimatedWelcomeText className="text-3xl md:text-7xl mb-6 justify-center" />

                {/* Logo */}
                <motion.div
                  className="relative w-64 h-24 mx-auto my-2"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                >
                  <Image
                    src={logo}
                    alt="Cal Coast Logistics"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </motion.div>

                {/* Small logo mark below */}
                <motion.div
                  className="mt-4 text-white/40 text-[10px] tracking-[0.2em] uppercase flex items-center justify-center gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="w-8 h-px bg-white/30"></span>
                  <span>EST. 2015</span>
                  <span className="w-8 h-px bg-white/30"></span>
                </motion.div>

                <motion.div
                  className="w-12 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-6"
                  animate={{ width: ["0%", "80%", "0%"] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />

                {/* Company Stats - Small text */}
                <motion.div
                  className="flex gap-4 justify-center mt-6 text-white/40 text-[9px] tracking-wide"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <span>🚛 35+ ASSETS</span>
                  <span>⚡ ON-TIME DELIVERY</span>
                  <span>🌊 INTERSTATE AUTHORITY</span>
                </motion.div>
              </motion.div>

              {/* Loader Ring */}
              <div className="relative mt-6 z-10">
                <svg
                  className="w-28 h-28 md:w-32 md:h-32"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="2"
                    strokeDasharray="3 6"
                    fill="none"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 50 50"
                      to="360 50 50"
                      dur="10s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="url(#gradientRingDesktop)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="264"
                    initial={{ strokeDashoffset: 264 }}
                    animate={{ strokeDashoffset: 264 - (264 * progress) / 100 }}
                    transition={{ duration: 0.1 }}
                    style={{
                      transformOrigin: "50% 50%",
                      transform: "rotate(-90deg)",
                    }}
                  />
                  <defs>
                    <linearGradient
                      id="gradientRingDesktop"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#FFD700" />
                      <stop offset="50%" stopColor="#00B4FF" />
                      <stop offset="100%" stopColor="#FFFFFF" />
                    </linearGradient>
                  </defs>
                </svg>

                <motion.div
                  className="absolute top-1/2 left-1/2"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ transformOrigin: "0 0" }}
                >
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,215,0,0.8)]" />
                </motion.div>

                <motion.div
                  className="absolute inset-0 rounded-full border border-white/20"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{
                    margin: "auto",
                    width: "35%",
                    height: "35%",
                    top: "32.5%",
                    left: "32.5%",
                  }}
                />
              </div>

              {/* Percentage Display */}
              <motion.div
                className="mt-4 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-white/60 text-lg md:text-xl font-mono font-bold">
                  {Math.floor(progress)}%
                </p>
              </motion.div>

              {/* Status Messages */}
              <motion.div
                className="mt-2 text-center z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-white/70 text-[10px] md:text-xs font-mono tracking-wider">
                  <span id="desktopStatusText">LOADING EXPERIENCE</span>
                  <span className="inline-flex ml-1">
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                    >
                      .
                    </motion.span>
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                    >
                      .
                    </motion.span>
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
                    >
                      .
                    </motion.span>
                  </span>
                </p>
              </motion.div>

              {/* Bottom Progress Bar */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/5 z-10"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                style={{ transformOrigin: "left" }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-[#FFD700] via-[#00B4FF] to-white"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </motion.div>

              {/* Bottom Tagline - Company Info */}
              <motion.div
                className="absolute bottom-6 left-0 right-0 text-center z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-white/30 text-[8px] md:text-[9px] tracking-[0.2em] uppercase">
                  FRESNO, CALIFORNIA • SINCE 2015 • FULL TRUCKLOAD & FRESH
                  PRODUCE
                </p>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
