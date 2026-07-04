/* ============================================================
   Footer — D'Luxe Barbershop
   - Minimalist centered layout
   - Tagline + WA CTA
   - SVG social icons: Instagram, TikTok, WhatsApp
   - Copyright line
   - Server Component
   ============================================================ */

const WA_LINK =
  "https://wa.me/6283121232166?text=Halo%20D'Luxe%20Barbershop%2C%20saya%20ingin%20reservasi!";

/* ── Social Icon definitions ── */
const SOCIAL_LINKS = [
  {
    id: "footer-instagram",
    label: "Instagram",
    href: "https://instagram.com/dluxe.barbershop",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    id: "footer-tiktok",
    label: "TikTok",
    href: "https://tiktok.com/@dluxe.barbershop",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.78a4.85 4.85 0 01-1.01-.09z" />
      </svg>
    ),
  },
  {
    id: "footer-whatsapp",
    label: "WhatsApp",
    href: WA_LINK,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.929 1.399 5.594L0 24l6.593-1.375A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.868 9.868 0 01-5.031-1.378l-.361-.214-3.735.979 1.003-3.653-.235-.374A9.845 9.845 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#2a2a2a]">

      {/* ── Main Footer Content ── */}
      <div className="section-container py-16 flex flex-col items-center gap-8 text-center">

        {/* Logo */}
        <div className="flex flex-col items-center gap-1">
          <span
            className="text-2xl font-black tracking-widest uppercase text-[#f5f5f5]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            D&apos;Luxe
          </span>
          <span className="text-[0.6rem] tracking-[0.4em] uppercase text-[#c9a84c] font-medium">
            Barbershop
          </span>
        </div>

        {/* Gold thin divider */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />

        {/* Tagline */}
        <p className="max-w-sm text-[#606060] text-sm leading-relaxed">
          Mendefinisikan ulang gaya pria modern sejak 2026 melalui layanan grooming profesional.
        </p>

        {/* WA CTA */}
        <a
          id="footer-cta-reservasi"
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.929 1.399 5.594L0 24l6.593-1.375A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.868 9.868 0 01-5.031-1.378l-.361-.214-3.735.979 1.003-3.653-.235-.374A9.845 9.845 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z"/>
          </svg>
          Reservasi via WA
        </a>

        {/* ── Social Icons ── */}
        <div className="flex items-center gap-5">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.id}
              id={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#2a2a2a] text-[#606060] hover:text-[#c9a84c] hover:border-[#c9a84c]/50 hover:bg-[rgba(201,168,76,0.08)] transition-all duration-300 hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-[#161616]">
        <div className="section-container py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[0.7rem] text-[#3a3a3a] tracking-wide">
            © 2026 D&apos;Luxe Barbershop, Padang. All Rights Reserved.
          </p>
          <p className="text-[0.7rem] text-[#3a3a3a] tracking-wide">
            Made with ♥ in Padang
          </p>
        </div>
      </div>
    </footer>
  );
}
