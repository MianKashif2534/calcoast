"use client";

import { motion, type Variants } from "framer-motion";
import { FaBullseye, FaShieldAlt } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";

const easeOut = [0.22, 1, 0.36, 1] as const;

const viewport = { once: true, margin: "-60px" };

const headingContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const headingChild: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
};

const cardsGrid: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.15 },
  },
};

const cardOuter: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const cardIcon: Variants = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: easeOut },
  },
};

const cardTitle: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: easeOut },
  },
};

const cardDesc: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: easeOut },
  },
};

const values = [
  {
    Icon: FaShieldAlt,
    title: "Safety",
    desc: "Every load, every mile safety is non negotiable. Our drivers and equipment meet the highest standards.",
  },
  {
    Icon: FiTarget,
    title: "Reliability",
    desc: "On time, every time. We build our reputation on consistent, dependable freight delivery.",
  },
  {
    Icon: FaBullseye,
    title: "Excellence",
    desc: "From communication to execution, we strive for excellence in every aspect of our operations.",
  },
] as const;

export function CoreValuesSection() {
  return (
    <motion.section
      className="bg-[#F3F6FB] py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewport}
      transition={{ duration: 0.45, ease: easeOut }}
    >
      <div className="mx-auto max-w-6xl px-4 text-center">
        <motion.div
          variants={headingContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p
            className="text-sm font-medium text-blue-500"
            variants={headingChild}
          >
            Our Foundation
          </motion.p>
          <motion.h2
            className="mt-2 text-3xl font-semibold text-black sm:text-3xl"
            variants={headingChild}
          >
            Core Values
          </motion.h2>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-6"
          variants={cardsGrid}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {values.map((item) => (
            <motion.div
              key={item.title}
              className="flex w-full max-w-[320px] flex-col items-center gap-2 rounded-2xl bg-[#031595] px-6 py-14 text-center text-white shadow sm:px-[30px] sm:py-[70px]"
              variants={cardOuter}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <motion.div className="text-3xl" variants={cardIcon}>
                <item.Icon aria-hidden />
              </motion.div>
              <motion.h3 className="text-lg font-semibold" variants={cardTitle}>
                {item.title}
              </motion.h3>
              <motion.p
                className="text-sm leading-relaxed text-white/80"
                variants={cardDesc}
              >
                {item.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
