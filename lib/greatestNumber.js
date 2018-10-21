const findGreatestNumber = function (numbers) { 
  return numbers.reduce(function(result,element) {
    if(element>result)
      return element;
    return result;
  },0);
}

exports.findGreatestNumber = findGreatestNumber;

