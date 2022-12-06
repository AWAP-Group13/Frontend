import { API_BASE_URL } from "../config/constant";

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