import React from "react";

type ScenarioSelectorProps = {
  selected: string;
  onChange: (scenario: string) => void;
};

const scenarios = ["Calm Waters", "Storm", "Power Failure"];

export default function ScenarioSelector({ selected, onChange }: ScenarioSelectorProps) {
  return (
    <div>
      <h2>Kies een scenario:</h2>
      <select value={selected} onChange={e => onChange(e.target.value)}>
        {scenarios.map((scenario) => (
          <option key={scenario} value={scenario}>
            {scenario}
          </option>
        ))}
      </select>
    </div>
  );
}
