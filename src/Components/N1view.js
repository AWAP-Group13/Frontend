import React, { useEffect, useState } from "react";
import {
  getV10Data,
  getV1Data,
  getV2Data,
  getV3Data,
  getV4Data,
  getV5Data,
  getV6Data,
  getV7Data,
} from "../services/n1Services";
import { createDataPoint } from "../utils/createDataPoint";
import { n1Maps } from "../utils/N1Map";

import LineChart from "./LineChart";
import DualAxesChart from "./DualAxesChart";

const services = {
  v1: getV1Data,
  v2: getV2Data,
  v3: getV3Data,
  v4: getV4Data,
  v5: getV5Data,
  v6: getV6Data,
  v7: getV7Data,
};

const dualAxesViews = {
  v7: true,
};

function N1View() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("v1");
  const [nestedSelected, setNestedSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    asyncFetch();
  }, [selected, nestedSelected]);

  const asyncFetch = async () => {
    setLoading(true);
    let selectedMap = n1Maps[selected].meta;
    const isNested = selectedMap.nestedValues;

    if (isNested) {
      const nestedKeys = Object.keys(isNested);
      const newNestedSelected = nestedSelected || nestedKeys[0];
      setNestedSelected(newNestedSelected);
      selectedMap = isNested[newNestedSelected];
    }

    const { data: v1Data, variants } = await services[selected](
      selectedMap.link,
      selectedMap
    );
    let newData;
    if (selected !== "v10") {
      if (!n1Maps[selected].isDualAxes) {
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

      setData(!n1Maps[selected].isDualAxes ? newData.flat() : newData);
    } else {
      newData = v1Data.v4Data.data.map((item) => {
        let newArr = [];
        v1Data.v4Data.variants.forEach((variant) => {
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
      setData(!n1Maps[selected].isDualAxes ? newData.flat() : newData);
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h2>N1 View</h2>
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
            {Object.keys(n1Maps).map((key) => (
              <option key={key} value={key} selected={key === selected}>
                {n1Maps[key].label}
              </option>
            ))}
          </select>
        </div>
        <div style={{ marginRight: "10px" }}>
          {n1Maps[selected] && n1Maps[selected].meta.nestedValues && (
            <select
              name="nestedValues"
              id="nestedValues"
              onChange={(e) => {
                setNestedSelected(e.target.value);
              }}
              value={nestedSelected}
            >
              {Object.keys(n1Maps[selected].meta.nestedValues).map((key) => (
                <option key={key} value={key} selected={key === nestedSelected}>
                  {key}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
      {dualAxesViews[selected] ? (
        <DualAxesChart
          data={data}
          xField={n1Maps[selected].meta.xField}
          yField={n1Maps[selected].meta.yField}
          loading={loading}
        />
      ) : (
        <LineChart
          data={data}
          xField="label"
          yField="value"
          loading={loading}
        />
      )}
      {n1Maps[selected].meta.description && (
        <div>
          <h2>Description:</h2>
          <div>{n1Maps[selected].meta.description}</div>
        </div>
      )}
    </div>
  );
}

export default N1View;
