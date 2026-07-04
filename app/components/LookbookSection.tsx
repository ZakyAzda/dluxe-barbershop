"use client";

/* ============================================================
   LookbookSection — D'Luxe Barbershop
   "Our Masterpieces" — CSS Grid gallery
   - 6 haircut photos with zoom + overlay on hover
   - Framer Motion staggered fade-in per card
   ============================================================ */

import Image from "next/image";
import { motion } from "framer-motion";

/* Luxury cubic-bezier as typed tuple for Framer Motion v12 */
const luxuryEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

/* ── Gallery images (6 lookbook photos) ── */
const GALLERY_IMAGES = [
  {
    src: "/images/WhatsApp Image 2026-06-28 at 23.39.42.jpeg",
    alt: "Signature fade haircut result",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/WhatsApp Image 2026-06-28 at 23.39.42 (1).jpeg",
    alt: "Precision cut close-up",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/WhatsApp Image 2026-06-28 at 23.39.42 (2).jpeg",
    alt: "Classic taper fade",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/WhatsApp Image 2026-06-28 at 23.39.42 (3).jpeg",
    alt: "Textured crop haircut",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/WhatsApp Image 2026-06-28 at 23.39.43.jpeg",
    alt: "Skin fade with design",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/WhatsApp Image 2026-06-28 at 23.39.43 (1).jpeg",
    alt: "Pompadour style",
    span: "col-span-1 row-span-1",
  },
];

export default function LookbookSection() {
  return (
    <section id="lookbook" className="section-padding bg-surface">
      <div className="section-container">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="section-header"
        >
          <span className="section-label">✦ Hasil Terbaik Kami ✦</span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#f5f5f5] mt-1"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Masterpieces
          </h2>
          <p className="section-subtitle">
            Setiap potongan adalah sebuah karya. Presisi, gaya, dan karakter dalam setiap sentuhan.
          </p>
          <hr className="gold-divider" />
        </motion.div>

        {/* ── Masonry-style Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[300px] gap-5">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: luxuryEase,
              }}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Hover dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Hover label */}
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-px bg-[#c9a84c]" />
                  <p className="text-xs tracking-widest uppercase text-[#c9a84c] font-medium">
                    D&apos;Luxe Cut
                  </p>
                </div>
                <p className="text-sm text-[#f5f5f5] mt-1 font-medium">{img.alt}</p>
              </div>

              {/* Subtle gold border on hover */}
              <div className="absolute inset-0 rounded-xl ring-0 group-hover:ring-1 ring-[#c9a84c]/30 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
