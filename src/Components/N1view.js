import React, { useEffect, useState } from "react";
import { n1Maps } from "../utils/N1Map";

import LineChart from "./LineChart";

function N1View() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("v1Annual");
  const [nestedSelected, setNestedSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    asyncFetch();
  }, [selected, nestedSelected]);

  const asyncFetch = async () => {
    let selectedMap = n1Maps[selected].meta;
    const isNested = selectedMap.nestedValues;

    if (isNested) {
      const nestedKeys = Object.keys(isNested);
      const newNestedSelected = nestedSelected || nestedKeys[0];
      setNestedSelected(newNestedSelected);
      selectedMap = isNested[newNestedSelected];
    }
    setLoading(true);

    const v1Res = await fetch(selectedMap.link);
    const v1Data = await v1Res.json();

    const variants = Object.keys(v1Data.data[0]).filter(
      (key) => !["_id", selectedMap.xField].includes(key)
    );

    const newData = v1Data.data.map((item) => {
      const newArr = variants.map((variant) => ({
        id: item._id,
        label: item[selectedMap.xField],
        value: item[variant],
        version: variant,
      }));
      return newArr;
    });

    setData(newData.flat());
    setLoading(false);
  };

  return (
    <div>
      <h2>Web DEV V2</h2>
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
          {n1Maps[selected].meta.nestedValues && (
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

      <LineChart data={data} xField="label" yField="value" loading={loading} />
    </div>
  );
}

export default N1View;
