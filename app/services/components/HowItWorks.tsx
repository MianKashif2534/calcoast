"use client";

import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Request a Quote",
      desc: "Contact us with your shipment details and we'll provide a competitive rate within hours.",
    },
    {
      number: "2",
      title: "We Plan Your Route",
      desc: "Our team plans the optimal route, assigns the right equipment, and schedules pickup.",
    },
    {
      number: "3",
      title: "Pickup and Transit",
      desc: "Our professional drivers pick up your freight and deliver with real time tracking updates.",
    },
    {
      number: "4",
      title: "Safe Delivery",
      desc: "Your freight arrives on time, every time. We confirm delivery and handle all documentation.",
    },
  ];

  // Parent animation (stagger)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Card animation
  const card = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-[#F3F6FB] py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-medium text-blue-500">Simple Process</p>
          <h2 className="mt-2 text-3xl font-semibold text-black">
            How It Works
          </h2>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 grid gap-6 
                     grid-cols-1 
                     sm:grid-cols-2 
                     lg:grid-cols-4"
        >
          {steps.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              transition={{ duration: 0.5 }}
              className="w-full h-[320px]
                         bg-[#0C1F8F] text-white 
                         rounded-[16px] 
                         flex flex-col items-center justify-center 
                         px-5 text-center
                         hover:scale-105 transition"
            >
              {/* Number */}
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-400 font-semibold">
                {item.number}
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold">{item.title}</h3>

              {/* Desc */}
              <p className="mt-2 text-sm text-white/80 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
