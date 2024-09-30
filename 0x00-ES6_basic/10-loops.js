export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    const newarr = [];
    newarr.push(`${appendString} + ${value}`);
  }

  return newarr;
}
