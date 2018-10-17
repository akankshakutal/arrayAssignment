const assert = require('assert');
const { isSubset } = require('../lib/subset.js');

//empty array as an input 
let actualOutput = isSubset([],[]);
let expectedOutput = true;
assert.equal(actualOutput,expectedOutput);

//one element array 
actualOutput = isSubset([1],[2]);
expectedOutput = false;
assert.equal(actualOutput,expectedOutput);

//valid input 
actualOutput = isSubset([1,2,7,8],[2,8]);
expectedOutput = true;
assert.equal(actualOutput,expectedOutput);

//negative element as an element 
actualOutput = isSubset([-1,-4,-8,7],[-4,-1,8]);
expectedOutput = false;
assert.equal(actualOutput,expectedOutput);

//string as an array element
actualOutput = isSubset(["akanksha","pratiksha","omkar"],["omkar"]);
expectedOutput = true;
assert.equal(actualOutput,expectedOutput);

