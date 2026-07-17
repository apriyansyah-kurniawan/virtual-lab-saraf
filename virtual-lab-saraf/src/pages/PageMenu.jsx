import PageShell from "../components/PageShell";

const MENU_ITEMS = [
  {
    id: "materi",
    title: "Ruang Materi",
    desc: "Pelajari anatomi neuron secara interaktif.",
    icon: "🔬",
    color: "bg-sky-400",
  },
  {
    id: "praktikum",
    title: "Praktikum",
    desc: "Simulasi alur impuls gerak refleks.",
    icon: "🧪",
    color: "bg-emerald-400",
  },
  {
    id: "soal",
    title: "Soal",
    desc: "Evaluasi pemahaman dan studi kasus.",
    icon: "📝",
    color: "bg-amber-400",
  },
];

export default function PageMenu({ siswaInfo, onNavigate, onBack }) {
  return (
    <PageShell onBack={onBack} showNext={false}>
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-700">
          Menu Utama
        </p>
        <h1 className="text-2xl sm:text-3xl font-extrabold mt-1">
          Halo, {siswaInfo.nama || "Siswa"}!
        </h1>
        <p className="text-slate-700 mt-1">Kelas {siswaInfo.kelas}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MENU_ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onNavigate(item.id)}
            className="text-left bg-white/90 border-4 border-slate-800 rounded-2xl p-6 shadow-[5px_5px_0_#1e293b] hover:shadow-[2px_2px_0_#1e293b] hover:translate-x-[3px] hover:translate-y-[3px] transition-all group"
          >
            <div
              className={`w-14 h-14 ${item.color} border-3 border-slate-900 rounded-xl flex items-center justify-center text-2xl mb-4 shadow-[3px_3px_0_#1e293b]`}
            >
              {item.icon}
            </div>
            <h2 className="text-xl font-extrabold uppercase">{item.title}</h2>
            <p className="text-sm text-slate-700 mt-2 leading-relaxed">
              {item.desc}
            </p>
            <p className="mt-4 text-sm font-bold text-emerald-700 group-hover:underline">
              Buka modul →
            </p>
          </button>
        ))}
      </div>
    </PageShell>
  );
}
