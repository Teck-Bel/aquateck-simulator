import React from "react";

export type ScenarioSelectorProps = {
  selectedScenario: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

const scenarios = [
  { id: "storm", label: "Storm" },
  { id: "calm", label: "Calm Waters" },
  { id: "heavyRain", label: "Heavy Rain" },
  { id: "fog", label: "Foggy" }
];

export default function ScenarioSelector({ selectedScenario, onChange }: ScenarioSelectorProps) {
  return (
    <select
      value={selectedScenario}
      onChange={(e) => onChange(e.target.value)}
    >
      {scenarios.map((scenario) => (
        <option key={scenario.id} value={scenario.id}>
          {scenario.label}
        </option>
      ))}
    </select>
  );
}
