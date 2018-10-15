const assert = require('assert');
const lib = require('../lib/averageOfElements.js');

//valid input
let actualOutput = lib.average([1,2,3,4,5]);
let expectedOutput = 3;
assert.equal(actualOutput,expectedOutput);

//empty array as an input
actualOutput = lib.average([]);
expectedOutput = NaN
assert.equal(isNaN(actualOutput),isNaN(expectedOutput));

//only one array element
actualOutput = lib.average([6]);
expectedOutput = 6;
assert.equal(actualOutput,expectedOutput);
 
//take only one element 
assert.equal(lib.average([2]),2);

//check with 0
assert.equal(lib.average([0,2]),1);

//check with negative numbers
assert.equal(lib.average([1,-5]),-2);

//check with same number
assert.equal(lib.average([1,1]),1);

//check with decial point
assert.equal(lib.average([3,5,6,2,9,4]),4.83);


