const numberIndex = function(numbers,specifedNumber) {
  let index;
  let flag = 0;
  for(index=0; index<numbers.length; index++) {
    if(numbers[index] == specifedNumber) {
      flag =1;
      break;
    }
  }
  if(!flag) {
  return -1;
  }
  return index;
}

exports.numberIndex = numberIndex;
