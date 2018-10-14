const assert = require('assert');
const lib = require('../.lib/sumOfAllElements.js');

//non empty array
let actualOutput = lib.addAll([1,2,3,4,5]);
let expectedOutput = 15;
assert.equal(actualOutput,expectedOutput);

//empty array 
actualOutput = lib.addAll([]);
expectedOutput = 0;
assert.equal(actualOutput,expectedOutput);
