import React from "react";
import { DualAxes } from "@ant-design/plots";

const DualAxesChart = ({ data, xField, yField, loading }) => {
  const config = {
    data,
    xField,
    yField,
    geometryOptions: [
      {
        geometry: "line",
        color: "#5B8FF9",
      },
      {
        geometry: "line",
        color: "#5AD8A6",
      },
    ],
  };

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "20px",
          }}
        >
          Loading...
        </div>
      ) : (
        <DualAxes {...config} />
      )}
    </>
  );
};

export default DualAxesChart;
