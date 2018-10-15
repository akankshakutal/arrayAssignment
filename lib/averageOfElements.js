const average = function(numbers) {
  let length = numbers.length;
  let sum = numbers[0];
  for(let index=1; index<length; index++) {
    sum += numbers[index];
  }
  let avg = sum/length;
  return avg.toFixed(2);
}

exports.average = average;
