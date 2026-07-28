export default function RetroIconBox({
  icon: Icon,
  color = "bg-yellow-300",
  shape = "circle",
  size = "md",
  className = "",
  iconClassName = "",
}) {
  const boxSizes = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-20 h-20",
    xl: "w-24 h-24",
  };

  const iconSizes = {
    sm: 18,
    md: 26,
    lg: 36,
    xl: 44,
  };

  const shapeClass = shape === "circle" ? "rounded-full" : "rounded-xl";

  return (
    <div
      className={`retro-icon-box ${color} ${boxSizes[size]} ${shapeClass} ${className}`}
    >
      <Icon
        size={iconSizes[size]}
        strokeWidth={2.5}
        className={`text-black ${iconClassName}`}
        aria-hidden="true"
      />
    </div>
  );
}
