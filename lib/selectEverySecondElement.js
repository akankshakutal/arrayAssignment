const selectEverySecondElement = function(numbers) {
  let selectedElements = [];
  let resultIndex = 0;

  for(let index=1; index<numbers.length; index+=2) {
    selectedElements[resultIndex] = numbers[index];
    resultIndex ++;
  }

  return selectedElements;
}

exports.selectEverySecondElement = selectEverySecondElement;
