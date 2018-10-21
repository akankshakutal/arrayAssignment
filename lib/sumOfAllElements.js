const add = function(firstNumber,secondNumber) { 
  return (firstNumber + secondNumber);
}

const addAll = function(numbers) { 
  if(numbers.length > 0)
  return numbers.reduce(add);
  return undefined;
}

exports.addAll = addAll; 
