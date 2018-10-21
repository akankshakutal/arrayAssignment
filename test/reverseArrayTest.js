const assert = require('assert');
const lib = require('../lib/reverseArray.js');
const { testLib } = require('../testLib.js');

console.log("---------- Test Report ----------");

testLib(lib.reverseArray,[],[]);

testLib(lib.reverseArray,[4],[4]);

testLib(lib.reverseArray,[1,2,3,4,5,6],[6,5,4,3,2,1]);

testLib(lib.reverseArray,["abc","xyz","lmn"],["lmn","xyz","abc"]);
