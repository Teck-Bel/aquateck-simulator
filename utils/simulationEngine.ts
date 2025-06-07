export function generateData(scenario: string) {
  let value;
  switch (scenario) {
    case "Calm Waters":
      value = Math.random() * 10 + 20;
      break;
    case "Storm":
      value = Math.random() * 30 + 10;
      break;
    default:
      value = Math.random() * 5 + 5;
  }
  return Number(value.toFixed(2));
}
