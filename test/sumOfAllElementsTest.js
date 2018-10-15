const assert = require('assert');
const lib = require('../lib/sumOfAllElements.js');

//non empty array
let actualOutput = lib.addAll([1,2,3,4,5]);
let expectedOutput = 15;
assert.equal(actualOutput,expectedOutput);

//empty array 
actualOutput = lib.addAll([]);
expectedOutput = undefined;
assert.equal(actualOutput,expectedOutput);

//string as an input 
actualOutput = lib.addAll(["abc","pqr"]);
expectedOutput = "abcpqr";
assert.equal(actualOutput,expectedOutput);


