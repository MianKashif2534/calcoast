import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "/contact" },
];

const contactItems = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    text: "2205 E Annadale Ave, Fresno, CA 93706",
    href: "https://maps.google.com/?q=2205+E+Annadale+Ave,+Fresno,+CA+93706",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    text: "(559) 481 6441",
    href: "tel:+15594816441",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    text: "jenn@calcoastlogistics.com",
    href: "mailto:jenn@calcoastlogistics.com",
  },
];

export function Footer() {
  return (
    <footer className="bg-[#020840] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="flex h-14 w-48 items-center justify-center rounded-full bg-white px-4 py-2">
                <Image
                  src={logo}
                  alt="Cal Coast Logistics"
                  height={36}
                  width={160}
                  className="h-9 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-white/95">
              Active interstate freight carrier specializing in general freight, fresh produce, and full truckload transport. Serving nationwide from Fresno, California.
            </p>
            <p className="text-xs text-white/70">
              FMCSA Common Authority · Since November 2015
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/95 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white">Contact Info</h3>
            <div className="flex flex-col gap-3">
              {contactItems.map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-3 text-sm text-white/95 transition-colors hover:text-white"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#020840]">
                    {item.icon}
                  </span>
                  <span className="pt-0.5">{item.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/20">
        <div className="mx-auto max-w-6xl px-4 py-5 text-center text-sm text-white/80 sm:px-6 lg:px-8">
          © 2026 Cal Coast Logistics. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
