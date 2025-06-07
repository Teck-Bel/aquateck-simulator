import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Label
} from "recharts";

type SensorChartProps = {
  data: { time: string; value: number }[];
  title: string;
  unit: string;
  currentValue: number;
  xAxisLabel: string;
  yAxisLabel: string;
};

export default function SensorChart({
  data,
  title,
  unit,
  currentValue,
  xAxisLabel,
  yAxisLabel,
}: SensorChartProps) {
  return (
    <div style={{ width: "100%", marginBottom: "2rem" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
        <h3 style={{ marginRight: "1rem" }}>{title}</h3>
        <div
          style={{
            padding: "0.3rem 0.7rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            minWidth: "80px",
            textAlign: "center",
            fontWeight: "bold",
            backgroundColor: "#f0f0f0"
          }}
        >
          {currentValue} {unit}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 40 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time">
            <Label value={xAxisLabel} offset={-30} position="insideBottom" />
          </XAxis>
          <YAxis>
            <Label angle={-90} position="insideLeft" style={{ textAnchor: "middle" }}>
              {yAxisLabel} ({unit})
            </Label>
          </YAxis>
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#007acc" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
