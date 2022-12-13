import React from "react";
import { Pie } from "@ant-design/plots";
import { useState } from "react";

const DonutChart = ({ data, childData }) => {
  const config = {
    appendPadding: 10,
    angleField: "value",
    colorField: "label",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: "AntV\nG2Plot",
      },
    },
  };

  const [clicked, setClicked] = useState({ type: "parent", id: "1" });

  const childDataAfterFilter = childData.filter((d) => {
    return d.sector === clicked.id;
  });

  if (!data || !data[0]) {
    return null;
  }
  return (
    <div>
      {((clicked && clicked.type === "parent") || !clicked) && (
        <Pie
          data={data}
          onEvent={(ev) => {
            ev.on("element:click", (...args) => {
              setClicked({ type: "child", id: args[0].data.data.label });
            });
          }}
          {...config}
        />
      )}
      {clicked && clicked.type === "child" && (
        <Pie
          data={childDataAfterFilter}
          onEvent={(ev) => {
            ev.on("element:click", (...args) => {
              setClicked({ type: "parent", id: "2" });
            });
          }}
          {...config}
        />
      )}
    </div>
  );
};
export default DonutChart;
