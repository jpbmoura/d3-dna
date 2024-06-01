"use client";

import { ResponsiveBar } from "@nivo/bar";

const BarChart = ({
  data,
  keys,
  index,
  color,
  legend,
  type,
  format,
}: {
  data: any;
  keys: string[];
  index: string;
  color?: string | string[];
  legend?: string;
  type?: "grouped" | "stacked";
  format?: any;
}) => {
  return (
    <ResponsiveBar
      data={data}
      keys={keys}
      indexBy={index}
      margin={{ top: 15, right: 50, bottom: 50, left: 50 }}
      padding={0.4}
      valueScale={{ type: "linear" }}
      groupMode={type || "grouped"}
      valueFormat={format || undefined}
      colors={color}
      animate={true}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: legend,
        legendPosition: "middle",
        legendOffset: -40,
      }}
    />
  );
};

export default BarChart;
