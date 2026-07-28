import { useRef, useState } from "react";
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
  const kesimpulanRef = useRef(null);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [submitError, setSubmitError] = useState("");

  const handleSubmitScore = async () => {
    if (!kesimpulan.trim()) {
      setSubmitError("Tuliskan kesimpulan terlebih dahulu!");
      kesimpulanRef.current?.focus();
      return;
    }

    setSubmitError("");
    setSubmitStatus("loading");

    const nama = siswaInfo.nama;
    const kelas = siswaInfo.kelas;

    try {
      // ------------------------------------------------------------------
      // BOILERPLATE INTEGRASI SUPABASE — nilai_siswa remote layout schema
      //
      // import { createClient } from '@supabase/supabase-js';
      // const supabase = createClient(
      //   import.meta.env.VITE_SUPABASE_URL,
      //   import.meta.env.VITE_SUPABASE_ANON_KEY
      // );
      //
      // const { data, error } = await supabase.from('nilai_siswa').insert([
      //   {
      //     nama: nama,
      //     kelas: kelas,
      //     skor: skor,
      //     esai_jawaban: esaiJawaban,
      //     kesimpulan: kesimpulan.trim(),
      //     modul: 'Sistem Saraf Manusia dan Gerak Refleks',
      //     waktu_submit: new Date().toISOString(),
      //   },
      // ]);
      //
      // if (error) throw error;
      // ------------------------------------------------------------------

      if (isSupabaseConfigured) {
        const { error } = await supabase.from("nilai_siswa").insert([
          {
            nama,
            kelas,
            skor,
            esai_jawaban: esaiJawaban,
            kesimpulan: kesimpulan.trim(),
          },
        ]);
        if (error) throw error;
      } else {
        console.info("[Virtual Lab] Data siap dikirim ke nilai_siswa:", {
          nama,
          kelas,
          skor,
          esai_jawaban: esaiJawaban,
          kesimpulan: kesimpulan.trim(),
        });
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

  const focusKesimpulan = () => {
    kesimpulanRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    kesimpulanRef.current?.focus();
  };

  return (
    <PageShell withNav={false}>
      <div className="w-full max-w-full">
        <div className="content-card w-full max-w-full">
          <label
            htmlFor="kesimpulan-input"
            className="block font-extrabold uppercase text-sm sm:text-base mb-3"
          >
            TULISKAN KESIMPULAN YANG DIDAPATKAN...
          </label>
          <textarea
            id="kesimpulan-input"
            ref={kesimpulanRef}
            value={kesimpulan}
            onChange={(e) => setKesimpulan(e.target.value)}
            rows={5}
            className="w-full max-w-full border-3 border-slate-800 rounded-xl px-4 py-3 bg-white outline-none focus:ring-4 focus:ring-emerald-300 mb-6 overflow-y-auto"
          />

          <div className="text-center bg-[#cbd5e1] border-4 border-slate-800 rounded-xl py-6 mb-6 shadow-[4px_4px_0_#1e293b]">
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-wide">
              SKOR ANDA: {skor}
            </p>
          </div>

          {submitError && (
            <p className="text-sm text-red-700 bg-red-100 border-2 border-red-400 rounded-lg px-3 py-2 mb-4">
              {submitError}
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-2">
            <button
              type="button"
              onClick={onUlangi}
              className="score-action-btn select-none bg-amber-400 hover:bg-amber-300"
            >
              Ulangi Game
            </button>
            <button
              type="button"
              onClick={focusKesimpulan}
              className="score-action-btn select-none bg-slate-300 hover:bg-slate-200"
            >
              Kesimpulan
            </button>
            <button
              type="button"
              onClick={onMenu}
              className="score-action-btn select-none bg-sky-400 hover:bg-sky-300"
            >
              Menu
            </button>
          </div>

          {submitStatus === "success" && (
            <p className="text-center text-sm font-semibold text-emerald-700 mb-2">
              Nilai berhasil dikirim ke guru!
            </p>
          )}

          <button
            type="button"
            onClick={handleSubmitScore}
            disabled={submitStatus === "loading" || submitStatus === "success"}
            className="block w-full text-center text-emerald-800 font-bold underline underline-offset-4 hover:text-emerald-600 disabled:opacity-50 disabled:no-underline py-3"
          >
            {submitStatus === "loading" ? "Mengirim nilai..." : "Kirim Nilai ke Guru"}
          </button>
        </div>

        <div className="mt-8 pixel-grey-card">
          <h2 className="pixel-grey-card-title text-base">Daftar Pustaka</h2>
          <ul className="pixel-grey-card-body space-y-2 list-none p-0 m-0">
            {BIBLIOGRAPHY.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
