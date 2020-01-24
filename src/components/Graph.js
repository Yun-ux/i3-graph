import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js";

const Graph = ({ data }) => {
  const chartElRef = useRef(null);
  const chartRef = useRef(null);
  useEffect(() => {
    const ctx = chartElRef.current;
    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["HTML", "CSS", "React", "Photoshop", "illustrator"],
        datasets: [
          {
            label: "Mes compétences",
            data: data,
            backgroundColor: [
              "rgba(255, 192, 203, 0.5)",
              "rgba(176,224,230 ,0.5)",
              "rgba(238,232,170 ,0.5)",
              "rgba(152,251,152 ,0.5)",
              "rgba(147,112,219 ,0.5)"
            ],
            borderColor: [
              "rgba(255, 192, 203, 1)",
              "rgba(176,224,230 ,1)",
              "rgba(238,232,170 ,1)",
              "rgba(152,251,152 ,1)",
              "rgba(147,112,219 ,1)"
            ]
          }
        ]
      }
    });
  }, []);
  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.data.datasets[0].data = data;
      chartRef.current.update();
    }
  }, [data]);
  return (
    <canvas
      style={{ maxWidth: "500px", maxHeight: "500px" }}
      height="400"
      width="400"
      ref={chartElRef}
    />
  );
};
export default Graph;
