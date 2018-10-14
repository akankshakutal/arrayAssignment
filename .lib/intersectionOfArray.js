const giveIntersectionOfArrays = function(firstDataset,secondDataset) {
  let result = [];
  let finalIndex = 0;
  for(let firstIndex=0; firstIndex<firstDataset.length; firstIndex++ ) {
    for(let secondIndex=0; secondIndex<secondDataset.length; secondIndex++) {
      if(firstDataset[firstIndex]==secondDataset[secondIndex]) {
        result[finalIndex] = firstDataset[firstIndex];
        finalIndex ++ ;
      }
    }
  }
  return result;
}
exports.giveIntersectionOfArrays = giveIntersectionOfArrays;
