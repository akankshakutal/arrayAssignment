const assert = require('assert');
const lib = require('../lib/selectEverySecondElement.js');
const { testLib } = require('../testLib.js');

console.log("---------- Test Report ----------");

testLib(lib.selectEverySecondElement,[],[]);

testLib(lib.selectEverySecondElement,[2,3],[2]);

testLib(lib.selectEverySecondElement,[1,2,3,4],[1,3]);

testLib(lib.selectEverySecondElement,["abc","xyz","pqr","lmn"],["abc","pqr"]);


