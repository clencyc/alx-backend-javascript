export default function updateUniqueItems(map) {
  if (!map || !(map instanceof Map)) {
    return '';
  }

  const values = [...map.values()];
  const uniqueValues = new Set(values);

  return values.filter((value) => uniqueValues.has(value));
}
