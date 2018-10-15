const addAll = function(numbers) { 
  let addition = numbers[0];;
  for(let index=1; index<numbers.length; index++) {
    addition += numbers[index];
  }
  return addition; 
}

exports.addAll = addAll; 
