import React from "react";
import PageShell from "../components/PageShell";
import RetroButton from "../components/RetroButton";

const DAFTAR_PUSTAKA = [
  {
    penulis: "Aslamiah, P. F., Vidapuri, P., & Kusumorini, A.",
    tahun: "2025",
    judul: "Mekanisme Perkembangan Sistem Saraf pada Tahap Organogenesis Awal.",
    sumber: "Polygon: Jurnal Ilmu Komputer Dan Ilmu Pengetahuan Alam, 3(1), 30–39.",
    link: "https://doi.org/10.62383/polygon.v3i1.376"
  },
  {
    penulis: "Handayani, S.",
    tahun: "2021",
    judul: "Anatomi dan Fisiologi Tubuh Manusia.",
    sumber: "Media Sains Indonesia."
  },
  {
    penulis: "Khadijah, S., Tutik Astuti, Mk., Rahayu Widaryanti, Mk., & Ester Ratnaningsih, Mk.",
    tahun: "2020",
    judul: "Buku Ajar Anatomi & Fisiologi Manusia (1st ed.).",
    sumber: "Respati Press."
  },
  {
    penulis: "Meutia, S., Utami, N., Rahmawati, S., Himayani, R., Mata, B. I., Kedokteran, F., & Lampung, U.",
    tahun: "2021",
    judul: "Sistem Saraf Pusat dan Perifer.",
    sumber: "11, 306–311."
  },
  {
    penulis: "VP. Kalajati.",
    tahun: "2020",
    judul: "Belajar Praktis Neuroanatomi.",
    sumber: "Sintesa Book-Indonesia."
  }
];

export default function PageDafpus({ onNavigate }) {
  return (
    <PageShell onBack={() => onNavigate('menu')} showNext={false} className="p-0">
      <div className="min-h-[calc(100dvh-8rem)] bg-[#B2E2F8] flex items-center justify-center p-4">
        <div className="bg-white border-[4px] border-slate-900 rounded-[2.2rem] shadow-[8px_8px_0px_#000] p-6 sm:p-8 max-w-3xl w-full">

          {/* Header */}
          <div className="flex items-center justify-between border-b-[3px] border-slate-900 pb-3 mb-5">
            <span className="font-['Press_Start_2P'] text-xs sm:text-sm text-[#0284C7]">
              DAFTAR PUSTAKA
            </span>
            <span className="text-xs font-bold px-3 py-1 bg-sky-100 border-2 border-slate-900 rounded-lg">
              Referensi
            </span>
          </div>

          {/* List Pustaka */}
          <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar text-xs sm:text-sm leading-relaxed text-slate-800">
            {DAFTAR_PUSTAKA.map((item, idx) => (
              <div key={idx} className="p-3 bg-slate-50 border-2 border-slate-900 rounded-xl shadow-[3px_3px_0px_#000]">
                <p>
                  <span className="font-bold">{item.penulis}</span> ({item.tahun}). {item.judul} <em>{item.sumber}</em>
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline font-mono text-[11px] block mt-1 break-all hover:text-blue-800"
                  >
                    {item.link}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Tombol Balik ke Menu */}
          <div className="mt-6 flex justify-center">
            <RetroButton variant="green" onClick={() => onNavigate('menu')}>
              KEMBALI KE MENU
            </RetroButton>
          </div>

        </div>
      </div>
    </PageShell>
  );
}