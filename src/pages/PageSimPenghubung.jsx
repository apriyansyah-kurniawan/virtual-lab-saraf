import React, { useState } from 'react';
import PageShell from '../components/PageShell';

// Pastikan path gambar slide 15 sesuai
import imgJalurPenghubung from '../assets/Copy of Virtual Lab Praktikum Sistem Saraf - 17.png';

export default function PageSimPenghubung({ onBack, onNext }) {
  const [active, setActive] = useState(false);

  return (
    <PageShell onBack={onBack} onNext={onNext}>
      <div className="min-h-[calc(100dvh-8rem)] w-full flex items-center justify-center p-3 select-none">
        <div className="relative bg-white border-[4px] border-slate-900 rounded-[2.5rem] shadow-[8px_8px_0px_#000] px-6 py-5 w-full max-w-4xl flex flex-col items-center">

          {/* Header */}
          <div className="bg-[#E0F2FE] border-2 border-slate-900 rounded-2xl px-5 py-2 mb-2 text-center w-full max-w-2xl flex items-center justify-center gap-3">
            <span className="bg-[#F97316] text-white font-['Press_Start_2P'] text-[9px] px-2.5 py-1 rounded-lg border-2 border-slate-900 shadow-[1.5px_1.5px_0px_#000]">
              Penghubung
            </span>
            <span className="text-xs sm:text-sm text-slate-800 font-bold">
              Dorong impuls ke arah interneuron untuk melihat transmisi sinyal antar saraf.
            </span>
          </div>

          {/* Kanvas Simulasi */}
          <div className="relative w-full max-w-3xl aspect-[800/360] flex items-center justify-center select-none overflow-hidden my-auto">
            <img
              src={imgJalurPenghubung}
              alt="Saraf Penghubung (Interneuron)"
              className="w-full h-full object-contain pointer-events-none drop-shadow-sm scale-[1.35] sm:scale-[1.45] z-0"
            />

            {/* Tombol Impuls Interaktif di Bawah */}
            <div
              onClick={() => setActive(true)}
              style={{ left: '35%', top: '78%', transform: 'translate(-50%, -50%)' }}
              className={`absolute flex flex-col items-center cursor-pointer transition-all duration-300 z-20 ${
                active ? 'scale-105' : 'hover:scale-110 animate-pulse'
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 border-2 border-slate-900 shadow-[0_0_15px_#FACC15] flex items-center justify-center">
                <span className="text-xs">⚡</span>
              </div>
              <span className={`mt-1 border-2 border-slate-900 font-['Press_Start_2P'] text-[7px] px-2 py=0.5 rounded-md shadow-[2px_2px_0px_#000] ${
                active ? 'bg-[#86EFAC]' : 'bg-[#FEF08A]'
              }`}>
                {active ? 'TERKIRIM' : 'DORONG IMPULS'}
              </span>
            </div>

            {/* Jalur Animasi Cahaya Impuls */}
            {active && (
              <div
                style={{
                  position: 'absolute',
                  left: '32%',
                  top: '48%',
                  width: '42%',
                  height: '30px',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                  zIndex: 30
                }}
              >
                <div className="absolute top-0 animate-impuls-glowing flex items-center justify-center">
                  <div className="absolute w-8 h-8 rounded-full bg-yellow-400/60 animate-ping" />
                  <div className="relative w-6 h-6 rounded-full bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 border-2 border-white shadow-[0_0_16px_#FACC15,0_0_30px_#F59E0B] flex items-center justify-center">
                    <span className="text-[10px]">⚡</span>
                  </div>
                </div>
              </div>
            )}

            <div className="absolute bottom-[4%] w-full text-center text-slate-800 font-bold text-xs pointer-events-none z-10">
              Saraf Penghubung (Interneuron)
            </div>
          </div>

          {/* Status Bar */}
          <div className="mt-2 flex items-center justify-between w-full max-w-2xl px-2">
            <div className="text-xs font-bold text-slate-700">
              Status: {active ? (
                <span className="text-[#16A34A] animate-pulse">⚡ Impuls berhasil diproses dan diteruskan oleh interneuron!</span>
              ) : (
                <span className="text-slate-500">Klik 'Dorong Impuls' untuk memproses sinyal...</span>
              )}
            </div>
            {active && (
              <button
                type="button"
                onClick={() => setActive(false)}
                className="px-3 py-1.5 bg-[#E2E8F0] hover:bg-[#CBD5E1] text-slate-900 border-2 border-slate-900 rounded-xl font-['Press_Start_2P'] text-[8px] cursor-pointer shadow-[2px_2px_0px_#000] active:translate-y-0.5"
              >
                ULANGI
              </button>
            )}
          </div>

        </div>
      </div>
    </PageShell>
  );
}