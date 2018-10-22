const assert = require('assert');
const { isSubset } = require('../lib/subset.js');

const testLib = function(functionName,expectedOutput,actualOutput) {
  assert.deepEqual(actualOutput,expectedOutput);
  console.log("Function name   : ",functionName.name);
  console.log("Expected output : ",expectedOutput);
  console.log("Actual Output   : ",actualOutput);
  console.log("--------------------------------");
}

console.log("---------- Test Report ----------");

let actualOutput = isSubset([],[]);
testLib(isSubset,true,actualOutput);

actualOutput = isSubset([1],[2]);
testLib(isSubset,false,actualOutput);

actualOutput = isSubset([1,2,7,8],[2,8]);
testLib(isSubset,true,actualOutput);

actualOutput = isSubset([-1,-4,-8,7],[-4,-1,8]);
testLib(isSubset,false,actualOutput);

actualOutput = isSubset(["akanksha","pratiksha","omkar"],["omkar"]);
testLib(isSubset,true,actualOutput);

