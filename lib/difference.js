const isElementExist = function(uniqueArray, element){
  let status = false;
  for(let index in uniqueArray){
    if(uniqueArray[index] == element){
      status = true;
    }
  }
  return status;
}
const giveDifferenceOfArrays = function(firstArray, secondArray){
  let uniqueArray = [];
  let count = 0;
  for (let index in firstArray){
    if (!isElementExist(secondArray, firstArray[index])){
      uniqueArray[count] = firstArray[index];
      count++;
    }
  }
  return uniqueArray;
}

exports.giveDifferenceOfArrays = giveDifferenceOfArrays;
