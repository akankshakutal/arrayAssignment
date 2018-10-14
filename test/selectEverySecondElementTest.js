const assert = require('assert');
const lib = require('../.lib/selectEverySecondElement.js');

// only two elements array
let actualOutput = lib.selectEverySecondElement([2,3]);
let expectedOutput = [3];
assert.deepEqual(actualOutput,expectedOutput);

//non empty array
actualOutput = lib.selectEverySecondElement([1,2,3,4]);
expectedOutput  = [2,4];
assert.deepEqual(actualOutput,expectedOutput);

//empty array
actualOutput = lib.selectEverySecondElement([]);
expectedOutput = [];
assert.deepEqual(actualOutput,expectedOutput);

//one element array
actualOutput = lib.selectEverySecondElement([1]);
expectedOutput = [];
assert.deepEqual(actualOutput,expectedOutput);


