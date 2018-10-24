const getEvenIndex = function(element,index) {
  return index%2 == 0;
}

const selectEverySecondElement = function(numbers) {
  return numbers.filter(getEvenIndex);
}

exports.selectEverySecondElement = selectEverySecondElement;

