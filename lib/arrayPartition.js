const { ascendingOrder } = require('./arrayOperations.js');

const divideArray = function(dataSet,selectedValue) {
  let partitionedArray = [[],[]];
  ascendingOrder(dataSet);
  for(let element of dataSet) {
    partitionedArray[1].push(element);
    if(selectedValue >= element) {
      partitionedArray[0].push(element);
      partitionedArray[1].pop();
    }
  }
  return partitionedArray;
}


exports.divideArray = divideArray;
