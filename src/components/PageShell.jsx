import PixelNav from "./PixelNav";

export default function PageShell({
  children,
  className = "",
  onBack,
  onNext,
  showBack = true,
  showNext = true,
  nextDisabled = false,
  nextLabel,
  backLabel,
  withNav = true,
}) {
  return (
    <div
      className={`min-h-screen w-full bg-[#9ee4ff] text-slate-900 font-sans ${className}`}
    >
      <div className={`max-w-5xl mx-auto px-4 sm:px-8 py-8 ${withNav ? "pb-28" : "pb-8"}`}>
        {children}
      </div>
      {withNav && (
        <PixelNav
          onBack={onBack}
          onNext={onNext}
          showBack={showBack}
          showNext={showNext}
          nextDisabled={nextDisabled}
          nextLabel={nextLabel}
          backLabel={backLabel}
        />
      )}
    </div>
  );
}
