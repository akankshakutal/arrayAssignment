const assert = require('assert');
const lib = require('../lib/intersectionOfArray.js');
const unique = require('../lib/uniqueElements.js');

//empty array as an input
let actualOutput = lib.giveIntersectionOfArrays([],[]);
let expectedOutput = [];
assert.deepEqual(actualOutput,expectedOutput);

//one same element 
actualOutput = lib.giveIntersectionOfArrays([1],[1]);
expectedOutput = [1];
assert.deepEqual(actualOutput,expectedOutput);

//differt array elements as an input
actualOutput = lib.giveIntersectionOfArrays([1,2],[3,4]);
expectedOutput = [];
assert.deepEqual(actualOutput,expectedOutput);

//valid test
actualOutput = lib.giveIntersectionOfArrays([12,34,56,78,90],[12,45,56,78,90,23]);
expectedOutput =[12,56,78,90,];
assert.deepEqual(actualOutput,expectedOutput);

//string input 
actualOutput = lib.giveIntersectionOfArrays(["abc","pqr","xyz","lmn"],["xyz","abc","pqr"]);
expectedOutput = ["abc","pqr","xyz"];
assert.deepEqual(actualOutput,expectedOutput);

//valid test
actualOutput = lib.giveIntersectionOfArrays([12,34,56,78,90,12],[12,45,56,78,90,23,56]);
actualOutput = unique.findUnique(actualOutput);
expectedOutput =[12,56,78,90,];
assert.deepEqual(actualOutput,expectedOutput);


