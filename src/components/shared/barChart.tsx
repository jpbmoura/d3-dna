"use client";

import { ResponsiveBar } from "@nivo/bar";

const BarChart = ({
  data,
  keys,
  index,
  color,
  legend,
}: {
  data: any;
  keys: string[];
  index: string;
  color?: string;
  legend?: string;
}) => {
  return (
    <ResponsiveBar
      data={data}
      keys={keys}
      indexBy={index}
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      padding={0.4}
      valueScale={{ type: "linear" }}
      colors={color}
      animate={true}
      enableLabel={false}
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
