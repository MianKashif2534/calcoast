"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import reviewImg from "@/app/assets/reviewImg.png";

export function ReviewsSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  };

  return (
    <section className="py-16 bg-[#F3F6FB]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-blue-500 text-sm font-medium">Verified Reviews</p>

          <h2 className="text-[32px] md:text-[36px] font-semibold text-black mt-1">
            What Brokers Say
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative h-[250px] md:h-[320px] rounded-2xl overflow-hidden group"
          >
            <Image
              src={reviewImg}
              alt="review"
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
              {/* Stars */}
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                className="flex gap-1 text-yellow-400 mb-2"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div key={i} variants={fadeUp}>
                    <FaStar />
                  </motion.div>
                ))}
              </motion.div>

              <p className="text-white text-lg font-semibold">
                5.0 / 5.0 Rating
              </p>

              <p className="text-white/80 text-sm">Verified Broker Reviews</p>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#0C0E74] text-white p-6 rounded-2xl shadow-lg"
          >
            {/* Top Tags */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              className="flex flex-wrap gap-3 mb-5"
            >
              {[
                "10/10 Timeliness",
                "10/10 Equipment",
                "10/10 Communication",
              ].map((tag, i) => (
                <motion.span key={i} variants={fadeUp} className="tag">
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Review Text */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="text-[15px] leading-relaxed text-white/90 mb-5"
            >
              "Only ran a few loads for us in Nov '23, but they were great.
              Dedicated to the loads, awesome communication! We look forward to
              working with them in the future!!"
            </motion.p>

            {/* Small Tags */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              className="flex flex-wrap gap-2 mb-5"
            >
              {[
                "On Time Pickup",
                "On Time Delivery",
                "Consistent Tracking",
                "Strong Dispatcher",
                "Strong Driver Communication",
              ].map((tag, i) => (
                <motion.span key={i} variants={fadeUp} className="small-tag">
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Footer */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="flex justify-between items-center border-t border-white/20 pt-4"
            >
              <div>
                <p className="font-semibold">Verified Broker</p>
                <p className="text-sm text-white/70">Oregon · February 2024</p>
              </div>

              <div className="flex items-center gap-1 text-yellow-400">
                <FaStar />
                <span className="text-white font-medium">5.0</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
