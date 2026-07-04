"use client";

/* ============================================================
   BookingModal — D'Luxe Barbershop
   Collects nama, tanggal, jam → generates WhatsApp message
   matching the chosen package.
   ============================================================ */

import { useState, useEffect } from "react";

interface BookingModalProps {
  isOpen:      boolean;
  onClose:     () => void;
  packageName: string;
  price:       string;
  waNumber:    string;
}

/* Format date to Indonesian locale e.g. "Jumat, 4 Juli 2026" */
function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("id-ID", {
    weekday: "long",
    year:    "numeric",
    month:   "long",
    day:     "numeric",
  });
}

export default function BookingModal({
  isOpen,
  onClose,
  packageName,
  price,
  waNumber,
}: BookingModalProps) {
  const [nama,     setNama]     = useState("");
  const [tanggal,  setTanggal]  = useState("");
  const [jam,      setJam]      = useState("");
  const [error,    setError]    = useState("");

  /* Reset form when modal opens */
  useEffect(() => {
    if (isOpen) {
      setNama(""); setTanggal(""); setJam(""); setError("");
    }
  }, [isOpen]);

  /* Lock body scroll when modal open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nama.trim())    { setError("Nama tidak boleh kosong."); return; }
    if (!tanggal)        { setError("Pilih tanggal terlebih dahulu."); return; }
    if (!jam)            { setError("Pilih jam terlebih dahulu."); return; }

    const tanggalFormatted = formatDate(tanggal);
    const jamFormatted     = jam; /* e.g. "14:30" */

    /* Build the WhatsApp message */
    const message = [
      `Halo D'Luxe Barbershop! 👋`,
      ``,
      `Saya ingin memesan layanan berikut:`,
      ``,
      `👤 *Nama*     : ${nama.trim()}`,
      `📦 *Paket*    : ${packageName}`,
      `💰 *Harga*    : ${price}`,
      `📅 *Tanggal*  : ${tanggalFormatted}`,
      `⏰ *Jam*      : ${jamFormatted} WIB`,
      ``,
      `Mohon konfirmasinya. Terima kasih! 🙏`,
    ].join("\n");

    const encodedMsg = encodeURIComponent(message);
    const waUrl      = `https://wa.me/${waNumber}?text=${encodedMsg}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
    onClose();
  };

  /* Min date: today */
  const today = new Date().toISOString().split("T")[0];

  return (
    /* ── Backdrop ── */
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(6px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* ── Modal Card ── */}
      <div
        className="relative w-full max-w-md rounded-2xl overflow-hidden"
        style={{
          background: "#161616",
          border: "1px solid #2a2a2a",
          boxShadow: "0 0 60px rgba(201,168,76,0.12), 0 24px 48px rgba(0,0,0,0.6)",
        }}
      >
        {/* Top gold accent bar */}
        <div style={{ height: "2px", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />

        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b" style={{ borderColor: "#2a2a2a" }}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "0.25rem" }}>
                Reservasi via WhatsApp
              </p>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", fontWeight: 700, color: "#f5f5f5" }}>
                {packageName}
              </h3>
              <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "#c9a84c", marginTop: "0.25rem" }}>
                {price}
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Tutup modal"
              style={{
                width: "2rem", height: "2rem", borderRadius: "50%",
                background: "#2a2a2a", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#606060", flexShrink: 0, transition: "all 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#c9a84c20"; (e.currentTarget as HTMLButtonElement).style.color = "#c9a84c"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "#2a2a2a"; (e.currentTarget as HTMLButtonElement).style.color = "#606060"; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 py-7 flex flex-col gap-5">

          {/* Nama */}
          <div className="flex flex-col gap-2">
            <label style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#606060" }}>
              Nama Lengkap
            </label>
            <input
              type="text"
              value={nama}
              onChange={e => { setNama(e.target.value); setError(""); }}
              placeholder="Masukkan nama kamu"
              autoFocus
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                background: "#1c1c1c",
                border: "1px solid #2a2a2a",
                borderRadius: "0.5rem",
                color: "#f5f5f5",
                fontSize: "0.9rem",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={e => { e.currentTarget.style.borderColor = "#c9a84c"; }}
              onBlur={e  => { e.currentTarget.style.borderColor = "#2a2a2a"; }}
            />
          </div>

          {/* Tanggal */}
          <div className="flex flex-col gap-2">
            <label style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#606060" }}>
              Tanggal Kunjungan
            </label>
            <input
              type="date"
              value={tanggal}
              min={today}
              onChange={e => { setTanggal(e.target.value); setError(""); }}
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                background: "#1c1c1c",
                border: "1px solid #2a2a2a",
                borderRadius: "0.5rem",
                color: tanggal ? "#f5f5f5" : "#606060",
                fontSize: "0.9rem",
                outline: "none",
                colorScheme: "dark",
                transition: "border-color 0.2s",
              }}
              onFocus={e => { e.currentTarget.style.borderColor = "#c9a84c"; }}
              onBlur={e  => { e.currentTarget.style.borderColor = "#2a2a2a"; }}
            />
          </div>

          {/* Jam */}
          <div className="flex flex-col gap-2">
            <label style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#606060" }}>
              Jam Kunjungan
            </label>
            <select
              value={jam}
              onChange={e => { setJam(e.target.value); setError(""); }}
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                background: "#1c1c1c",
                border: "1px solid #2a2a2a",
                borderRadius: "0.5rem",
                color: jam ? "#f5f5f5" : "#606060",
                fontSize: "0.9rem",
                outline: "none",
                cursor: "pointer",
                transition: "border-color 0.2s",
              }}
              onFocus={e => { e.currentTarget.style.borderColor = "#c9a84c"; }}
              onBlur={e  => { e.currentTarget.style.borderColor = "#2a2a2a"; }}
            >
              <option value="" disabled>Pilih jam kunjungan</option>
              {["10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30",
                "14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30",
                "18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30"].map(h => (
                <option key={h} value={h} style={{ background: "#1c1c1c", color: "#f5f5f5" }}>
                  {h} WIB
                </option>
              ))}
            </select>
          </div>

          {/* Error message */}
          {error && (
            <p style={{ fontSize: "0.8rem", color: "#f87171", background: "rgba(248,113,113,0.08)", padding: "0.5rem 0.75rem", borderRadius: "0.375rem", border: "1px solid rgba(248,113,113,0.2)" }}>
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="btn-gold"
            style={{ width: "100%", justifyContent: "center", marginTop: "0.25rem" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.929 1.399 5.594L0 24l6.593-1.375A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.868 9.868 0 01-5.031-1.378l-.361-.214-3.735.979 1.003-3.653-.235-.374A9.845 9.845 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z"/>
            </svg>
            Kirim Pesanan via WhatsApp
          </button>

          <p style={{ fontSize: "0.7rem", color: "#3a3a3a", textAlign: "center" }}>
            Kamu akan diarahkan ke WhatsApp dengan pesan yang sudah terisi otomatis.
          </p>
        </form>

        {/* Bottom gold accent bar */}
        <div style={{ height: "2px", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
      </div>
    </div>
  );
}
