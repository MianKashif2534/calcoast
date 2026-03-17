"use client";

export function QuoteSection() {
  return (
    <section className="py-20 bg-[#F3F6FB]">
      <div className="max-w-3xl mx-auto px-4 text-center">
        {/* Heading */}
        <p className="text-blue-500 text-sm font-medium">Get Started</p>

        <h2 className="text-3xl md:text-4xl font-semibold mt-2">
          Get a Freight Quote Today
        </h2>

        <p className="text-gray-600 mt-3 text-sm max-w-xl mx-auto">
          Need reliable freight transportation? Contact our team for a fast and
          competitive quote.
        </p>

        {/* Form Card */}
        <div className="mt-10 bg-white border border-blue-400 rounded-xl p-6 text-left shadow-sm">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="John Deo"
                className="mt-1 w-full border border-blue-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="jenn@calcoast.com"
                className="mt-1 w-full border border-blue-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium">Phone</label>
              <input
                type="text"
                placeholder="(555) 000-0000"
                className="mt-1 w-full border border-blue-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Freight Type */}
            <div>
              <label className="text-sm font-medium">Freight Type</label>
              <select className="mt-1 w-full border border-blue-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>Select type...</option>
                <option>Dry Van</option>
                <option>Flatbed</option>
                <option>Reefer</option>
              </select>
            </div>

            {/* Origin */}
            <div>
              <label className="text-sm font-medium">Origin</label>
              <input
                type="text"
                placeholder="Fresno, CA"
                className="mt-1 w-full border border-blue-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Destination */}
            <div>
              <label className="text-sm font-medium">Destination</label>
              <input
                type="text"
                placeholder="Chicago, IL"
                className="mt-1 w-full border border-blue-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Additional Details */}
            <div className="md:col-span-2">
              <label className="text-sm font-medium">Additional Details</label>
              <textarea
                rows={4}
                placeholder="Tell us about your shipment..."
                className="mt-1 w-full border border-blue-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            {/* Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 rounded-md text-sm font-medium hover:opacity-90 transition"
              >
                Request a Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
