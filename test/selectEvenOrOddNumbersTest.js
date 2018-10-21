const assert = require('assert');
const lib = require('../lib/selectEvenOrOddNumbers.js');
const { count } = require('../lib/count.js');
const { testLib } = require('../testLib.js');
const { printLog } = require('../testLib.js');

const testCount = function(functionName,input,expectedOutput) {  
  let actualOutput = functionName(input);
  assert.equal(expectedOutput,count(actualOutput));
  printLog(functionName,actualOutput,expectedOutput,"count");
}

console.log("---------- Test Report ----------");

testLib(lib.selectEven,[],[]);
testCount(lib.selectEven,[],0);

testLib(lib.selectEven,[2],[2]);
testCount(lib.selectEven,[2],1);

testLib(lib.selectEven,[-2,-4,-5],[-2,-4]); 
testCount(lib.selectEven,[-2,-4,-5],2);

testLib(lib.selectEven,[2,6,9,3,5],[2,6]) ;
testCount(lib.selectEven,[2,6,9,3,5],2);

testLib(lib.selectEven,[12,24,46,68,80],[12,24,46,68,80]);
testCount(lib.selectEven,[12,24,46,68,80],5);

testLib(lib.selectEven,[23,15,1,47,79],[]);
testCount(lib.selectEven,[23,15,1,47,79],0);

testLib(lib.selectOdd,[],[]);
testCount(lib.selectOdd,[],0);

testLib(lib.selectOdd,[3],[3]);
testCount(lib.selectOdd,[3],1);

testLib(lib.selectOdd,[-2,-4,-5],[-5]); 
testCount(lib.selectOdd,[-2,-4,-5],1);

testLib(lib.selectOdd,[2,6,9,3,5],[9,3,5]) ;
testCount(lib.selectOdd,[2,6,9,3,5],3);

testLib(lib.selectOdd,[12,24,46,68,80],[]);
testCount(lib.selectOdd,[12,24,46,68,80],0);

testLib(lib.selectOdd,[23,15,1,47,79],[23,15,1,47,79]);
testCount(lib.selectOdd,[23,15,1,47,79],5);

