const rotateArray = function(dataset,rotateIndex) {
  let result = [];
  let finalIndex = 0;
  for(let index=rotateIndex; index<dataset.length; index++) {
    result[finalIndex] = dataset[index];
    finalIndex++;
  }
  for(let index=0; index<rotateIndex; index++) {
    result[finalIndex] = dataset[index];
    finalIndex++;
  }
  return result;
}

exports.rotateArray = rotateArray;
