const findDifferenceOfArrays = function(dataset1, dataset2) {
  const isExist = function(element) {
    return !(dataset2.includes(element));
  }
  return dataset1.filter(isExist);
}

exports.findDifferenceOfArrays = findDifferenceOfArrays;
