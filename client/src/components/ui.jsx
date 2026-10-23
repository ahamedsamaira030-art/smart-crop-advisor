export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-farm-line bg-farm-surface p-5 sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}
export function PageHeading({ title, children }) {
  return (
    <div className="mb-6">
      <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h1>
      <p className="mt-2 max-w-3xl text-farm-muted">{children}</p>
    </div>
  );
}
export function Tag({ children, tone = "neutral" }) {
  const tones = {
    neutral: "border-farm-line bg-farm-bg text-farm-ink",
    up: "border-emerald-200 bg-emerald-50 text-emerald-800",
    down: "border-red-200 bg-red-50 text-red-800",
    danger: "border-red-200 bg-red-50 text-red-800",
    warning: "border-amber-200 bg-amber-50 text-amber-900",
    success: "border-emerald-200 bg-emerald-50 text-emerald-800",
  };
  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${tones[tone] || tones.neutral}`}
    >
      {children}
    </span>
  );
}
export function Progress({ value }) {
  return (
    <div className="h-2.5 overflow-hidden rounded-full bg-farm-bg">
      <div
        className="h-full rounded-full bg-farm-leaf2 transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
export function PrimaryButton({ children, ...props }) {
  return (
    <button
      className="inline-flex items-center justify-center rounded-xl bg-farm-leaf px-5 py-3 font-semibold text-white transition hover:brightness-110 disabled:opacity-60"
      {...props}
    >
      {children}
    </button>
  );
}
export function Field({ label, ...props }) {
  return (
    <label className="block text-sm font-semibold">
      {label}
      <input
        className="mt-1.5 w-full rounded-lg border border-farm-line bg-farm-bg px-3 py-2.5 font-normal text-farm-ink outline-none focus:border-farm-leaf"
        {...props}
      />
    </label>
  );
}
export function SelectField({ label, children, ...props }) {
  return (
    <label className="block text-sm font-semibold">
      {label}
      <select
        className="mt-1.5 w-full rounded-lg border border-farm-line bg-farm-bg px-3 py-2.5 font-normal text-farm-ink outline-none focus:border-farm-leaf"
        {...props}
      >
        {children}
      </select>
    </label>
  );
}
