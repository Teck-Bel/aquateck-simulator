import React, { useState, useEffect } from "react";
import ScenarioSelector from "../components/ScenarioSelector";
import SensorChart from "../components/SensorChart";

export default function Dashboard() {
  const [selectedScenario, setSelectedScenario] = useState("Calm Waters");
  const [data, setData] = useState<{ time: string; value: number }[]>([]);

  // Simuleer data afhankelijk van het gekozen scenario
  useEffect(() => {
    const interval = setInterval(() => {
      setData((oldData) => {
        const nextValue =
          selectedScenario === "Calm Waters"
            ? Math.random() * 10 + 20
            : selectedScenario === "Storm"
            ? Math.random() * 30 + 10
            : Math.random() * 5 + 5;

        const nextTime = new Date().toLocaleTimeString();

        const newData = [...oldData, { time: nextTime, value: Number(nextValue.toFixed(2)) }];

        // Houd max 20 punten vast
        return newData.length > 20 ? newData.slice(newData.length - 20) : newData;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedScenario]);

  return (
    <>
      <h1>Dashboard AquaTeck Simulator</h1>
      <ScenarioSelector selected={selectedScenario} onChange={setSelectedScenario} />
      <SensorChart data={data} />
    </>
  );
}
