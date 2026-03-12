import Image from "next/image";

import heroBg from "@/app/assets/HeroBg.png";
import heroRightImage from "@/app/assets/heroRightImage.png";

const features = [
  "On Time Delivery",
  "35+ Assets",
  "Interstate Authority",
];

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
      <rect width="20" height="20" rx="4" fill="#3474F4" />
      <path d="M5 10L8.5 13.5L15 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative z-0 min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-slate-900/70 to-black/90" />
      </div>
      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center gap-8 px-4 py-16 lg:flex-row lg:items-center lg:gap-12 lg:px-8 lg:py-24">
        <div className="flex flex-1 flex-col items-start gap-6 text-left lg:max-w-xl">
          <p className="text-lg font-medium text-[#3474F4]">Fresno, California Since 2015</p>
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
            Reliable Freight Solutions Across California & Beyond
          </h1>
          <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
            Cal Coast Logistics delivers dependable cargo and freight transportation. Full Truckload and Fresh Produce services with on time performance you can trust.
          </p>
          <div className="flex flex-wrap gap-6 sm:gap-8">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <CheckIcon />
                <span className="text-sm font-medium text-white sm:text-base">{feature}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#3474F4] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#285ee0]"
            >
              Request a Quote
              <span aria-hidden>→</span>
            </a>
            <a
              href="tel:+15594816441"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-transparent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              <PhoneIcon />
              (559) 481 6441
            </a>
          </div>
        </div>
        <div className="flex w-full flex-1 justify-center lg:max-w-lg">
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={heroRightImage}
              alt="Cal Coast Logistics truck on highway"
              width={600}
              height={400}
              className="aspect-[3/2] w-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4 rounded-lg bg-black/70 px-3 py-2 backdrop-blur-sm">
              <p className="text-xs font-medium text-white">FMCSA Active</p>
              <p className="text-xs font-medium text-white">Since Nov 2015</p>
            </div>
            <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-2 backdrop-blur-sm">
              <span className="text-yellow-400">★</span>
              <span className="text-sm font-semibold text-white">5.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
