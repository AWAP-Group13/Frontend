import { API_BASE_URL } from "../config/constant";

const v8 = {
  link: `${API_BASE_URL}/v8`,
  xField: "time",
  yField: "temperature",
  version: "V8",
};

const v9 = {
  link: `${API_BASE_URL}/v9Sector`,
  xField: "Sector",
  yField: "co2",
  version: "V9",
};

export const n2Maps = {
  v8: {
    meta: v8,
    label: "V8",
  },
  v9: {
    meta: v9,
    label: "V9",
  },
};
