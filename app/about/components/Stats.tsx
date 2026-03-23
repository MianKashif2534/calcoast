"use client";

import { useState, useEffect } from "react";
import { FiTrendingUp } from "react-icons/fi";
import { FaTruck, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";

export function Stats() {
  const [years, setYears] = useState(0);
  const [fleet, setFleet] = useState(0);
  const [miles, setMiles] = useState(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setYears((prev) => (prev < 10 ? prev + 1 : 10));
      setFleet((prev) => (prev < 35 ? prev + 1 : 35));
      setMiles((prev) => (prev < 14 ? prev + 1 : 14));
      setRating((prev) => (prev < 5 ? prev + 0.1 : 5));
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-[#F3F6FB] to-[#EAF1FF]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-[16px] text-blue-500 font-medium tracking-wide">
            By The Numbers
          </h2>

          <p className="text-[40px] font-semibold text-black mt-1">
            Cal Coast at a Glance
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {/* Years */}
          <div className="w-[240px] h-[220px] bg-[#1D4ED8] rounded-xl border border-white/10 flex flex-col items-center justify-center text-center p-6 shadow-lg hover:scale-105 transition duration-300">
            <FiTrendingUp className="text-white text-3xl mb-3" />

            <div className="text-[42px] font-bold text-white leading-none">
              {years}+
            </div>

            <p className="text-[18px] text-white mt-2 font-medium">
              Years Active
            </p>

            <p className="text-[12px] text-white/70">Since Nov 2015</p>
          </div>

          {/* Fleet */}
          <div className="w-[240px] h-[220px] bg-[#1D4ED8] rounded-xl border border-white/10 flex flex-col items-center justify-center text-center p-6 shadow-lg hover:scale-105 transition duration-300">
            <FaTruck className="text-white text-3xl mb-3" />

            <div className="text-[42px] font-bold text-white leading-none">
              {fleet}+
            </div>

            <p className="text-[18px] text-white mt-2 font-medium">
              Fleet Assets
            </p>

            <p className="text-[12px] text-white/70">Owned Fleet</p>
          </div>

          {/* Miles */}
          <div className="w-[240px] h-[220px] bg-[#1D4ED8] rounded-xl border border-white/10 flex flex-col items-center justify-center text-center p-6 shadow-lg hover:scale-105 transition duration-300">
            <FaMapMarkerAlt className="text-white text-3xl mb-3" />

            <div className="text-[42px] font-bold text-white leading-none">
              {miles / 10}M+
            </div>

            <p className="text-[18px] text-white mt-2 font-medium">
              Miles Covered
            </p>

            <p className="text-[12px] text-white/70">Annual Mileage</p>
          </div>

          {/* Rating */}
          <div className="w-[240px] h-[220px] bg-[#1D4ED8] rounded-xl border border-white/10 flex flex-col items-center justify-center text-center p-6 shadow-lg hover:scale-105 transition duration-300">
            <IoIosStarOutline className="text-white text-3xl mb-3" />

            <div className="text-[42px] font-bold text-white leading-none">
              {rating.toFixed(1)}
            </div>

            <p className="text-[18px] text-white mt-2 font-medium">
              Carrier Rating
            </p>

            <p className="text-[12px] text-white/70">Verified Broker Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
