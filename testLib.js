const assert = require('assert');

const printLog = function(functionName,actualOutput,expectedOutput,message) { 
  console.log("Function Name  : ",message,functionName.name);
  console.log("actualOutput   : ",actualOutput);
  console.log("expectedOutput : ",expectedOutput );
  console.log("---------------------------------");
}

const testLib = function(functionName,input,expectedOutput) { 
  let actualOutput = functionName(input);
  expectedOutput = expectedOutput;
  assert.deepEqual(actualOutput,expectedOutput);
  printLog(functionName,actualOutput,expectedOutput,"");
}

exports.printLog = printLog;
exports.testLib = testLib;
