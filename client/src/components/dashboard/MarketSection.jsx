import { useMemo, useState } from "react";
import { mandiData, marketData } from "../../data/farmData";
import { Card, PageHeading, Tag } from "../ui";
export default function MarketSection() {
  const [market, setMarket] = useState("Wheat");
  const m = marketData[market];
  const points = useMemo(() => {
    const all = [...m[1], ...m[2]],
      min = Math.min(...all) * 0.98,
      max = Math.max(...all) * 1.02;
    return all
      .map(
        (v, i) =>
          `${20 + (i * 480) / (all.length - 1)},${200 - ((v - min) / (max - min)) * 160}`,
      )
      .join(" ");
  }, [m]);
  return (
    <section>
      <PageHeading title="Market prices">
        Sample mandi rates and illustrative 30-day forecasts. These are not live
        market prices.
      </PageHeading>
      <div className="flex flex-wrap gap-2">
        {Object.keys(marketData).map((k) => (
          <button
            key={k}
            aria-pressed={market === k}
            onClick={() => setMarket(k)}
            className={`rounded-full border px-4 py-2 font-medium ${market === k ? "border-farm-ink bg-farm-ink text-white" : "border-farm-line bg-farm-surface hover:bg-farm-bg"}`}
          >
            {k}
          </button>
        ))}
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-display text-lg font-bold">
              {market} · price per quintal
            </h3>
            <Tag tone={m[3]}>
              {m[4] > 0 ? "▲ " : "▼ "}
              {Math.abs(m[4])}% this week
            </Tag>
          </div>
          <svg
            viewBox="0 0 520 220"
            className="mt-4 w-full"
            role="img"
            aria-label={`${market} sample price trend`}
          >
            <polyline
              fill="none"
              stroke="#1f5a3f"
              strokeWidth="3"
              points={points}
            />
            <line
              x1="420"
              x2="420"
              y1="10"
              y2="205"
              stroke="#d5ddd0"
              strokeDasharray="3 4"
            />
            <text x="24" y="216" fill="#5a6b61" fontSize="11">
              Past 30 days
            </text>
            <text x="510" y="216" textAnchor="end" fill="#5a6b61" fontSize="11">
              Forecast
            </text>
          </svg>
          <p className="text-sm text-farm-muted">
            Illustrative sample data, not live rates.
          </p>
        </Card>
        <Card className="border-l-4 border-l-farm-gold">
          <p className="text-sm text-farm-muted">Sample advice for {market}</p>
          <div className="my-2 font-display text-4xl font-extrabold">
            {m[5]}
          </div>
          <p>{m[6]}</p>
          <p className="mt-3 text-sm text-farm-muted">
            Forecast confidence: 82% (demo)
          </p>
        </Card>
      </div>
      <Card className="mt-4 overflow-x-auto">
        <h3 className="mb-3 font-display text-lg font-bold">
          Nearby mandis · sample values
        </h3>
        <table className="w-full min-w-[540px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-farm-line text-farm-muted">
              <th className="px-2 py-3 font-semibold">Mandi</th>
              <th className="px-2 py-3 font-semibold">Distance</th>
              <th className="px-2 py-3 font-semibold">Price (₹/q)</th>
              <th className="px-2 py-3 font-semibold">Change</th>
            </tr>
          </thead>
          <tbody>
            {mandiData.map(([name, distance, delta]) => (
              <tr
                key={name}
                className="border-b border-farm-line last:border-0"
              >
                <td className="px-2 py-3">{name}</td>
                <td className="px-2 py-3">{distance}</td>
                <td className="px-2 py-3 font-semibold">
                  ₹{(m[0] + delta).toLocaleString("en-IN")}
                </td>
                <td className="px-2 py-3">
                  <Tag tone={delta >= 0 ? "up" : "down"}>
                    {delta >= 0 ? "▲" : "▼"}{" "}
                    {Math.abs((delta / m[0]) * 100).toFixed(1)}%
                  </Tag>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </section>
  );
}
