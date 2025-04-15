import { useState } from "react";
import { colors } from "../config.js";

import { LineChart } from "@mui/x-charts/LineChart";

export default function LineGraph() {
  const [transactions, setTransactions] = useState([
    100, 80, 120, 200, 190, 100,
  ]);

  const graphData = {
    series: [
      {
        curve: "linear",
        data: transactions,
        color: colors.colorPrimary,
      },
    ],
    width: 600,
    height: 300,
    xAxis: [
      {
        data: [0, 1, 2, 4, 5, 6],
        scaleType: "band",
        label: "Date",
        labelStyle: {
          fontSize: "1.4rem",
          fontWeight: "bold",
        },
      },
    ],
    yAxis: [
      {
        label: "Amount",
        labelStyle: {
          fontSize: "1.4rem",
          fontWeight: "bold",
        },
      },
    ],
    slotProps: {
      loadingOverlay: {
        sx: {
          fontSize: "1.2rem",
        },
      },
      noDataOverlay: {
        sx: {
          fontSize: "1.2rem",
        },
      },
    },
  };

  return (
    <>
      <LineChart {...graphData} />
    </>
  );
}
