const isElementExist = function(uniqueDataSet, element){
  let status = false;
  for(let uniqueElement of uniqueDataSet){
    if(uniqueElement == element){
      status = true;
    }
  }
  return status;
}

const findDifferenceOfArrays = function(dataset1, dataset2){
  return dataset1.filter(function(element){
    return !(dataset2.includes(element));
  });
}

exports.isElementExist = isElementExist;
exports.findDifferenceOfArrays = findDifferenceOfArrays;
