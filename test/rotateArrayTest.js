const assert = require('assert');
const { rotateArray } = require('../lib/rotateArray.js');

const emptyArray = function() {
  let actualOutput = rotateArray([],2);
  let expectedOutput = [undefined,undefined];
  assert.deepEqual(actualOutput,expectedOutput);
}

const oneElementArray = function() {
  let actualOutput = rotateArray([1],1);
  let expectedOutput = [1];
  assert.deepEqual(actualOutput,expectedOutput);
}

const multiElementArray = function() {
  let actualOutput = rotateArray([1,2,3,4,],2);
  let expectedOutput = [3,4,1,2];
  assert.deepEqual(actualOutput,expectedOutput);
}

const stringArray = function() {
  let actualOutput = rotateArray(["tejal","sonal","rutuja","akanksha"],2);
  let expectedOutput = ["rutuja","akanksha","tejal","sonal"];
  assert.deepEqual(actualOutput,expectedOutput);
}

emptyArray();
oneElementArray();
multiElementArray();
stringArray();
console.log("All tests are passed");

