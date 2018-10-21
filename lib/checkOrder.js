const isAscending = function(list){
  for(let index =0; index < list.length-1; index++){
    if(list[index] > list[index +1])
      return false;
  }
  return true;
}

const isDescending = function(list){
  for(let index = 0; index < list.length-1; index++){
    if(list[index] < list[index+1])
      return false;
  }
  return true;
}

exports.isAscending = isAscending;
exports.isDescending = isDescending;
