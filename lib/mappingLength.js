const calculateLength = function(element) {
  return element.toString().length;
}

const mapLength = function(dataSet) {
  return dataSet.map(calculateLength);
}

exports.mapLength = mapLength;

