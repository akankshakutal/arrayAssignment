const assert = require('assert');
const lib  = require('../lib/lesserOrGreaterThanThreshold.js');
const countNumbers = require('../lib/count.js');

const testLib = function(functionName,expectedOutput,actualOutput) {
  assert.deepEqual(actualOutput,expectedOutput);
  console.log("Function name   : ",functionName.name);
  console.log("Expected output : ",expectedOutput);
  console.log("Actual Output   : ",actualOutput);
  console.log("--------------------------------");
}
console.log("---------- Test Report ----------");

actualOutput = lib.findGreaterNumbers([2,3,4,5,6],3);
testLib(lib.findGreaterNumbers,[4,5,6],actualOutput);

actualOutput = lib.findGreaterNumbers([5],3);
testLib(lib.findGreaterNumbers,[5],actualOutput);

actualOutput = lib.findGreaterNumbers([],3);
testLib(lib.findGreaterNumbers,[],actualOutput);

actualOutput = lib.findGreaterNumbers([-2,-4,-6,-1],-10);
testLib(lib.findGreaterNumbers,[-2,-4,-6,-1],actualOutput);

actualOutput = lib.findLesserNumbers([2,3,4,5,6],4);
testLib(lib.findLesserNumbers,[2,3],actualOutput);

actualOutput = lib.findLesserNumbers([5],3);
testLib(lib.findLesserNumbers,[],actualOutput);

actualOutput = lib.findLesserNumbers([],3);
testLib(lib.findLesserNumbers,[],actualOutput);

actualOutput = lib.findLesserNumbers([-2,-4,-6,-1],-1);
testLib(lib.findLesserNumbers,[-2,-4,-6],actualOutput);

