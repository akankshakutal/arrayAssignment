const findGreatestNumber = function (numbers) { 
  return numbers.reduce(function(result,element) {
    if(numbers.length == 0)
      return undefined;
    return Math.max(result,element);
  },numbers[0]);
}

exports.findGreatestNumber = findGreatestNumber;

