import React from "react";
import { Line } from "@ant-design/charts";

const LineChart = ({ data, xField, yField, loading }) => {
  const config = {
    data,
    xField,
    yField,
    seriesField: "version",
    color: ["#D62A0D", "#1979C9"],
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
        <Line {...config} />
      )}
    </>
  );
};

export default LineChart;
