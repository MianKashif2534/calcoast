import Image from "next/image";

import frame779 from "@/app/assets/frame779.png";
import frame781 from "@/app/assets/frame781.png";
import frame782 from "@/app/assets/frame782.png"; // mobile image

export default function HomeAboutSection() {
  return (
    <section className="bg-white py-15">
      <div className="max-w-[1260px] min-h-[533px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative">
          <Image
            src={frame779}
            alt="Truck Fleet"
            width={640}
            height={483.38}
            className="rounded-xl object-cover"
          />

          {/* ✅ Desktop Image */}
          <div className="hidden lg:block absolute -bottom-8">
            <Image
              src={frame781}
              alt="Truck Road Desktop"
              width={640}
              height={483.38}
              className="rounded-lg shadow-xl object-cover"
            />
          </div>

          {/* ✅ Mobile Image */}
          <div className="block lg:hidden mt-4">
            <Image
              src={frame782}
              alt="Truck Road Mobile"
              width={640}
              height={483.38}
              className="rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="space-y-1 text-center lg:text-left">
          <p className="text-about-cal font-semibold text-2xl">
            About Cal Coast Logistics
          </p>

          <h2 className="text-4xl font-bold text-black leading-tight">
            Fresno's Trusted <br />
            <span className="text-freight">Freight Partner</span>
          </h2>

          <p className="text-text-about text-lg leading-relaxed font-normal mt-4">
            Cal Coast Logistics is an active interstate freight carrier based
            out of Fresno, California. We specialize in general freight, fresh
            produce, and full truckload transport with a proven track record of
            reliability and on time performance.
          </p>

          <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 lg:px-20 py-2 rounded-lg font-semibold hover:opacity-90 transition mt-4 whitespace-nowrap mx-auto lg:mx-0">
            Explore Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
