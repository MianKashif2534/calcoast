"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";

const VIDEO_SRC =
  "https://cdn.dribbble.com/userupload/16617278/file/original-0e31bdb04f34cad70761d5cdc4f04fcd.mp4";

export default function VideoLoader() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // ✅ check first load
    const hasLoaded = sessionStorage.getItem("hasLoaded");

    if (hasLoaded) {
      return; //
    }

    sessionStorage.setItem("hasLoaded", "true");
    setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const video = videoRef.current;
    if (!video) return;

    let raf: number;

    const update = () => {
      if (!video.duration) {
        raf = requestAnimationFrame(update);
        return;
      }

      const percent = (video.currentTime / (video.duration - 6.5)) * 100;
      setProgress(Math.min(percent, 100));

      if (video.currentTime >= video.duration - 6.5) {
        setVisible(false);
        video.pause();
        return;
      }

      raf = requestAnimationFrame(update);
    };

    const start = () => {
      video.play().catch(() => {});
      raf = requestAnimationFrame(update);
    };

    if (video.readyState >= 3) {
      start();
    } else {
      video.addEventListener("canplay", start);
    }

    return () => {
      cancelAnimationFrame(raf);
      video.removeEventListener("canplay", start);
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#0B1C2F] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 🎥 Video */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src={VIDEO_SRC}
            muted
            playsInline
            preload="auto"
          />

          {/* 🌑 Overlay */}
          <div className="absolute inset-0 bg-[#0B1C2F]/50" />

          {/* 🔝 Logo */}
          <div className="absolute top-2 right-8 z-20 w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44">
            <Image
              src={logo}
              alt="logo"
              fill
              className="object-contain brightness-0 invert"
            />
          </div>

          {/* 📊 Progress */}
          <div className="absolute bottom-0 left-0 w-full h-[4px] bg-white/20 z-20">
            <motion.div
              className="h-full bg-[#F97316]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
