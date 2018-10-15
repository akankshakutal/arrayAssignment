const assert = require('assert');
const lib = require('../lib/difference.js');
const unique = require('../lib/uniqueElements.js');

//empty array as an input
let actualOutput = lib.giveDifferenceOfArrays([],[]);
actualOutput = unique.findUnique(actualOutput);
let expectedOutput = [];
assert.deepEqual(actualOutput,expectedOutput);

//different array elements as an input
actualOutput = lib.giveDifferenceOfArrays([1,2],[3,4]);
actualOutput = unique.findUnique(actualOutput);
expectedOutput = [1,2];
assert.deepEqual(actualOutput,expectedOutput);

//one same element 
actualOutput = lib.giveDifferenceOfArrays([1],[1]);
actualOutput = unique.findUnique(actualOutput);
expectedOutput = [];
assert.deepEqual(actualOutput,expectedOutput);

//valid test
actualOutput = lib.giveDifferenceOfArrays([12,34,56,78,90],[12,45,56,78,90,23]);
actualOutput = unique.findUnique(actualOutput);
expectedOutput =[34];
assert.deepEqual(actualOutput,expectedOutput);

//string input 
actualOutput = lib.giveDifferenceOfArrays(["abc","pqr","xyz","lmn"],["xyz","abc","pqr"]);
actualOutput = unique.findUnique(actualOutput);
expectedOutput = ["lmn"];
assert.deepEqual(actualOutput,expectedOutput);

