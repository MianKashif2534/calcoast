import Image from "next/image";

import frame779 from "@/app/assets/frame779.png";
import frame781 from "@/app/assets/frame781.png";

export default function HomeAboutSection() {
  return (
    <section className="bg-white from-slate-700 to-slate-500 py-15">
      <div className="max-w-[1260px] min-h-[533px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <Image
            src={frame779}
            alt="Truck Fleet"
            width={640}
            height={483.38}
            className="rounded-xl object-cover"
          />

          <div className="absolute -bottom-8  border-yellow-400 rounded-lg overflow-hidden shadow-xl">
            <Image
              src={frame781}
              alt="Truck Road"
              width={640}
              height={483.38}
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-1">
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

          <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-20 py-2 rounded-lg font-semibold hover:opacity-90 transition mt-4">
            Explore Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
