const mapLength = function(Collection) {
  let lengthOfAllItems = [];
  let index = 0;
  for(item of Collection) {
    lengthOfAllItems[index]  = item.length;
    index ++;
  }
  return lengthOfAllItems;
}

exports.mapLength = mapLength;
