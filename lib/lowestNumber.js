const findLowestNumber = function (numbers) { 
  let lowest;
  for(let index=0; index<numbers.length; index++ ) {
    if(numbers[index] > numbers[index+1]) {
      lowest = numbers[index+1]
    }
  }
  return lowest
}

exports.findLowestNumber = findLowestNumber;

