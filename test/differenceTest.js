const assert = require('assert');
const lib = require('../lib/difference.js');
const unique = require('../lib/uniqueElements.js');

//empty array as an input
let actualOutput = lib.giveDifferenceOfArrays([],[]);
actualOutput = unique.findUnique(actualOutput);
let expectedOutput = [];
assert.deepEqual(actualOutput,expectedOutput);

//different array elements as an input
actualOutput = lib.giveDifferenceOfArrays([1,2],[3,4]);
actualOutput = unique.findUnique(actualOutput);
expectedOutput = [1,2];
assert.deepEqual(actualOutput,expectedOutput);


