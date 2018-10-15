const giveDigits= function(number) { 
  let digits = [];
  let index = 0;
  while(number>0) {
    let reminder = number%10;
    digits[index] = reminder;
    number = Math.floor(number/10);
    index ++;
  }
   return digits;
}

exports.giveDigits = giveDigits;

