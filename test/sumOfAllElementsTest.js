const assert = require('assert');
const lib = require('../lib/sumOfAllElements.js');
const { testLib } = require('../testLib.js');

console.log("---------- Test Report ----------");

testLib(lib.addAll,[1,2,3,4,5],15);

testLib(lib.addAll,[],undefined);

testLib(lib.addAll,["abc","pqr"],"abcpqr");


