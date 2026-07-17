import { useState } from "react";
import PageShell from "../components/PageShell";

export default function PageLogin({ siswaInfo, setSiswaInfo, onStart }) {
  const [error, setError] = useState("");

  const handleStart = () => {
    if (!siswaInfo.nama.trim()) {
      setError("Nama lengkap wajib diisi!");
      return;
    }
    setError("");
    onStart();
  };

  return (
    <PageShell withNav={false}>
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="w-full max-w-lg bg-white/90 backdrop-blur border-4 border-slate-800 rounded-2xl shadow-[6px_6px_0_#1e293b] p-8 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-center uppercase tracking-wide text-slate-900 leading-tight">
            Praktikum SISTEM SARAF MANUSIA
          </h1>
          <p className="text-center text-sm text-slate-600 mt-2 mb-8">
            Virtual Lab Kelas IX — IPA Biologi
          </p>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wide">
                Nama Lengkap
              </label>
              <input
                type="text"
                value={siswaInfo.nama}
                onChange={(e) =>
                  setSiswaInfo({ ...siswaInfo, nama: e.target.value })
                }
                placeholder="Tulis nama lengkapmu..."
                className="w-full border-3 border-slate-800 rounded-xl px-4 py-3 bg-white outline-none focus:ring-4 focus:ring-emerald-300"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wide">
                Kelas
              </label>
              <select
                value={siswaInfo.kelas}
                onChange={(e) =>
                  setSiswaInfo({ ...siswaInfo, kelas: e.target.value })
                }
                className="w-full border-3 border-slate-800 rounded-xl px-4 py-3 bg-white outline-none focus:ring-4 focus:ring-emerald-300 cursor-pointer"
              >
                <option value="9A">9A</option>
                <option value="9B">9B</option>
                <option value="9C">9C</option>
                <option value="9D">9D</option>
              </select>
            </div>

            {error && (
              <p className="text-sm text-red-700 bg-red-100 border-2 border-red-400 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="button"
              onClick={handleStart}
              className="w-full mt-2 bg-emerald-500 hover:bg-emerald-400 border-4 border-slate-900 text-white font-extrabold text-xl py-4 rounded-xl shadow-[4px_4px_0_#1e293b] hover:shadow-[2px_2px_0_#1e293b] hover:translate-x-[2px] hover:translate-y-[2px] transition-all uppercase tracking-widest"
            >
              START
            </button>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
