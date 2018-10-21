const { findUnique } = require('./uniqueElements.js');

const giveUnionOfArrays = function(dataset1,dataset2) {
  let result = [];
  let finalIndex = 0;
  for(let index=0; index<dataset1.length; index++) {
    result[finalIndex] = dataset1[index];
    finalIndex ++;
  }
  for(let index=0; index<dataset2.length; index++) {
    result[finalIndex] = dataset2[index];
    finalIndex++;
  }
  return findUnique(result);
}

exports.giveUnionOfArrays = giveUnionOfArrays;
