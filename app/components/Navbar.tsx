"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { usePathname } from "next/navigation";

import logo from "../assets/logo.png";
import { useScrollState } from "./ScrollContext";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "Driver", href: "https://intelliapp.driverapponline.com/c/calcoastlogistics " },
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
  const [activeTouch, setActiveTouch] = useState<string | null>(null);
  const { scrolled, setScrolled } = useScrollState();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🔥 DESKTOP LINKS
  const renderNavLinks = (links: typeof navLinks) =>
    links.map(({ label, href }) => {
      const isActive = linkActive(pathname, href);

      return (
        <a
          key={href}
          href={href}
          className="relative group px-4 py-2 rounded-full overflow-hidden"
        >
          {/* BG */}
          <span
            className={`absolute inset-0 rounded-full transition duration-300 ${
              isActive
                ? "bg-black/10 md:bg-white/20"
                : "bg-black/5 group-hover:bg-black/10 md:bg-white/10 md:group-hover:bg-white/20"
            }`}
          ></span>

          {/* TEXT */}
          <span className="relative block h-5 overflow-hidden">
            <span
              className={`block transition-all duration-300 ${
                scrolled ? "text-[#0055FF]" : "text-white"
              } ${!isActive && "group-hover:-translate-y-5"}`}
            >
              {label}
            </span>

            {!isActive && (
              <span
                className={`absolute left-0 top-0 block translate-y-5 transition-all duration-300 ${
                  scrolled ? "text-[#0055FF]" : "text-white"
                } group-hover:translate-y-0`}
              >
                {label}
              </span>
            )}
          </span>

          {/* LINE */}
          <span
            className={`absolute top-0 left-0 w-full h-[2px] transition-transform duration-300 origin-left ${
              scrolled ? "bg-[#0055FF]" : "bg-white"
            } ${
              isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            }`}
          ></span>
        </a>
      );
    });

  return (
    <header
      className={`fixed inset-x-0 z-[100] transition-all duration-500 ${
        scrolled ? "top-0" : "top-6"
      }`}
    >
      <div
        className={`mx-auto w-full ${
          scrolled ? "max-w-full p-0" : "max-w-6xl px-4 py-3"
        }`}
      >
        {/* DESKTOP */}
        <nav
          className={`hidden md:flex items-center w-full ${
            scrolled ? "bg-white p-2 shadow-md" : "bg-[#0055FF] p-1 rounded-lg"
          }`}
        >
          <div className="flex flex-1 justify-around">
            {renderNavLinks(navLinksLeft)}
          </div>

          <a href="/" className="px-4">
            <Image
              src={logo}
              alt="logo"
              height={40}
              width={160}
              style={{
                filter: !scrolled ? "brightness(0) invert(1)" : "none",
              }}
            />
          </a>

          <div className="flex flex-1 justify-around">
            {renderNavLinks(navLinksRight)}
          </div>
        </nav>

        {/* MOBILE NAV */}
        <div className="md:hidden bg-white shadow-sm px-4 py-2 fixed top-0 left-0 right-0 z-[100]">
          <div className="flex items-center justify-between">
            <Image src={logo} alt="logo" height={40} width={140} />

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="h-8 w-8 flex items-center justify-center border rounded-full"
            >
              ☰
            </button>
          </div>
        </div>

        {/* 🔥 MOBILE MENU */}
        <div
          className={`fixed inset-0 z-[9999] md:hidden flex flex-col items-center justify-center gap-6 transition-all duration-500 ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{ background: "#ffffff" }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-black text-2xl"
          >
            ✕
          </button>

          {navLinks.map((item) => {
            const isActive = linkActive(pathname, item.href);
            const isTouch = activeTouch === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                onTouchStart={() => setActiveTouch(item.href)}
                onTouchEnd={() => setActiveTouch(null)}
                className="relative group px-6 py-3 rounded-full overflow-hidden transition-all duration-200 active:scale-95"
              >
                {/* BG */}
                <span
                  className={`absolute inset-0 rounded-full transition duration-300 ${
                    isActive || isTouch
                      ? "bg-black/10"
                      : "bg-black/5 group-hover:bg-black/10"
                  }`}
                ></span>

                {/* TEXT */}
                <span className="relative block h-7 overflow-hidden text-2xl font-bold text-black">
                  <span
                    className={`block transition-all duration-300 ${
                      !isActive && "group-hover:-translate-y-7"
                    } ${isTouch && "-translate-y-7"}`}
                  >
                    {item.label}
                  </span>

                  {!isActive && (
                    <span
                      className={`absolute left-0 top-0 translate-y-7 transition-all duration-300 group-hover:translate-y-0 ${
                        isTouch && "translate-y-0"
                      }`}
                    >
                      {item.label}
                    </span>
                  )}
                </span>

                {/* LINE */}
                <span
                  className={`absolute top-0 left-0 w-full h-[2px] bg-black transition-transform duration-300 origin-left ${
                    isActive || isTouch
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </a>
            );
          })}
        </div>
      </div>

      {mounted && createPortal(<></>, document.body)}
    </header>
  );
}
