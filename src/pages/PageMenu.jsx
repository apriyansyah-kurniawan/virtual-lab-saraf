import React from "react";
import PageShell from "../components/PageShell";
import dokterImg from '../assets/scientist.png';

export default function PageMenu({ onBack, onNavigate }) {
  return (
    <PageShell onBack={onBack} showNext={false} className="p-0">
      <div className="min-h-[calc(100dvh-8rem)] flex items-center justify-center p-4">
        {/* Card Frame Putih */}
        <div className="relative bg-white border-[4px] border-slate-900 rounded-[2.5rem] shadow-[8px_8px_0px_#000] max-w-xl w-full p-8 flex flex-col md:flex-row items-center justify-center gap-10">

          {/* Badge Label MENU */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#5CB85C] border-[3.5px] border-slate-900 px-6 py-2 rounded-2xl shadow-[4px_4px_0px_#000]">
            <h1 className="font-['Press_Start_2P'] text-xs sm:text-sm text-white tracking-widest uppercase">
              MENU
            </h1>
          </div>

          {/* Karakter Dokter / Ilmuwan (Ukuran Diperbesar) */}
          <div className="flex-1 flex justify-center items-center h-48 md:h-56">
            <img
              src={dokterImg}
              alt="Ilmuwan"
              className="h-32 w-auto object-contain scale-[2.3] origin-center [image-rendering:pixelated] drop-shadow-md select-none pointer-events-none"
            />
          </div>

          {/* Tombol Navigasi Menu */}
          <div className="flex-1 flex flex-col gap-3.5 w-full md:w-56">
            <button
              type="button"
              onClick={() => onNavigate("materi")}
              className="w-full py-4 px-4 bg-[#F87171] hover:bg-[#EF4444] text-white border-[3.5px] border-slate-900 rounded-2xl font-['Press_Start_2P'] text-xs sm:text-sm shadow-[4px_4px_0px_#000] active:translate-y-1 active:shadow-[1px_1px_0px_#000] transition-all cursor-pointer select-none"
            >
              Ruang Materi
            </button>

            <button
              type="button"
              onClick={() => onNavigate("praktikum")}
              className="w-full py-4 px-4 bg-[#5CB85C] hover:bg-[#4CAE4C] text-white border-[3.5px] border-slate-900 rounded-2xl font-['Press_Start_2P'] text-xs sm:text-sm shadow-[4px_4px_0px_#000] active:translate-y-1 active:shadow-[1px_1px_0px_#000] transition-all cursor-pointer select-none"
            >
              Praktikum
            </button>

            <button
              type="button"
              onClick={() => onNavigate("soal")}
              className="w-full py-4 px-4 bg-[#F6AD55] hover:bg-[#ED8936] text-slate-900 border-[3.5px] border-slate-900 rounded-2xl font-['Press_Start_2P'] text-xs sm:text-sm shadow-[4px_4px_0px_#000] active:translate-y-1 active:shadow-[1px_1px_0px_#000] transition-all cursor-pointer select-none"
            >
              Soal
            </button>
          </div>

        </div>
      </div>
    </PageShell>
  );
}