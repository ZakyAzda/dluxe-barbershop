/* ============================================================
   Home Page — D'Luxe Barbershop
   Single-page composition: assembles all section components.
   Visual separators (section-sep) between every section for
   clear visual boundaries.
   ============================================================ */

import Navbar           from "@/app/components/Navbar";
import HeroSection      from "@/app/components/HeroSection";
import LookbookSection  from "@/app/components/LookbookSection";
import ServicesSection  from "@/app/components/ServicesSection";
import PriceListSection from "@/app/components/PriceListSection";
import AboutSection     from "@/app/components/AboutSection";
import LocationSection  from "@/app/components/LocationSection";
import Footer           from "@/app/components/Footer";

export default function HomePage() {
  return (
    <main>
      {/* Sticky Navigation */}
      <Navbar />

      {/* 1. Hero — full screen */}
      <HeroSection />

      {/* 2. Lookbook / Signature Cuts Gallery */}
      <LookbookSection />

      {/* ─── Visual Separator ─── */}
      <span className="section-sep" aria-hidden="true" />

      {/* 3. Premium Services */}
      <ServicesSection />

      {/* ─── Visual Separator ─── */}
      <span className="section-sep" aria-hidden="true" />

      {/* 4. Price List */}
      <PriceListSection />

      {/* ─── Visual Separator ─── */}
      <span className="section-sep" aria-hidden="true" />

      {/* 5. About Us */}
      <AboutSection />

      {/* ─── Visual Separator ─── */}
      <span className="section-sep" aria-hidden="true" />

      {/* 6. Location & Hours */}
      <LocationSection />

      {/* ─── Visual Separator ─── */}
      <span className="section-sep" aria-hidden="true" />

      {/* 7. Footer */}
      <Footer />
    </main>
  );
}
