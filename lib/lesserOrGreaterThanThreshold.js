const findGreaterNumbers = function(numbers,threshold) { 
  const findGreater = function(element) {
    return element > threshold;
  }
  return numbers.filter(findGreater);
}

const findLesserNumbers = function(numbers,threshold) { 
  const findLesser = function(element) {
    return element < threshold;
  }
  return numbers.filter(findLesser);
}

exports.findLesserNumbers = findLesserNumbers;
exports.findGreaterNumbers = findGreaterNumbers;
