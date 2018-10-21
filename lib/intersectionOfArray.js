const { findUnique } = require('./uniqueElements.js');

const giveIntersectionOfArrays = function(dataset1,dataset2){
  let result = dataset1.filter(function(element){
    return (dataset2.includes(element));
  });
  return findUnique(result);
}

exports.giveIntersectionOfArrays = giveIntersectionOfArrays;
