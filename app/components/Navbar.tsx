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

const navLinksLeft = navLinks.slice(0, 3);
const navLinksRight = navLinks.slice(3, 6);

function linkActive(pathname: string, href: string) {
  if (href === "/#reviews") return false;
  return pathname === href;
}

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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

  const renderNavLinks = (links: typeof navLinks) =>
    links.map(({ label, href }) => {
      const isActive = linkActive(pathname, href);
      const linkClass = scrolled
        ? isActive
          ? "bg-[#0055FF]/12 text-[#0055FF] shadow-sm"
          : "text-[#0055FF] hover:bg-[#0055FF]/10"
        : isActive
          ? "bg-white/80 text-[#0055FF] shadow-lg shadow-white/30"
          : "text-white hover:bg-white/10";
      return (
        <a
          key={href}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 sm:px-5 ${linkClass}`}
          href={href}
        >
          {label}
        </a>
      );
    });

  return (
    <header
      className={`fixed inset-x-0 z-[100] bg-transparent transition-[top] duration-[900ms] ease-[cubic-bezier(0.33,1,0.68,1)] ${
        scrolled ? "top-0" : "top-6"
      }`}
    >
      <div
        className={`mx-auto w-full transition-[max-width,padding] duration-[900ms] ease-[cubic-bezier(0.33,1,0.68,1)] ${
          scrolled
            ? "max-w-full p-0"
            : "max-w-6xl px-4 py-3 sm:px-6 lg:px-8"
        }`}
      >
        {/* One continuous blue bar: left links | logo | right links */}
        <nav
          className={`hidden w-full items-center gap-1 transition-[border-radius,padding,background-color,box-shadow] duration-[900ms] ease-[cubic-bezier(0.33,1,0.68,1)] md:flex ${
            scrolled
              ? "rounded-none bg-white p-2 shadow-md shadow-black/10"
              : "rounded-lg bg-[#0055FF] p-1 shadow-lg shadow-blue-500/30"
          }`}
          aria-label="Main"
        >
          <div className="flex min-h-10 flex-1 flex-wrap items-center justify-around gap-0">
            {renderNavLinks(navLinksLeft)}
          </div>
          <a
            href="/"
            className="flex shrink-0 items-center px-3 sm:px-4"
          >
            <Image
              src={logo}
              alt="Calcoast Logistics"
              height={40}
              width={180}
              className="h-10 w-auto"
              priority
            />
          </a>  
          <div className="flex min-h-10 flex-1 flex-wrap items-center justify-around gap-0">
            {renderNavLinks(navLinksRight)}
          </div>
        </nav>

        <div className="flex items-center justify-between gap-4 md:hidden">
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
          <div className="flex shrink-0 items-center justify-end gap-3">
            {/* <a
              href="/contact"
              className="inline-flex rounded-full bg-[#3474F4] px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-blue-500/40 hover:bg-[#285ee0] sm:px-4 sm:text-sm"
            >
              Quote →
            </a> */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-900"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">{menuOpen ? "Close menu" : "Open main menu"}</span>
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
                  <span className="block h-0.5 w-5 rounded bg-gray-900" />
                  <span className="block h-0.5 w-5 rounded bg-gray-900" />
                  <span className="block h-0.5 w-5 rounded bg-gray-900" />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
      {mounted && createPortal(mobileMenu, document.body)}
    </header>
  );
}
