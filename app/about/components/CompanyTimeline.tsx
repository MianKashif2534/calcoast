"use client";

export function CompanyTimeline() {
  const timeline = [
    {
      year: "2015",
      title: "Company Founded",
      desc: "Cal Coast Logistics established in Fresno, CA with FMCSA common authority.",
    },
    {
      year: "2017",
      title: "Fleet Expansion",
      desc: "Grew from initial trucks to a fleet of 15+ owned assets serving interstate routes.",
    },
    {
      year: "2019",
      title: "Produce Specialty",
      desc: "Added specialized fresh produce transport from California’s Central Valley.",
    },
    {
      year: "2021",
      title: "Nationwide Reach",
      desc: "Expanded coverage to major freight lanes across all 48 contiguous states.",
    },
    {
      year: "2024",
      title: "35+ Fleet Assets",
      desc: "Reached 35+ owned trucks with perfect 5.0 carrier rating from verified brokers.",
    },
  ];

  return (
    <section className="bg-[linear-gradient(270deg,#FFFFFF_0%,#3474F433_100%)]  py-15">
      <div className="mx-auto max-w-[855px] px-4">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-medium text-blue-500">Our Journey</p>
          <h2 className="mt-2 text-3xl font-semibold text-black">
            Company Timeline
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mt-12 flex flex-col gap-[43px]">
          {/* Vertical Line */}
          <div className="absolute left-[20px] top-0 h-full w-[2px] bg-blue-300"></div>

          {timeline.map((item, index) => (
            <div key={index} className="flex items-start gap-6">
              {/* Circle (Fixed size like Figma) */}
              <div className="relative z-10 flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white">
                {item.year}
              </div>

              {/* Card (Hug width behavior) */}
              <div className="flex-1 rounded-xl bg-[#031595] px-6 py-4 text-white shadow-sm">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-white/80">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
