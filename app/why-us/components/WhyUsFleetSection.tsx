"use client";

import Image from "next/image";

import leftImg from "@/app/assets/left.png";
import rightImg from "@/app/assets/right.png";

export function WhyUsFleetSection() {
  return (
    <section
      className="px-6 py-16 sm:px-8 sm:py-20 lg:px-12"
      style={{
        background: "linear-gradient(180deg, #E6EEFF 0%, #FFFFFF 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Image */}
          <div
            className="relative order-2 overflow-hidden rounded-3xl lg:order-1"
            style={{
              animation: "fade-in-up 0.6s ease-out forwards",
              animationDelay: "0.2s",
            }}
          >
            <Image
              src={leftImg}
              alt="Fleet trucks"
              width={600}
              height={450}
              className="aspect-[4/3] w-full object-cover shadow-sm transition-transform duration-300 hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text + Right Image */}
          <div className="order-1 flex flex-col gap-6 lg:order-2 text-center lg:text-left">
            {/* Text */}
            <div
              style={{
                animation: "fade-in-up 0.6s ease-out forwards",
                animationDelay: "0s",
              }}
            >
              <p className="text-base font-medium text-[#0055FF] sm:text-lg">
                Our Fleet
              </p>

              <h2 className="mt-2 text-2xl font-bold text-black sm:text-3xl lg:text-4xl">
                Quality Equipment You Can Rely On
              </h2>

              <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-base leading-relaxed text-[#555555] sm:text-lg">
                Our fleet of 35+ owned Peterbilt and Kenworth trucks is
                maintained to the highest standards. Every vehicle undergoes
                regular inspections and preventive maintenance to ensure maximum
                uptime and safety.
              </p>
            </div>

            {/* Right Image */}
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{
                animation: "fade-in-up 0.6s ease-out forwards",
                animationDelay: "0.1s",
              }}
            >
              <Image
                src={rightImg}
                alt="Truck inspection"
                width={600}
                height={350}
                className="aspect-[2/1] w-full object-cover shadow-sm transition-transform duration-300 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
