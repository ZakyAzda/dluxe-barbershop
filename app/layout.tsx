/* ============================================================
   Root Layout — D'Luxe Barbershop
   - Google Fonts: Inter (body) + Playfair Display (headings)
   - Metadata in Indonesian
   ============================================================ */
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

/* ── Body font: Inter (variable, clean sans-serif) ── */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/* ── Heading font: Playfair Display (elegant serif) ── */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

/* ── SEO Metadata ── */
export const metadata: Metadata = {
  title: "D'Luxe Barbershop — Elevate Your Style | Padang, Sumatera Barat",
  description:
    "D'Luxe Barbershop menghadirkan layanan grooming profesional pria modern di Padang. Precision cuts, signature styling, dan premium treatments. Buka Senin–Minggu 10.00–22.00.",
  keywords: [
    "barbershop padang",
    "dluxe barbershop",
    "pangkas rambut pria padang",
    "grooming pria sumatera barat",
    "haircut padang",
  ],
  authors: [{ name: "D'Luxe Barbershop" }],
  openGraph: {
    title: "D'Luxe Barbershop — Elevate Your Style",
    description:
      "Definisi baru kerapian di Padang, Sumatera Barat. Precision, Style, and Gentlemen's Grooming.",
    type: "website",
    locale: "id_ID",
  },
};

/* ── Root Layout ── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="min-h-full antialiased bg-[#080808] text-[#f5f5f5]">
        {children}
      </body>
    </html>
  );
}
