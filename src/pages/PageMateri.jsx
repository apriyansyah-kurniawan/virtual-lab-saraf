import React, { useState } from 'react';
import PageShell from '../components/PageShell';
import neuronImg from '../assets/neuron.png'; // pastikan path aset sesuai

const ORGANEL_DATA = {
  dendrit: {
    nama: "Dendrit",
    fungsi: "Menerima impuls atau rangsangan dari reseptor atau sel saraf lain dan meneruskannya ke badan sel."
  },
  badan_sel: {
    nama: "Badan Sel",
    fungsi: "Mengolah impuls serta memelihara fungsi metabolisme sel saraf karena mengandung sitoplasma dan organel."
  },
  nukleus: {
    nama: "Nukleus (Inti Sel)",
    fungsi: "Pusat pengendali seluruh aktivitas pertumbuhan, metabolisme, dan fungsi di dalam sel saraf."
  },
  mielin: {
    nama: "Selubung Mielin",
    fungsi: "Lapisan lemak pelindung akson yang berfungsi mempercepat laju transmisi impuls listrik."
  },
  akson: {
    nama: "Akson (Neurit)",
    fungsi: "Serabut panjang yang menghantarkan impuls listrik dari badan sel ke neuron berikutnya atau efektor."
  },
  schwann: {
    nama: "Sel Schwann",
    fungsi: "Sel pendukung yang membungkus dan membentuk selubung mielin serta membantu regenerasi sel saraf."
  },
  nodus: {
    nama: "Nodus Ranvier",
    fungsi: "Bagian akson yang tidak bermielin; berfungsi melipatgandakan transmisi impuls melompat (saltatori)."
  },
  sinapsis: {
    nama: "Sinapsis (Ujung Akson)",
    fungsi: "Titik temu komunikasi antar-neuron yang meneruskan neurotransmitter kimiawi ke dendrit penerima."
  }
};

