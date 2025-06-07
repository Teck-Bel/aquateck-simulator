// simulationEngine.ts

type Region = "North Sea" | "Mediterranean Sea " | "Tropical Sea";
type Season = "Spring" | "Summer" | "Autumn" | "Winter";

interface TempLimits {
  min: number;
  max: number;
  start: number;
}

// Basis starttemperatuur en grenzen per regio & seizoen
const regionSeasonTemps: Record<Region, Record<Season, TempLimits>> = {
  "Noordzee": {
    "Lente": { min: 6, max: 14, start: 10 },
    "Zomer": { min: 14, max: 20, start: 17 },
    "Herfst": { min: 10, max: 16, start: 13 },
    "Winter": { min: 2, max: 8, start: 5 },
  },
  "Middellandse Zee": {
    "Lente": { min: 13, max: 19, start: 16 },
    "Zomer": { min: 20, max: 26, start: 23 },
    "Herfst": { min: 17, max: 23, start: 20 },
    "Winter": { min: 11, max: 17, start: 14 },
  },
  "Tropisch": {
    "Lente": { min: 26, max: 30, start: 28 },
    "Zomer": { min: 27, max: 31, start: 29 },
    "Herfst": { min: 26, max: 30, start: 28 },
    "Winter": { min: 25, max: 29, start: 27 },
  }
};

let lastTemperature: number | null = null;

export function generateData(scenario: string, region: Region, season: Season) {
  const limits = regionSeasonTemps[region][season];

  // Als geen vorige waarde, start dan op de startwaarde van regio+seizoen
  if (lastTemperature === null) {
    lastTemperature = limits.start;
  }

  // Kleine verandering per update (-0.1 tot +0.1 graden)
  let change = (Math.random() - 0.5) * 0.2;

  // Pas grenzen aan afhankelijk van scenario
  let minLimit = limits.min;
  let maxLimit = limits.max;

  switch (scenario) {
    case "Calm Waters":
      // Normale grenzen
      break;

    case "Storm":
      // Bij storm wat koelere waardes (grenzen iets verlagen)
      minLimit -= 2;
      maxLimit -= 2;
      break;

    default:
      // Iets meer variatie, maar binnen normale grenzen
      change *= 1.5;
  }

  // Update temperatuur binnen grenzen
  lastTemperature = Math.min(
    maxLimit,
    Math.max(minLimit, lastTemperature + change)
  );

  return Number(lastTemperature.toFixed(2));
}
