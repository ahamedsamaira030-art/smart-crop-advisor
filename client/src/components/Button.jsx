export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}){
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold transition hover:brightness-110 disabled:cursor-wait disabled:opacity-60";
  const styles =
    variant === "gold"
      ? "bg-farm-gold text-[#1b1500]"
      : variant === "outline"
        ? "border border-current bg-transparent text-inherit"
        : "bg-farm-leaf text-white";
  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}
