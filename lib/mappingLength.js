const mapLength = function(dataSet) {
  return dataSet.map(function(element) {
    return element.toString().length
  });
}

exports.mapLength = mapLength;

