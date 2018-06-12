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
