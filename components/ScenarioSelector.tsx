import React from "react";

export type ScenarioSelectorProps = {
  selectedScenario: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

export default function ScenarioSelector({ selectedScenario, onChange }: ScenarioSelectorProps) {
  return (
    <select
      value={selectedScenario}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="scenario1">Scenario 1</option>
      <option value="scenario2">Scenario 2</option>
      {/* Voeg meer scenario's toe */}
    </select>
  );
}
