const findGreatestNumber = function (numbers) { 
  let greatest = numbers[0];
  for(let index=1; index<numbers.length; index++ ) {
    if(numbers[index] < numbers[index+1]) {
      greatest = numbers[index+1];
    }
  }
  return greatest;
}

exports.findGreatestNumber = findGreatestNumber;

