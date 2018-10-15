const assert = require('assert');
const lib  = require('../lib/lesserOrGreaterThanThreshold.js');
const countNumbers = require('../lib/count.js');

//one element array as input
let actualOutput = lib.findGreaterNumbers([6],5);
let expectedOutput = [6];
assert.deepEqual(actualOutput,expectedOutput);
assert.equal(countNumbers.count(expectedOutput),1);

//empty array as input
actualOutput = lib.findGreaterNumbers([],5);
expectedOutput = [];
assert.deepEqual(actualOutput,expectedOutput);
assert.equal(countNumbers.count(expectedOutput),0);

//positive Numbers as an input
actualOutput = lib.findGreaterNumbers([1,2,3,6,9,7,5,0],3)
expectedOutput = [6,9,7,5];
assert.deepEqual(actualOutput,expectedOutput);
assert.equal(countNumbers.count(expectedOutput),4);

//negative numbers as an input
actualOutput = lib.findGreaterNumbers([-1,2,3,4,-2,-5],-2);
expectedOutput = [-1,2,3,4];
assert.deepEqual(actualOutput,expectedOutput);
assert.equal(countNumbers.count(expectedOutput),4);


//one element  array as input
actualOutput = lib.findLesserNumbers([4],5);
expectedOutput = [4];
assert.deepEqual(actualOutput,expectedOutput);
assert.equal(countNumbers.count(expectedOutput),1);

//empty array as input
actualOutput = lib.findLesserNumbers([],5);
expectedOutput = [];
assert.deepEqual(actualOutput,expectedOutput);
assert.equal(countNumbers.count(expectedOutput),0);

//positive Numbers as an input
actualOutput = lib.findLesserNumbers([1,2,3,6,9,7,5,0],3)
expectedOutput = [1,2,0];
assert.deepEqual(actualOutput,expectedOutput);
assert.equal(countNumbers.count(expectedOutput),3);

//negative numbers as an input
actualOutput = lib.findLesserNumbers([-1,2,3,4,-2,-5],-2);
expectedOutput = [-5];
assert.deepEqual(actualOutput,expectedOutput);
assert.equal(countNumbers.count(expectedOutput),1);


