const assert = require('assert');
const lib = require('../lib/selectEvenOrOddNumbers.js');
const countNumbers = require('../lib/count.js');

//empty array as input 
let actualOutput = lib.selectEven([]);
let expectedOutput = [];
assert.deepEqual(actualOutput,expectedOutput);
assert.equal(0,countNumbers.count(expectedOutput));

//only one even number
actualOutput = lib.selectEven([2]);
expectedOutput = [2];
assert.deepEqual(actualOutput,expectedOutput);
assert.equal(1,countNumbers.count(expectedOutput));

//negative numbers
actualOutput = lib.selectEven([-2,-4,-5]); 
expectedOutput = [-2,-4];
assert.deepEqual(actualOutput,expectedOutput);
assert.equal(2,countNumbers.count(expectedOutput));

//combine both even and odd numbers
actualOutput =lib.selectEven([2,6,9,3,5]) ;
expectedOutput = [2,6];
assert.deepEqual(actualOutput,expectedOutput);
assert.equal(2,countNumbers.count(expectedOutput)); 

//only even numbers
actualOutput = lib.selectEven([12,24,46,68,80]);
expectedOutput = [12,24,46,68,80];
assert.deepEqual(actualOutput,expectedOutput);
assert.equal(5,countNumbers.count(expectedOutput)); 

//only odd numbers
actualOutput = lib.selectEven([23,15,1,47,79]);
expectedOutput = [];
assert.deepEqual(actualOutput,expectedOutput);
assert.equal(0,countNumbers.count(expectedOutput)); 

//empty array as input 
actualOutput = lib.selectOdd([]);
expectedOutput = [];
assert.deepEqual(actualOutput,expectedOutput);
assert.equal(0,countNumbers.count(expectedOutput));

//only one odd number
actualOutput = lib.selectOdd([3]);
expectedOutput = [3];
assert.deepEqual(actualOutput,expectedOutput);
assert.equal(1,countNumbers.count(expectedOutput));

//negative numbers
actualOutput = lib.selectOdd([-2,-4,-5]); 
expectedOutput = [-5];
assert.deepEqual(actualOutput,expectedOutput);
assert.equal(1,countNumbers.count(expectedOutput));

//combine both even and odd numbers
actualOutput =lib.selectOdd([2,6,9,3,5]) ;
expectedOutput = [9,3,5];
assert.deepEqual(actualOutput,expectedOutput);
assert.equal(3,countNumbers.count(expectedOutput)); 
 
//only even numbers
actualOutput = lib.selectOdd([12,24,46,68,80]);
expectedOutput = [];
assert.deepEqual(actualOutput,expectedOutput);
assert.equal(0,countNumbers.count(expectedOutput));

//only odd numbers
actualOutput = lib.selectOdd([23,15,1,47,79]);
expectedOutput = [23,15,1,47,79];
assert.deepEqual(actualOutput,expectedOutput);
assert.equal(5,countNumbers.count(expectedOutput)); 

