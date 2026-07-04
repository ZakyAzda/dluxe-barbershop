"use client";

/* ============================================================
   Navbar — D'Luxe Barbershop
   - Sticky, transparent → solid dark on scroll
   - Links: Home, Services, About, Location
   - CTA: Book Now → WhatsApp
   ============================================================ */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home",     href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Harga",    href: "#pricelist" },
  { label: "About",    href: "#about" },
  { label: "Location", href: "#location" },
];

const WA_LINK = "https://wa.me/6283121232166?text=Halo%20D'Luxe%20Barbershop%2C%20saya%20ingin%20booking!";

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);

  /* ── Detect scroll to switch navbar style ── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Close mobile menu on resize ── */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500 ease-in-out
        ${scrolled
          ? "bg-[#080808]/95 backdrop-blur-md border-b border-[#2a2a2a] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
        }
      `}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-18 py-4">

          {/* ── Logo ── */}
          <button
            onClick={() => scrollToSection("#home")}
            className="flex flex-col items-start cursor-pointer group"
          >
            <span
              className="text-xl font-black tracking-widest uppercase text-[#f5f5f5] group-hover:text-[#c9a84c] transition-colors duration-300"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              D&apos;Luxe
            </span>
            <span className="text-[0.6rem] tracking-[0.35em] uppercase text-[#c9a84c] font-medium -mt-0.5">
              Barbershop
            </span>
          </button>

          {/* ── Desktop Links ── */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="relative text-sm font-medium tracking-wide text-[#a0a0a0] hover:text-[#f5f5f5] transition-colors duration-300 group"
                >
                  {link.label}
                  {/* Underline hover effect */}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a84c] group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:block">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs"
            >
              Book Now
            </a>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#f5f5f5] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#f5f5f5] transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#f5f5f5] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </nav>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#0f0f0f]/98 backdrop-blur-md border-t border-[#2a2a2a]"
          >
            <div className="section-container py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-base font-medium text-[#a0a0a0] hover:text-[#c9a84c] transition-colors duration-200 py-1"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 border-t border-[#2a2a2a]">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full justify-center mt-2"
                >
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
