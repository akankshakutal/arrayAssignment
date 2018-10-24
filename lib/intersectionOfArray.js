const { findUnique } = require('./uniqueElements.js');

const giveIntersectionOfArrays = function(dataset1,dataset2) {
  const isIncludes = function(element) {
    return (dataset2.includes(element));
  }
  let result = dataset1.filter(isIncludes);
  return findUnique(result);
}

exports.giveIntersectionOfArrays = giveIntersectionOfArrays;
