import { useState } from "react";
import PageShell from "../components/PageShell";
import { BIBLIOGRAPHY } from "../data/questions";
import { supabase, isSupabaseConfigured } from "../lib/supabaseClient";

export default function PageSkor({
  siswaInfo,
  skor,
  esaiJawaban,
  kesimpulan,
  setKesimpulan,
  onUlangi,
  onMenu,
}) {
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [submitError, setSubmitError] = useState("");

  const handleSubmitScore = async () => {
    if (!kesimpulan.trim()) {
      setSubmitError("Tuliskan kesimpulan terlebih dahulu!");
      return;
    }

    setSubmitError("");
    setSubmitStatus("loading");

    const payload = {
      nama: siswaInfo.nama,
      kelas: siswaInfo.kelas,
      skor,
      esai_jawaban: esaiJawaban,
      kesimpulan: kesimpulan.trim(),
    };

    try {
      if (isSupabaseConfigured) {
        const { error } = await supabase.from("nilai_siswa").insert([payload]);
        if (error) throw error;
      } else {
        console.info(
          "[Virtual Lab] Supabase belum dikonfigurasi. Data siap dikirim:",
          payload
        );
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }
      setSubmitStatus("success");
    } catch (err) {
      console.error("Gagal mengirim nilai:", err);
      setSubmitStatus("idle");
      setSubmitError(
        err.message || "Gagal mengirim nilai. Periksa koneksi dan coba lagi."
      );
    }
  };

  return (
    <PageShell withNav={false}>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/90 border-4 border-slate-800 rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0_#1e293b]">
          <h1 className="text-xl sm:text-2xl font-extrabold uppercase text-center mb-6">
            Hasil Evaluasi
          </h1>

          <label className="block font-bold uppercase text-sm mb-2">
            Tuliskan Kesimpulan Yang Didapatkan...
          </label>
          <textarea
            value={kesimpulan}
            onChange={(e) => setKesimpulan(e.target.value)}
            placeholder="Tulis kesimpulan dari praktikum virtual lab ini..."
            rows={5}
            className="w-full border-3 border-slate-800 rounded-xl px-4 py-3 bg-white outline-none focus:ring-4 focus:ring-emerald-300 mb-6"
          />

          <div className="text-center bg-[#9ee4ff]/60 border-4 border-slate-800 rounded-xl py-6 mb-6 shadow-[4px_4px_0_#1e293b]">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-700">
              Skor Anda
            </p>
            <p className="text-5xl font-extrabold text-emerald-700 mt-2">
              SKOR ANDA: {skor}
            </p>
          </div>

          {submitError && (
            <p className="text-sm text-red-700 bg-red-100 border-2 border-red-400 rounded-lg px-3 py-2 mb-4">
              {submitError}
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <button
              type="button"
              onClick={onUlangi}
              className="bg-amber-400 hover:bg-amber-300 border-3 border-slate-900 font-extrabold py-3 rounded-xl shadow-[3px_3px_0_#1e293b] uppercase text-sm"
            >
              Ulangi Game
            </button>
            <button
              type="button"
              onClick={onMenu}
              className="bg-sky-400 hover:bg-sky-300 border-3 border-slate-900 font-extrabold py-3 rounded-xl shadow-[3px_3px_0_#1e293b] uppercase text-sm"
            >
              Menu
            </button>
            <button
              type="button"
              onClick={handleSubmitScore}
              disabled={submitStatus === "loading" || submitStatus === "success"}
              className="bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 border-3 border-slate-900 text-white font-extrabold py-3 rounded-xl shadow-[3px_3px_0_#1e293b] uppercase text-sm sm:col-span-1"
            >
              {submitStatus === "loading"
                ? "Mengirim..."
                : submitStatus === "success"
                  ? "Terkirim ✓"
                  : "Kirim Nilai ke Guru"}
            </button>
          </div>

          {submitStatus === "success" && (
            <p className="text-center text-sm font-semibold text-emerald-700 mb-4">
              Nilai berhasil dikirim ke guru!
            </p>
          )}

          {!isSupabaseConfigured && submitStatus !== "success" && (
            <p className="text-xs text-slate-600 text-center mb-4">
              Tip: Atur VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY di file .env
              untuk mengaktifkan penyimpanan ke database.
            </p>
          )}
        </div>

        <div className="mt-8 bg-white/80 border-3 border-slate-800 rounded-xl p-5 shadow-[4px_4px_0_#1e293b]">
          <h2 className="font-extrabold uppercase text-sm mb-3">Daftar Pustaka</h2>
          <ul className="space-y-2 text-sm text-slate-800">
            {BIBLIOGRAPHY.map((item) => (
              <li key={item} className="leading-relaxed">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
