import { API_BASE_URL } from "../config/constant";

const getSingleVData = async (vURL, selectedMap, xFieldOptional) => {
  const response = await fetch(vURL);
  const data = await response.json();
  const variants = data.data[0]
    ? Object.keys(data.data[0]).filter(
        (key) => !["_id", selectedMap.xField].includes(key)
      )
    : [];

  return {
    data: !xFieldOptional
      ? data.data
      : data.data.map((item) => ({
          ...item,
          xFieldOptional,
        })),
    variants,
  };
};

export const getV1Data = async (v1URL, selectedMap, xFieldOptional) => {
  const response = await fetch(v1URL);
  const data = await response.json();
  const variants = Object.keys(data.data[0]).filter(
    (key) => !["_id", selectedMap.xField].includes(key)
  );

  return {
    data: !xFieldOptional
      ? data.data
      : data.data.map((item) => ({
          ...item,
          xFieldOptional,
        })),
    variants,
  };
};

export const getV2Data = async (_, selectedMap) => {
  const v1Data = await getV1Data(
    `${API_BASE_URL}/stats/v1Annually`,
    selectedMap,
    "timeInAnnual"
  );
  const response = await fetch(`${API_BASE_URL}/stats/v2`);
  const data = await response.json();
  const variants = Object.keys(data.data[0]).filter(
    (key) => !["_id", "time"].includes(key)
  );

  const allVariants = [...variants, ...v1Data.variants].filter(
    (v) => v !== "timeInAnnual"
  );

  return {
    data: [...data.data, ...v1Data.data],
    variants: allVariants,
  };
};

export const getV3Data = async (v3URL, selectedMap, xFieldOptional) => {
  const response = await fetch(v3URL);
  const data = await response.json();
  const variants = data.data[0]
    ? Object.keys(data.data[0]).filter(
        (key) => !["_id", selectedMap.xField].includes(key)
      )
    : [];

  return {
    data: !xFieldOptional
      ? data.data
      : data.data.map((item) => ({
          ...item,
          xFieldOptional,
        })),
    variants,
  };
};

export const getV4Data = async (_, selectedMap) => {
  const v4DE08Data = await getSingleVData(
    `${API_BASE_URL}/stats/v4DE08`,
    selectedMap,
    "timeInAnnual"
  );
  const v4DE08_02Data = await getSingleVData(
    `${API_BASE_URL}/stats/v4DE08_02`,
    selectedMap,
    "timeInAnnual"
  );

  const v4DSSData = await getSingleVData(
    `${API_BASE_URL}/stats/v4DSS`,
    selectedMap,
    "timeInAnnual"
  );

  const v3Data = await getV3Data(
    `${API_BASE_URL}/stats/v3Annually`,
    selectedMap,
    "timeInAnnual"
  );

  const allVariants = [
    ...v4DSSData.variants,
    ...v4DE08_02Data.variants,
    ...v4DE08Data.variants,
    ...v3Data.variants,
  ].filter((v) => v !== "timeInAnnual");

  return {
    data: [
      ...v4DSSData.data,
      ...v4DE08_02Data.data,
      ...v4DE08Data.data,
      ...v3Data.data,
    ],
    variants: allVariants,
  };
};

export const getV5Data = async (v5URL, selectedMap, xFieldOptional) => {
  const response = await fetch(v5URL);
  const data = await response.json();
  const variants = data.data[0]
    ? Object.keys(data.data[0]).filter(
        (key) => !["_id", selectedMap.xField].includes(key)
      )
    : [];

  return {
    data: !xFieldOptional
      ? data.data
      : data.data.map((item) => ({
          ...item,
          xFieldOptional,
        })),
    variants,
  };
};

export const getV6Data = async (v6URL, selectedMap, xFieldOptional) => {
  const v6Data = await getSingleVData(v6URL, selectedMap, xFieldOptional);
  return v6Data;
};

export const getV7Data = async (v7URL, selectedMap, xFieldOptional) => {
  const response = await fetch(`${API_BASE_URL}/stats/v7surfaceTemp`);
  const v7Data1 = await response.json();

  const response2 = await fetch(`${API_BASE_URL}/stats/v7co2Data`);
  const v7Data2 = await response2.json();

  return { data: [v7Data1.data, v7Data2.data] };
};

export const getV8Data = async (v8URL, selectedMap, xFieldOptional) => {
  const response = await fetch(v8URL);
  const data = await response.json();
  const variants = Object.keys(data.data[0]).filter(
    (key) => !["_id", selectedMap.xField].includes(key)
  );

  return {
    data: !xFieldOptional
      ? data.data
      : data.data.map((item) => ({
          ...item,
          xFieldOptional,
        })),
    variants,
  };
};

export const getV9Data = async (v9URL, selectedMap, xFieldOptional) => {
  const response = await fetch(v9URL);
  const data = await response.json();
  const variants = Object.keys(data.data[0]).filter(
    (key) => !["_id", selectedMap.xField].includes(key)
  );

  const response2 = await fetch(`${API_BASE_URL}/stats/v9SubSector`);
  const data2 = await response2.json();
  const variants2 = Object.keys(data2.data[0]).filter(
    (key) => !["_id", selectedMap.xField].includes(key)
  );

  return {
    data: !xFieldOptional
      ? data.data
      : data.data.map((item) => ({
          ...item,
          xFieldOptional,
        })),
    variants,
    data2: {
      data: data2,
      variants: variants2,
    },
  };
};
