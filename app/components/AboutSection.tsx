"use client";

/* ============================================================
   AboutSection — D'Luxe Barbershop
   "Our Story" — Split layout: text left, image right
   - Grayscale image with hover to partial color
   - Framer Motion scroll-triggered entrance
   ============================================================ */

import Image from "next/image";
import { motion } from "framer-motion";

/* Luxury cubic-bezier as typed tuple for Framer Motion v12 */
const luxuryEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const STATS = [
  { value: "2026", label: "Tahun Berdiri" },
  { value: "500+", label: "Klien Puas" },
  { value: "100%", label: "Profesional" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-[#080808] to-[#111111]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── LEFT: Text Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: luxuryEase }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="section-label">✦ Tentang Kami ✦</span>
              <h2
                className="text-4xl sm:text-5xl font-bold text-[#f5f5f5] mt-1 leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Our{" "}
                <span className="italic text-gold-shimmer">Story</span>
              </h2>
              <hr className="gold-divider mt-5" />
            </div>

            <p className="text-[#a0a0a0] leading-relaxed text-[0.95rem]">
              Berdiri sejak tahun 2025, D&apos;Luxe Barbershop hadir untuk mendefinisikan ulang
              standar perawatan pria modern. Kami memahami bahwa gaya rambut bukan sekadar
              rutinitas, melainkan bagian dari identitas.
            </p>

            <p className="text-[#a0a0a0] leading-relaxed text-[0.95rem]">
              Di tangan para barber profesional kami, teknik klasik dan tren gaya modern
              berpadu sempurna untuk menciptakan hasil akhir yang tak lekang oleh waktu.
            </p>

            {/* ── Stats Row ── */}
            <div className="grid grid-cols-3 gap-4 mt-2 pt-6 border-t border-[#2a2a2a]">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span
                    className="text-3xl font-black text-gold-shimmer"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[0.65rem] tracking-widest uppercase text-[#606060] font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Signature line */}
            <div className="flex items-center gap-3 mt-2">
              <div className="flex flex-col">
                <span
                  className="text-xl text-[#c9a84c] italic"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  D&apos;Luxe Barbershop
                </span>
                <span className="text-[0.65rem] tracking-widest uppercase text-[#606060]">
                  Padang, Sumatera Barat
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Grayscale Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: luxuryEase }}
            className="relative"
          >
            {/* Decorative background frames */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-[#c9a84c]/20 rounded-xl pointer-events-none" />
            <div className="absolute -top-2 -right-2 w-full h-full border border-[#2a2a2a] rounded-xl pointer-events-none" />

            {/* Image container */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] group">
              <Image
                src="/images/WhatsApp Image 2026-07-04 at 14.49.10.jpeg"
                alt="D'Luxe Barbershop — Our barber at work"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top transition-all duration-700 grayscale group-hover:grayscale-[30%] group-hover:scale-105"
              />

              {/* Bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 via-transparent to-transparent" />

              {/* Caption badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 bg-[#080808]/70 backdrop-blur-sm rounded-lg px-4 py-3 border border-[#2a2a2a]">
                <div className="w-2 h-2 rounded-full bg-[#c9a84c] flex-shrink-0" />
                <span className="text-xs tracking-wide text-[#a0a0a0]">
                  Barber profesional berpengalaman
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
