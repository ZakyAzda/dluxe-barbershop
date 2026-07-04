/* ============================================================
   LocationSection — D'Luxe Barbershop
   "Temukan Kami" — 2 col: info left, map right
   - Server Component (no interactivity needed)
   - Google Maps embed with grayscale CSS filter
   ============================================================ */

const HOURS = [
  { day: "Senin – Minggu", time: "17.00 – 00.00" },
];

const INFO_ITEMS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Jam Operasional",
    value: "Senin – Minggu | 17.00 – 00.00",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Alamat",
    value: "sebelah pemadam kebakaran, Jl. Dr. Moh. Hatta, Ps. Ambacang, Kec. Kuranji, Kota Padang, Sumatera Barat 25152",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.67 19.79 19.79 0 012 8.18a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 13.9a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+62 831-2123-2166",
  },
];

export default function LocationSection() {
  return (
    <section id="location" className="section-padding bg-surface">
      <div className="section-container">

        {/* ── Section Header ── */}
        <div className="section-header">
          <span className="section-label">✦ Kunjungi Kami ✦</span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#f5f5f5] mt-1"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Temukan Kami
          </h2>
          <p className="section-subtitle">
            Kami siap melayani setiap hari. Kunjungi kami langsung atau reservasi terlebih dahulu.
          </p>
          <hr className="gold-divider" />
        </div>

        {/* ── 2-Column Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ── LEFT: Info Cards ── */}
          <div className="flex flex-col gap-5">
            {INFO_ITEMS.map((item, i) => (
              <div
                key={i}
                className="card-dark flex items-start gap-5 p-6 group"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.15)] text-[#c9a84c] transition-all duration-300 group-hover:bg-[rgba(201,168,76,0.15)]">
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <p className="text-[0.65rem] tracking-widest uppercase text-[#606060] mb-1 font-medium">
                    {item.label}
                  </p>
                  <p className="text-[#f5f5f5] font-medium text-sm leading-snug">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            {/* ── Special Hours Card ── */}
            <div className="card-dark p-6 mt-2">
              <p className="text-[0.65rem] tracking-widest uppercase text-[#606060] mb-4 font-medium">
                Jadwal Lengkap
              </p>
              <div className="space-y-3">
                {HOURS.map((h, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-[#a0a0a0] text-sm">{h.day}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-[glow-pulse_2s_ease-in-out_infinite]" />
                      <span className="text-[#f5f5f5] text-sm font-semibold">{h.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-[#2a2a2a] flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-emerald-400 text-xs font-medium tracking-wide">
                  Buka Setiap Hari
                </span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Google Maps Embed ── */}
          <div className="rounded-xl overflow-hidden border border-[#2a2a2a] shadow-[0_8px_32px_rgba(0,0,0,0.5)] h-[500px] lg:h-full min-h-[400px]">
            <iframe
              title="D'Luxe Barbershop Location — Padang, Sumatera Barat"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d549.4783913357979!2d100.40988175871797!3d-0.9317453127904898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b90006894b75%3A0x635fe5e7479b44c2!2sD&#39;LUXE%20BARBERSHOP!5e0!3m2!1sen!2sid!4v1783177125145!5m2!1sen!2sid"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-grayscale border-0 block w-full h-full"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
