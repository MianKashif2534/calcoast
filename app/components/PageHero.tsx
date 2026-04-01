"use client";

import { motion, type Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import heroBgReuse from "@/app/assets/heroBgReuse.png";

const easeOut = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: "-80px" };

export interface PageHeroProps {
  subtitle: string;
  title: string;
  description: string;
  image?: StaticImageData; // 👈 NEW
}

const contentBlock: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.12 },
  },
};

const subtitleVariant: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: easeOut },
  },
};

const titleVariant: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.94, skewY: 2 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    skewY: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

const descriptionVariant: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export function PageHero({
  subtitle,
  title,
  description,
  image,
}: PageHeroProps) {
  return (
    <motion.section
      className="relative min-h-[50vh] w-full overflow-hidden sm:min-h-[55vh] md:min-h-[60vh] lg:min-h-[65vh]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewport}
      transition={{ duration: 0.5, ease: easeOut }}
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={viewport}
        transition={{ duration: 1.15, ease: easeOut }}
      >
        <Image
          src={image || heroBgReuse} // 👈 FIX
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease: easeOut }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative flex min-h-[50vh] flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[55vh] sm:px-6 sm:py-20 md:min-h-[60vh] md:px-8 md:py-24 lg:min-h-[65vh]">
        <motion.div
          variants={contentBlock}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex max-w-4xl flex-col items-center"
        >
          <motion.p
            className="mb-3 text-xl font-medium text-[#4285F4] sm:mb-4 sm:text-2xl md:text-3xl"
            variants={subtitleVariant}
          >
            {subtitle}
          </motion.p>

          <motion.h1
            className="mb-4 text-4xl font-bold leading-tight text-white sm:mb-5 sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.5rem]"
            style={{ transformOrigin: "center bottom" }}
            variants={titleVariant}
          >
            {title}
          </motion.h1>

          <motion.p
            className="max-w-2xl text-base leading-relaxed text-white sm:text-lg md:text-xl"
            variants={descriptionVariant}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
