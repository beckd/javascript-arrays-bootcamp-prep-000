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
  myArray3 = [...myArray3, element];
  return myArray3;
}
function destructivelyAddElementToEndOfArray(myArray4, element) {
  myArray4.push(element);
  return myArray4;
}
function accessElementInArray(myArray5, index) {
  return myArray5[parseInt(index, 3)];
}
function destructivelyRemoveElementFromBeginningOfArray(myArray6, element) {
  return myArray6.pop(1);
}
function removeElementFromBeginningOfArray(myArray7) {
  return myArray7.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(myArray8) {
  return myArray8.pop(1);
}
function removeElementFromEndOfArray(myArray9) {
  return myArray9.slice(0, myArray9.lenght - 1);
}
