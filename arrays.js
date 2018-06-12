var chocolateBars = [
  'snicker',
  'hundred grand',
  'kitkat',
  'skittle',
]
function addElementToBeginningOfArray(myArray, element) {
  myArray = [element, ...myArray];
  return myArray;
}
function destructivelyAddElementToBeginningOfArray(myArray2, element) {
  myArray2.unshift(element);
  return myArray2;
}
function addElementToEndOfArray(myArray3, element) {
  myArray = [...myArray4, element];
  return myArray3;
}
function destructivelyAddElementToEndOfArray(myArray4, element) {
  myArray4.push(element);
  return myArray4
}
