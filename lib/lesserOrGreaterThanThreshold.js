const findGreaterNumbers = function(numbers,threshold) { 
  let result = [];
  let index = 0;
  for(number of numbers) {
    if(number > threshold) {
      result[index] = number;
      index ++;
    }
  }
  return result;
}

const findLesserNumbers = function(numbers,threshold) { 
  let result = [];
  let index = 0;
  for(number of numbers) {
    if(number < threshold) {
      result[index] = number;
      index ++;
    }
  }
  return result;
}

exports.findLesserNumbers = findLesserNumbers;
exports.findGreaterNumbers = findGreaterNumbers;
