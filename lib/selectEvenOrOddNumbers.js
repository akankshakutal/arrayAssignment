const isEven = function (number) {
  return (number%2 == 0)
}

const isOdd = function (number) {
  return (number%2 != 0);
}

const selectEven = function(numbers) {
  return numbers.filter(isEven);
}

const selectOdd = function(numbers) {
  return numbers.filter(isOdd);
}

exports.isEven = isEven;
exports.isOdd = isOdd;
exports.selectEven = selectEven;
exports.selectOdd = selectOdd;

