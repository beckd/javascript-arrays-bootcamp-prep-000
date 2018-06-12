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
  var myArray5 = [1, 2, 3, 4];
  console.log(myArray5[3]);
}
function destructivelyRemoveElementFromBeginningOfArray(myArray6, element) {
  var myArray6 = [1, 2, 3, 4];
  
}
function removeElementFromBeginningOfArray(myArray7, element) {
  var myArray7 = [1, 2, 3, 4];
  myArray7.shift(1);
}
function destructivelyRemoveElementFromEndOfArray() {

}
function removeElementFromEndOfArray() {

}
