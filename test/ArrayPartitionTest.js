const assert = require('assert');
const { partArray } =  require('../lib/arrayPartition.js');

const testLib = function(functionName,expectedOutput,actualOutput) {
  assert.deepEqual(actualOutput,expectedOutput);
  console.log("Function name   : ",functionName.name);
  console.log("Expected output : ",expectedOutput);
  console.log("Actual Output   : ",actualOutput);
  console.log("--------------------------------");
}
console.log("---------- Test Report ----------");

let actualOutput = partArray([],0);
testLib(partArray,[[],[]],actualOutput);

actualOutput = partArray([3],0);
testLib(partArray,[[],[3]],actualOutput);

actualOutput = partArray([1,2,3,6,7,8],5);
testLib(partArray,[[1,2,3],[6,7,8]],actualOutput);

actualOutput = partArray([-1,-2,-4,-6,8,0,2],-2);
testLib(partArray,[[-2,-4,-6],[-1,8,0,2]],actualOutput);

