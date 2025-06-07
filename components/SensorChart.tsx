import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

type SensorChartProps = {
  data: { time: string; value: number }[];
};

export default function SensorChart({ data }: SensorChartProps) {
  return (
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
}
