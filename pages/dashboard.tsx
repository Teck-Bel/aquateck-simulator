import { useEffect, useState } from "react";
import SensorChart from "../components/SensorChart";
import ScenarioSelector from "../components/ScenarioSelector";
import RegionSelector from "../components/RegionSelector";
import SeasonSelector from "../components/SeasonSelector";
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
  const [windSpeed, setWindSpeed] = useState(0);
  const [windDirection, setWindDirection] = useState("N");

  useEffect(() => {
    const interval = setInterval(() => {
      const result = generateData(selectedScenario, selectedRegion, selectedSeason);
      const nextTime = new Date().toLocaleTimeString();
      
      setData((oldData) => {
      const newData = [...oldData, { time: nextTime, value: result.temperature }];
      if (newData.length > 20) newData.shift();
      return newData;
    });

    setWindSpeed(result.windSpeed);
    setWindDirection(result.windDirection);
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

      <h2>Wind information</h2>
      <div style={{
        display: "flex",
        gap: "2rem",
        marginTop: "2rem",
        padding: "1rem",
        backgroundColor: "#f9f9f9",
        border: "1px solid #ddd",
        borderRadius: "8px",
        maxWidth: "250px"
      }}>
      <div>
        <strong>Wind Speed:</strong>
        <div>{windSpeed} km/h</div>
      </div>
      <div>
        <strong>Wind Direction:</strong>
        <div>{windDirection}</div>
      </div>
    </div>

    </>
  );
}
