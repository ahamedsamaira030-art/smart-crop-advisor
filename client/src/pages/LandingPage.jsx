import { Link, useNavigate } from "react-router-dom";
import BrandMark from "../components/BrandMark";
import SectionHeading from "../components/SectionHeading";

const features = [
  {
    title: "Which crop suits my soil?",
    body: "Enter your soil nutrients, pH, rainfall and season. The advisory model ranks crops by how well they fit your field, so you stop guessing.",
    visual: "crops",
  },
  {
    title: "What is wrong with this leaf?",
    body: "Upload one photo. You get the disease name, how serious it is, and a step-by-step treatment you can start the same day.",
    visual: "disease",
  },
  {
    title: "When should I sell?",
    body: "See today’s mandi rates, a 30-day price forecast, and a clear hold or sell-now signal for your crop.",
    visual: "market",
  },
  {
    title: "What should I plant next?",
    body: "Get a three-season rotation plan that rebuilds nitrogen, breaks pest cycles and keeps your soil healthy year after year.",
    visual: "rotation",
  },
];
function FeatureVisual({ type }) {
  // The graph that shows chickpea, wheat etc percentages
  if (type === "crops")
    return (
      <div className="flex flex-col gap-4">
        {[
          ["Chickpea", 92],
          ["Wheat", 81],
          ["Mustard", 66],
        ].map(([name, n]) => (
          <div key={name}>
            <div className="mb-2 flex justify-between text-sm font-semibold">
              <span>{name}</span>
              <span>{n}%</span>
            </div>
            <div className="h-2.5 rounded-full bg-farm-bg">
              <div
                className="h-full rounded-full bg-farm-leaf2"
                style={{ width: `${n}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  if (type === "disease")
    // The disease one
    return (
      <div>
        <span className="inline-flex rounded-full border border-farm-line bg-farm-bg px-3 py-1 text-sm font-semibold text-farm-chili">
          Tomato early blight · Mild
        </span>
        <p className="mt-4 leading-7">
          1. Pick off spotted lower leaves.
          <br />
          2. Spray mancozeb, 2.5 g per litre.
          <br />
          3. Water at the base, not on leaves.
        </p>
      </div>
    );
  if (type === "market")
    return (
      <div>
        <svg
          viewBox="0 0 320 110"
          className="w-full"
          role="img"
          aria-label="Illustrative rising price chart"
        >
          <polyline
            fill="none"
            stroke="#2f7d57"
            strokeWidth="4"
            points="0,80 40,72 80,76 120,58 160,50 200,44"
          />
          <polyline
            fill="none"
            stroke="#e0a526"
            strokeWidth="4"
            strokeDasharray="8 7"
            points="200,44 240,38 280,26 320,16"
          />
        </svg>
        <div className="mt-3 flex justify-between gap-3 text-sm font-semibold">
          <span>Wheat · ₹2,485 per quintal</span>
          <span className="rounded-full bg-farm-bg px-3 py-1">Hold</span>
        </div>
      </div>
    );
  return (
    // The crop rotation one
    <div>
      <div className="flex flex-wrap items-center gap-2 font-semibold">
        <span className="rounded-xl bg-farm-leaf px-3 py-2 text-white">
          Wheat
        </span>
        <span>→</span>
        <span className="rounded-xl bg-farm-leaf2 px-3 py-2 text-white">
          Moong
        </span>
        <span>→</span>
        <span className="rounded-xl bg-farm-gold px-3 py-2 text-[#1b1500]">
          Soybean
        </span>
      </div>
      <p className="mt-4 text-sm text-farm-muted">
        Soil health after three seasons: <b className="text-farm-ink">72%</b>
      </p>
    </div>
  );
}
export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-farm-bg text-farm-ink">
      <header className="overflow-hidden bg-farm-deep text-[#eef6ef]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex items-center justify-between gap-4 py-6">
            <Link
              className="flex items-center gap-2 font-display text-xl font-extrabold"
              to="/"
            >
              <BrandMark />
              KrishiMitra
            </Link>
            <nav className="flex items-center gap-4 text-sm sm:gap-6">
              <a
                className="hidden opacity-85 hover:opacity-100 sm:inline"
                href="#features"
              >
                Features
              </a>
              <a
                className="hidden opacity-85 hover:opacity-100 sm:inline"
                href="#how"
              >
                How it works
              </a>
              <button
                onClick={() => navigate("/app")}
                className="rounded-xl bg-farm-gold px-4 py-2.5 font-semibold text-[#1b1500]"
              >
                Log in
              </button>
            </nav>
          </div>

          {/* The header and writing container */}
          <div className="grid items-center gap-10 pb-16 pt-5 md:grid-cols-[1.1fr_.9fr] md:gap-12 md:pb-24">
            <div>
              <h1 className="font-display text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl">
                Know what your crop needs before it asks.
              </h1>
              
              <p className="mt-6 max-w-xl text-lg leading-8 opacity-90">
                Photograph a sick leaf, get a diagnosis in seconds. Choose the
                right crop for your soil, sell at the right price, and plan next
                season’s rotation. All in one place.
              </p>
              
              {/* Button container */}
              <div className="mt-7 flex flex-wrap gap-3">
                {/* Get started for free button */}
                <button
                  className="rounded-xl bg-farm-gold px-6 py-3.5 font-semibold text-[#1b1500] hover:brightness-110"
                  onClick={() => navigate("/app")}
                >
                  Get started free
                </button>

                {/* See how it works button */}
                <a
                  className="rounded-xl border border-white/60 px-6 py-3.5 font-semibold hover:bg-white/10"
                  href="#how"
                >
                  See how it works
                </a>
              </div>
            </div>
            
            {/* The entire svg container */}
            <div className="relative mx-auto aspect-square w-full max-w-[390px] rounded-[2rem] bg-farm-leaf/40 p-7">
              {/* The leaf svg inner container */}
              <div className="relative grid h-full place-items-center overflow-hidden rounded-2xl border border-white/20 bg-farm-leaf/30">
                <svg viewBox="0 0 300 310" className="h-full w-full p-5">
                  <path
                    d="M150 295C70 250 30 170 70 90 100 35 140 15 150 10c10 5 50 25 80 80 40 80 0 160-80 205z"
                    fill="#2f7d57"
                  />
                  <path
                    d="M150 295V30M150 120l-50-40M150 170l-62-45M150 215l-48-34M150 120l50-40M150 170l62-45M150 215l48-34"
                    stroke="#1f5a3f"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <g fill="#e7c24a">
                    <circle cx="195" cy="120" r="9" />
                    <circle cx="205" cy="150" r="6" />
                    <circle cx="185" cy="170" r="8" />
                    <circle cx="110" cy="190" r="7" />
                    <circle cx="118" cy="140" r="5" />
                  </g>
                </svg>
                <div className="absolute left-0 right-0 top-1/2 h-1 animate-pulse bg-farm-gold shadow-[0_0_22px_4px_rgba(224,165,38,.7)]" />
              </div>

              {/* Two random floating bubbles */}
              <div className="absolute -right-1 top-[24%] rounded-xl bg-farm-surface px-4 py-3 text-farm-ink shadow-xl sm:-right-4">
                <b className="block font-display">Yellow rust</b>
                <span className="text-sm font-semibold text-farm-chili">
                  94% confidence
                </span>
              </div>
              <div className="absolute -bottom-2 left-0 rounded-xl bg-farm-surface px-4 py-3 text-farm-ink shadow-xl sm:-left-4">
                <b className="block font-display">Spray plan ready</b>
                <span className="text-sm font-semibold text-farm-leaf2">
                  Propiconazole · 1 ml/L
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* The yellow strip */}
      <div className="bg-farm-gold text-[#1b1500]">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-9 gap-y-2 px-5 py-4 font-semibold sm:px-8">
          <span>Works on any phone camera</span>
          <span>Prices from nearby mandis</span>
          <span>Advice in simple language</span>
        </div>
      </div>

      <section
        id="features"
        className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20"
      >
        {/* ai ass section */}
        <SectionHeading
          title="Four tools. One farm."
          description="Each one answers a question farmers ask every season."
        />
        {features.map((f, i) => (
          <div
            key={f.title}
            className="grid items-center gap-7 border-t border-farm-line py-9 md:grid-cols-2 md:gap-12"
          >
            <div className={i % 2 ? "md:order-2" : ""}>
              <h3 className="font-display text-2xl font-bold sm:text-3xl">
                {f.title}
              </h3>
              <p className="mt-3 leading-7 text-farm-muted">{f.body}</p>
            </div>
            <div
              className={`flex min-h-48 flex-col justify-center gap-3 rounded-2xl border border-farm-line bg-farm-surface p-6 ${i % 2 ? "md:order-1" : ""}`}
            >
              <FeatureVisual type={f.visual} />
            </div>
          </div>
        ))}
      </section>
      
      <section
        id="how"
        className="border-y border-farm-line bg-farm-surface py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading title="Start in three steps" />
          <div className="grid gap-0 md:grid-cols-3">
            {[
              [
                "Tell us about your plot",
                "Add your location, crop and soil details once.",
              ],
              ["Ask or snap", "Enter soil values, or take a photo of a leaf."],
              [
                "Act with confidence",
                "Follow clear steps for treatment, selling and next season.",
              ],
            ].map(([title, body], i) => (
              <div
                key={title}
                className="border-t border-farm-line py-6 md:border-l md:border-t-0 md:px-7 md:first:border-l-0 md:first:pl-0"
              >
                {/* Index marker */}
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-full bg-farm-leaf font-display text-lg font-extrabold text-white">
                  {i + 1}
                </div>
                <h3 className="font-display text-xl font-bold">{title}</h3>
                <p className="mt-2 text-farm-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom section */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        {/* The green rectangle */}
        <div className="grid gap-5 rounded-3xl bg-farm-leaf p-8 text-white sm:p-14">
          <h2 className="font-display text-3xl font-extrabold sm:text-5xl">
            Ready for a healthier harvest?
          </h2>
          <p className="max-w-xl">
            Create a free account and run your first leaf scan in under a
            minute.
          </p>

          {/* Button container */}
          <div className="flex flex-wrap gap-3">
            {/* Create free account button */}
            <button
              onClick={() => navigate("/app")}
              className="rounded-xl bg-farm-gold px-5 py-3 font-semibold text-[#1b1500]"
            >
              Create free account
            </button>

            {/* I already have one button */}
            <button
              onClick={() => navigate("/app")}
              className="rounded-xl border border-white/60 px-5 py-3 font-semibold"
            >
              I already have one
            </button>
          </div>

        </div>
      </section>

      {/* The footer */}
      <footer className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-5 pb-16 text-sm text-farm-muted sm:px-8">
        <span>KrishiMitra · Final year project</span>
        <span>Built by [Your team name], [Your college]</span>
      </footer>
    </div>
  );
}
