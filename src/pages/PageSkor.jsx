import { useRef, useState } from "react";
import PageShell from "../components/PageShell";
import { BIBLIOGRAPHY } from "../data/questions";
import { supabase, isSupabaseConfigured } from "../lib/supabaseClient";

export default function PageSkor({
  nama,
  kelas,
  skor,
  kesimpulan,
  timeTaken,
  submitStatus,
  onUlangi,
  onMenu,
}) {
  const kesimpulanRef = useRef(null);
  const [submitError, setSubmitError] = useState("");

  // Note: We are not handling submit here because it's done in VirtualLabSarafApp.jsx.
  // We only display status and handle errors if any (though errors are caught in the parent and setSubmitStatus to 'error').

  return (
    <PageShell showBack={false} showNext={false}>
      <div className="w-full max-w-full">
        <div className="content-card w-full max-w-full">
          <label
            htmlFor="kesimpulan-input"
            className="block font-extrabold uppercase text-sm sm:text-base mb-3"
          >
            KESIMPULAN SISWA
          </label>
          <textarea
            id="kesimpulan-input"
            ref={kesimpulanRef}
            value={kesimpulan}
            readOnly
            rows={5}
            className="w-full max-w-full border-3 border-slate-800 rounded-xl px-4 py-3 bg-white outline-none focus:ring-4 focus:ring-emerald-300 mb-6 overflow-y-auto"
          />

          <div className="text-center bg-[#cbd5e1] border-4 border-slate-800 rounded-xl py-6 mb-6 shadow-[4px_4px_0_#1e293b]">
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-wide">
              SKOR ANDA: {skor}
            </p>
          </div>

          <div className="text-center bg-[#cbd5e1] border-4 border-slate-800 rounded-xl py-2 mb-4">
            <p className="text-sm font-medium text-slate-700">
              Nama: {nama || '-'}
            </p>
          </div>

          <div className="text-center bg-[#cbd5e1] border-4 border-slate-800 rounded-xl py-2 mb-4">
            <p className="text-sm font-medium text-slate-700">
              Kelas: {kelas || '-'}
            </p>
          </div>

          <div className="text-center bg-[#cbd5e1] border-4 border-slate-800 rounded-xl py-2 mb-4">
            <p className="text-sm font-medium text-slate-700">
              Waktu Pengerjaan: {timeTaken} detik
            </p>
          </div>

          {submitStatus === "submitting" && (
            <p className="text-center text-sm font-semibold text-blue-600 mb-2">
              Mengirim nilai dan jawaban essay...
            </p>
          )}
          {submitStatus === "success" && (
            <p className="text-center text-sm font-semibold text-emerald-700 mb-2">
              ✅ Nilai dan jawaban essay Anda telah berhasil tersimpan ke sistem.
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-center text-sm font-semibold text-red-600 mb-2">
              ❌ Gagal mengirim nilai. Periksa koneksi dan coba lagi.
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
            <button
              type="button"
              onClick={onUlangi}
              className="score-action-btn select-none bg-amber-400 hover:bg-amber-300"
            >
              Ulangi Game
            </button>
            <button
              type="button"
              onClick={onMenu}
              className="score-action-btn select-none bg-sky-400 hover:bg-sky-300"
            >
              Menu
            </button>
          </div>
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