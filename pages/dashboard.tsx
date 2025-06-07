import React, { useState } from "react";
import ScenarioSelector from "../components/ScenarioSelector";

export default function Dashboard() {
  const [selectedScenario, setSelectedScenario] = useState("Calm Waters");

  return (
    <>
      <h1>Dashboard AquaTeck Simulator</h1>
      <ScenarioSelector selected={selectedScenario} onChange={setSelectedScenario} />
      <p>Geselecteerd scenario: {selectedScenario}</p>
    </>
  );
}
