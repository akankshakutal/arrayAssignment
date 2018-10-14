const assert = require('assert');
const lib = require('../.lib/unionOfArray.js');
const unique = require('../.lib/uniqueElements.js');

//empty array as an input
let actualOutput = lib.giveUnionOfArrays([],[]);
actualOutput = unique.findUnique(actualOutput);
let expectedOutput = [];
assert.deepEqual(actualOutput,expectedOutput);

//one same element 
actualOutput = lib.giveUnionOfArrays([1],[1]);
actualOutput = unique.findUnique(actualOutput);
expectedOutput = [1];
assert.deepEqual(actualOutput,expectedOutput);

//differt array elements as an input
actualOutput = lib.giveUnionOfArrays([1,2],[3,4]);
actualOutput = unique.findUnique(actualOutput);
expectedOutput = [1,2,3,4];
assert.deepEqual(actualOutput,expectedOutput);

//valid test
actualOutput = lib.giveUnionOfArrays([12,34,56,78,90],[12,45,56,78,90,23]);
actualOutput = unique.findUnique(actualOutput);
expectedOutput =[12,34,56,78,90,45,23];
assert.deepEqual(actualOutput,expectedOutput);

//string input 
actualOutput = lib.giveUnionOfArrays(["abc","pqr","xyz","lmn"],["xyz","abc","pqr"]);
actualOutput = unique.findUnique(actualOutput);
expectedOutput = ["abc","pqr","xyz","lmn"];
assert.deepEqual(actualOutput,expectedOutput);

//valid test
actualOutput = lib.giveUnionOfArrays([12,34,56,78,90,12],[12,45,56,78,90,23,56]);
actualOutput = unique.findUnique(actualOutput);
expectedOutput =[12,34,56,78,90,45,23];
assert.deepEqual(actualOutput,expectedOutput);


