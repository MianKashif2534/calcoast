"use client";

import Link from "next/link";

export function WhyUsCtaSection() {
  return (
    <section
      className="flex flex-col items-center justify-center px-6 py-16 sm:px-8 sm:py-20 lg:px-12"
      style={{
        background: "linear-gradient(90deg, rgba(245, 247, 255, 1) 0%, rgba(230, 235, 255, 1) 100%)",
      }}
    >
      <div
        className="flex max-w-2xl flex-col items-center text-center"
        style={{
          animation: "fade-in-up 0.6s ease-out forwards",
        }}
      >
        <h2 className="text-2xl font-bold text-[#1A1A1A] sm:text-3xl lg:text-4xl">
          Ready to Experience the Difference?
        </h2>
        <p className="mt-4 text-base font-medium text-[#555555] sm:text-lg">
          Partner with a carrier that puts your freight first.
        </p>
        <Link
          href="/contact"
          className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00138E] to-[#3474F4] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          Get Started Today
          <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
