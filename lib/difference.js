const isElementExist = function(uniqueDataSet, element){
  let status = false;
  for(let uniqueElement of uniqueDataSet){
    if(uniqueElement == element){
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

exports.isElementExist = isElementExist;
exports.giveDifferenceOfArrays = giveDifferenceOfArrays;
