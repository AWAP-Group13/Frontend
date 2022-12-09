import React from "react";
import { Area } from "@ant-design/charts";

const StackedLineChart = ({ data, xField, yField, loading }) => {
  const config = {
    data,
    xField,
    yField,
    seriesField: "version",
    color: Array(200).map(
      () =>
        "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0")
    ),
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
        <Area {...config} />
      )}
    </>
  );
};

export default StackedLineChart;
