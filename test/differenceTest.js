const assert = require('assert');
const lib = require('../lib/difference.js');


const testLib = function(functionName,expectedOutput,actualOutput) {
  assert.deepEqual(actualOutput,expectedOutput);
  console.log("Function name   : ",functionName.name);
  console.log("Expected output : ",expectedOutput);
  console.log("Actual Output   : ",actualOutput);
  console.log("--------------------------------");
}
console.log("---------- Test Report ----------");

actualOutput = lib.findDifferenceOfArrays([],[]);
testLib(lib.findDifferenceOfArrays,[],actualOutput);

actualOutput = lib.findDifferenceOfArrays([1],[1]);
testLib(lib.findDifferenceOfArrays,[],actualOutput);

actualOutput = lib.findDifferenceOfArrays([1,2],[3,4]);
testLib(lib.findDifferenceOfArrays,[1,2],actualOutput);

actualOutput = lib.findDifferenceOfArrays([12,34,56,78,90],[12,45,56,78,90,23]);
testLib(lib.findDifferenceOfArrays,[34],actualOutput);

actualOutput = lib.findDifferenceOfArrays(["abc","pqr","xyz","lmn"],["xyz","abc","pqr"]);
testLib(lib.findDifferenceOfArrays,["lmn"],actualOutput);

actualOutput = lib.findDifferenceOfArrays([12,34,56,78,90,12],[12,45,56,78,90,23,56]);
testLib(lib.findDifferenceOfArrays,[34],actualOutput);

