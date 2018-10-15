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
    return "Number is not present";
  }
  return index;
}

exports.numberIndex = numberIndex;
