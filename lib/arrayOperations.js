const { reverseArray } = require('./reverseArray.js');

const addElement = function (numbers,elementToAdd,position) {
  let result = [];
  position = position - 1;
  for(let index=0; index<position; index++) {
    result[index] = numbers[index];
  }
  result[position] = elementToAdd;
  for(let index=position; index<numbers.length; index++) {
    result[index+1] = numbers[index];
  }
  return result;
}

const deleteElement = function (numbers,elementToDelete) {
  let result = [];
  let index = 0;
  while(numbers[index] != elementToDelete) {
    result[index] = numbers[index];
    index++;
  }
  result[index] = numbers[index+1];
  index = index + 1;
  for(; index<numbers.length; index++) {
    result[index] = numbers[index+1];
  }
  result.pop();
  return result;
}

const swap = function(firstNum,secondNum, numbers){
  if(numbers[firstNum] > numbers[secondNum]) {
    let temp = numbers[firstNum];
    numbers[firstNum] = numbers[secondNum];
    numbers[secondNum] = temp;
  }
}

const descendingOrder = function(originalNumbers) {
  let numbers = copyArray(originalNumbers);
  let result = ascendingOrder(numbers);
  result = reverseArray(result);
  return result;
}

const ascendingOrder = function(originalNumbers) {
  numbers = copyArray(originalNumbers);
  for(let passes=1; passes<numbers.length; passes++) {
    for(let index=passes; index>0; index--) {
      swap(index-1, index, numbers);
    }
  }
  return numbers;
}

const copyArray = function(originalNumbers) {
  let numbers = [];
  for(let index=0; index<originalNumbers.length; index++) {
    numbers[index] = originalNumbers[index];
  }
  return numbers;
}

exports.copyArray = copyArray;
exports.addElement = addElement ;
exports.deleteElement = deleteElement;
exports.ascendingOrder = ascendingOrder;
exports.descendingOrder = descendingOrder;
