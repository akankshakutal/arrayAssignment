const assert = require('assert');
const lib = require('../lib/mappingLength.js');
const { testLib } = require('../testLib.js');

console.log("---------- Test Report ----------");

testLib(lib.mapLength,["Abc","abcd","sed"],[3,4,3]);

testLib(lib.mapLength,[""," ","sed"],[0,1,3]);

testLib(lib.mapLength,[],[]);

testLib(lib.mapLength,[""],[0]);

testLib(lib.mapLength,["Abc","abcd","sed"],[3,4,3]);

testLib(lib.mapLength,[123,456,7,89],[3,3,1,2]);

