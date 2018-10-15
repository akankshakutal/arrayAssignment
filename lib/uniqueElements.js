const findUnique = function(elements) {
  const result = [];
  for(element of elements) {
    let shouldAdd = !result.includes(element);
    if(shouldAdd) {
      result.push(element);
    }
  }
  return result;
}

exports.findUnique = findUnique;
