"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef, useLayoutEffect } from "react";

interface Strength {
  title: string;
  description: string;
  stat: string;
  icon: React.ReactNode;
}

const strengths: Strength[] = [
  {
    title: "On Time Delivery",
    description:
      "Consistent on time pickup and delivery across all routes, verified by real broker reviews.",
    stat: "100% Timeliness Score",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Professional Drivers",
    description:
      "Experienced operators with strong safety records and excellent communication on every load.",
    stat: "10/10 Driver Rating",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
  },
  {
    title: "Owned Fleet",
    description:
      "35+ assets, fully owned, regularly maintained, and road ready at all times.",
    stat: "35+ Fleet Assets",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.652 2.652 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m-1.745 1.437l-.165.132"
        />
      </svg>
    ),
  },
  {
    title: "Fully Insured & Compliant",
    description:
      "BIPD coverage through Third Coast Insurance. FMCSA common authority active since 2015.",
    stat: "10yr Active Authority",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: "Dedicated Support",
    description:
      "Strong dispatcher communication with consistent tracking, rated 10/10 by verified brokers.",
    stat: "24/7 Availability",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v10.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 14.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
  },
  {
    title: "Proven Track Record",
    description:
      "Over 1.4 million miles covered with a perfect 5.0 carrier rating from verified broker reviews.",
    stat: "5.0 Carrier Rating",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18l9-11 4.948 4.948 6.068-4.02m.164 0l.615-.363m0 0l.615-.363m-.615.363l-.225.225m-.615-.363l.615.363M2.25 18l.615-.363m0 0l.615.363"
        />
      </svg>
    ),
  },
];

export function WhyUsStrengthsSection() {
  const [typedHeading, setTypedHeading] = useState("");
  const [hasTyped, setHasTyped] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const fullHeading = "The Cal Coast Advantage";

  const [typedStats, setTypedStats] = useState<Record<number, string>>({});
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const observers = useRef<IntersectionObserver[]>([]);
  const animatedRef = useRef<Record<number, boolean>>({});

  // Heading typewriter
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTyped) {
            let i = 0;
            const interval = setInterval(() => {
              setTypedHeading(fullHeading.slice(0, i + 1));
              i++;
              if (i === fullHeading.length) {
                clearInterval(interval);
                setHasTyped(true);
              }
            }, 80);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );

    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, [hasTyped]);

  // Setup per-card typewriter observers after refs are attached
  useLayoutEffect(() => {
    // Clean up previous observers
    observers.current.forEach((obs) => obs.disconnect());
    observers.current = [];

    cardRefs.current.forEach((card, idx) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !animatedRef.current[idx]) {
              animatedRef.current[idx] = true;
              const fullStat = strengths[idx].stat;
              let i = 0;
              const interval = setInterval(() => {
                setTypedStats((prev) => ({
                  ...prev,
                  [idx]: fullStat.slice(0, i + 1),
                }));
                i++;
                if (i === fullStat.length) clearInterval(interval);
              }, 50);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.5 },
      );

      observer.observe(card);
      observers.current.push(observer);
    });

    return () => {
      observers.current.forEach((obs) => obs.disconnect());
      observers.current = [];
    };
  }, []); // runs once after first render

  return (
    <section className="bg-[#E6EEFF] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-base font-medium text-[#3B82F6] sm:text-lg">
            Our Strengths
          </p>
          <h2
            ref={headingRef}
            className="mt-2 text-3xl font-bold text-black sm:text-4xl lg:text-[2.5rem]"
          >
            {typedHeading || (hasTyped ? fullHeading : "")}
            {!hasTyped && typedHeading.length < fullHeading.length && (
              <span className="animate-pulse border-r-2 border-black ml-1">
                |
              </span>
            )}
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item, index) => (
            <motion.div
              key={item.title}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col rounded-2xl bg-[#00138E] p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.2 }}
                className="mb-4 text-white"
              >
                {item.icon}
              </motion.div>

              <h3 className="text-lg font-bold text-white sm:text-xl">
                {item.title}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/90 sm:text-base">
                {item.description}
              </p>

              <div className="mt-4 text-base font-bold text-white sm:text-lg">
                {typedStats[index] ? (
                  typedStats[index]
                ) : (
                  <span className="invisible">{item.stat}</span>
                )}
                {!typedStats[index] && (
                  <span className="animate-pulse border-r-2 border-white ml-1">
                    |
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
