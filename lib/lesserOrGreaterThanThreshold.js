const findGreaterNumbers = function(numbers,threshold) { 
  return numbers.filter(function(element) {
    return element > threshold;
  });

}

const findLesserNumbers = function(numbers,threshold) { 
  return numbers.filter(function(element) {
    return element < threshold;
  });
}

exports.findLesserNumbers = findLesserNumbers;
exports.findGreaterNumbers = findGreaterNumbers;
