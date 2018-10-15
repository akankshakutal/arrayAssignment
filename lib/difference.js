const giveDifferenceOfArrays = function(firstDataset,secondDataset) {
  let result = [];
  let finalIndex = 0;
  for(let firstIndex=0; firstIndex<firstDataset.length; firstIndex++ ) {
    result[finalIndex] = firstDataset[firstIndex];
    finalIndex ++;
  }
  length = result.length;
  for(let secondIndex=0; secondIndex<secondDataset.length; secondIndex++ ) {
    for(let index=0; index<length; index++) {
      if(result[finalIndex] == secondDataset[secondIndex]) {
        result[finalIndex] = secondDataset[secondIndex];
        finalIndex ++;
      }
    }
  }
  return result;
}
exports.giveDifferenceOfArrays = giveDifferenceOfArrays;
