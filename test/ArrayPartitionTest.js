const assert = require('assert');
const { divideArray } =  require('../lib/arrayPartition.js');

const emptyArray = function() { 
  let actualOutput = divideArray([],0);
  let expectedOutput = [[],[]]
  assert.deepEqual(actualOutput,expectedOutput);
}

const oneElementArray = function() { 
  let actualOutput = divideArray([3],0);
  let expectedOutput = [[],[3]]
  assert.deepEqual(actualOutput,expectedOutput);
}

const multyElementArray = function() { 
  let actualOutput = divideArray([1,2,3,6,7,8],5);
  let expectedOutput = [[1,2,3],[6,7,8]]
  assert.deepEqual(actualOutput,expectedOutput);
}

const negativeNumberArray = function() { 
  let actualOutput = divideArray([-1,-2,-4,-6,8,0,2],-2);
  let expectedOutput = [[-2,-4,-6],[-1,8,0,2]]
  assert.deepEqual(actualOutput,expectedOutput);
}

emptyArray();
oneElementArray();
multyElementArray();
negativeNumberArray();
console.log("All tests are passed.....!");

