const shiftElement = function(result,element) {
  result.unshift(element);
  return result;
}

const reverseArray = function (numbers) {
  return numbers.reduce(shiftElement,[]);
}

exports.reverseArray = reverseArray;

