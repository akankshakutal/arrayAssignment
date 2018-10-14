let assert = require('assert');
let lib = require('../.lib/reverseArray.js');

//non empty array
let actualOutput = lib.reverseArray([1,2,3,4,5,6]);
let expectedOutput = [6,5,4,3,2,1];
assert.deepEqual(actualOutput.expectedOutput);

//empty array
actualOutput = lib.reverseArray([]);
expectedOutput = [];
assert.deepEqual(actualOutput.expectedOutput);

//only one element 
actualOutput = lib.reverseArray([4]);
expectedOutput = [4];
assert.deepEqual(actualOutput,expectedOutput);
