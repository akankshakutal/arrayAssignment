const assert = require('assert');
const lib = require('../lib/unionOfArray.js');
const unique = require('../lib/uniqueElements.js');

const testLib = function(functionName,expectedOutput,actualOutput) {
  assert.deepEqual(actualOutput,expectedOutput);
  console.log("Function name   : ",functionName.name);
  console.log("Expected output : ",expectedOutput);
  console.log("Actual Output   : ",actualOutput);
  console.log("--------------------------------");
}
console.log("---------- Test Report ----------");

actualOutput = lib.giveUnionOfArrays([],[]);
testLib(lib.giveUnionOfArrays,[],actualOutput);

actualOutput = lib.giveUnionOfArrays([1],[1]);
testLib(lib.giveUnionOfArrays,[1],actualOutput);

actualOutput = lib.giveUnionOfArrays([1,2],[3,4]);
testLib(lib.giveUnionOfArrays,[1,2,3,4],actualOutput);

actualOutput = lib.giveUnionOfArrays([12,34,56,78,90],[12,45,56,78,90,23]);
testLib(lib.giveUnionOfArrays,[12,34,56,78,90,45,23],actualOutput);

actualOutput = lib.giveUnionOfArrays(["abc","pqr","xyz","lmn"],["xyz","abc","pqr"]);
testLib(lib.giveUnionOfArrays,["abc","pqr","xyz","lmn"],actualOutput);

actualOutput = lib.giveUnionOfArrays([12,34,56,78,90,12],[12,45,56,78,90,23,56]);
testLib(lib.giveUnionOfArrays,[12,34,56,78,90,45,23],actualOutput);

