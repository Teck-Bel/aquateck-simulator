import { useEffect, useState } from "react";
import SensorChart from "../components/SensorChart";
import ScenarioSelector from "../components/ScenarioSelector";
import RegionSelector from "../componets/RegionSelector";
import { generateData } from "../utils/simulationEngine";

const regions = ["North Sea", "Mediterranean Sea", "Tropical Sea"] as const;
const seasons = ["Spring", "Summer", "Autumn", "Winter"] as const;

type Region = typeof regions[number];
type Season = typeof seasons[number];

export default function Dashboard() {
  const [data, setData] = useState<{ time: string; value: number }[]>([]);
  const [selectedScenario, setSelectedScenario] = useState("Calm Waters");
  const [selectedRegion, setSelectedRegion] = useState<Region>("North Sea");
  const [selectedSeason, setSelectedSeason] = useState<Season>("Summer");

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
      <RegionSelector
        selectedRegion={selectedRegion}
        onChange={setSelectedRegion}
      /> 
      <SeasonSelector
        selectedSeason={selectedSeason}
        onChange={setSelectedSeason}
      /> 

      <SensorChart
        title="Water Temperature"
        unit="°C"
        currentValue={data.length > 0 ? data[data.length - 1].value : 0}
        data={data}
        xAxisLabel="Time (hh:mm:ss)"
        yAxisLabel="Temperature"
      />
    </>
  );
}
