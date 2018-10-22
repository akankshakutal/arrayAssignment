const partArray = function(dataset,limit){
  let partitionedArray = [];
  partitionedArray[0] = dataset.filter(function(element){
    return element <= limit;
  });
  partitionedArray[1] = dataset.filter(function(element){
    return element > limit;
  });
  return partitionedArray;
}

exports.partArray = partArray;
