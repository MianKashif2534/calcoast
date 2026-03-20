"use client";

import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import truck from "@/app/assets/truck.png";

export function CoverageSection() {
  const cities = [
    "Little Rock, AR",
    "Cleveland, OH",
    "Tulsa, OK",
    "Charlotte, NC",
    "New Orleans, LA",
    "Chicago, IL",
    "Las Vegas, NV",
    "Kansas City, MO",
    "Pittsburgh, PA",
  ];

  return (
    <section className="relative py-20 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src={truck} alt="bg" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <p className="text-blue-400 text-sm font-medium">Service Coverage</p>

        <h2 className="text-3xl md:text-4xl font-semibold mt-2 leading-snug">
          Interstate Routes & <br /> Nationwide Coverage
        </h2>

        <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm">
          Serving the most popular freight lanes across the country with
          reliable, on time delivery.
        </p>

        {/* Cities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {cities.map((city, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 
              bg-white text-blue-600 
              px-3 py-2 rounded-lg 
              text-xs md:text-sm font-medium 
              shadow hover:scale-105 transition-all duration-300
              h-[48px] w-full text-center"
            >
              <FaMapMarkerAlt className="shrink-0 text-blue-600" />

              {/* Text */}
              <span className="leading-tight">{city}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="mt-8 bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-6 py-3 rounded-lg text-sm font-medium">
          Get a Quote for Your Route →
        </button>
      </div>
    </section>
  );
}
