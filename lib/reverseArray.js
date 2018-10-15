const reverseArray = function (numbers) {
  let reverseElements = [];
  let reverseArrayIndex = 0;

  for(let index=numbers.length; index>0; index--) {
    reverseElements[reverseArrayIndex] = numbers[index-1];
    reverseArrayIndex ++;
  }
  return reverseElements;
}

exports.reverseArray = reverseArray;
