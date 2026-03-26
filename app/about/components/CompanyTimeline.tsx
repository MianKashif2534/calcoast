"use client";

import { motion, type Variants } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;
const easeSpring = [0.34, 1.56, 0.64, 1] as const;

const timeline = [
  {
    year: "2015",
    title: "Company Founded",
    desc: "Cal Coast Logistics established in Fresno, CA with FMCSA common authority.",
  },
  {
    year: "2017",
    title: "Fleet Expansion",
    desc: "Grew from initial trucks to a fleet of 15+ owned assets serving interstate routes.",
  },
  {
    year: "2019",
    title: "Produce Specialty",
    desc: "Added specialized fresh produce transport from California’s Central Valley.",
  },
  {
    year: "2021",
    title: "Nationwide Reach",
    desc: "Expanded coverage to major freight lanes across all 48 contiguous states.",
  },
  {
    year: "2024",
    title: "35+ Fleet Assets",
    desc: "Reached 35+ owned trucks with perfect 5.0 carrier rating from verified brokers.",
  },
];

const viewport = { once: true, margin: "-40px" };

const headingContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const headingChild: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
};

const timelineList: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const circleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: easeSpring },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: easeOut,
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardTitleVariants: Variants = {
  hidden: { opacity: 0, x: 8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: easeOut },
  },
};

const cardDescVariants: Variants = {
  hidden: { opacity: 0, x: 8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: easeOut },
  },
};

export function CompanyTimeline() {
  return (
    <motion.section
      className="bg-[linear-gradient(270deg,#FFFFFF_0%,#3474F433_100%)] py-15"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewport}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-[855px] px-4">
        <motion.div
          className="text-center"
          variants={headingContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p
            className="text-sm font-medium text-blue-500"
            variants={headingChild}
          >
            Our Journey
          </motion.p>
          <motion.h2
            className="mt-2 text-3xl font-semibold text-black sm:text-3xl"
            variants={headingChild}
          >
            Company Timeline
          </motion.h2>
        </motion.div>

        <motion.div
          className="relative mt-12 flex flex-col gap-[43px]"
          variants={timelineList}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div
            className="absolute left-[20px] top-0 h-full w-[2px] origin-top bg-blue-300"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease: easeOut }}
          />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 sm:gap-6"
              variants={rowVariants}
            >
              <motion.div
                className="relative z-10 flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-blue-500 text-xs font-semibold text-white sm:text-sm"
                variants={circleVariants}
              >
                {item.year}
              </motion.div>

              <motion.div
                className="min-w-0 flex-1 rounded-xl bg-[#031595] px-4 py-4 text-white shadow-sm sm:px-6"
                variants={cardVariants}
              >
                <motion.h3 className="text-base font-semibold" variants={cardTitleVariants}>
                  {item.title}
                </motion.h3>
                <motion.p className="mt-1 text-sm text-white/80" variants={cardDescVariants}>
                  {item.desc}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
