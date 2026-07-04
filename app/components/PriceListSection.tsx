"use client";

/* ============================================================
   PriceListSection — D'Luxe Barbershop
   "Harga Layanan" — 3-tier pricing table
   - Booking modal per card → auto WhatsApp message
   - Updated prices (base: Potong Rambut = Rp 40.000)
   ============================================================ */

import { useState } from "react";
import { motion } from "framer-motion";
import BookingModal from "@/app/components/BookingModal";

const luxuryEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

/* ── WhatsApp number (no + or spaces) ── */
const WA_NUMBER = "6283121232166";

/* ── Pricing tiers ── */
const PRICE_TIERS = [
  {
    id: "reguler",
    badge: null,
    tier: "Reguler",
    tagline: "Tampilan rapi & bersih",
    items: [
      { name: "Potong Rambut", price: "Rp 35.000" },
      { name: "Potong + Cuci Rambut", price: "Rp 40.000" },
      { name: "Cukur Jenggot", price: "Rp 15.000" },
      { name: "Rapiin Alis", price: "Rp 5.000" },
    ],
    /* Price shown in WA message = starting from */
    displayPrice: "Mulai Rp 5.000",
  },
  {
    id: "premium",
    badge: "Terpopuler",
    tier: "Premium",
    tagline: "Pengalaman grooming lebih lengkap",
    items: [
      { name: "Potong + Styling", price: "Rp 45.000" },
      { name: "Potong + Cuci + Styling", price: "Rp 50.000" },
      { name: "Cukur Jenggot + Treatment", price: "Rp 25.000" },
      { name: "Creambath / Hair Mask", price: "Rp 35.000" },
      { name: "Hair Coloring", price: "Rp 65.000" },
    ],
    displayPrice: "Mulai Rp 45.000",
  },
  {
    id: "signature",
    badge: "D'Luxe Exclusive",
    tier: "Signature",
    tagline: "Layanan terbaik all-inclusive",
    items: [
      { name: "Full Grooming Package", price: "Rp 150.000" },
      { name: "Potong + Coloring + Styling", price: "Rp 185.000" },
      { name: "Gentleman Package", price: "Rp 215.000" },
      { name: "The D'Luxe Experience", price: "Rp 250.000" },
    ],
    displayPrice: "Mulai Rp 150.000",
  },
];

/* ── State shape for modal ── */
interface ModalState {
  open: boolean;
  packageName: string;
  price: string;
}

