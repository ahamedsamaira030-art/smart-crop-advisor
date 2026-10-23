export const crops = [
  ["Wheat", "Rabi", [80, 40, 40, 6.8, 150]],
  ["Chickpea", "Rabi", [40, 60, 80, 7, 100]],
  ["Mustard", "Rabi", [70, 35, 30, 6.5, 120]],
  ["Rice", "Kharif", [90, 45, 40, 6.2, 1200]],
  ["Maize", "Kharif", [85, 50, 40, 6.3, 600]],
  ["Cotton", "Kharif", [110, 45, 45, 7, 700]],
  ["Watermelon", "Zaid", [100, 20, 50, 6.5, 400]],
  ["Moong", "Zaid", [25, 50, 20, 6.8, 300]],
];
export const diseaseData = {
  rust: {
    name: "Wheat yellow rust",
    confidence: 94,
    severity: "Moderate",
    tone: "danger",
    steps: [
      "Remove and burn heavily infected leaves.",
      "Spray propiconazole 25% EC at 1 ml per litre of water.",
      "Repeat after 15 days if stripes keep spreading.",
      "Avoid late evening irrigation.",
    ],
  },
  blight: {
    name: "Tomato early blight",
    confidence: 89,
    severity: "Mild",
    tone: "warning",
    steps: [
      "Pick off spotted lower leaves.",
      "Spray mancozeb 2.5 g per litre of water.",
      "Stake plants so leaves stay off the soil.",
      "Water at the base, not on leaves.",
    ],
  },
  healthy: {
    name: "Healthy leaf",
    confidence: 97,
    severity: "None",
    tone: "success",
    steps: [
      "No disease found.",
      "Keep monitoring every 5–7 days.",
      "Maintain balanced fertiliser use.",
    ],
  },
};
export const marketData = {
  Wheat: [
    2485,
    [2310, 2330, 2300, 2350, 2380, 2370, 2420, 2410, 2440, 2460, 2485],
    [2500, 2520, 2550, 2580, 2570, 2610],
    "up",
    4.1,
    "Hold",
    "Prices are rising and forecast to climb about 5% over the next month. Wait 2–3 weeks before selling.",
  ],
  Onion: [
    1840,
    [2200, 2120, 2050, 2010, 1950, 1920, 1900, 1880, 1860, 1850, 1840],
    [1800, 1760, 1740, 1790, 1850, 1900],
    "down",
    -7.2,
    "Sell now",
    "Prices are falling and may bottom out in 3 weeks. Sell part of your stock now to limit losses.",
  ],
  Soybean: [
    4620,
    [4500, 4510, 4540, 4530, 4560, 4580, 4590, 4600, 4610, 4615, 4620],
    [4640, 4650, 4660, 4670, 4690, 4700],
    "up",
    2.6,
    "Hold",
    "Steady growth expected. Selling after harvest rush eases usually gives a better rate.",
  ],
  Tomato: [
    1620,
    [1100, 1200, 1350, 1400, 1480, 1520, 1560, 1590, 1600, 1610, 1620],
    [1650, 1500, 1380, 1300, 1250, 1200],
    "down",
    -9,
    "Sell now",
    "Prices peaked and are expected to drop as new supply arrives. Sell within a week.",
  ],
};
export const rotationData = {
  Wheat: [
    ["Moong", "Zaid", "Fixes nitrogen and shortens fallow gap."],
    ["Soybean", "Kharif", "Legume that adds nitrogen after a heavy feeder."],
    [
      "Chickpea",
      "Rabi",
      "Different root depth and breaks wheat disease cycle.",
    ],
    "N restored",
    72,
  ],
  Rice: [
    ["Chickpea", "Rabi", "Uses residual moisture and fixes nitrogen."],
    ["Moong", "Zaid", "Quick legume that rests the soil."],
    ["Maize", "Kharif", "Deep roots break the puddled soil layer."],
    "N restored",
    65,
  ],
  Cotton: [
    ["Wheat", "Rabi", "Cereal breaks cotton pest cycles."],
    ["Moong", "Zaid", "Rebuilds nitrogen."],
    ["Soybean", "Kharif", "Legume improves soil structure."],
    "Pests reduced",
    58,
  ],
  Maize: [
    ["Mustard", "Rabi", "Light feeder after a heavy feeder."],
    ["Moong", "Zaid", "Adds nitrogen."],
    ["Rice", "Kharif", "Uses restored fertility."],
    "Fertility balanced",
    68,
  ],
};
export const mandiData = [
  ["Lasalgaon", "18 km", 0],
  ["Pimpalgaon", "32 km", -35],
  ["Nashik APMC", "9 km", 20],
  ["Pune APMC", "210 km", 60],
];
