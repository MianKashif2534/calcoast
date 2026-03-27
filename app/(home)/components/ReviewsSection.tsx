"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import reviewImg from "@/app/assets/reviewImg.png";
import { useEffect, useMemo, useState } from "react";

export function ReviewsSection() {
  const reviews = useMemo(
    () => [
      {
        ratingText: "5.0 / 5.0 Rating",
        rating: 5,
        headline: "Verified Reviews",
        title: "What Brokers Say",
        topTags: ["10/10 Timeliness", "10/10 Equipment", "10/10 Communication"],
        quote:
          `"Only ran a few loads for us in Nov '23, but they were great. Dedicated to the loads, awesome communication! We look forward to working with them in the future!!"`,
        smallTags: [
          "On Time Pickup",
          "On Time Delivery",
          "Consistent Tracking",
          "Strong Dispatcher",
          "Strong Driver Communication",
        ],
        authorTitle: "Verified Broker",
        authorMeta: "Oregon · February 2024",
      },
      {
        ratingText: "5.0 / 5.0 Rating",
        rating: 5,
        headline: "Verified Reviews",
        title: "What Brokers Say",
        topTags: ["Perfect Service", "Fast Updates", "No Surprises"],
        quote:
          `"Great carrier. On time pickup and delivery, clean paperwork, and quick updates throughout the trip. Would absolutely book again."`,
        smallTags: ["On Time Delivery", "Clear Communication", "Clean POD", "Proactive Updates", "Reliable ETA"],
        authorTitle: "Verified Broker",
        authorMeta: "California · January 2024",
      },
      {
        ratingText: "5.0 / 5.0 Rating",
        rating: 5,
        headline: "Verified Reviews",
        title: "What Brokers Say",
        topTags: ["10/10 Reliability", "Great Drivers", "Strong Dispatch"],
        quote:
          `"Driver was professional and easy to work with. Dispatch responded fast and kept us in the loop. Everything went exactly as planned."`,
        smallTags: ["Professional Driver", "Consistent Tracking", "Responsive Dispatch", "On Time Pickup", "On Time Delivery"],
        authorTitle: "Verified Broker",
        authorMeta: "Texas · March 2024",
      },
      {
        ratingText: "5.0 / 5.0 Rating",
        rating: 5,
        headline: "Verified Reviews",
        title: "What Brokers Say",
        topTags: ["Safe Equipment", "Road Ready", "Great Communication"],
        quote:
          `"Equipment was in excellent condition and the team communicated clearly from start to finish. Smooth process and solid execution."`,
        smallTags: ["Well Maintained Equipment", "On Time Delivery", "Clear Updates", "Easy Scheduling", "Great Service"],
        authorTitle: "Verified Broker",
        authorMeta: "Nevada · December 2023",
      },
      {
        ratingText: "5.0 / 5.0 Rating",
        rating: 5,
        headline: "Verified Reviews",
        title: "What Brokers Say",
        topTags: ["Quick Turnaround", "Great Tracking", "On Time"],
        quote:
          `"Booked last minute and they still delivered on time. Tracking was consistent and communication was excellent. Highly recommend."`,
        smallTags: ["Last Minute Coverage", "Consistent Tracking", "On Time Pickup", "On Time Delivery", "Fast Response"],
        authorTitle: "Verified Broker",
        authorMeta: "Arizona · November 2023",
      },
      {
        ratingText: "5.0 / 5.0 Rating",
        rating: 5,
        headline: "Verified Reviews",
        title: "What Brokers Say",
        topTags: ["Top Tier Carrier", "Trusted Partner", "5-Star Service"],
        quote:
          `"They treat freight like it's their own. Great communication, dependable execution, and always professional. A trusted partner."`,
        smallTags: ["Trusted Carrier", "Strong Communication", "Professional Team", "Reliable Service", "Great Experience"],
        authorTitle: "Verified Broker",
        authorMeta: "Washington · April 2024",
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = reviews[activeIndex];

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused, reviews.length]);

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
    <section id="reviews" className="bg-[#F3F6FB] py-16">
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
          <p className="text-blue-500 text-sm font-medium">{active.headline}</p>

          <h2 className="text-[32px] md:text-[36px] font-semibold text-black mt-1">
            {active.title}
          </h2>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="grid items-center gap-6 md:grid-cols-2"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative h-[250px] overflow-hidden rounded-2xl md:h-[320px] group"
            >
              <Image
                src={reviewImg}
                alt="Customer review background"
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
                priority
              />

              <div className="absolute inset-0 flex flex-col justify-end bg-black/40 p-6">
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="mb-2 flex gap-1 text-yellow-400"
                >
                  {[...Array(active.rating)].map((_, i) => (
                    <motion.div key={i} variants={fadeUp}>
                      <FaStar />
                    </motion.div>
                  ))}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-lg font-semibold text-white"
                >
                  {active.ratingText}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.18 }}
                  className="text-sm text-white/80"
                >
                  Verified Broker Reviews
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-2xl bg-[#0C0E74] p-6 text-white shadow-lg"
            >
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="mb-5 flex flex-wrap gap-3"
              >
                {active.topTags.map((tag) => (
                  <motion.span key={tag} variants={fadeUp} className="tag">
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="mb-5 text-[15px] leading-relaxed text-white/90"
              >
                {active.quote}
              </motion.p>

              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="mb-5 flex flex-wrap gap-2"
              >
                {active.smallTags.map((tag) => (
                  <motion.span key={tag} variants={fadeUp} className="small-tag">
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.06 }}
                className="flex items-center justify-between border-t border-white/20 pt-4"
              >
                <div>
                  <p className="font-semibold">{active.authorTitle}</p>
                  <p className="text-sm text-white/70">{active.authorMeta}</p>
                </div>

                <div className="flex items-center gap-1 text-yellow-400">
                  <FaStar />
                  <span className="font-medium text-white">5.0</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() =>
                setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
              }
              className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-50"
            >
              Prev
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to review ${i + 1}`}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    i === activeIndex ? "bg-blue-600" : "bg-blue-200 hover:bg-blue-300"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => setActiveIndex((prev) => (prev + 1) % reviews.length)}
              className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
