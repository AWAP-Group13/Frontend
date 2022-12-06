export const createDataPoint = (variant, item, selectedMap, label) => ({
  id: item._id,
  label: label || item[selectedMap.xField],
  value: item[variant],
  version: variant,
});
