import { useState } from "react";
import PageShell from "../components/PageShell";
import AvatarPlaceholder from "../components/AvatarPlaceholder";

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
    <PageShell withNav={false} centered>
      <div className="content-card w-full max-w-full">
        <AvatarPlaceholder nama={siswaInfo.nama} />

        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center uppercase tracking-wide text-slate-900 leading-tight">
          Praktikum SISTEM SARAF MANUSIA
        </h1>

        <div className="space-y-5 mt-8">
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
              className="w-full max-w-full border-3 border-slate-800 rounded-xl px-4 py-3 bg-white outline-none focus:ring-4 focus:ring-emerald-300"
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
              className="w-full max-w-full border-3 border-slate-800 rounded-xl px-4 py-3 bg-white outline-none focus:ring-4 focus:ring-emerald-300 cursor-pointer"
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
            className="interactive-btn-primary select-none w-full mt-2 bg-emerald-500 hover:bg-emerald-600 border-4 border-slate-900 text-white font-extrabold text-lg sm:text-xl py-4 rounded-xl shadow-[4px_4px_0_#1e293b] uppercase tracking-widest"
          >
            START
          </button>
        </div>
      </div>
    </PageShell>
  );
}
