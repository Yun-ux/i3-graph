import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js";

const Graph = ({ data }) => {
  const chartElRef = useRef(null);
  const chartRef = useRef(null);
  useEffect(() => {
    const ctx = chartElRef.current.getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["HTML", "CSS", "JavaScript", "PHP", "Python"],
        datasets: [
          {
            label: "Mes compétences",
            data: data,
            backgroundColor: ["red", "green", "blue", "violet", "pink"]
          }
        ]
      }
    });
  }, []);
  useEffect(() => {
    chartRef.current.data.datasets[0].data = data;
    //chartRef.current && chartElRef.current.update();
    // a la place du if
    chartRef.current.update();
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
