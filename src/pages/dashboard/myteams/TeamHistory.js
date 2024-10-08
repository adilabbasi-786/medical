import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const uData = [
  4000, 5000, 5000, 3000, 3000, 1000, 2000, 2780, 1890, 2390, 3490,
];
const xLabels = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function SimpleLineChart() {
  return (
    <div className="lg:ml-[350px] ml-0 overflow-x-auto">
      <h1 className="text-2xl font-semibold font-poppins leading-none text-left">
        Team History
      </h1>
      <p className="text-lg font-normal font-poppins leading-7 text-left ">
        Total number of cases in last year: 0
      </p>
      <LineChart
        width={1058}
        height={400}
        series={[{ data: uData, label: "cases" }]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
      />
    </div>
  );
}
