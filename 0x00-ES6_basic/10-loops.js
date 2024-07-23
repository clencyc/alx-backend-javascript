export default function appendToEachArrayValue(array, appendString) {
  for (const [index, value] of array.entries()) {
    array[index] = appendString + value;
  }

  return array;
}
