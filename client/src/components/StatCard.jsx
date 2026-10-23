export default function StatCard({ label, value, note, progress, children }) {
  return (
    <div className="rounded-2xl border border-farm-line bg-farm-surface p-5">
      <p className="text-sm text-farm-muted">{label}</p>
      <div className="my-2 font-display text-3xl font-extrabold">{value}</div>
      {progress != null && (
        <div className="h-2.5 overflow-hidden rounded-full bg-farm-bg">
          <div
            className="h-full rounded-full bg-farm-leaf2"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
      {note && <p className="mt-2 text-sm text-farm-muted">{note}</p>}
      {children}
    </div>
  );
}
