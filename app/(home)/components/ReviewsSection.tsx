"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import reviewImg from "@/app/assets/reviewImg.png";

export function ReviewsSection() {
  return (
    <section className="py-16 bg-[#F3F6FB]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-500 text-sm font-medium">Verified Reviews</p>
          <h2 className="text-[32px] md:text-[36px] font-semibold text-black mt-1">
            What Brokers Say
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Left Image */}
          <div className="relative h-[250px] md:h-[320px] rounded-2xl overflow-hidden">
            <Image
              src={reviewImg}
              alt="review"
              fill
              className="object-cover"
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
              <div className="flex gap-1 text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-white text-lg font-semibold">
                5.0 / 5.0 Rating
              </p>

              <p className="text-white/80 text-sm">Verified Broker Reviews</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="bg-[#0C0E74] text-white p-6 rounded-2xl shadow-lg">
            {/* Top Tags */}
            <div className="flex flex-wrap gap-3 mb-5">
              <span className="tag">10/10 Timeliness</span>
              <span className="tag">10/10 Equipment</span>
              <span className="tag">10/10 Communication</span>
            </div>

            {/* Review Text */}
            <p className="text-[15px] leading-relaxed text-white/90 mb-5">
              "Only ran a few loads for us in Nov ’23, but they were great.
              Dedicated to the loads, awesome communication! We look forward to
              working with them in the future!!"
            </p>

            {/* Small Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="small-tag">On Time Pickup</span>
              <span className="small-tag">On Time Delivery</span>
              <span className="small-tag">Consistent Tracking</span>
              <span className="small-tag">Strong Dispatcher</span>
              <span className="small-tag">Strong Driver Communication</span>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center border-t border-white/20 pt-4">
              <div>
                <p className="font-semibold">Verified Broker</p>
                <p className="text-sm text-white/70">Oregon · February 2024</p>
              </div>

              <div className="flex items-center gap-1 text-yellow-400">
                <FaStar />
                <span className="text-white font-medium">5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
