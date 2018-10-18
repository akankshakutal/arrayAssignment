const giveIntersectionOfArrays = function(dataSet1,dataSet2) {
  let result = [];
  let finalIndex = 0;
  for(let firstIndex=0; firstIndex<dataSet1.length; firstIndex++ ) {
    for(let secondIndex=0; secondIndex<dataSet2.length; secondIndex++) {
      if(dataSet1[firstIndex]==dataSet2[secondIndex]) {
        result[finalIndex] = dataSet1[firstIndex];
        finalIndex ++ ;
      }
    }
  }
  return result;
}
exports.giveIntersectionOfArrays = giveIntersectionOfArrays;
