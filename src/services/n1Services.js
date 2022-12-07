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
    `${API_BASE_URL}/v1Annually`,
    selectedMap,
    "timeInAnnual"
  );
  const response = await fetch(`${API_BASE_URL}/v2`);
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
    `${API_BASE_URL}/v4DE08`,
    selectedMap,
    "timeInAnnual"
  );
  const v4DE08_02Data = await getSingleVData(
    `${API_BASE_URL}/v4DE08_02`,
    selectedMap,
    "timeInAnnual"
  );

  const v4DSSData = await getSingleVData(
    `${API_BASE_URL}/v4DSS`,
    selectedMap,
    "timeInAnnual"
  );

  const v3Data = await getV3Data(
    `${API_BASE_URL}/v3Annually`,
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
