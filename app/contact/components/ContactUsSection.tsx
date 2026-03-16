"use client";

const contactCards = [
  {
    title: "Call Us",
    description: "Speak with our team directly",
    detail: "(559) 481 6441",
    href: "tel:+15594816441",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    dark: true,
  },
  {
    title: "Email Us",
    description: "We'll respond within 24 hours",
    detail: "ops@calcoastlogistics.com",
    href: "mailto:ops@calcoastlogistics.com",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    dark: false,
  },
  {
    title: "Visit Us",
    description: "View on Google Maps",
    detail: "Open in Maps",
    href: "https://maps.google.com/?q=2205+E+Annadale+Ave,+Fresno,+CA+93706",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    dark: false,
  },
];

export function ContactUsSection() {
  return (
    <section
      className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      style={{
        background: "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(52, 116, 244, 0.2) 100%), #f0f4f8",
      }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Contact cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`flex flex-col rounded-2xl p-6 transition-transform hover:scale-[1.02] ${
                card.dark
                  ? "bg-[#020840] text-white"
                  : "border-2 border-[#3474F4] bg-white text-black"
              }`}
            >
              <span
                className={`mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                  card.dark ? "bg-white/20 text-white" : "bg-gray-200 text-[#020840]"
                }`}
              >
                {card.icon}
              </span>
              <h3 className="text-lg font-bold sm:text-xl">{card.title}</h3>
              <p className={`mt-1 text-sm ${card.dark ? "text-white/90" : "text-gray-600"}`}>
                {card.description}
              </p>
              <p className="mt-3 text-base font-bold sm:text-lg">{card.detail}</p>
            </a>
          ))}
        </div>

        {/* Informational banner */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-2xl rounded-2xl border-2 border-[#3474F4] bg-white px-6 py-4 text-center">
            <p className="text-base font-medium text-[#3474F4] sm:text-lg">
              Available 24/7 : We&apos;re here to support your logistics needs around the clock.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
