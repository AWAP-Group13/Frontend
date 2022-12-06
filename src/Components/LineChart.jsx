import React from "react";
import { Line } from "@ant-design/charts";

const LineChart = ({ data, xField, yField, loading }) => {
  const config = {
    data,
    xField,
    yField,
    seriesField: "version",
    color: ["#D62A0D", "#1979C9", "#DAA51B", "#6D28D9", "#F97316"],
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
