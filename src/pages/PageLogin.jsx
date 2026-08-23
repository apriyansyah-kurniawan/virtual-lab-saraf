import { useState } from "react";

export default function PageLogin({ nama, setNama, kelas, setKelas, onStart }) {
  const [error, setError] = useState("");

  const handleStart = () => {
    if (!nama.trim()) {
      setError("Nama lengkap wajib diisi!");
      return;
    }
    if (!kelas) {
      setError("Kelas harus dipilih!");
      return;
    }
    setError("");
    onStart();
  };

  return (
    <div className="min-h-screen w-full bg-[#B2E2F8] flex items-center justify-center p-4 py-8 overflow-y-auto">
      <div className="w-full max-w-md bg-white border-[3.5px] border-slate-900 rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#000]">
        <div className="mx-auto mb-6 flex flex-col w-20 h-20 rounded-2xl border-[3.5px] border-slate-900 overflow-hidden flex flex-col bg-white shadow-[4px_4px_0px_#000]">
          <div className="h-5 bg-sky-300 border-b-[2.5px] border-slate-900 w-full shrink-0"></div>
          <div className="flex-1 bg-white flex items-center justify-center text-emerald-600 font-black text-2xl">
            {nama.trim() === "" ? "?" : nama.trim().split(" ").slice(0,2).map(part => part[0]).join("").toUpperCase()}
          </div>
          <div className="h-5 bg-emerald-400 border-t-[2.5px] border-slate-900 w-full shrink-0"></div>
        </div>

        <h1
          style={{ fontFamily: "'Press Start 2P', monospace" }}
          className="text-sm sm:text-base md:text-lg text-slate-900 text-center leading-relaxed mb-6 font-black uppercase"
        >
          Praktikum SISTEM SARAF MANUSIA
        </h1>

        <div className="space-y-5 mt-8">
          <div>
            <label className="block font-bold text-xs text-slate-800 tracking-wider uppercase mb-1.5">
              Nama Lengkap
            </label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full max-w-full border-3 border-slate-800 rounded-xl px-4 py-3 bg-white outline-none focus:ring-4 focus:ring-emerald-300"
            />
          </div>

          <div>
            <label className="block font-bold text-xs text-slate-800 tracking-wider uppercase mb-1.5">
              Kelas
            </label>
            <select
              value={kelas}
              onChange={(e) => setKelas(e.target.value)}
              className="w-full max-w-full border-3 border-slate-800 rounded-xl px-4 py-3 bg-white outline-none focus:ring-4 focus:ring-emerald-300 cursor-pointer"
            >
              <option value="">Pilih Kelas</option>
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
            style={{ fontFamily: "'Press Start 2P', monospace" }}
            className="w-full py-3.5 bg-[#48BB78] hover:bg-[#38A169] text-white border-[3.5px] border-slate-900 rounded-2xl shadow-[4px_4px_0px_#000] active:translate-y-1 active:shadow-[1px_1px_0px_#000] text-sm tracking-wider cursor-pointer mt-4 transition-all"
            onClick={handleStart}
          >
            LANJUTKAN
          </button>
        </div>
      </div>
    </div>
  );
}