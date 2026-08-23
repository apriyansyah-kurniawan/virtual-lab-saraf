import React from 'react';
import scientistImg from '../assets/scientist.png';

export default function PageMenu({ onNavigate, setCurrentPage, setPage }) {
  const handleNav = (target) => {
    if (typeof onNavigate === 'function') {
      onNavigate(target);
    } else if (typeof setCurrentPage === 'function') {
      setCurrentPage(target);
    } else if (typeof setPage === 'function') {
      setPage(target);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#B2E2F8] flex items-center justify-center p-4">
      <div className="w-full max-w-xl md:max-w-2xl bg-white border-[4px] border-slate-900 rounded-[2.2rem] shadow-[7px_7px_0px_#000] p-5 sm:p-7 min-h-[360px] md:min-h-[380px] flex flex-col justify-center relative">
        {/* Badge MENU at top center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center">
          <span
            style={{ fontFamily: "'Press Start 2P', monospace" }}
            className="bg-[#48BB78] border-[3.5px] border-slate-900 px-6 py-2 rounded-xl text-white shadow-[3px_3px_0px_#000] text-lg font-bold"
          >
            MENU
          </span>
        </div>

        {/* Content: 2 column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-6 md:gap-8 w-full">
          {/* Left: Scientist image */}
          <div className="flex items-center justify-center w-full h-[280px] overflow-visible relative">
            <img
              src={scientistImg}
              alt="Ilmuwan"
              style={{ width: '300px', minWidth: '300px', transform: 'scale(1.9)', transformOrigin: 'center', imageRendering: 'pixelated' }}
              className="object-contain select-none pointer-events-none drop-shadow-[4px_6px_0px_rgba(0,0,0,0.15)]"
            />
          </div>

          {/* Right: Vertical stack of 3 buttons */}
          <div className="flex flex-col gap-3.5 w-full max-w-[260px] sm:max-w-[280px]">
            {/* Ruang Materi */}
            <button
              onClick={() => handleNav('materi-definisi')}
              style={{ fontFamily: "'Press Start 2P', monospace" }}
              className="w-full py-3 px-6 rounded-full border-[3.5px] border-slate-900 text-center bg-[#E53E3E] text-white shadow-[4px_4px_0px_#000] active:translate-y-1 active:shadow-[1px_1px_0px_#000] transition-all cursor-pointer select-none text-xs sm:text-sm font-bold tracking-wider"
            >
              Ruang Materi
            </button>

            {/* Praktikum */}
            <button
              onClick={() => handleNav('langkah-praktikum')}
              style={{ fontFamily: "'Press Start 2P', monospace" }}
              className="w-full py-3 px-6 rounded-full border-[3.5px] border-slate-900 text-center bg-[#86EFAC] text-slate-900 shadow-[4px_4px_0px_#000] active:translate-y-1 active:shadow-[1px_1px_0px_#000] transition-all cursor-pointer select-none text-xs sm:text-sm font-bold tracking-wider"
            >
              Praktikum
            </button>

            {/* Soal */}
            <button
              onClick={() => handleNav('soal')}
              style={{ fontFamily: "'Press Start 2P', monospace" }}
              className="w-full py-3 px-6 rounded-full border-[3.5px] border-slate-900 text-center bg-[#FB923C] text-slate-900 shadow-[4px_4px_0px_#000] active:translate-y-1 active:shadow-[1px_1px_0px_#000] transition-all cursor-pointer select-none text-xs sm:text-sm font-bold tracking-wider"
            >
              Soal
            </button>
          </div>
        </div>

        {/* Back arrow button (bottom left) - kept for consistency */}
        <button
          onClick={() => handleNav('tujuan')}
          className="fixed bottom-6 left-6 w-12 h-12 bg-[#48BB78] border-[3.5px] border-slate-900 rounded-xl flex items-center justify-center shadow-[3px_3px_0px_#000] hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#000] transition active:scale-90 z-50 cursor-pointer text-white text-2xl font-bold"
        >
          &#9664;
        </button>
      </div>
    </div>
  );
}