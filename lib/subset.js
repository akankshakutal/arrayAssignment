const isSubset = function(mainArray,subArray) { 
  return subArray.every(function(element){
    return mainArray.includes(element);
  });
}

exports.isSubset = isSubset;

