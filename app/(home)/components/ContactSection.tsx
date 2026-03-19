"use client";

import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { motion } from "framer-motion";
import contactImg from "@/app/assets/contactImg.png";

export function ContactSection() {
  return (
    <section className="bg-[linear-gradient(360deg,#FFFFFF_0%,#3474F433_100%)] py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-blue-500 text-sm font-medium">Get In Touch</p>

          <h2 className="text-[34px] font-bold text-black mt-2">Contact Us</h2>

          <p className="text-gray-500 mt-3 text-sm">
            We're here to answer your questions and support your logistics
            needs.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* IMAGE with zoom + parallax feel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="lg:col-span-2 relative rounded-xl overflow-hidden group"
          >
            <Image
              src={contactImg}
              alt="truck"
              className="w-[740px] h-[520px] object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-8 flex flex-col justify-end text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-[20px] font-semibold">Headquarters</h3>

                <p className="text-[14px] text-white/80 mt-1">
                  Fresno, California
                </p>

                <p className="text-[14px] mt-4">
                  2205 E Annadale Ave, Fresno, CA 93706
                </p>

                <p className="text-[14px] underline mt-2 cursor-pointer hover:text-blue-300 transition">
                  View on Maps →
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Cards */}
          <div className="flex flex-col gap-6">
            {/* CALL CARD */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.2)",
              }}
              className="bg-[#1D2AA6] text-white rounded-xl p-6 shadow h-[247px] w-[339px] flex flex-col justify-between cursor-pointer"
            >
              <div>
                <FaPhoneAlt className="text-xl mb-4" />

                <p className="font-semibold text-[16px]">Call Us</p>

                <p className="text-[13px] text-white/80 mt-1">
                  Speak with our team directly
                </p>
              </div>

              <motion.p
                whileHover={{ scale: 1.1 }}
                className="text-[18px] font-bold"
              >
                (559) 481 6441
              </motion.p>
            </motion.div>

            {/* EMAIL CARD */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotate: -1,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
              }}
              className="bg-white border rounded-xl p-6 shadow-sm h-[247px] w-[339px] flex flex-col justify-between cursor-pointer"
            >
              <div>
                <IoMail className="text-xl text-blue-600 mb-4" />

                <p className="font-semibold text-[16px] text-black">Email Us</p>

                <p className="text-[13px] text-gray-500 mt-1">
                  We'll respond within 24 hours
                </p>
              </div>

              <motion.p
                whileHover={{ scale: 1.05 }}
                className="text-blue-600 text-[14px] font-medium"
              >
                ops@calcoastlogistics.com
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Box */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="mt-12 border border-blue-400 text-blue-600 text-center py-3 rounded-lg bg-blue-50 text-[14px]"
        >
          Available 24/7 : We're here to support your logistics needs around the
          clock.
        </motion.div>
      </div>
    </section>
  );
}
