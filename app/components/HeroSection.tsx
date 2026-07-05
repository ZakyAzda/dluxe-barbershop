"use client";

/* ============================================================
   HeroSection — D'Luxe Barbershop
   - Full-screen dark moody hero image
   - Fade-in + slide-up Framer Motion animations
   - CTA: "Booking Sekarang" → WhatsApp with glow effect
   ============================================================ */

import Image from "next/image";
import { motion } from "framer-motion";

const WA_LINK =
  "https://wa.me/6283121232166?text=Halo%20D'Luxe%20Barbershop%2C%20saya%20ingin%20booking!";

/* Luxury cubic-bezier easing as a typed tuple */
const luxuryEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/WhatsApp Image 2026-07-04 at 14.49.09.jpeg"
          alt="D'Luxe Barbershop interior"
          fill
          priority
          quality={90}
          className="object-cover object-center"
        />
        {/* Multi-layer dark overlay for luxurious depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/90 via-[#080808]/40 to-[#111111]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/70 via-transparent to-[#080808]/50" />
        
        {/* Fade gradasi yang sangat lembut di 1/3 bagian bawah layar */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent" />
        
        {/* Garis gradasi emas yang samar-samar (glowing) sebagai transisi elegan */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent shadow-[0_0_30px_rgba(201,168,76,0.4)]" />
      </div>

      {/* ── Decorative grain texture overlay ── */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 section-container text-center flex flex-col items-center gap-6 pt-20">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <span className="section-label">✦ Padang, Sumatera Barat ✦</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: luxuryEase }}
          className="text-gold-shimmer text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Elevate Your
          <br />
          <span className="italic">Style.</span>
        </motion.h1>

        {/* Gold thin divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"
        />

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: luxuryEase }}
          className="max-w-xl text-base sm:text-lg text-[#a0a0a0] leading-relaxed font-light"
        >
          Definisi Baru Kerapian di D&apos;Luxe Barbershop.
          <br />
          <span className="text-[#f5f5f5]/70">
            Precision, Style, and Gentlemen&apos;s Grooming.
          </span>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: luxuryEase }}
          className="flex flex-col sm:flex-row gap-4 items-center mt-4"
        >
          <a
            href={WA_LINK}
            id="hero-cta-booking"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-sm px-8 py-4"
          >
            {/* WhatsApp Icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.929 1.399 5.594L0 24l6.593-1.375A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.868 9.868 0 01-5.031-1.378l-.361-.214-3.735.979 1.003-3.653-.235-.374A9.845 9.845 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z"/>
            </svg>
            Booking Sekarang
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-[0.6rem] tracking-[0.3em] uppercase text-[#606060]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#c9a84c] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
