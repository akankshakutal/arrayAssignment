const assert  = require('assert');
const lib = require('../lib/GreatestNumber.js');
const { testLib } = require('../testLib.js');

console.log("---------- Test Report ----------");

testLib(lib.findGreatestNumber,[16,30,56,0],56);

testLib(lib.findGreatestNumber,[6],6);

testLib(lib.findGreatestNumber,[],0);

testLib(lib.findGreatestNumber,[1,2,5,8,1],8);

testLib(lib.findGreatestNumber,[-1,9,-45,5,9],9);

