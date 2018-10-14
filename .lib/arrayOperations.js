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

const sortByOrder = function(passes,numbers,order) {
  if(order == "descending") {
    for(let index=passes; index>0; index--) {
      swap(index, index-1, numbers);
    }
  } 
  if(order == "ascending") {
    for(let index=passes; index>0; index--) {
      swap(index-1,index, numbers);
    }
  }
}

const sortArray = function(order,originalNumbers) {
  let numbers = [];
  for(let index=0; index<originalNumbers.length; index++) {
    numbers[index] = originalNumbers[index];
  }
  for(let passes=1; passes<numbers.length; passes++) {
    sortByOrder(passes,numbers,order);
  }
  return numbers;
}

exports.sortArray = sortArray;
exports.addElement = addElement ;
exports.deleteElement = deleteElement;
