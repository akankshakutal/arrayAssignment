const assert = require('assert');
const lib = require('../.lib/selectEverySecondElement.js');

//empty array
let actualOutput = lib.selectEverySecondElement([]);
let expectedOutput = [];
assert.deepEqual(actualOutput,expectedOutput);

//one element array
actualOutput = lib.selectEverySecondElement([1]);
expectedOutput = [];
assert.deepEqual(actualOutput,expectedOutput);

// only two elements array
actualOutput = lib.selectEverySecondElement([2,3]);
expectedOutput = [3];
assert.deepEqual(actualOutput,expectedOutput);

//non empty array
actualOutput = lib.selectEverySecondElement([1,2,3,4]);
expectedOutput  = [2,4];
assert.deepEqual(actualOutput,expectedOutput);

//string as an element of array
actualOutput = lib.selectEverySecondElement(["abc","xyz","pqr","lmn"]);
expectedOutput  = ["xyz","lmn"];
assert.deepEqual(actualOutput,expectedOutput);
