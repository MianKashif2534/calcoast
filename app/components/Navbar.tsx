"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/contact" },
];

function linkActive(pathname: string, href: string) {
  if (href === "/#reviews") return false;
  return pathname === href;
}

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleReviewClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const reviewsSection = document.getElementById("reviews");
    if (reviewsSection) {
      const navbarHeight = 70;
      const elementPosition = reviewsSection.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMenuOpen(false);
    } else {
      window.location.href = "/#reviews";
    }
  };

  const MobileMenu = () => (
    <AnimatePresence>
      {menuOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998] bg-black/30 backdrop-blur-sm md:hidden"
            onClick={() => setMenuOpen(false)}
          />

          {/* Mobile Menu */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-[9999] bg-gradient-to-b from-white to-gray-50 rounded-t-3xl shadow-2xl md:hidden"
            style={{ maxHeight: "85vh" }}
          >
            <div className="flex flex-col h-full">
              {/* Handle */}
              <div className="flex justify-center pt-0 pb-1">
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600" />
              </div>

              {/* Logo */}
              <div className="flex justify-center py-4">
                <Image
                  src={logo}
                  alt="Calcoast"
                  height={32}
                  width={120}
                  className="opacity-90"
                  priority
                />
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto px-2 pb-4">
                <div className="space-y-0">
                  {navLinks.map(({ label, href }, index) => {
                    const isActive = linkActive(pathname, href);
                    const isReviews = href === "/#reviews";

                    return (
                      <motion.a
                        key={href}
                        href={href}
                        onClick={(e) => {
                          if (isReviews) handleReviewClick(e);
                          else setMenuOpen(false);
                        }}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`flex justify-between items-center px-5 py-4 rounded-2xl text-[17px] font-semibold tracking-wide transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                            : "text-gray-700 hover:bg-gray-100 hover:translate-x-1"
                        }`}
                      >
                        <span className="flex items-center gap-1">
                          <span className="text-xl">
                            {label === "Home"}
                            {label === "About"}
                            {label === "Services"}
                            {label === "Why Us"}
                            {label === "Reviews"}
                            {label === "Contact"}
                          </span>
                          {label}
                        </span>
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="h-2 w-2 bg-white rounded-full shadow-lg"
                          />
                        )}
                      </motion.a>
                    );
                  })}
                </div>
              </nav>

              {/* Button */}
              <div className="border-t border-gray-200 p-5 pb-7">
                <motion.a
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3.5 rounded-2xl text-base font-bold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  whileTap={{ scale: 0.98 }}
                >
                  <span>✨</span>
                  Get Free Quote
                  <span>→</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
            : "bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 py-3"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex-shrink-0"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Image
                src={logo}
                alt="Calcoast Logistics"
                height={44}
                width={180}
                className={`h-11 w-auto transition-all duration-300 ${
                  scrolled ? "brightness-100" : "brightness-0 invert"
                }`}
                priority
              />
            </motion.a>

            {/* Desktop Navigation Links */}
            <nav className="flex items-center gap-2">
              {navLinks.map(({ label, href }) => {
                const isActive = linkActive(pathname, href);
                const isReviews = href === "/#reviews";

                return (
                  <motion.a
                    key={href}
                    href={href}
                    onClick={(e) => {
                      if (isReviews) {
                        e.preventDefault();
                        const reviewsSection =
                          document.getElementById("reviews");
                        if (reviewsSection) {
                          const navbarHeight = 70;
                          const elementPosition =
                            reviewsSection.getBoundingClientRect().top;
                          const offsetPosition =
                            elementPosition + window.pageYOffset - navbarHeight;
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth",
                          });
                        } else {
                          window.location.href = "/#reviews";
                        }
                      }
                    }}
                    className={`relative px-4 py-2 text-[15px] font-semibold tracking-wide rounded-xl transition-all duration-300 ${
                      scrolled
                        ? isActive
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                        : isActive
                          ? "bg-white/25 text-white shadow-lg backdrop-blur-sm"
                          : "text-white/90 hover:text-white hover:bg-white/15"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {label}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-2 right-2 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <motion.a
              href="/contact"
              className={`inline-flex items-center gap-2 rounded-xl px-5 py-2 text-[15px] font-bold tracking-wide transition-all duration-300 ${
                scrolled
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg"
                  : "bg-white/25 text-white hover:bg-white/35 backdrop-blur-sm"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>🚀</span>
              Get Started
              <span>→</span>
            </motion.a>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center justify-between">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex-shrink-0"
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src={logo}
                alt="Calcoast"
                height={34}
                width={140}
                className={`h-8.5 w-auto transition-all duration-300 ${
                  scrolled ? "brightness-100" : "brightness-0 invert"
                }`}
                priority
              />
            </motion.a>

            {/* Menu Button */}
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`h-9 w-9 flex flex-col justify-center items-center gap-1 rounded-xl transition-all ${
                scrolled
                  ? "bg-gray-100 text-gray-700"
                  : "bg-white/25 text-white backdrop-blur-sm"
              }`}
              whileTap={{ scale: 0.92 }}
            >
              <span
                className={`block h-0.5 w-4.5 rounded-full bg-current transition-all duration-100 ${
                  menuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4.5 rounded-full bg-current transition-all duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4.5 rounded-full bg-current transition-all duration-200 ${
                  menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </motion.button>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-14 md:h-16" />

      {mounted && <MobileMenu />}
    </>
  );
}
