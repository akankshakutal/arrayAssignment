const { isElementExist } = require('./difference.js');

const isSubset = function(mainArray,subArray) { 
  let result = false;
  let sameElementCount = 0;
  for(element of subArray) {
    if(isElementExist(mainArray,element)) {
      sameElementCount ++;
    }
  }
  if (sameElementCount == subArray.length) {
    result = true;
  }
  return result;
}

exports.isSubset = isSubset;
