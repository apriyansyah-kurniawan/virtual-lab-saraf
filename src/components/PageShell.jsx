import { usePageKey } from "../context/PageContext";
import PixelNav from "./PixelNav";

export default function PageShell({
  children,
  className = "",
  onBack,
  onNext,
  showBack = true,
  showNext = true,
  nextDisabled = false,
  withNav = true,
  wide = false,
  centered = false,
}) {
  const pageKey = usePageKey();

  return (
    <div
      className={`min-h-dvh w-full max-w-full overflow-x-hidden overflow-y-auto bg-[#9ee4ff] text-slate-900 font-sans ${className}`}
    >
      <div
        className={`mx-auto w-full px-4 md:px-6 pt-5 md:pt-8 ${
          withNav ? "pb-28" : "pb-8"
        } ${wide ? "max-w-4xl" : "max-w-2xl"}`}
      >
        <div
          key={pageKey}
          className={`page-enter w-full max-w-full ${
            centered ? "min-h-[calc(100dvh-8rem)] flex items-center justify-center" : ""
          }`}
        >
          {children}
        </div>
      </div>

      {withNav && (
        <PixelNav
          onBack={onBack}
          onNext={onNext}
          showBack={showBack}
          showNext={showNext}
          nextDisabled={nextDisabled}
        />
      )}
    </div>
  );
}
