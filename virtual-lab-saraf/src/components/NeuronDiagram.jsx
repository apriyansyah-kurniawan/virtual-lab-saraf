const HIGHLIGHT = {
  fill: "rgba(250, 204, 21, 0.55)",
  stroke: "#0f172a",
  strokeWidth: 3,
};

const BASE = {
  stroke: "#0f172a",
  strokeWidth: 2,
};

function PartGroup({ id, active, hover, children }) {
  const lit = active || hover;
  return (
    <g
      id={id}
      className={`neuron-part transition-all duration-300 ${lit ? "neuron-part-active" : ""}`}
      style={{ filter: lit ? "drop-shadow(0 0 6px rgba(250,204,21,0.8))" : "none" }}
    >
      {children}
    </g>
  );
}

export default function NeuronDiagram({ activeId, hoverId }) {
  const isActive = (id) => activeId === id || hoverId === id;

  return (
    <svg
      viewBox="0 0 480 260"
      className="w-full h-full min-h-[220px]"
      role="img"
      aria-label="Diagram sel neuron interaktif"
    >
      {/* Dendrit */}
      <PartGroup id="dendrit" active={isActive("dendrit")} hover={false}>
        <path
          d="M20 130 L55 120 M20 100 L50 115 M20 160 L52 125 M20 85 L48 110 M20 175 L50 135"
          fill="none"
          stroke={isActive("dendrit") ? HIGHLIGHT.stroke : "#f472b6"}
          strokeWidth={isActive("dendrit") ? 4 : 3}
          strokeLinecap="round"
        />
        <circle cx="18" cy="130" r="8" fill="#fbcfe8" stroke={BASE.stroke} strokeWidth={BASE.strokeWidth} />
        <circle cx="18" cy="100" r="6" fill="#fbcfe8" stroke={BASE.stroke} strokeWidth={BASE.strokeWidth} />
        <circle cx="18" cy="160" r="6" fill="#fbcfe8" stroke={BASE.stroke} strokeWidth={BASE.strokeWidth} />
      </PartGroup>

      {/* Badan Sel */}
      <PartGroup id="badan-sel" active={isActive("badan-sel")} hover={false}>
        <circle
          cx="95"
          cy="130"
          r="38"
          fill={isActive("badan-sel") ? "#fde047" : "#7dd3fc"}
          stroke={BASE.stroke}
          strokeWidth={isActive("badan-sel") ? 3 : BASE.strokeWidth}
        />
      </PartGroup>

      {/* Nukleus */}
      <PartGroup id="nukleus" active={isActive("nukleus")} hover={false}>
        <circle
          cx="95"
          cy="130"
          r="16"
          fill={isActive("nukleus") ? "#fde047" : "#c4b5fd"}
          stroke={BASE.stroke}
          strokeWidth={isActive("nukleus") ? 3 : BASE.strokeWidth}
        />
      </PartGroup>

      {/* Akson shaft */}
      <PartGroup id="akson" active={isActive("akson")} hover={false}>
        <line
          x1="133"
          y1="130"
          x2="420"
          y2="130"
          stroke={isActive("akson") ? "#fde047" : "#64748b"}
          strokeWidth={isActive("akson") ? 8 : 6}
          strokeLinecap="round"
        />
      </PartGroup>

      {/* Selubung Mielin segments */}
      <PartGroup id="mielin" active={isActive("mielin")} hover={false}>
        {[170, 215, 260, 305, 350].map((x) => (
          <rect
            key={x}
            x={x}
            y="118"
            width="32"
            height="24"
            rx="6"
            fill={isActive("mielin") ? "#fde047" : "#fb923c"}
            stroke={BASE.stroke}
            strokeWidth={BASE.strokeWidth}
          />
        ))}
      </PartGroup>

      {/* Sel Schwann */}
      <PartGroup id="schwann" active={isActive("schwann")} hover={false}>
        {[186, 231, 276, 321, 366].map((x) => (
          <ellipse
            key={x}
            cx={x + 16}
            cy="155"
            rx="14"
            ry="10"
            fill={isActive("schwann") ? "#fde047" : "#86efac"}
            stroke={BASE.stroke}
            strokeWidth={BASE.strokeWidth}
          />
        ))}
      </PartGroup>

      {/* Nodus Ranvier */}
      <PartGroup id="ranvier" active={isActive("ranvier")} hover={false}>
        {[202, 247, 292, 337].map((x) => (
          <circle
            key={x}
            cx={x}
            cy="130"
            r="6"
            fill={isActive("ranvier") ? "#fde047" : "#fef08a"}
            stroke={BASE.stroke}
            strokeWidth={BASE.strokeWidth}
          />
        ))}
      </PartGroup>

      {/* Sinapsis */}
      <PartGroup id="sinapsis" active={isActive("sinapsis")} hover={false}>
        <circle
          cx="440"
          cy="130"
          r="14"
          fill={isActive("sinapsis") ? "#fde047" : "#34d399"}
          stroke={BASE.stroke}
          strokeWidth={isActive("sinapsis") ? 3 : BASE.strokeWidth}
        />
        <circle cx="455" cy="125" r="5" fill="#a7f3d0" stroke={BASE.stroke} strokeWidth="1.5" />
        <circle cx="460" cy="135" r="4" fill="#a7f3d0" stroke={BASE.stroke} strokeWidth="1.5" />
      </PartGroup>
    </svg>
  );
}
