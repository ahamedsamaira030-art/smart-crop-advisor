import { useEffect, useState } from "react";
import DashboardShell from "../components/DashboardShell";
import HomeSection from "../components/dashboard/HomeSection";
import AdvisorySection from "../components/dashboard/AdvisorySection";
import DiseaseSection from "../components/dashboard/DiseaseSection";
import MarketSection from "../components/dashboard/MarketSection";
import RotationSection from "../components/dashboard/RotationSection";
const sections = {
  home: HomeSection,
  advisory: AdvisorySection,
  disease: DiseaseSection,
  market: MarketSection,
  rotation: RotationSection,
};
export default function DashboardPage() {
  const [page, setPage] = useState(() => location.hash.slice(1) || "home");
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  const ActiveSection = sections[page] || HomeSection;
  return (
    <DashboardShell
      page={page}
      setPage={setPage}
      theme={theme}
      setTheme={setTheme}
    >
      <ActiveSection setPage={setPage} />
    </DashboardShell>
  );
}
