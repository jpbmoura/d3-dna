"use client";

import Chart from "react-google-charts";

const BarChart = ({
  data,
  color,
  title,
}: {
  data: any;
  color?: string;
  title: string;
}) => {
  return (
    <Chart
      chartType="Bar"
      data={data}
      width="100%"
      height="200px"
      legendToggle
      options={{
        chart: { title: title },
        legend: { position: "none" },
        colors: [color || "#3B82F6"],
      }}
    />
  );
};

export default BarChart;
