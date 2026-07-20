import PageShell from "../components/PageShell";
import GreyDefinitionCard from "../components/GreyDefinitionCard";
import { NEURON_PARTS } from "../data/neuronData";

export default function PageMateriDefinisi({ organelId, onBack, onNext }) {
  const part = NEURON_PARTS.find((p) => p.id === organelId) ?? NEURON_PARTS[0];

  return (
    <PageShell onBack={onBack} onNext={onNext}>
      <div className="mb-4 md:mb-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase">
          Materi
        </h1>
        <p className="text-slate-800 font-semibold mt-1 text-sm sm:text-base">
          sentuh kolom untuk melihat materi
        </p>
      </div>

      <GreyDefinitionCard label={part.label} definisi={part.definisi} />
    </PageShell>
  );
}
