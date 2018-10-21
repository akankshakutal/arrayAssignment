const selectEverySecondElement = function(numbers) {
  return numbers.filter(function(element,index) {
  return index%2 == 0})
}

exports.selectEverySecondElement = selectEverySecondElement;

