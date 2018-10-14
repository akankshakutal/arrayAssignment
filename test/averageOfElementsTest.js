const assert = require('assert');
const lib = require('../.lib/averageOfElements.js');

//valid input
let actualOutput = lib.average([1,2,3,4,5]);
let expectedOutput = 3;
assert.equal(actualOutput,expectedOutput);

//empty array as an input
actualOutput = lib.average([]);
expectedOutput = NaN
assert.equal(isNaN(actualOutput),isNaN(expectedOutput));

//only one array element
actualOutput = lib.average([6]);
expectedOutput = 6;
assert.equal(actualOutput,expectedOutput);
