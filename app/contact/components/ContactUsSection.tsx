"use client";

import { motion, type Variants } from "framer-motion";
import type { ComponentType, SVGProps } from "react";

const easeOut = [0.22, 1, 0.36, 1] as const;

const viewport = { once: true, margin: "-60px" };

const sectionBg = {
  background:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(52, 116, 244, 0.2) 100%), #f0f4f8",
};

const gridContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.06 },
  },
};

const cardOuter: Variants = {
  hidden: { opacity: 0, y: 28, rotateY: -6 },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: {
      duration: 0.55,
      ease: easeOut,
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardIconWrap: Variants = {
  hidden: { opacity: 0, scale: 0.6, rotate: -12 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 320, damping: 22 },
  },
};

const cardTitle: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: easeOut },
  },
};

const cardDesc: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: easeOut },
  },
};

const cardDetail: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: easeOut },
  },
};

const bannerCard: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut, staggerChildren: 0.12 },
  },
};

const bannerText: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

function IconPhone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function IconEmail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function IconPin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

const contactCards: {
  title: string;
  description: string;
  detail: string;
  href: string;
  dark: boolean;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}[] = [
  {
    title: "Call Us",
    description: "Speak with our team directly",
    detail: "(559) 481 6441",
    href: "tel:+15594816441",
    dark: true,
    Icon: IconPhone,
  },
  {
    title: "Email Us",
    description: "We'll respond within 24 hours",
    detail: "ops@calcoastlogistics.com",
    href: "mailto:ops@calcoastlogistics.com",
    dark: false,
    Icon: IconEmail,
  },
  {
    title: "Visit Us",
    description: "View on Google Maps",
    detail: "Open in Maps",
    href: "https://maps.google.com/?q=2205+E+Annadale+Ave,+Fresno,+CA+93706",
    dark: false,
    Icon: IconPin,
  },
];

export function ContactUsSection() {
  return (
    <motion.section
      className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      style={sectionBg}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewport}
      transition={{ duration: 0.45, ease: easeOut }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {contactCards.map((card) => (
            <motion.a
              key={card.title}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`flex flex-col rounded-2xl p-6 ${
                card.dark
                  ? "bg-[#020840] text-white"
                  : "border-2 border-[#3474F4] bg-white text-black"
              }`}
              variants={cardOuter}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.span
                className={`mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                  card.dark ? "bg-white/20 text-white" : "bg-gray-200 text-[#020840]"
                }`}
                variants={cardIconWrap}
              >
                <card.Icon className="h-5 w-5" aria-hidden />
              </motion.span>
              <motion.h3 className="text-lg font-bold sm:text-xl" variants={cardTitle}>
                {card.title}
              </motion.h3>
              <motion.p
                className={`mt-1 text-sm ${card.dark ? "text-white/90" : "text-gray-600"}`}
                variants={cardDesc}
              >
                {card.description}
              </motion.p>
              <motion.p className="mt-3 text-base font-bold sm:text-lg" variants={cardDetail}>
                {card.detail}
              </motion.p>
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <motion.div
            className="w-full max-w-2xl rounded-2xl border-2 border-[#3474F4] bg-white px-6 py-4 text-center"
            variants={bannerCard}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.p
              className="text-base font-medium text-[#3474F4] sm:text-lg"
              variants={bannerText}
            >
              Available 24/7 : We&apos;re here to support your logistics needs around the clock.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
