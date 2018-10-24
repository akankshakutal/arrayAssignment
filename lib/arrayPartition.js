const partArray = function(dataset,limit){
  let partitionedArray = [];
  const lesserNumber = function(element){
    return element <= limit;
  }
  const greaterNumber = function(element){
    return element > limit;
  }
  partitionedArray[0] = dataset.filter(lesserNumber);
  partitionedArray[1] = dataset.filter(greaterNumber);
  return partitionedArray;
}

exports.partArray = partArray;
