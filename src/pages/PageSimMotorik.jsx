import React, { useState } from 'react';
import PageShell from '../components/PageShell';

// Pastikan path gambar slide 16 sesuai
import imgJalurMotorik from '../assets/Copy of Virtual Lab Praktikum Sistem Saraf - 18.png';

export default function PageSimMotorik({ onBack, onNext }) {
  const [active, setActive] = useState(false);

  return (
    <PageShell onBack={onBack} onNext={onNext}>
      <div className="min-h-[calc(100dvh-8rem)] w-full flex items-center justify-center p-3 select-none">
        <div className="relative bg-white border-[4px] border-slate-900 rounded-[2.5rem] shadow-[8px_8px_0px_#000] px-6 py-5 w-full max-w-4xl flex flex-col items-center">

          {/* Header */}
          <div className="bg-[#E0F2FE] border-2 border-slate-900 rounded-2xl px-5 py-2 mb-2 text-center w-full max-w-2xl flex items-center justify-center gap-3">
            <span className="bg-[#F97316] text-white font-['Press_Start_2P'] text-xs sm:text-sm md:text-base text-slate-900 px-2.5 py-1 rounded-lg border-2 border-slate-900 shadow-[1.5px_1.5px_0px_#000]">
              Motorik
            </span>
            <span className="text-[10px] sm:text-[11px] md:text-xs text-slate-800 font-bold">
              Kirim impuls dari saraf pusat menuju efektor otot untuk menggerakkan lengan.
            </span>
          </div>

          {/* Kanvas Simulasi */}
          <div className="relative w-full max-w-4xl aspect-[800/360] flex items-center justify-center select-none overflow-hidden my-auto">
            <img
              src={imgJalurMotorik}
              alt="Jalur Saraf Motorik dan Efektor"
              className="w-full h-full object-contain pointer-events-none drop-shadow-sm scale-[1.35] sm:scale-[1.45] z-0"
            />

            {/* Tombol Trigger Impuls */}
            <div
              onClick={() => setActive(true)}
              style={{ left: '34%', top: '78%', transform: 'translate(-50%, -50%)' }}
              className={`absolute flex flex-col items-center cursor-pointer transition-all duration-300 z-20 ${
                active ? 'scale-105' : 'hover:scale-110 animate-pulse'
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 border-2 border-slate-900 shadow-[0_0_15px_#FACC15] flex items-center justify-center">
                <span className="text-xs">⚡</span>
              </div>
              <span className={`mt-1 border-2 border-slate-900 font-['Press_Start_2P'] text-[7px] sm:text-[8px] md:text-[9px] px-2 py-0.5 rounded-md shadow-[2px_2px_0px_#000] ${
                active ? 'bg-[#86EFAC]' : 'bg-[#FEF08A]'
              }`}>
                {active ? 'TERKIRIM' : 'KIRIM PERINTAH'}
              </span>
            </div>

            {/* Jalur Animasi Cahaya Impuls Menuju Otot */}
            {active && (
              <div
                style={{
                  position: 'absolute',
                  left: '32%',
                  top: '56%',
                  width: '38%',
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

            {/* Label Penjelas */}
            <div className="absolute bottom-[4%] w-full px-8 flex justify-between text-slate-800 font-bold text-[11px] sm:text-xs pointer-events-none z-10">
              <span className="ml-[18%]">Saraf Pusat</span>
              <span className="ml-[8%]">Saraf Motorik</span>
              <span className="mr-[12%]">Efektor (Otot)</span>
            </div>
          </div>

          {/* Status Bar */}
          <div className="mt-2 flex items-center justify-between w-full max-w-2xl px-2">
            <div className="text-xs font-bold text-slate-700">
              Status: {active ? (
                <span className="text-[#16A34A] animate-pulse">⚡ Impuls diterima efektor! Otot berkontraksi merespons rangsangan.</span>
              ) : (
                <span className="text-slate-500">Kirim impuls motorik untuk menggerakkan efektor...</span>
              )}
            </div>
            {active && (
              <button
                type="button"
                onClick={() => setActive(false)}
                className="px-3 py-1.5 bg-[#E2E8F0] hover:bg-[#CBD5E1] text-slate-900 border-2 border-slate-900 rounded-xl font-['Press_Start_2P'] text-[7px] sm:text-[8px] md:text-[9px] cursor-pointer shadow-[2px_2px_0px_#000] active:translate-y-0.5"
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