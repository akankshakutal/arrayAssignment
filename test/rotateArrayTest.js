const assert = require('assert');
const { rotateArray } = require('../lib/rotateArray.js');

const testLib = function(functionName,expectedOutput,actualOutput) {
  assert.deepEqual(actualOutput,expectedOutput);
  console.log("Function name   : ",functionName.name);
  console.log("Expected output : ",expectedOutput);
  console.log("Actual Output   : ",actualOutput);
  console.log("--------------------------------");
}

console.log("---------- Test Report ----------");


let actualOutput = rotateArray([],2);
testLib(rotateArray,[undefined],actualOutput);

actualOutput = rotateArray([1],1);
testLib(rotateArray,[1],actualOutput);

actualOutput = rotateArray([1,2,3,4],2);
testLib(rotateArray,[3,4,1,2],actualOutput);

actualOutput = rotateArray(["Tejal","Sonal","Akanksha","Rutuja"],2);
testLib(rotateArray,["Akanksha","Rutuja","Tejal","Sonal"],actualOutput);


