const assert = require('assert');
const lib = require('../lib/intersectionOfArray.js');


const testLib = function(functionName,expectedOutput,actualOutput) {
  assert.deepEqual(actualOutput,expectedOutput);
  console.log("Function name   : ",functionName.name);
  console.log("Expected output : ",expectedOutput);
  console.log("Actual Output   : ",actualOutput);
  console.log("--------------------------------");
}
console.log("---------- Test Report ----------");

actualOutput = lib.giveIntersectionOfArrays([],[]);
testLib(lib.giveIntersectionOfArrays,[],actualOutput);

actualOutput = lib.giveIntersectionOfArrays([1],[1]);
testLib(lib.giveIntersectionOfArrays,[1],actualOutput);

actualOutput = lib.giveIntersectionOfArrays([1,2],[3,4]);
testLib(lib.giveIntersectionOfArrays,[],actualOutput);

actualOutput = lib.giveIntersectionOfArrays([12,34,56,78,90],[12,45,56,78,90,23]);
testLib(lib.giveIntersectionOfArrays,[12,56,78,90],actualOutput);

actualOutput = lib.giveIntersectionOfArrays(["abc","pqr","xyz","lmn"],["xyz","abc","pqr"]);
testLib(lib.giveIntersectionOfArrays,["abc","pqr","xyz"],actualOutput);

actualOutput = lib.giveIntersectionOfArrays([12,34,56,78,90,12],[12,45,56,78,90,23,56]);
testLib(lib.giveIntersectionOfArrays,[12,56,78,90],actualOutput);

