"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import img1 from "@/app/assets/frame749.png";
import img2 from "@/app/assets/service-produce1.png";
import img3 from "@/app/assets/service-produce2.png";

export function ServicesSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-medium text-blue-500">What We Haul</p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold">
            Freight Services & Capabilities
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-500 md:text-base">
            Authorized for interstate property transport. Reefer equipped fleet
            ready for your cargo.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-10 space-y-6">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl shadow-lg group"
          >
            <Image
              src={img1}
              alt="service"
              className="h-[400px] w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60" />

            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="absolute inset-0 flex flex-col justify-center p-6 md:p-10 text-white max-w-xl"
            >
              <span className="mb-3 w-fit rounded-full bg-white/20 px-3 py-1 text-xs">
                Core Service
              </span>

              <h3 className="text-2xl font-bold">General Freight</h3>

              <p className="mt-3 text-sm text-gray-200">
                Full truckload capacity for standard cargo with direct, reliable
                delivery across interstate routes. Our experienced team handles
                every load with professionalism and precision.
              </p>

              <ul className="mt-4 space-y-2 text-sm">
                <li>✓ Full truckload capacity for long haul routes</li>
                <li>✓ Direct point to point delivery</li>
                <li>✓ Real time tracking and updates</li>
                <li>✓ Flexible scheduling to meet your deadlines</li>
              </ul>

              <Link
                href="/contact"
                className="mt-5 inline-flex w-fit rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium transition hover:bg-blue-700"
              >
                Get a Quote →
              </Link>
            </motion.div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 overflow-hidden rounded-2xl shadow-lg group"
          >
            <Image
              src={img2}
              alt="service"
              className="h-[380px] w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="bg-[#2D1B69] p-6 md:p-8 text-white flex flex-col justify-center"
            >
              <span className="mb-3 w-fit rounded-full bg-white/20 px-3 py-1 text-xs">
                Main Focus
              </span>

              <h3 className="text-xl font-bold">Fresh Produce</h3>

              <p className="mt-3 text-sm text-white/80">
                Specialized handling for agricultural products with careful
                transport from California's Central Valley. We understand the
                time sensitive nature of fresh produce shipping.
              </p>

              <ul className="mt-4 space-y-2 text-sm">
                <li>✓ Temperature controlled transport</li>
                <li>✓ Expedited delivery for perishables</li>
                <li>✓ Central Valley farm pickup routes</li>
                <li>✓ Compliance with food safety standards</li>
              </ul>

              <Link
                href="/contact"
                className="mt-5 inline-flex w-fit rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium transition hover:bg-blue-700"
              >
                Get a Quote →
              </Link>
            </motion.div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 overflow-hidden rounded-2xl shadow-lg group"
          >
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="bg-[#2D1B69] p-6 md:p-8 text-white flex flex-col justify-center"
            >
              <span className="mb-3 w-fit rounded-full bg-white/20 px-3 py-1 text-xs">
                FTL Service
              </span>

              <h3 className="text-xl font-bold">Full Truckload (FTL)</h3>

              <p className="mt-3 text-sm text-white/80">
                Dedicated truck capacity for large shipments, maximizing
                efficiency with direct point to point delivery. No sharing, no
                stops your freight gets priority attention.
              </p>

              <ul className="mt-4 space-y-2 text-sm">
                <li>✓ Dedicated capacity for your load</li>
                <li>✓ No stops or freight mixing</li>
                <li>✓Fastest transit times available</li>
                <li>✓ Ideal for high volume shipments</li>
              </ul>

              <Link
                href="/contact"
                className="mt-5 inline-flex w-fit rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium transition hover:bg-blue-700"
              >
                Get a Quote →
              </Link>
            </motion.div>

            <Image
              src={img3}
              alt="service"
              className="h-[380px] w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
