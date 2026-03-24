"use client";

import Image from "next/image";
import img1 from "@/app/assets/frame749.png";
import img2 from "@/app/assets/service-produce1.png";
import img3 from "@/app/assets/service-produce2.png";

export function ServicesSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-medium text-blue-500">What We Haul</p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold">
            Freight Services & Capabilities
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-500 md:text-base">
            Authorized for interstate property transport. Reefer equipped fleet
            ready for your cargo.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 space-y-6">
          {/* Card 1 (Full Image with Overlay) */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={img1}
              alt="service"
              className="h-[400px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />

            <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-10 text-white max-w-xl">
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
                <li>✓ Dry van and flatbed options available </li>
                <li>✓ Direct point to point delivery</li>
                <li>✓ Real time tracking and updates</li>
                <li>✓ Flexible scheduling to meet your deadlines</li>
              </ul>

              <button className="mt-5 w-fit rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium hover:bg-blue-700">
                Get a Quote →
              </button>
            </div>
          </div>

          {/* Card 2 (Image Left, Content Right) */}
          <div className="grid md:grid-cols-2 overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={img2}
              alt="service"
              className="h-[380px] w-[600px] object-cover"
            />

            <div className="bg-[#2D1B69] p-6 md:p-8 text-white flex flex-col justify-center">
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

              <button className="mt-5 w-fit rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium hover:bg-blue-700">
                Get a Quote →
              </button>
            </div>
          </div>

          {/* Card 3 (Content Left, Image Right) */}
          <div className="grid md:grid-cols-2 overflow-hidden rounded-2xl shadow-lg">
            <div className="bg-[#2D1B69] p-6 md:p-8 text-white flex flex-col justify-center">
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
                <li>✓ Fastest transit times available</li>
                <li>✓ Ideal for high volume shipments</li>
              </ul>

              <button className="mt-5 w-fit rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium hover:bg-blue-700">
                Get a Quote →
              </button>
            </div>

            <Image
              src={img3}
              alt="service"
              className="h-[380px] w-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
