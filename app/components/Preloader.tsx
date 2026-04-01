"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const LOTTIE_SRC =
  "https://lottie.host/79da80c1-0aaf-4656-a903-c228f500724f/3kBJBvfzmZ.lottie";

const MIN_VISIBLE_MS = 5000;

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const minTime = new Promise<void>((resolve) =>
      setTimeout(resolve, MIN_VISIBLE_MS)
    );

    const loadDone =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            window.addEventListener("load", () => resolve(), { once: true });
          });

    let cancelled = false;
    Promise.all([minTime, loadDone]).then(() => {
      if (!cancelled) setVisible(false);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="aspect-square w-[min(18rem,88vw)] sm:w-[min(24rem,88vw)] md:w-[min(30rem,88vw)] lg:w-[min(36rem,85vw)]">
            <DotLottieReact
              src={LOTTIE_SRC}
              loop
              autoplay
              className="h-full w-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
