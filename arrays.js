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
  return myArray5[index, 3];
}
function destructivelyRemoveElementFromBeginningOfArray(myArray6, element) {

}
function removeElementFromBeginningOfArray(myArray7, element) {

}
function destructivelyRemoveElementFromEndOfArray() {

}
function removeElementFromEndOfArray() {

}
