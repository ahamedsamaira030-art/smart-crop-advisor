import { Link } from "react-router-dom";
import BrandMark from "./BrandMark";
const navItems = [
  ["home", "⌂", "Home"],
  ["advisory", "♧", "Crop advice"],
  ["disease", "⌕", "Disease scan"],
  ["market", "↗", "Market"],
  ["rotation", "⟳", "Rotation"],
];
export default function DashboardShell({
  page,
  setPage,
  theme,
  setTheme,
  children,
}) {
  return (
    <div className="min-h-screen bg-farm-bg text-farm-ink md:grid md:grid-cols-[230px_minmax(0,1fr)]">
      <nav
        aria-label="Main navigation"
        className="fixed inset-x-0 bottom-0 z-20 flex items-center justify-around border-t border-farm-line bg-farm-surface px-1 pb-[max(6px,env(safe-area-inset-bottom))] pt-1 md:sticky md:top-0 md:h-screen md:flex-col md:items-stretch md:justify-start md:gap-1 md:border-r md:border-t-0 md:px-4 md:py-6"
      >
        <Link
          className="mb-5 hidden items-center gap-2 font-display text-xl font-extrabold md:flex"
          to="/"
        >
          <BrandMark />
          KrishiMitra
        </Link>
        {navItems.map(([id, icon, label]) => (
          <button
            key={id}
            onClick={() => setPage(id)}
            aria-current={page === id ? "page" : undefined}
            className={`flex flex-col items-center gap-0.5 rounded-xl px-2 py-2 text-[.68rem] font-medium transition md:flex-row md:gap-3 md:px-3 md:py-2.5 md:text-sm ${page === id ? "bg-farm-leaf text-white" : "hover:bg-farm-bg"}`}
          >
            <span className="w-5 text-center text-lg" aria-hidden="true">
              {icon}
            </span>
            {label}
          </button>
        ))}
        <div className="hidden flex-1 md:block" />
        <button
          onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
          className="hidden rounded-xl border border-farm-line px-3 py-2 text-sm md:block"
        >
          Switch theme
        </button>
      </nav>
      <main className="mx-auto w-full max-w-6xl px-4 pb-28 pt-7 sm:px-7 md:px-10 md:pb-16">
        {children}
      </main>
    </div>
  );
}
