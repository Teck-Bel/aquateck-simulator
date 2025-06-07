// simulationEngine.ts

let lastTemperature = 20; // startwaarde watertemperatuur

export function generateData(scenario: string, region:string, season:string) {
  // kleine verandering per update: tussen -0.1 en +0.1 graden
  let change = (Math.random() - 0.5) * 0.2;

  switch (scenario) {
    case "Calm Waters":
      lastTemperature = Math.min(24, Math.max(18, lastTemperature + change));
      break;

    case "Storm":
      lastTemperature = Math.min(22, Math.max(15, lastTemperature + change));
      break;

    default:
      lastTemperature = Math.min(20, Math.max(16, lastTemperature + change));
  }

  return Number(lastTemperature.toFixed(2));
}
