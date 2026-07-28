import PageShell from "../components/PageShell";

const MENU_LINKS = [
  { id: "materi", label: "Ruang Materi" },
  { id: "praktikum", label: "Praktikum" },
  { id: "soal", label: "Soal" },
];

export default function PageMenu({ onNavigate, onBack }) {
  return (
    <PageShell onBack={onBack} showNext={false}>
      <div className="menu-banner mb-8 md:mb-10">
        <h1 className="menu-banner-text">MENU</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-full">
        {MENU_LINKS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onNavigate(item.id)}
            className="menu-link-block select-none"
          >
            {item.label}
          </button>
        ))}
      </div>
    </PageShell>
  );
}
