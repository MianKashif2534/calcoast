"use client";

import { useState } from "react";

const freightTypes = [
  "Full Truckload",
  "Less Than Truckload (LTL)",
  "Fresh Produce",
  "General Freight",
  "Refrigerated",
  "Other",
];

export function QuoteFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Add server action or API call for quote submission
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmitting(false);
  }

  return (
    <section
      className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(52, 116, 244, 0.2) 100%), #f0f4f8",
      }}
    >
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-base font-medium text-[#3474F4] sm:text-lg">
            Get Started
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#1A1A1A] sm:text-4xl lg:text-[2.5rem]">
            Get a Freight Quote Today
          </h2>
          <p className="mt-3 text-base text-[#555555] sm:text-lg">
            Need reliable freight transportation? Contact our team for a fast
            and competitive quote.
          </p>
        </div>

        {/* Form container */}
        <div className="rounded-xl border-2 border-[#3474F4]/30 bg-white p-6 shadow-sm sm:p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-[#333333]"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="John Deo"
                  required
                  className="w-full rounded-lg border border-[#DDDDDD] px-4 py-3 text-[#1A1A1A] placeholder:text-[#AAAAAA] focus:border-[#3474F4] focus:outline-none focus:ring-2 focus:ring-[#3474F4]/20"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#333333]"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jenn@calcoast.com"
                  required
                  className="w-full rounded-lg border border-[#DDDDDD] px-4 py-3 text-[#1A1A1A] placeholder:text-[#AAAAAA] focus:border-[#3474F4] focus:outline-none focus:ring-2 focus:ring-[#3474F4]/20"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-[#333333]"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 000-0000"
                  className="w-full rounded-lg border border-[#DDDDDD] px-4 py-3 text-[#1A1A1A] placeholder:text-[#AAAAAA] focus:border-[#3474F4] focus:outline-none focus:ring-2 focus:ring-[#3474F4]/20"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="freightType"
                  className="block text-sm font-semibold text-[#333333]"
                >
                  Freight Type
                </label>

                <div className="relative">
                  <select
                    id="freightType"
                    name="freightType"
                    className="w-full rounded-lg border border-[#DDDDDD] 
                 px-4 py-3 pr-10 
                 text-[#1A1A1A] 
                 appearance-none 
                 focus:border-[#3474F4] 
                 focus:outline-none 
                 focus:ring-2 focus:ring-[#3474F4]/20
                 [&>option]:text-[#1A1A1A]
                 [&>option[value='']]:text-[#AAAAAA]"
                  >
                    <option value="">Select type...</option>
                    {freightTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>

                  {/* Custom Arrow */}
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 9l6 6 6-6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="origin"
                  className="block text-sm font-semibold text-[#333333]"
                >
                  Origin
                </label>
                <input
                  id="origin"
                  name="origin"
                  type="text"
                  placeholder="Fresno, CA"
                  className="w-full rounded-lg border border-[#DDDDDD] px-4 py-3 text-[#1A1A1A] placeholder:text-[#AAAAAA] focus:border-[#3474F4] focus:outline-none focus:ring-2 focus:ring-[#3474F4]/20"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="destination"
                  className="block text-sm font-semibold text-[#333333]"
                >
                  Destination
                </label>
                <input
                  id="destination"
                  name="destination"
                  type="text"
                  placeholder="Chicago, IL"
                  className="w-full rounded-lg border border-[#DDDDDD] px-4 py-3 text-[#1A1A1A] placeholder:text-[#AAAAAA] focus:border-[#3474F4] focus:outline-none focus:ring-2 focus:ring-[#3474F4]/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="details"
                className="block text-sm font-semibold text-[#333333]"
              >
                Additional Details
              </label>
              <textarea
                id="details"
                name="details"
                rows={4}
                placeholder="Tell us about your shipment..."
                className="w-full resize-y rounded-lg border border-[#DDDDDD] px-4 py-3 text-[#1A1A1A] placeholder:text-[#AAAAAA] focus:border-[#3474F4] focus:outline-none focus:ring-2 focus:ring-[#3474F4]/20"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-[#3474F4] px-6 py-4 text-base font-semibold text-white shadow-md transition-colors hover:bg-[#285ee0] disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Request a Quote"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
