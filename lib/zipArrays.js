const zipArrays = function(dataSet1,dataSet2) { 
  let length = Math.min(dataSet1.length,dataSet2.length);
  let result = [];
  for(let index=0; index<length; index++) {
    result[index] = [];
    result[index][0] = dataSet1[index];
    result[index][1] = dataSet2[index];
  }
  return result;
}

exports.zipArrays = zipArrays;
