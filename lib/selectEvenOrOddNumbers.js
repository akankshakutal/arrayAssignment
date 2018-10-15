const selectEven = function (numbers) {
  let index = 0;
  let evenNumbers = [];
  for(let value of numbers) {
    if(value%2 == 0) {
      evenNumbers[index] = value;
      index++;
    }
  }
  return evenNumbers;
}

const selectOdd = function (numbers) {
  let index = 0;
  let oddNumbers = [];

  for(let value of numbers) {
    if(value%2) {
      oddNumbers[index] = value;
      index++;
    }
  }
  return oddNumbers;
}

const count = function (dataSet) {
  return dataSet.length;
}
exports.selectEven = selectEven;
exports.selectOdd = selectOdd;
