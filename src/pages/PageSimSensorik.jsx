import { useState } from "react";
import PageShell from "../components/PageShell";

const PATH_POINTS = [
  { id: "reseptor", label: "Reseptor Kulit", x: 12, y: 55 },
  { id: "sensorik", label: "Saraf Sensorik", x: 38, y: 45 },
  { id: "pusat", label: "Sumsum Tulang Belakang", x: 72, y: 35 },
];

export default function PageSimSensorik({ onBack, onNext }) {
  const [phase, setPhase] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handleTanganClick = () => {
    if (animating || phase > 0) return;
    setAnimating(true);
    setPhase(1);
    setTimeout(() => setPhase(2), 900);
    setTimeout(() => setPhase(3), 1800);
    setTimeout(() => setAnimating(false), 2400);
  };

  const dotPos = phase === 0 ? PATH_POINTS[0] : PATH_POINTS[Math.min(phase - 1, 2)];

  return (
    <PageShell
      onBack={onBack}
      onNext={onNext}
      nextDisabled={phase < 3}
      nextLabel={phase >= 3 ? "NEXT" : "NEXT"}
    >
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">
          Simulasi — Tahap Sensorik
        </h1>
        <p className="text-slate-800 font-semibold mt-2">
          Sentuh tangan pada benda panas untuk memulai impuls saraf
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="bg-white/90 border-4 border-slate-800 rounded-2xl p-8 shadow-[5px_5px_0_#1e293b] flex flex-col items-center justify-center min-h-[320px]">
          <button
            type="button"
            onClick={handleTanganClick}
            disabled={phase > 0}
            className={`text-8xl transition-transform ${
              phase === 0
                ? "hover:scale-110 cursor-pointer animate-pulse"
                : "opacity-70 cursor-default"
            }`}
            aria-label="Tangan"
          >
            🖐️
          </button>
          <p className="mt-4 font-extrabold text-xl uppercase border-3 border-slate-900 bg-amber-300 px-6 py-2 rounded-xl shadow-[3px_3px_0_#1e293b]">
            Tangan
          </p>
          <p className="text-sm text-slate-700 mt-3 text-center">
            {phase === 0
              ? "Klik tangan untuk mensimulasikan sentuhan benda panas"
              : "Rangsangan terdeteksi! Impuls bergerak..."}
          </p>
        </div>

        <div className="bg-white/90 border-4 border-slate-800 rounded-2xl p-6 shadow-[5px_5px_0_#1e293b] min-h-[320px] relative">
          <svg viewBox="0 0 100 70" className="w-full h-[280px]">
            <line
              x1="12"
              y1="55"
              x2="38"
              y2="45"
              stroke="#334155"
              strokeWidth="1.5"
              strokeDasharray="3 2"
            />
            <line
              x1="38"
              y1="45"
              x2="72"
              y2="35"
              stroke="#334155"
              strokeWidth="1.5"
              strokeDasharray="3 2"
            />

            {PATH_POINTS.map((pt, i) => (
              <g key={pt.id}>
                <rect
                  x={pt.x - 8}
                  y={pt.y - 6}
                  width="16"
                  height="10"
                  rx="2"
                  fill={phase > i ? "#34d399" : "#e2e8f0"}
                  stroke="#1e293b"
                  strokeWidth="0.8"
                />
                <text
                  x={pt.x}
                  y={pt.y + 14}
                  textAnchor="middle"
                  fontSize="3.5"
                  fontWeight="bold"
                  fill="#1e293b"
                >
                  {pt.label}
                </text>
              </g>
            ))}

            {phase > 0 && (
              <circle
                cx={dotPos.x}
                cy={dotPos.y}
                r="3"
                fill="#f97316"
                className="transition-all duration-700 ease-in-out"
                style={{ filter: "drop-shadow(0 0 4px #fb923c)" }}
              >
                <animate
                  attributeName="r"
                  values="2.5;4;2.5"
                  dur="0.6s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </svg>
        </div>
      </div>
    </PageShell>
  );
}
