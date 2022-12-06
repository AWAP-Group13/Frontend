import { API_BASE_URL } from "../config/constant";

const v1 = {
  link: `${API_BASE_URL}/v1Annually`,
  xField: "timeInAnnual",
  yField: "globaAnnual",
  version: "Global Annual",
  nestedValues: {
    v1Monthly: {
      link: `${API_BASE_URL}/v1Monthly`,
      xField: "timeInMonths",
      yField: "globalMonthlyAnnual",
      version: "Global Monthly",
    },
    v1Annual: {
      link: `${API_BASE_URL}/v1Annually`,
      xField: "timeInAnnual",
      yField: "globaAnnual",
      version: "Global Annual",
    },
  },
};

const v2 = {
  link: `${API_BASE_URL}/v2`,
  xField: "time",
  yField: "temperature",
  version: "2000 year temperature",
};

export const n1Maps = {
  v1: {
    meta: v1,
    label: "V1",
  },

  v2: {
    meta: v2,
    label: "V2",
  },
};
