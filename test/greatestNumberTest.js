const assert  = require('assert');
const lib = require('../.lib/GreatestNumber.js');

//valid input
let actualOutput = lib.findGreatestNumber([16,30,56,0]);
let expectedOutput = 56
assert.equal(actualOutput,expectedOutput);

//empty array as an input
actualOutput = lib.findGreatestNumber([]);
expectedOutput = undefined
assert.equal(actualOutput,expectedOutput);

//same Greatest number 
actualOutput = lib.findGreatestNumber([1,2,5,8,1]);
expectedOutput = 8;
assert.equal(actualOutput,expectedOutput);
