const assert  = require('assert');
const lib = require('../lib/extractDigits.js');
const reverse = require('../lib/reverseArray.js');

// valid input
let actualOutput = lib.giveDigits(123456);
actualOutput = reverse.reverseArray(actualOutput);
let expectedOutput = [1,2,3,4,5,6];
assert.deepEqual(actualOutput,expectedOutput);

//give only one digit
actualOutput = lib.giveDigits(4);
expectedOutput = [4];
assert.deepEqual(actualOutput,expectedOutput);

//not giving input 
actualOutput = lib.giveDigits();
expectedOutput = [];
assert.deepEqual(actualOutput,expectedOutput);


