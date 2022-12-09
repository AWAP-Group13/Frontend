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
      version: "V1 Global Monthly",
    },
    v1Annual: {
      link: `${API_BASE_URL}/v1Annually`,
      xField: "timeInAnnual",
      yField: "globaAnnual",
      version: "V1 Global Annual",
    },
  },
};

const v2 = {
  link: `${API_BASE_URL}/v2`,
  xField: "time",
  yField: "temperature",
  version: "V2",
};

const v3 = {
  link: `${API_BASE_URL}/v3Annually`,
  xField: "time",
  yField: "annualCO2Measurement",
  version: "V3 Annual",
  nestedValues: {
    v3Monthly: {
      link: `${API_BASE_URL}/v3Monthly`,
      xField: "time",
      yField: "monthlyCO2Measurement",
      version: "V3 Monthly",
    },
    v3Annual: {
      link: `${API_BASE_URL}/v3Annually`,
      xField: "time",
      yField: "annualCO2Measurement",
      version: "V3 Annual",
    },
  },
};

const v4 = {
  link: `${API_BASE_URL}/v4DE08`,
  xField: "time",
  yField: "temperature",
  version: "V2",
};

const v5 = {
  link: `${API_BASE_URL}/v5`,
  xField: "time",
  yField: "temperature",
  version: "V5",
};

const v6 = {
  link: `${API_BASE_URL}/v6`,
  xField: "time",
  yField: "CO2Measurement",
  version: "V6",
};

const v7 = {
  link: `${API_BASE_URL}/v7`,
  xField: "time",
  yField: ["temperature", "Co2"],
  version: "V7",
  isDualAxes: true,
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
  v3: {
    meta: v3,
    label: "V3",
  },
  v4: {
    meta: v4,
    label: "V4",
  },
  v5: {
    meta: v5,
    label: "V5",
  },
  v6: {
    meta: v6,
    label: "V6",
  },
  v7: {
    meta: v7,
    label: "V7",
    isDualAxes: true,
  },
};
