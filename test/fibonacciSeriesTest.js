const assert  = require('assert');
const lib = require('../lib/FibonacciSeries.js');
const { testLib } = require('../testLib.js');

console.log("---------- Test Report ----------");

testLib(lib.generateFibonacciSeries,3,[0,1,1]);

testLib(lib.generateFibonacciSeries,'4',[0,1,1,2]);

testLib(lib.generateFibonacciSeries,0,[]);

testLib(lib.generateFibonacciSeries,1,[0]);

