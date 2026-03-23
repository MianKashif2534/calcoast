"use client";

import { FaShieldAlt, FaBullseye } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";

export function CoreValuesSection() {
  const values = [
    {
      icon: <FaShieldAlt />,
      title: "Safety",
      desc: "Every load, every mile safety is non negotiable. Our drivers and equipment meet the highest standards.",
    },
    {
      icon: <FiTarget />,
      title: "Reliability",
      desc: "On time, every time. We build our reputation on consistent, dependable freight delivery.",
    },
    {
      icon: <FaBullseye />,
      title: "Excellence",
      desc: "From communication to execution, we strive for excellence in every aspect of our operations.",
    },
  ];

  return (
    <section className="bg-[#F3F6FB] py-16">
      <div className="mx-auto max-w-6xl px-4 text-center">
        {/* Heading */}
        <p className="text-sm font-medium text-blue-500">Our Foundation</p>

        <h2 className="mt-2 text-3xl font-semibold text-black">Core Values</h2>

        {/* Cards */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {values.map((item, index) => (
            <div
              key={index}
              className="flex w-full max-w-[320px] flex-col items-center gap-2 rounded-2xl bg-[#031595] px-[30px] py-[70px] text-center text-white shadow transition hover:scale-105"
            >
              {/* Icon */}
              <div className="text-3xl">{item.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold">{item.title}</h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-white/80">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
