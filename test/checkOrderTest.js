const assert = require('assert');
const lib = require('../lib/checkOrder.js');
const { testLib } = require('../testLib.js');

console.log("---------- Test Report ----------");

testLib(lib.isAscending,[1],true);

testLib(lib.isAscending,[12,45,32,67,89],false);

testLib(lib.isAscending,[],true);

testLib(lib.isAscending,[12,34,56,78,90],true);

testLib(lib.isAscending,[-12,-23,-45,-65],false);

testLib(lib.isDescending,[1],true);

testLib(lib.isDescending,[12,45,32,67,89],false);

testLib(lib.isDescending,[],true);

testLib(lib.isDescending,[90,87,65,43,21],true);

testLib(lib.isDescending,[-12,-1,0,12,34],false);

