import { API_BASE_URL } from "../config/constant";

const v1 = {
  link: `${API_BASE_URL}/stats/v1Annually`,
  xField: "timeInAnnual",
  yField: "globaAnnual",
  version: "Global Annual",
  nestedValues: {
    v1Monthly: {
      link: `${API_BASE_URL}/stats/v1Monthly`,
      xField: "timeInMonths",
      yField: "globalMonthlyAnnual",
      version: "V1 Global Monthly",
    },
    v1Annual: {
      link: `${API_BASE_URL}/stats/v1Annually`,
      xField: "timeInAnnual",
      yField: "globaAnnual",
      version: "V1 Global Annual",
    },
  },
  description:
    "V1 shows the line chart which displays measured temperature history of global historical surface temperature with monthly and annual data. ",
};

const v2 = {
  link: `${API_BASE_URL}/stats/v2`,
  xField: "time",
  yField: "temperature",
  version: "V2",
  description:
    "V2 shows the line chart of 2,000 years temperature reconstruction including annual data of measured temperature of global historical surface temperature history.  ",
};

const v3 = {
  link: `${API_BASE_URL}/stats/v3Annually`,
  xField: "time",
  yField: "annualCO2Measurement",
  version: "V3 Annual",
  nestedValues: {
    v3Monthly: {
      link: `${API_BASE_URL}/stats/v3Monthly`,
      xField: "time",
      yField: "monthlyCO2Measurement",
      version: "V3 Monthly",
    },
    v3Annual: {
      link: `${API_BASE_URL}/stats/v3Annually`,
      xField: "time",
      yField: "annualCO2Measurement",
      version: "V3 Annual",
    },
  },
  description:
    "V3 shows a line chart which displays the results of the Mauna Loa Carbon Dioxide (CO2) concentration measurements annually and monthly.",
};

const v4 = {
  link: `${API_BASE_URL}/stats/v4DE08`,
  xField: "time",
  yField: "temperature",
  version: "V2",
  description:
    "V4 shows a line chart to display the three-ice core dataset including Mauna Loa Carbon Dioxide (CO2) measurements annually.",
};

const v5 = {
  link: `${API_BASE_URL}/stats/v5`,
  xField: "time",
  yField: "temperature",
  version: "V5",
  description:
    "V5 shows a line chart of historical Carbon Dioxide (CO2) record from Vostok ice core.",
};

const v6 = {
  link: `${API_BASE_URL}/stats/v6`,
  xField: "time",
  yField: "CO2Measurement",
  version: "V6",
  description:
    "V6 shows a line chart of Antarctic ice core 800,000 years Carbon Dioxide (CO2) measurements data.",
};

const v7 = {
  link: `${API_BASE_URL}/stats/v7`,
  xField: "time",
  yField: ["temperature", "Co2"],
  version: "V7",
  isDualAxes: true,
  description:
    "V7 shows the multi-axis line chart of global temperature over the past two million years.",
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
