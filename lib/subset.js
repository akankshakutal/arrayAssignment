const isSubset = function(mainArray,subArray) { 
  const isExists = function(element) {
    return mainArray.includes(element);
  }
  return subArray.every(isExists);
}

exports.isSubset = isSubset;

