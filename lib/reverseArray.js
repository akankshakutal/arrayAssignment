const reverseArray = function (numbers) {
  return numbers.reduce(function(result,element) {
    result.unshift(element);
    return result;
  },[]);
}

exports.reverseArray = reverseArray;

