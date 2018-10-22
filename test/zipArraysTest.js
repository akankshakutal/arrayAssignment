const assert = require('assert');
const { zipArrays } = require('../lib/zipArrays.js');

const testLib = function(functionName,expectedOutput,actualOutput) {
  assert.deepEqual(actualOutput,expectedOutput);
  console.log("Function name   : ",functionName.name);
  console.log("Expected output : ",expectedOutput);
  console.log("Actual Output   : ",actualOutput);
  console.log("--------------------------------");
}

console.log("---------- Test Report ----------");

let actualOutput = zipArrays([],[]);
testLib(zipArrays,[],actualOutput);

actualOutput = zipArrays([1],[1]);
testLib(zipArrays,[[1,1]],actualOutput);

actualOutput = zipArrays([1,2,3,4],[4,3,2,1]);
testLib(zipArrays,[[1,4],[2,3],[3,2],[4,1]],actualOutput);

actualOutput = zipArrays([1,2,3,4],[1,2,3]);
testLib(zipArrays,[[1,1],[2,2],[3,3]],actualOutput);

actualOutput = zipArrays([1,2,3,4],[1,2,3,4,5]);
testLib(zipArrays,[[1,1],[2,2],[3,3],[4,4]],actualOutput);

actualOutput = zipArrays([-1,-2,-4],[1,2,4]);
testLib(zipArrays,[[-1,1],[-2,2],[-4,4]],actualOutput);

actualOutput = zipArrays(["abc","xyz"],["pqr","lmn"]);
testLib(zipArrays,[["abc","pqr"],["xyz","lmn"]],actualOutput);

