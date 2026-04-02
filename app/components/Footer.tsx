"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import logo from "../assets/logo.png";

const MotionLink = motion.create(Link);

const easeOut = [0.22, 1, 0.36, 1] as const;

const viewport = { once: true, margin: "-40px" };

const gridRoot: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const column: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
      staggerChildren: 0.1,
      delayChildren: 0.04,
    },
  },
};

const logoWrap: Variants = {
  hidden: { opacity: 0, scale: 0.92, rotate: -2 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
};

const bodyText: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut },
  },
};

const fmcsaLine: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.45, ease: easeOut },
  },
};

const heading: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: easeOut },
  },
};

const navList: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const navLink: Variants = {
  hidden: { opacity: 0, x: -6 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: easeOut },
  },
};

const contactBlock: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const contactRow: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut, staggerChildren: 0.08 },
  },
};

const contactIcon: Variants = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 380, damping: 24 },
  },
};

const contactLabel: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: easeOut },
  },
};

const copyrightBar: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const copyrightText: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
};

function IconMap(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function IconPhone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function IconMail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function IconInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 17a5 5 0 100-10 5 5 0 000 10z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.5 6.5h.01" />
    </svg>
  );
}

function IconFacebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.2-1.6 1.6-1.6H16.7V4.8c-.3 0-1.4-.1-2.8-.1-2.7 0-4.6 1.6-4.6 4.7V11H6.7v3h2.6v8h4.2z" />
    </svg>
  );
}

function IconTikTok(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M16.6 6.2c-.9-1-1.4-2.3-1.4-3.7h-3.3v13.1c0 1.3-1 2.4-2.4 2.4-1.3 0-2.4-1-2.4-2.4 0-1.3 1-2.4 2.4-2.4.3 0 .6.1.9.2V9.1c-.3 0-.6-.1-.9-.1-3.1 0-5.6 2.5-5.6 5.6S6.8 20.2 9.9 20.2c3.1 0 5.6-2.5 5.6-5.6V9.1c1.1.8 2.5 1.3 4 1.3V7.2c-1.1 0-2.1-.4-2.9-1z" />
    </svg>
  );
}

const socialLinks: {
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/calcoastlogistics?igsh=NTc4MTIwNjQ2YQ==",
    Icon: IconInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61563496715951&mibextid=wwXIfr",
    Icon: IconFacebook,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@calcoastlogistics?_r=1&_t=ZP-95CElEz95tn",
    Icon: IconTikTok,
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/contact" },
];

const contactItems = [
  {
    text: "2205 E Annadale Ave, Fresno, CA 93706",
    href: "https://maps.google.com/?q=2205+E+Annadale+Ave,+Fresno,+CA+93706",
    Icon: IconMap,
  },
  {
    text: "(559) 481 6441",
    href: "tel:+15594816441",
    Icon: IconPhone,
  },
  {
    text: "ops@calcoastlogistics.com",
    href: "mailto:ops@calcoastlogistics.com",
    Icon: IconMail,
  },
];

export function Footer() {
  return (
    <motion.footer
      className="bg-[#020840] text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewport}
      transition={{ duration: 0.5, ease: easeOut }}
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          className="grid gap-10 text-center md:grid-cols-2 md:text-left lg:grid-cols-3"
          variants={gridRoot}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div
            className="flex flex-col items-center space-y-4 md:items-start"
            variants={column}
          >
            <motion.div
              variants={logoWrap}
              className="inline-flex justify-center md:justify-start"
            >
              <Link href="/" className="inline-flex">
                <div className="flex border-4 border-blue-500 h-14 w-48 items-center justify-center rounded-full bg-white px-4 py-2">
                  <Image
                    src={logo}
                    alt="Cal Coast Logistics"
                    height={36}
                    width={160}
                    className="h-9 w-auto object-contain"
                  />
                </div>
              </Link>
            </motion.div>
            <motion.p
              className="max-w-sm text-sm leading-relaxed text-white/95"
              variants={bodyText}
            >
              Active interstate freight carrier specializing in general freight,
              fresh produce, and full truckload transport. Serving nationwide
              from Fresno, California.
            </motion.p>

            <motion.div
              className="inline-flex items-center justify-center md:justify-start"
              variants={bodyText}
            >
              <div className="inline-flex items-center gap-2 rounded-full border-4 border-blue-500 bg-white px-4 py-1.5">
                {socialLinks.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.06 }}
                    transition={{ type: "spring", stiffness: 500, damping: 28 }}
                    className="grid h-8 w-8 place-items-center rounded-full bg-white hover:bg-[#3474F4] text-[#3474F4] transition-all duration-300 hover:text-white shadow-sm  hover:ring-[#3474F4]/60"
                  >
                    <item.Icon className="h-5 w-5" aria-hidden />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center space-y-4 md:items-start"
            variants={column}
          >
            <motion.h3
              className="text-base font-semibold text-white"
              variants={heading}
            >
              Quick Links
            </motion.h3>
            <motion.nav
              className="flex flex-col items-center gap-2 md:items-start"
              variants={navList}
            >
              {quickLinks.map((link) => (
                <MotionLink
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/95 transition-colors hover:text-white"
                  variants={navLink}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                >
                  {link.label}
                </MotionLink>
              ))}
            </motion.nav>
          </motion.div>

          <motion.div
            className="flex flex-col items-center space-y-4 md:items-start"
            variants={column}
          >
            <motion.h3
              className="text-base font-semibold text-white"
              variants={heading}
            >
              Contact Info
            </motion.h3>
            <motion.div
              className="flex w-full flex-col gap-4 md:gap-3"
              variants={contactBlock}
            >
              {contactItems.map((item) => (
                <motion.a
                  key={item.text}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex flex-col items-center gap-2 text-sm text-white/95 transition-colors hover:text-white md:flex-row md:items-start md:gap-3 md:text-left"
                  variants={contactRow}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#020840]"
                    variants={contactIcon}
                  >
                    <item.Icon className="h-5 w-5" aria-hidden />
                  </motion.span>
                  <motion.span
                    className="max-w-xs md:pt-0.5"
                    variants={contactLabel}
                  >
                    {item.text}
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="border-t border-white/20"
        variants={copyrightBar}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="mx-auto max-w-6xl px-4 py-5 text-center text-sm text-white/80 sm:px-6 lg:px-8">
          <motion.p variants={copyrightText}>
            © 2026 Cal Coast Logistics. All Rights Reserved.
          </motion.p>
          <motion.p
            variants={copyrightText}
            className="mt-1 text-xs text-white/60"
          >
            Design by{" "}
            <motion.a
              href="https://timexsolutioninc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors "
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Timex Solution Inc.
            </motion.a>
          </motion.p>
        </div>
      </motion.div>
    </motion.footer>
  );
}
