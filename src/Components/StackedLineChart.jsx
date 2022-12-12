import React from "react";
import { Area } from "@ant-design/charts";

const StackedLineChart = ({ data, xField, yField, loading }) => {
  const config = {
    data,
    xField,
    yField,
    seriesField: "version",
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
