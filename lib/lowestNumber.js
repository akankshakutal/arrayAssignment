const lowestBetweenTwo = function(result,element) {
  return Math.min(result,element);
}

const findLowestNumber = function (numbers) { 
  return numbers.reduce(lowestBetweenTwo,numbers[0]);
}

exports.findLowestNumber = findLowestNumber;
exports.lowestBetweenTwo = lowestBetweenTwo;
