import React, { useEffect, useState } from "react";
import { getV8Data, getV9Data } from "../services/n1Services";

import { createDataPoint } from "../utils/createDataPoint";
import { n2Maps } from "../utils/N2Map";
import DonutChart from "./DonutChart";

import StackedLineChart from "./StackedLineChart";

const services = {
  v8: getV8Data,
  v9: getV9Data,
};

function N2View() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [selected, setSelected] = useState("v9");
  const [nestedSelected, setNestedSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    asyncFetch();
  }, [selected, nestedSelected]);

  const asyncFetch = async () => {
    setLoading(true);
    let selectedMap = n2Maps[selected].meta;
    const isNested = selectedMap.nestedValues;

    if (isNested) {
      const nestedKeys = Object.keys(isNested);
      const newNestedSelected = nestedSelected || nestedKeys[0];
      setNestedSelected(newNestedSelected);
      selectedMap = isNested[newNestedSelected];
    }

    const { data: v1Data, variants, data2: vData2 } = await services[selected](
      selectedMap.link,
      selectedMap
    );
    let newData;
    let newData2;
    if (!n2Maps[selected].isDualAxes) {
      newData = v1Data.map((item) => {
        let newArr = [];
        variants.forEach((variant) => {
          return (
            item[variant] &&
            newArr.push(
              createDataPoint(
                variant,
                item,
                selectedMap,
                item.xFieldOptional ? item[item.xFieldOptional] : null
              )
            )
          );
        });
        return newArr;
      });
    } else {
      newData = v1Data;
    }

    if (vData2) {
      newData2 = vData2.data.data.map((item) => {
        return {
          id: item._id,
          label: item["Sub-sector"],
          value: item["co2"],
          sector: item.forSector,
        };
      });
    }

    setData(!n2Maps[selected].isDualAxes ? newData.flat() : newData);
    if (vData2) {
      setData2(newData2.flat());
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h2>N2 View</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div style={{ marginRight: "10px" }}>
          <select
            name="v1"
            id="v1"
            value={selected}
            onChange={(e) => {
              setSelected(e.target.value);
              setNestedSelected(null);
            }}
          >
            {Object.keys(n2Maps).map((key) => (
              <option key={key} value={key} selected={key === selected}>
                {n2Maps[key].label}
              </option>
            ))}
          </select>
        </div>
        <div style={{ marginRight: "10px" }}>
          {n2Maps[selected] && n2Maps[selected].meta.nestedValues && (
            <select
              name="nestedValues"
              id="nestedValues"
              onChange={(e) => {
                setNestedSelected(e.target.value);
              }}
              value={nestedSelected}
            >
              {Object.keys(n2Maps[selected].meta.nestedValues).map((key) => (
                <option key={key} value={key} selected={key === nestedSelected}>
                  {key}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
      {selected === "v8" && (
        <StackedLineChart
          data={data}
          xField="label"
          yField="value"
          loading={loading}
        />
      )}
      {selected === "v9" && <DonutChart data={data} childData={data2} />}
      {n2Maps[selected].description && (
        <div>
          <h2>Description:</h2>
          <div>{n2Maps[selected].description}</div>
        </div>
      )}
    </div>
  );
}

export default N2View;
