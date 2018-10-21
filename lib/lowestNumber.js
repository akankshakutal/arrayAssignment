const findLowestNumber = function (numbers) { 
  return numbers.reduce(function(result,element) {
    if(numbers.length == 0) 
      return undefined;
    if(numbers.length == 1)
      return element;
    return Math.min(result,element);
  },numbers[0]);
}

exports.findLowestNumber = findLowestNumber;