export default function PageMateri({ onBack, onNavigate }) {
  const [selected, setSelected] = useState(null);

  const handleBack = () => {
    if (onBack) onBack();
    else if (onNavigate) onNavigate('menu');
  };

  return (
    <PageShell className="p-0" onBack={handleBack} showNext={false}>
      <div className="min-h-[calc(100dvh-8rem)] w-full flex items-center justify-center p-3 sm:p-4">

        {/* Card Frame Putih Compact */}
        <div className="relative bg-white border-[4px] border-slate-900 rounded-[2.5rem] shadow-[8px_8px_0px_#000] px-6 py-5 w-full max-w-4xl flex flex-col items-center">

          {/* Header */}
          <div className="text-center mb-2">
            <h1 className="font-['Press_Start_2P'] text-sm sm:text-base text-slate-900 tracking-wide mb-1">
              STRUKTUR NEURON
            </h1>
            <p className="text-[11px] sm:text-xs text-slate-600 font-semibold">
              🚨 sentuh kolom untuk melihat materi
            </p>
          </div>

          {/* Kanvas ViewBox 800x420 Terkunci Presisi */}
          <div className="relative w-full max-w-3xl aspect-[800/420] flex items-center justify-center select-none overflow-visible">

            {/* Gambar Ilustrasi Sel Neuron */}
            <img
              src={neuronImg}
              alt="Neuron"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-sm z-0"
            />

            {/* SVG Garis Penunjuk Kalibrasi Presisi Canva */}
            <svg
              viewBox="0 0 800 420"
              className="absolute inset-0 w-full h-full pointer-events-none z-10 stroke-slate-900 stroke-[2.2]"
            >
              {/* 1. DENDRIT: Kiri Atas -> Cabang Dendrit Atas */}
              <line x1="385" y1="155" x2="415" y2="205" />

              {/* 2. SELUBUNG MIELIN: Atas -> Bantalan Mielin Pertama */}
              <line x1="485" y1="155" x2="485" y2="235" />

              {/* 3. NODUS RANVIER: Atas Kanan -> Celah Antar Bantalan Mielin */}
              <line x1="540" y1="155" x2="540" y2="238" />

              {/* 4. BADAN SEL: Kiri -> Sitoplasma Badan Sel */}
              <line x1="330" y1="248" x2="385" y2="248" />

              {/* 5. NUKLEUS: Kiri Bawah -> Inti Sel Bulat Ungu */}
              <line x1="330" y1="295" x2="395" y2="252" />

              {/* 6. AKSON: Bawah Kiri -> Batang Akson Sebelum Mielin */}
              <line x1="465" y1="315" x2="465" y2="238" />

              {/* 7. SEL SCHWANN: Bawah Tengah -> Inti Selubung Mielin */}
              <line x1="515" y1="315" x2="515" y2="242" />

              {/* 8. SINAPSIS: Bawah Kanan -> Titik Ujung Percabangan Akson */}
              <line x1="600" y1="315" x2="600" y2="265" />
            </svg>

            {/* Tombol Organel (Posisi Sesuai Titik Garis) */}
            {/* 1. DENDRIT */}
            <button
              type="button"
              onClick={() => setSelected(ORGANEL_DATA.dendrit)}
              style={{ left: '48%', top: '35%', transform: 'translate(-50%, -50%)' }}
              className="absolute px-3 py-1 bg-white hover:bg-[#5CB85C] hover:text-white border-2 border-slate-900 rounded-xl font-['Press_Start_2P'] text-[9px] shadow-[2.5px_2.5px_0px_#000] cursor-pointer z-20"
            >
              DENDRIT
            </button>

            {/* 2. SELUBUNG MIELIN */}
            <button
              type="button"
              onClick={() => setSelected(ORGANEL_DATA.mielin)}
              style={{ left: '60.5%', top: '35%', transform: 'translate(-50%, -50%)' }}
              className="absolute px-2.5 py-1 bg-white hover:bg-[#5CB85C] hover:text-white border-2 border-slate-900 rounded-xl font-['Press_Start_2P'] text-[8px] shadow-[2.5px_2.5px_0px_#000] cursor-pointer z-20 text-center leading-tight"
            >
              SELUBUNG<br/>MIELIN
            </button>

            {/* 3. NODUS RANVIER */}
            <button
              type="button"
              onClick={() => setSelected(ORGANEL_DATA.nodus)}
              style={{ left: '67.5%', top: '35%', transform: 'translate(-50%, -50%)' }}
              className="absolute px-2.5 py-1 bg-white hover:bg-[#5CB85C] hover:text-white border-2 border-slate-900 rounded-xl font-['Press_Start_2P'] text-[8px] shadow-[2.5px_2.5px_0px_#000] cursor-pointer z-20 text-center leading-tight"
            >
              NODUS<br/>RANVIER
            </button>

            {/* 4. BADAN SEL */}
            <button
              type="button"
              onClick={() => setSelected(ORGANEL_DATA.badan_sel)}
              style={{ left: '35%', top: '59%', transform: 'translate(-50%, -50%)' }}
              className="absolute px-3 py-1.5 bg-white hover:bg-[#5CB85C] hover:text-white border-2 border-slate-900 rounded-xl font-['Press_Start_2P'] text-[9px] shadow-[2.5px_2.5px_0px_#000] cursor-pointer z-20 text-center leading-tight"
            >
              BADAN<br/>SEL
            </button>

            {/* 5. NUKLEUS */}
            <button
              type="button"
              onClick={() => setSelected(ORGANEL_DATA.nukleus)}
              style={{ left: '35%', top: '71%', transform: 'translate(-50%, -50%)' }}
              className="absolute px-3 py-1 bg-white hover:bg-[#5CB85C] hover:text-white border-2 border-slate-900 rounded-xl font-['Press_Start_2P'] text-[9px] shadow-[2.5px_2.5px_0px_#000] cursor-pointer z-20"
            >
              NUKLEUS
            </button>

            {/* 6. AKSON */}
            <button
              type="button"
              onClick={() => setSelected(ORGANEL_DATA.akson)}
              style={{ left: '58%', top: '79%', transform: 'translate(-50%, -50%)' }}
              className="absolute px-3 py-1 bg-white hover:bg-[#5CB85C] hover:text-white border-2 border-slate-900 rounded-xl font-['Press_Start_2P'] text-[9px] shadow-[2.5px_2.5px_0px_#000] cursor-pointer z-20"
            >
              AKSON
            </button>

            {/* 7. SEL SCHWANN */}
            <button
              type="button"
              onClick={() => setSelected(ORGANEL_DATA.schwann)}
              style={{ left: '64.5%', top: '79%', transform: 'translate(-50%, -50%)' }}
              className="absolute px-2.5 py-1 bg-white hover:bg-[#5CB85C] hover:text-white border-2 border-slate-900 rounded-xl font-['Press_Start_2P'] text-[8px] shadow-[2.5px_2.5px_0px_#000] cursor-pointer z-20 text-center leading-tight"
            >
              SEL<br/>SCHWANN
            </button>

            {/* 8. SINAPSIS */}
            <button
              type="button"
              onClick={() => setSelected(ORGANEL_DATA.sinapsis)}
              style={{ left: '75%', top: '79%', transform: 'translate(-50%, -50%)' }}
              className="absolute px-3 py-1 bg-white hover:bg-[#5CB85C] hover:text-white border-2 border-slate-900 rounded-xl font-['Press_Start_2P'] text-[9px] shadow-[2.5px_2.5px_0px_#000] cursor-pointer z-20"
            >
              SINAPSIS
            </button>

          </div>

        </div>

        {/* Modal Dialog Info Organel */}
        {selected && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
            <div className="bg-white border-[3.5px] border-slate-900 rounded-3xl shadow-[8px_8px_0px_#000] p-6 max-w-md w-full relative animate-scaleUp">
              <div className="flex justify-between items-center border-b-2 border-slate-900 pb-3 mb-3">
                <h3 className="font-['Press_Start_2P'] text-xs text-[#5CB85C]">
                  {selected.nama}
                </h3>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="w-7 h-7 bg-[#F87171] text-white border-2 border-slate-900 rounded-lg flex items-center justify-center font-bold text-xs hover:bg-[#EF4444] cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
                {selected.fungsi}
              </p>
            </div>
          </div>
        )}

      </div>
    </PageShell>
  );
}