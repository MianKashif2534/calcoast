import Image from "next/image";

import mainImage from "@/app/assets/frame779.png";
import overlayImage from "@/app/assets/frame781.png";
import mobileImage from "@/app/assets/frame782.png";

export default function HomeAboutSection() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-[1260px] mx-auto px-4 lg:px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Images */}
        <div>
          {/* Mobile layout */}
          <div className="lg:hidden space-y-4">
            <div className="bg-black text-white px-4 py-3 rounded-lg">
              <p className="text-sm font-semibold">
                35+ Vehicles <br /> Owned Fleet
              </p>
            </div>

            <Image
              src={mobileImage}
              alt="Truck"
              className="w-full rounded-xl border-4 "
            />

            <div className="bg-indigo-700 text-white px-4 py-3 rounded-lg">
              <p className="text-sm font-semibold">
                Since 2015 <br /> FMCSA Authorized
              </p>
            </div>

            <Image src={mainImage} alt="Fleet" className="w-full rounded-xl" />
          </div>

          {/* Desktop layout */}
          <div className="hidden lg:block relative">
            <Image
              src={mainImage}
              alt="Fleet"
              width={640}
              height={483}
              className="rounded-xl"
            />

            <div className="absolute top-16 left-16">
              <Image
                src={overlayImage}
                alt="Truck"
                width={640}
                height={483}
                className="rounded-xl shadow-xl border-[6px]"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center lg:text-left space-y-4">
          <p className="text-about-cal text-2xl font-semibold">
            About Cal Coast Logistics
          </p>

          <h2 className="text-4xl font-bold leading-tight">
            Fresno's Trusted <br />
            <span className="text-freight">Freight Partner</span>
          </h2>

          <p className="text-text-about text-lg leading-relaxed">
            Cal Coast Logistics is an active interstate freight carrier based
            out of Fresno, California. We specialize in general freight, fresh
            produce, and full truckload transport with a proven track record of
            reliability and on-time performance.
          </p>

          <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 lg:px-20 py-2 rounded-lg font-semibold hover:opacity-90 transition">
            Explore Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
