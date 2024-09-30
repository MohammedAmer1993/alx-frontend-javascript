export default function appendToEachArrayValue(array, appendString) {
  const newarr = [];
  for (const value of array) {
    const result = appendString + value;
    newarr.push(result);
  }

  return newarr;
}
