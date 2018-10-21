const assert = require('assert');
const lib = require('../lib/uniqueElements.js');
const { testLib } = require('../testLib.js'); 

console.log("---------- Test Report ----------");

testLib(lib.findUnique,[],[]);

testLib(lib.findUnique,[1],[1]);

testLib(lib.findUnique,[1,2,3,4,1,4,2,3,7,6],[1,2,3,4,7,6]);

testLib(lib.findUnique,[-11,22,-11,33],[-11,22,33]);

testLib(lib.findUnique,["abc","pqr","xyz","abc","lmn"],["abc","pqr","xyz","lmn"]);
