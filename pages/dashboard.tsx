import { useEffect, useState } from "react";
import SensorChart from "../components/SensorChart";
import ScenarioSelector from "../components/ScenarioSelector";
import { generateData } from "../utils/simulationEngine";

const regions=["North Sea", "Mediterranean Sea", "Tropical Sea"] as const;
const seasons=["Spring", "Summer", "Autumn", "Winter"] as const;

type Region = typeof regions[number];
type Season = typeof seasons[number];

export default function Dashboard() {
  const [data, setData] = useState<{ time: string; value: number }[]>([]);
  const [selectedScenario, setSelectedScenario] = useState("Calm Waters");
  const [selectedRegion, setSelectedRegion] = useState<Region>("North Sea");
  const [selectedSeason, setSelectedSeason] = useState<Season>("Summer")

  useEffect(() => {
    const interval = setInterval(() => {
      setData((oldData) => {
        const nextValue = generateData(selectedScenario, selectedRegion, selectedSeason);
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
  }, [selectedScenario, selectedRegion, selectedSeason]);

  return (
    <>
      <h1>Dashboard Simulator</h1>
      
      <ScenarioSelector
        selectedScenario={selectedScenario}
        onChange={setSelectedScenario}
      />

      <label>
        Region:
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value as Region)}
          >
          {regions.map((r) => (
            <option key{r} value{}>
              {r}
              </option>
            ))}
        </select>
      </label>

      <label style={{ marginLeft:"1rem" }}>
        Seaons
        <select
          value=(selectedSeason}
        onChange={(e) => setSelectedSeasons(e.target.value as Season)}
        >
        {Season.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
      ))}
        </select>
      </label>
      <SensorChart data={data />
    </>
  );
}
