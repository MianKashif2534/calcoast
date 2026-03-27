"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import serviceproduce1 from "@/app/assets/service-produce1.png";
import serviceproduce2 from "@/app/assets/service-produce2.png";
import frame749 from "@/app/assets/frame749.png";

const MotionLink = motion.create(Link);

export function FreightServices() {
  return (
    <section className="py-16 bg-[linear-gradient(360deg,#FFFFFF_0%,#3474F433_100%)] flex justify-center">
      <div className="max-w-6xl w-full px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-2 mb-10"
        >
          <p className="text-blue-500 font-medium">What We Haul</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Freight Services & Capabilities
          </h2>
          <p className="text-gray-600 text-sm">
            Authorized for interstate property transport. Reefer equipped fleet
            ready for your cargo.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-xl overflow-hidden mb-6 group"
        >
          <Image
            src={frame749}
            alt="General Freight"
            width={1260}
            height={343}
            className="w-full h-[343px] object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/40 flex items-end p-6">
            <div className="text-white max-w-md">
              <span className="text-white bg-[#031595]/30 px-3 py-1 rounded-full text-sm">
                Core Service
              </span>
              <h3 className="text-xl font-semibold mt-2">General Freight</h3>
              <p className="text-sm mt-1">
                Full truckload capacity for standard cargo with direct, reliable
                delivery across interstate routes.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row rounded-xl overflow-hidden bg-[#1E1442] group"
          >
            <div className="md:w-1/2 overflow-hidden">
              <Image
                src={serviceproduce1}
                alt="Refrigerated Food"
                width={600}
                height={290}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="md:w-1/2 p-6 flex flex-col justify-center text-white">
              <span className="text-xs bg-blue-500 px-3 py-1 rounded-full w-fit">
                Reefer
              </span>
              <h3 className="text-lg font-semibold mt-2">Refrigerated Food</h3>
              <p className="text-sm text-gray-200 mt-2">
                Temperature controlled reefer transport keeping perishable goods
                safe and fresh throughout the journey.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row rounded-xl overflow-hidden bg-[#1E1442] group"
          >
            <div className="md:w-1/2 overflow-hidden">
              <Image
                src={serviceproduce2}
                alt="FTL Truckload"
                width={600}
                height={290}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="md:w-1/2 p-6 flex flex-col justify-center text-white">
              <span className="text-xs bg-blue-500 px-3 py-1 rounded-full w-fit">
                FTL
              </span>
              <h3 className="text-lg font-semibold">Full Truckload (FTL)</h3>
              <p className="text-sm text-gray-200 mt-2">
                Dedicated truck capacity for large shipments, maximizing
                efficiency with direct point to point delivery.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <MotionLink
            href="/contact"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block rounded-md bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
          >
            Get a Freight Quote →
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
}
