import { useEffect, useState } from "react";
import SensorChart from "../components/SensorChart";
import ScenarioSelector from "../components/ScenarioSelector";
import { generateData } from "../utils/simulationEngine";

export default function Dashboard() {
  const [data, setData] = useState<{ time: string; value: number }[]>([]);
  const [selectedScenario, setSelectedScenario] = useState("Calm Waters");

  useEffect(() => {
    const interval = setInterval(() => {
      setData((oldData) => {
        const nextValue = generateData(selectedScenario);
        const nextTime = new Date().toLocaleTimeString();
        const newData = [...oldData, { time: nextTime, value: nextValue }];

        // Houd alleen de laatste 20 meetwaarden
        if (newData.length > 20) {
          newData.shift();
        }
        return newData;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedScenario]);

  return (
    <>
      <h1>Dashboard Simulator</h1>
      <ScenarioSelector
        selectedScenario={selectedScenario}
        onChange={setSelectedScenario}
      />
      <SensorChart data={data} />
    </>
  );
}
