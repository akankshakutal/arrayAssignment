const assert = require('assert');
const lib = require('../lib/indexOfNumber.js');

//valid input
let actualOutput = lib.numberIndex([1,2,6,7,9,3],6);
let expectedOutput = 2;
assert.equal(actualOutput,expectedOutput);

//same number in two places
actualOutput = lib.numberIndex([12,34,56,78,90,12],12);
expectedOutput = 0;
assert.equal(actualOutput,expectedOutput);

//empty array
actualOutput = lib.numberIndex([],7);
expectedOutput = "Number is not present";
assert.equal(actualOutput,expectedOutput);

//number is not present 
actualOutput = lib.numberIndex([1,2,3,4,5],9);
expectedOutput = "Number is not present";
assert.equal(actualOutput,expectedOutput);
