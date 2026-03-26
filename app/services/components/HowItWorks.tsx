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

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 60, rotateX: 10 },
    show: { opacity: 1, y: 0, rotateX: 0 },
  };

  return (
    <section className="bg-[#F3F6FB] py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-blue-500">Simple Process</p>
          <h2 className="mt-2 text-3xl font-semibold text-black">
            How It Works
          </h2>
        </motion.div>

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
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.07,
                rotateY: 5,
              }}
              className="group relative w-full h-[320px]
                         bg-[#0C1F8F] text-white 
                         rounded-[16px] 
                         flex flex-col items-center justify-center 
                         px-5 text-center
                         overflow-hidden"
            >
              {/* Glow Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/20 to-transparent" />

              {/* Number */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-400 font-semibold z-10"
              >
                {item.number}
              </motion.div>

              {/* Title */}
              <h3 className="text-base font-semibold z-10">{item.title}</h3>

              {/* Desc */}
              <p className="mt-2 text-sm text-white/80 leading-relaxed z-10">
                {item.desc}
              </p>

              {/* Bottom line animation */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "60%" }}
                className="absolute bottom-4 h-[2px] bg-blue-400"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
