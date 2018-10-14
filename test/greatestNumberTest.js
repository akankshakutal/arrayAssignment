const assert  = require('assert');
const lib = require('../.lib/GreatestNumber.js');

//valid input
let actualOutput = lib.findGreatestNumber([16,30,56,0]);
let expectedOutput = 56;
assert.equal(actualOutput,expectedOutput);

//only one element in array
actualOutput = lib.findGreatestNumber([6]);
expectedOutput = 6
assert.equal(actualOutput,expectedOutput);

//empty array as an input
actualOutput = lib.findGreatestNumber([]);
expectedOutput = undefined
assert.equal(actualOutput,expectedOutput);

//same Greatest number 
actualOutput = lib.findGreatestNumber([1,2,5,8,1]);
expectedOutput = 8;
assert.equal(actualOutput,expectedOutput);

//negative numbers
actualOutput = lib.findGreatestNumber([-1,-3,-45,5,9,1]);
expectedOutput = 9;
assert.equal(actualOutput,expectedOutput);

