const assert = require('assert');
const lib = require('../lib/indexOfNumber.js');

const testLib = function(functionName,expectedOutput,actualOutput) {
  assert.deepEqual(actualOutput,expectedOutput);
  console.log("Function name   : ",functionName.name);
  console.log("Expected output : ",expectedOutput);
  console.log("Actual Output   : ",actualOutput);
  console.log("--------------------------------");
}
console.log("---------- Test Report ----------");

let actualOutput = lib.numberIndex([1,2,6,7,9,3],6);
testLib(lib.numberIndex,2,actualOutput);

actualOutput = lib.numberIndex([12,34,56,78,90,12],12);
testLib(lib.numberIndex,0,actualOutput);

actualOutput = lib.numberIndex([],7);
testLib(lib.numberIndex,-1,actualOutput);

actualOutput = lib.numberIndex([1,2,3,4,5],9);
testLib(lib.numberIndex,-1,actualOutput);
