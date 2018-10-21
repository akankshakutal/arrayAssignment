const assert  = require('assert');
const lib = require('../lib/LowestNumber.js');
const { testLib } = require('../testLib.js');

console.log("---------- Test Report ----------");

testLib(lib.findLowestNumber,[16,30,56,0],0);

testLib(lib.findLowestNumber,[6],6);

testLib(lib.findLowestNumber,[],undefined);

testLib(lib.findLowestNumber,[1,2,5,8,1],1);

testLib(lib.findLowestNumber,[-1,9,-45,5,9],-45);

