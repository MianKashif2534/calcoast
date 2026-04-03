"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const DESKTOP_VIDEO = "/loader.mp4";
const MOBILE_VIDEO = "/loader-mobile.mp4"; // ✅ Mobile ke liye alag video (apni video ka path daalein)

export default function VideoLoader() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    // Detect mobile
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

  // 🎬 VIDEO LOADER
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

      const percent = (video.currentTime / video.duration) * 100;
      setProgress(Math.min(percent, 100));

      if (video.currentTime >= video.duration - 0.3) {
        setVisible(false);
        video.pause();
        return;
      }

      raf = requestAnimationFrame(update);
    };

    const start = () => {
      video.play().catch(() => {
        setTimeout(() => setVisible(false), 2000);
      });
      raf = requestAnimationFrame(update);
    };

    if (video.readyState >= 3) start();
    else video.addEventListener("canplay", start);

    return () => {
      cancelAnimationFrame(raf);
      video.removeEventListener("canplay", start);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999999] bg-[#0B1C2F] overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* 🎥 VIDEO - Mobile aur Desktop ke liye alag */}
        <div className="absolute inset-0 flex items-center justify-center">
          <video
            ref={videoRef}
            key={isMobile ? "mobile" : "desktop"} // Force re-render on device change
            className={`
              ${
                isMobile
                  ? "w-[80%] h-[80%] object-contain rounded-2xl"
                  : "w-full h-full object-cover"
              }
            `}
            src={isMobile ? MOBILE_VIDEO : DESKTOP_VIDEO}
            muted
            playsInline
            preload="auto"
          />
        </div>

        {/* Overlay */}
        <div
          className={`absolute inset-0 ${isMobile ? "bg-[#0B1C2F]/80" : "bg-[#0B1C2F]/40"}`}
        />

        {/* Logo - Complete Remove (Desktop se bhi) */}
        {/* Logo code completely removed */}

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full z-20">
          <div
            className={`${isMobile ? "h-[2px]" : "h-[4px]"} bg-white/20 w-full`}
          >
            <motion.div
              className={`h-full bg-[#F97316] ${isMobile ? "rounded-full" : ""}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
