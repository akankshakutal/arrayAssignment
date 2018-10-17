const assert = require('assert');
const { zipArrays } = require('../lib/zipArray.js');

//empty array as an input
let actualOutput = zipArrays([],[]);
let expectedOutput = [];
assert.deepEqual(actualOutput,expectedOutput);

//one element array
actualOutput = zipArrays([1],[2]);
expectedOutput = [[1,2]];
assert.deepEqual(actualOutput,expectedOutput);

//more than one elements in array
actualOutput = zipArrays([1,2,3,4],[4,3,2,1]);
expectedOutput = [[1,4],[2,3],[3,2],[4,1]];
assert.deepEqual(actualOutput,expectedOutput);

//different length
actualOutput = zipArrays([1,2,3,4],[1,2,3]);
expectedOutput = [[1,1],[2,2],[3,3]];
assert.deepEqual(actualOutput,expectedOutput);

//length of second array is greater than first one
actualOutput = zipArrays([1,2,3,4],[1,2,3,4,5]);
expectedOutput = [[1,1],[2,2],[3,3],[4,4]];
assert.deepEqual(actualOutput,expectedOutput);

//negative numbers as an array element
actualOutput = zipArrays([-1,-2,-4],[1,3,4]);
expectedOutput = [[-1,1],[-2,3],[-4,4]];
assert.deepEqual(actualOutput,expectedOutput);

