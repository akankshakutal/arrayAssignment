const { addAll }  = require('./sumOfAllElements.js');
const average = function(numbers) {
  let length = numbers.length;
  let sum = addAll(numbers);
  let avg = sum/length;
  return avg.toFixed(2);
}

exports.average = average;
