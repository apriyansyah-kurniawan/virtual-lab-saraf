import { useState } from "react";
import PageShell from "../components/PageShell";
import { SIM_PROMPTS } from "../data/tujuanData";

const PATH_POINTS = [
  { id: "reseptor", label: "Reseptor Kulit", x: 12, y: 52 },
  { id: "sensorik", label: "Saraf Sensorik", x: 40, y: 42 },
  { id: "pusat", label: "Sumsum Tulang Belakang", x: 74, y: 32 },
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

  const dotPos =
    phase === 0 ? PATH_POINTS[0] : PATH_POINTS[Math.min(phase - 1, 2)];

  return (
    <PageShell onBack={onBack} onNext={onNext} nextDisabled={phase < 3}>
      <p className="prompt-line mb-4 md:mb-6">{SIM_PROMPTS.sensorik}</p>

      <div className="sim-layout items-stretch">
        <div className="sim-card flex flex-col items-center justify-center min-h-[220px] md:min-h-[320px]">
          <button
            type="button"
            onClick={handleTanganClick}
            disabled={phase > 0}
            className={`select-none text-6xl sm:text-7xl md:text-8xl transition-transform ${
              phase === 0
                ? "hover:scale-110 cursor-pointer animate-pulse"
                : "opacity-70 cursor-default"
            }`}
            aria-label="Tangan"
          >
            🖐️
          </button>
          <p className="mt-4 font-extrabold text-lg sm:text-xl uppercase border-3 border-slate-900 bg-amber-300 px-4 sm:px-6 py-2 rounded-xl shadow-[3px_3px_0_#1e293b]">
            Tangan
          </p>
        </div>

        <div className="sim-card sim-diagram-card">
          <svg
            viewBox="0 0 100 72"
            preserveAspectRatio="xMidYMid meet"
            className="sim-diagram-svg"
            role="img"
            aria-label="Diagram jalur saraf sensorik"
          >
            <line
              x1="12"
              y1="52"
              x2="40"
              y2="42"
              stroke="#334155"
              strokeWidth="1.5"
              strokeDasharray="3 2"
            />
            <line
              x1="40"
              y1="42"
              x2="74"
              y2="32"
              stroke="#334155"
              strokeWidth="1.5"
              strokeDasharray="3 2"
            />

            {PATH_POINTS.map((pt, i) => (
              <g key={pt.id}>
                <rect
                  x={pt.x - 10}
                  y={pt.y - 7}
                  width="20"
                  height="12"
                  rx="2"
                  fill={phase > i ? "#34d399" : "#e2e8f0"}
                  stroke="#1e293b"
                  strokeWidth="0.8"
                />
                <text
                  x={pt.x}
                  y={pt.y + 16}
                  textAnchor="middle"
                  fontSize="4.2"
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
                r="3.5"
                fill="#f97316"
                className="transition-all duration-700 ease-in-out"
                style={{ filter: "drop-shadow(0 0 4px #fb923c)" }}
              >
                <animate
                  attributeName="r"
                  values="3;4.5;3"
                  dur="0.6s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </svg>

          {phase > 0 && (
            <p className="text-center text-sm font-bold text-orange-600 mt-2 uppercase">
              Impuls
            </p>
          )}
        </div>
      </div>
    </PageShell>
  );
}
