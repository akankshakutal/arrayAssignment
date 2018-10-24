const greatestBetweenTwo = function(result,element) {
  return Math.max(result,element);
}

const findGreatestNumber = function (numbers) { 
  return numbers.reduce(greatestBetweenTwo,numbers[0]);
}

exports.findGreatestNumber = findGreatestNumber;
exports.greatestBetweenTwo = greatestBetweenTwo;
