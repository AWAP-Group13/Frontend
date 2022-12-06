const v1 = {
  link: "http://localhost:4000/stats/v1Annually",
  xField: "timeInAnnual",
  yField: "globaAnnual",
  version: "Global Annual",
  nestedValues: {
    v1Monthly: {
      link: "http://localhost:4000/stats/v1Monthly",
      xField: "timeInMonths",
      yField: "globalMonthlyAnnual",
      version: "Global Monthly",
    },
    v1Annual: {
      link: "http://localhost:4000/stats/v1Annually",
      xField: "timeInAnnual",
      yField: "globaAnnual",
      version: "Global Annual",
    },
  },
};

const v1Monthly = {
  link: "http://localhost:4000/stats/v1Monthly",
  xField: "timeInMonths",
  yField: "globalMonthlyAnnual",
  version: "Global Monthly",
};

const v2 = {
  link: "http://localhost:4000/stats/v2",
  xField: "time",
  yField: "temperature",
  version: "2000 year temperature",
};

export const n1Maps = {
  v1Annual: {
    meta: v1,
    label: "V1",
  },
  v2: {
    meta: v2,
    label: "V2",
  },
};
