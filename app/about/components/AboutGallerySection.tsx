"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";

import img1360 from "@/app/assets/IMG_1360.png";
import img1370 from "@/app/assets/IMG_1370.png";
import img1362 from "@/app/assets/IMG_1362.png";

const easeOut = [0.22, 1, 0.36, 1] as const;

const photos: { src: StaticImageData; alt: string }[] = [
  {
    src: img1360,
    alt: "Cal Coast Logistics team collaborating in a modern conference room",
  },
  {
    src: img1370,
    alt: "Operations workspace at Cal Coast Logistics",
  },
  {
    src: img1362,
    alt: "Cal Coast Logistics office and dispatch environment",
  },
];

export function AboutGallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);

  const goPrev = useCallback(() => {
    setLightbox((i) =>
      i === null ? null : (i - 1 + photos.length) % photos.length,
    );
  }, []);

  const goNext = useCallback(() => {
    setLightbox((i) =>
      i === null ? null : (i + 1) % photos.length,
    );
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox, close, goPrev, goNext]);

  return (
    <section
      className="bg-[#F3F6FB] py-14 md:py-20"
      aria-labelledby="about-gallery-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="mb-10 text-center md:mb-12"
        >
          <p className="text-sm font-medium text-nav-cta">Behind the scenes</p>
          <h2
            id="about-gallery-heading"
            className="mt-2 text-2xl font-semibold text-black sm:text-3xl md:text-[34px]"
          >
            Our team &amp; workspace
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-black/65">
            A look at the people and place behind Cal Coast Logistics—where we
            plan loads, support drivers, and serve brokers every day.
          </p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-5"
        >
          {photos.map((photo, index) => (
            <motion.li
              key={`about-gallery-${index}`}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, ease: easeOut },
                },
              }}
              className={
                index === photos.length - 1
                  ? "sm:col-span-2 sm:flex sm:justify-center md:col-span-1 md:block"
                  : undefined
              }
            >
              <button
                type="button"
                onClick={() => setLightbox(index)}
                className={`group relative block w-full overflow-hidden rounded-2xl bg-black/5 text-left shadow-sm ring-1 ring-black/[0.06] transition hover:ring-nav-cta/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nav-cta ${
                  index === photos.length - 1 ? "sm:max-w-lg md:max-w-none" : ""
                }`}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, 33vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />
                  <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-black/80 backdrop-blur-sm">
                    View
                  </span>
                </div>
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/92 p-4 sm:p-8"
            onClick={close}
          >
            <button
              type="button"
              aria-label="Close gallery"
              onClick={close}
              className="absolute z-20 rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{
                top: "max(1rem, env(safe-area-inset-top, 0px))",
                right: "max(1rem, env(safe-area-inset-right, 0px))",
              }}
            >
              <IoClose className="h-6 w-6" aria-hidden />
            </button>

            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:left-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <IoChevronBack className="h-7 w-7" aria-hidden />
            </button>

            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:right-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <IoChevronForward className="h-7 w-7" aria-hidden />
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2, ease: easeOut }}
              className="relative z-10 h-[85dvh] w-full max-w-6xl max-h-[85dvh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[lightbox].src}
                alt={photos[lightbox].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            <p
              className="pointer-events-none absolute left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs text-white/90"
              style={{
                bottom: "max(1rem, env(safe-area-inset-bottom, 0px))",
              }}
            >
              {lightbox + 1} / {photos.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
