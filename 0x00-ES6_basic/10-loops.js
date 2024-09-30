export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const i of array) {
    newArr.push(appendString + i);
  }

  return newArr;
}
