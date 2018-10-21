const assert = require('assert');
const lib = require('../lib/averageOfElements.js');
const { testLib } = require('../testLib.js');

console.log("---------- Test Report ----------");

testLib(lib.average,[1,2,3,4,5],3);

testLib(lib.average,[6],6);

testLib(lib.average,[0,2],1);

testLib(lib.average,[1,-5],-2);

testLib(lib.average,[1,1],1);

testLib(lib.average,[3,5,6,2,9,4],4.83);

testLib(lib.average,[],'NaN');
