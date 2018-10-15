const assert  = require('assert');
const lib = require('../lib/FibonacciSeries.js');

//valid input
let actualOutput = lib.generateFibonacciSeries(3);
let expectedOutput = [0 ,1,1];
assert.deepEqual(actualOutput,expectedOutput);

//string as an input
actualOutput = lib.generateFibonacciSeries('4');
expectedOutput = [0,1,1,2];
assert.deepEqual(actualOutput,expectedOutput);

//0 as an input 
actualOutput = lib.generateFibonacciSeries(0);
expectedOutput = [];
assert.deepEqual(actualOutput,expectedOutput);

//1 as an input
 actualOutput = lib.generateFibonacciSeries(1);
expectedOutput = [0];
assert.deepEqual(actualOutput,expectedOutput);