export default function PriceListSection() {
  const [modal, setModal] = useState<ModalState>({
    open: false, packageName: "", price: "",
  });

  const openModal = (packageName: string, price: string) => {
    setModal({ open: true, packageName, price });
  };

  const closeModal = () => setModal(prev => ({ ...prev, open: false }));

  return (
    <>
      {/* ── Booking Modal ── */}
      <BookingModal
        isOpen={modal.open}
        onClose={closeModal}
        packageName={modal.packageName}
        price={modal.price}
        waNumber={WA_NUMBER}
      />

      <section id="pricelist" className="section-padding bg-surface">
        <div className="section-container">

          {/* ── Section Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="section-header"
          >
            <span className="section-label">✦ Harga Layanan ✦</span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#f5f5f5] mt-1"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Price List
            </h2>
            <p className="section-subtitle">
              Harga transparan, kualitas terjamin. Pilih paket yang sesuai kebutuhanmu.
            </p>
            <hr className="gold-divider" />
          </motion.div>

          {/* ── 3-Column Pricing Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {PRICE_TIERS.map((tier, colIdx) => {
              const isPremium = tier.id === "premium";
              return (
                <motion.div
                  key={tier.id}
                  id={`pricelist-${tier.id}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: colIdx * 0.15, ease: luxuryEase }}
                  className={`
                    relative flex flex-col rounded-xl overflow-hidden border transition-all duration-500
                    ${isPremium
                      ? "border-[#c9a84c]/60 shadow-[0_0_40px_rgba(201,168,76,0.15)] scale-[1.02]"
                      : "border-[#2a2a2a] hover:border-[#c9a84c]/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                    }
                  `}
                >
                  {/* Top gold glow bar for premium */}
                  {isPremium && (
                    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />
                  )}

                  {/* ── Card Header ── */}
                  <div className={`p-8 pb-6 ${isPremium ? "bg-[#1a1608]" : "bg-[#161616]"}`}>
                    {tier.badge && (
                      <span className="inline-block text-[0.6rem] font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-full bg-[rgba(201,168,76,0.15)] text-[#c9a84c] border border-[#c9a84c]/30 mb-4">
                        {tier.badge}
                      </span>
                    )}

                    <h3
                      className={`text-2xl font-bold mb-1 ${isPremium ? "text-gold-shimmer" : "text-[#f5f5f5]"}`}
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {tier.tier}
                    </h3>
                    <p className="text-[#606060] text-xs leading-relaxed mb-1">{tier.tagline}</p>
                    <p className={`text-sm font-semibold ${isPremium ? "text-[#c9a84c]" : "text-[#a0a0a0]"}`}>
                      {tier.displayPrice}
                    </p>

                    <div
                      className={`mt-5 h-px ${isPremium
                        ? "bg-gradient-to-r from-[#c9a84c]/60 via-[#c9a84c]/20 to-transparent"
                        : "bg-[#2a2a2a]"
                        }`}
                    />
                  </div>

                  {/* ── Price Items ── */}
                  <div className={`flex-1 px-8 pb-8 pt-4 flex flex-col ${isPremium ? "bg-[#1a1608]" : "bg-[#161616]"}`}>
                    <div className="flex flex-col">
                      {tier.items.map((item, i) => (
                        <div
                          key={i}
                          className={`
                            group/row flex items-center justify-between py-4 border-b last:border-b-0
                            transition-all duration-200 cursor-default
                            ${isPremium
                              ? "border-[#c9a84c]/10 hover:bg-[rgba(201,168,76,0.06)]"
                              : "border-[#222] hover:bg-[#1c1c1c]"
                            }
                          `}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-200 ${isPremium
                                  ? "bg-[#c9a84c]/50 group-hover/row:bg-[#c9a84c]"
                                  : "bg-[#3a3a3a] group-hover/row:bg-[#c9a84c]/60"
                                }`}
                            />
                            <span className="text-[#a0a0a0] text-sm group-hover/row:text-[#f5f5f5] transition-colors duration-200">
                              {item.name}
                            </span>
                          </div>
                          <span
                            className={`text-sm font-semibold tabular-nums transition-colors duration-200 ${isPremium
                                ? "text-[#c9a84c] group-hover/row:text-[#e2c06a]"
                                : "text-[#f5f5f5] group-hover/row:text-[#c9a84c]"
                              }`}
                          >
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* ── Pesan Sekarang CTA ── */}
                    <div className="pt-7 mt-2">
                      <button
                        onClick={() => openModal(`Paket ${tier.tier} — D'Luxe Barbershop`, tier.displayPrice)}
                        className={`
                          flex items-center justify-center gap-2 w-full py-3 rounded-lg text-xs font-semibold
                          tracking-[0.08em] uppercase transition-all duration-300 cursor-pointer border-0
                          ${isPremium
                            ? "bg-gradient-to-r from-[#c9a84c] to-[#9c7e38] text-[#080808] hover:from-[#e2c06a] hover:to-[#c9a84c] hover:shadow-[0_0_20px_rgba(201,168,76,0.4)]"
                            : "bg-transparent border border-[#2a2a2a] text-[#606060] hover:border-[#c9a84c]/50 hover:text-[#c9a84c] hover:bg-[rgba(201,168,76,0.06)]"
                          }
                        `}
                        style={{ border: isPremium ? "none" : "1px solid #2a2a2a" }}
                      >
                        {/* WA icon */}
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.929 1.399 5.594L0 24l6.593-1.375A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.868 9.868 0 01-5.031-1.378l-.361-.214-3.735.979 1.003-3.653-.235-.374A9.845 9.845 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z" />
                        </svg>
                        Pesan Sekarang
                      </button>
                    </div>
                  </div>

                  {/* Bottom gold glow bar for premium */}
                  {isPremium && (
                    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* ── Footnote ── */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="section-subtitle"
            style={{ marginTop: "3rem", fontSize: "0.75rem", color: "#3a3a3a" }}
          >
            * Harga dapat berubah sewaktu-waktu. Hubungi kami untuk info terkini.
          </motion.p>
        </div>
      </section>
    </>
  );
}
