const assert = require('assert');
const lib = require('../.lib/mappingLength.js');

//valid input
let actualOutput = lib.mapLength(["Abc","abcd","sed"]);
let expectedOutput = [3,4,3];
assert.deepEqual(actualOutput,expectedOutput);

//empty string as an input 
actualOutput = lib.mapLength([""," ","ab"]);
expectedOutput = [0,1,2];
assert.deepEqual(actualOutput,expectedOutput);

//empty array as a input 
actualOutput = lib.mapLength([]);
expectedOutput = [];
assert.deepEqual(actualOutput,expectedOutput);

