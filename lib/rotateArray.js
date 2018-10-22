const rotateArray = function(dataset,rotateIndex) {
  for(let index=0; index<rotateIndex; index++) {
    dataset.push(dataset.shift());
  }
  return  dataset;
}

exports.rotateArray = rotateArray;

