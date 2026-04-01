"use client";

import Image from "next/image";
import type { SVGProps } from "react";
import hqImage from "@/app/assets/contact.png";
import { motion } from "framer-motion";

function IconPhone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
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

function IconEmail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
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

export function ContactUsSection() {
  return (
    <section className="bg-gradient-to-b from-[#e6efff] to-[#eef3f8] px-4 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* 🔥 TOP TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-blue-500 text-sm font-medium">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-1">Contact Us</h2>
          <p className="text-gray-500 mt-3 text-base max-w-md mx-auto">
            We're here to answer your questions and support your logistics
            needs.
          </p>
        </motion.div>

        {/* 🔥 MAIN GRID (same gap-6 as before) */}
        <div className="grid gap-6 mt-12 lg:grid-cols-2 items-stretch">
          {/* ✅ LEFT IMAGE (bada kiya) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full rounded-2xl overflow-hidden h-[340px] sm:h-[380px] lg:h-[400px] shadow-lg"
          >
            <Image
              src={hqImage}
              alt="Headquarters"
              fill
              className="object-cover"
              priority
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-between p-6 text-white">
              <div>
                <h3 className="text-lg font-semibold">Headquarters</h3>
                <p className="text-sm opacity-90">Fresno, California</p>
              </div>

              <div className="text-sm">
                <p>
                  2205 E Annadale Ave,
                  <br />
                  Fresno, CA 93706
                </p>
                <p className="mt-2 underline cursor-pointer hover:text-blue-300 transition">
                  View on Maps →
                </p>
              </div>
            </div>
          </motion.div>

          {/* ✅ RIGHT SIDE (cards bhi bade kiye) */}
          <div className="flex flex-col gap-6 h-full">
            {/* CALL CARD */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="group flex-1 rounded-2xl bg-white border border-gray-200 p-8 flex items-center gap-5 hover:bg-[#0b1fae] hover:border-[#0b1fae] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <motion.div
                whileHover={{ rotate: 15 }}
                className="bg-gray-100 p-4 rounded-full group-hover:bg-white/20 transition"
              >
                <IconPhone className="text-[#0b1fae] group-hover:text-white" />
              </motion.div>

              <div>
                <h3 className="font-semibold text-lg text-gray-900 group-hover:text-white">
                  Call Us
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-white/90">
                  Speak with our team directly
                </p>
                <p className="font-bold text-lg text-[#0b1fae] group-hover:text-white mt-1">
                  (559) 481 6441
                </p>
              </div>
            </motion.div>

            {/* EMAIL CARD */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="group flex-1 rounded-2xl bg-white border border-gray-200 p-8 flex items-center gap-5 hover:bg-[#0b1fae] hover:border-[#0b1fae] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <motion.div
                whileHover={{ rotate: -15 }}
                className="bg-gray-100 p-4 rounded-full group-hover:bg-white/20 transition"
              >
                <IconEmail className="text-[#0b1fae] group-hover:text-white" />
              </motion.div>

              <div>
                <h3 className="font-semibold text-lg text-gray-900 group-hover:text-white">
                  Email Us
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-white/90">
                  We'll respond within 24 hours
                </p>
                <p className="font-semibold text-[#0b1fae] group-hover:text-white mt-1">
                  ops@calcoastlogistics.com
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 🔥 BOTTOM BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <div className="w-full max-w-3xl border border-blue-400 text-blue-600 rounded-lg py-3 px-4 text-sm md:text-base bg-white text-center hover:bg-blue-50 transition">
            Available 24/7 : We're here to support your logistics needs around
            the clock.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
