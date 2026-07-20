export default function AvatarPlaceholder({ nama }) {
  const initial = (nama?.trim()?.[0] || "?").toUpperCase();

  return (
    <div
      className="mx-auto mb-6 w-28 h-28 bg-white border-4 border-slate-900 rounded-2xl shadow-[5px_5px_0_#1e293b] flex flex-col items-center justify-center overflow-hidden"
      aria-label="Avatar graphic placeholder"
    >
      <div className="w-full h-8 bg-sky-300 border-b-3 border-slate-900" />
      <div className="flex-1 flex items-center justify-center w-full bg-slate-200">
        <span className="text-4xl font-extrabold text-slate-700">{initial}</span>
      </div>
      <div className="w-full h-6 bg-emerald-400 border-t-3 border-slate-900" />
    </div>
  );
}
