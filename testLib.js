const assert = require('assert');

const printLog = function(functionName,input,actualOutput,expectedOutput,message) { 
  console.log("Function Name  : ",message,functionName.name);
  console.log("Input          : ",input);
  console.log("actualOutput   : ",actualOutput);
  console.log("expectedOutput : ",expectedOutput );
  console.log("---------------------------------");
}

const testLib = function(functionName,input,expectedOutput) { 
  let actualOutput = functionName(input);
  expectedOutput = expectedOutput;
  assert.deepEqual(actualOutput,expectedOutput);
  printLog(functionName,input,actualOutput,expectedOutput,"");
}

exports.printLog = printLog;
exports.testLib = testLib;
