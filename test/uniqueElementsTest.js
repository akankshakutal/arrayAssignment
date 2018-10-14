const assert = require('assert');
const lib = require('../.lib/uniqueElements.js');

//empty array as aan input
let actualOutput = lib.findUnique([]);
let expectedOutput = [];
assert.deepEqual(actualOutput,expectedOutput);

//one element array
actualOutput = lib.findUnique([2]);
expectedOutput = [2];
assert.deepEqual(actualOutput,expectedOutput);

//valid input
actualOutput = lib.findUnique([1,2,3,4,5,1,2,3,4,5]);
expectedOutput = [1,2,3,4,5];
assert.deepEqual(actualOutput,expectedOutput);
