import React, { useRef, useState, useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Box } from "@mui/material";

function LineGraph({ date, amount }) {
  const containerRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(600);

  const primaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-primary")
    .trim();

  useEffect(() => {
    if (date && date.length > 1) {
      const calculatedWidth = (date.length - 1) * 120 + date.length * 8 + 48;
      setChartWidth(Math.max(calculatedWidth, 600));
    }
  }, [date]);

  return (
    <Box ref={containerRef} className="custom-scrollbar">
      <LineChart
        xAxis={[
          {
            data: date,
            scaleType: "band",
          },
        ]}
        series={[
          {
            curve: "linear",
            data: amount,
            color: primaryColor,
            valueFormatter: (value) => `Amount: ₹${value}`,
          },
        ]}
        height={300}
        width={chartWidth}
      />
    </Box>
  );
}

export default LineGraph;
