const findGreatestNumber = function (numbers) { 
  let greatest;
  for(let index=0; index<numbers.length; index++ ) {
    if(numbers[index] < numbers[index+1]) {
      greatest = numbers[index+1]
    }
  }
  return greatest
}

exports.findGreatestNumber = findGreatestNumber;

