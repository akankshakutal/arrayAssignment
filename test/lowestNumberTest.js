const assert  = require('assert');
const lib = require('../.lib/lowestNumber.js');

//valid input
let actualOutput = lib.findLowestNumber([16,30,56,0]);
let expectedOutput = 0;
assert.equal(actualOutput,expectedOutput);

//empty array as an input
actualOutput = lib.findLowestNumber([]);
expectedOutput = undefined
assert.equal(actualOutput,expectedOutput);

//same lowest number 
actualOutput = lib.findLowestNumber([1,2,5,8,1]);
expectedOutput = 1;
assert.equal(actualOutput,expectedOutput);
