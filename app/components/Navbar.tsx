"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { usePathname } from "next/navigation";

import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const mobileMenu = (
    <>
      <div
        id="mobile-menu"
        className={`fixed right-0 top-0 z-[9999] mt-4 h-auto w-[85%] max-w-sm rounded-2xl bg-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="relative flex flex-col gap-2 px-6 py-6 pt-14">
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="absolute right-4 top-2 flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-900 transition-colors hover:bg-gray-100 md:hidden"
            aria-label="Close menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col gap-2">
            <a
              className="rounded-full bg-[#0055FF] px-4 py-2 text-sm font-medium text-white"
              href="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              className="rounded-full bg-[#0055FF] px-4 py-2 text-sm font-medium text-white"
              href="/about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              className="rounded-full bg-[#0055FF] px-4 py-2 text-sm font-medium text-white"
              href="/services"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
            <a
              className="rounded-full bg-[#0055FF] px-4 py-2 text-sm font-medium text-white"
              href="/why-us"
              onClick={() => setMenuOpen(false)}
            >
              Why Us
            </a>
            <a
              className="rounded-full bg-[#0055FF] px-4 py-2 text-sm font-medium text-white"
              href="/#reviews"
              onClick={() => setMenuOpen(false)}
            >
              Reviews
            </a>
            <a
              className="rounded-full bg-[#0055FF] px-4 py-2 text-sm font-medium text-white"
              href="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="/contact"
              className="mt-1 rounded-full bg-[#3474F4] px-4 py-2 text-sm font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              Request a Quote →
            </a>
          </nav>
        </div>
      </div>
      <div
        className={`fixed inset-0 z-[9998] bg-black/30 backdrop-blur-md transition-opacity duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
          menuOpen ? "opacity-100" : "opacity-0"
        } ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />
    </>
  );

  return (
    <header className="relative z-[60] border-b border-gray-200 bg-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="flex shrink-0 items-center">
          <Image
            src={logo}
            alt="Calcoast Logistics"
            height={40}
            width={180}
            className="h-10 w-auto"
            priority
          />
        </a>
        <nav className="hidden flex-1 justify-center md:flex">
          <div className="flex items-center gap-1 rounded-full bg-[#0055FF] p-1 shadow-lg shadow-blue-500/30">
            {navLinks.map(({ label, href }) => {
              const isActive =
                href === "/#reviews"
                  ? pathname === "/"
                  : pathname === href;
              return (
                <a
                  key={href}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-white/80 text-[#0055FF] shadow-lg shadow-white/30"
                      : "text-white hover:bg-white/10"
                  }`}
                  href={href}
                >
                  {label}
                </a>
              );
            })}
          </div>
        </nav>
        <div className="flex shrink-0 items-center justify-end gap-3">
          <a
            href="/contact"
            className="hidden rounded-full bg-[#3474F4] px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/40 hover:bg-[#285ee0] md:inline-flex"
          >
            Request a Quote →
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 bg-white text-gray-900 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">
              {menuOpen ? "Close menu" : "Open main menu"}
            </span>

            {menuOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <div className="flex flex-col gap-[3px]">
                <span className="block h-[2px] w-5 bg-gray-900 rounded"></span>
                <span className="block h-[2px] w-5 bg-gray-900 rounded"></span>
                <span className="block h-[2px] w-5 bg-gray-900 rounded"></span>
              </div>
            )}
          </button>
        </div>
      </div>
      {mounted && createPortal(mobileMenu, document.body)}
    </header>
  );
}
