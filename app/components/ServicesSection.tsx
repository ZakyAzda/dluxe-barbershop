"use client";

/* ============================================================
   ServicesSection — D'Luxe Barbershop
   "Premium Services" — 3-card dark elevated grid
   - Framer Motion staggered card entrance
   - Hover: gold border glow + subtle lift
   ============================================================ */

import { motion } from "framer-motion";

/* Luxury cubic-bezier as typed tuple for Framer Motion v12 */
const luxuryEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

/* ── Service card data ── */
const SERVICES = [
  {
    id: "haircuts-grooming",
    number: "01",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2v6l3 3-3 3v6M18 2v6l-3 3 3 3v6M9 12h6"/>
      </svg>
    ),
    title: "Haircuts & Grooming",
    description:
      "Exceptional precision cuts tailored to your unique style. Dari undercut klasik hingga fade modern, setiap helai diperhatikan dengan detail.",
    tags: ["Classic Cut", "Fade", "Undercut"],
  },
  {
    id: "signature-styling",
    number: "02",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: "Signature Styling",
    description:
      "Professional styling for volume, texture, and character. Tampilan premium yang tahan lama dengan produk pilihan terbaik.",
    tags: ["Pompadour", "Texture", "Volume"],
  },
  {
    id: "dluxe-finish",
    number: "03",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
      </svg>
    ),
    title: "The D'Luxe Finish",
    description:
      "Premium treatments and detailing for a flawless look. Rasakan perbedaan sentuhan akhir dari tangan para barber profesional kami.",
    tags: ["Beard Trim", "Skin Care", "Treatment"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-base">
      <div className="section-container">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="section-header"
        >
          <span className="section-label">✦ Layanan Kami ✦</span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#f5f5f5] mt-1"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Premium Services
          </h2>
          <p className="section-subtitle">
            Setiap layanan dirancang untuk memberikan pengalaman grooming kelas atas yang tak terlupakan.
          </p>
          <hr className="gold-divider" />
        </motion.div>

        {/* ── 3-Column Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              id={`service-${service.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.65,
                delay: i * 0.15,
                ease: luxuryEase,
              }}
              className="card-dark group relative p-10 flex flex-col gap-7 overflow-hidden"
            >
              {/* Decorative number watermark */}
              <span
                className="absolute top-4 right-6 text-6xl font-black text-[#1c1c1c] select-none pointer-events-none transition-colors duration-500 group-hover:text-[rgba(201,168,76,0.06)]"
                style={{ fontFamily: "var(--font-playfair)" }}
                aria-hidden="true"
              >
                {service.number}
              </span>

              {/* Icon */}
              <div className="text-[#c9a84c] w-12 h-12 flex items-center justify-center rounded-lg bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.15)] transition-all duration-300 group-hover:bg-[rgba(201,168,76,0.15)] group-hover:border-[rgba(201,168,76,0.3)]">
                {service.icon}
              </div>

              {/* Title */}
              <div>
                <h3
                  className="text-xl font-bold text-[#f5f5f5] mb-3 transition-colors duration-300 group-hover:text-[#c9a84c]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {service.title}
                </h3>
                {/* Gold thin line */}
                <div className="w-8 h-px bg-[#c9a84c]/50 mb-4 transition-all duration-300 group-hover:w-16 group-hover:bg-[#c9a84c]" />
                <p className="text-[#a0a0a0] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.65rem] font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-[#2a2a2a] text-[#606060] transition-all duration-300 group-hover:border-[rgba(201,168,76,0.3)] group-hover:text-[#c9a84c]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
