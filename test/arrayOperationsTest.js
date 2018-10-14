const assert = require('assert');
const lib = require('../.lib/arrayOperations.js');
const addElement = lib.addElement,deleteElement=lib.deleteElement,sortArray=lib.sortArray;

//inserting in the middle
let actualOutput = addElement([1,2,3,4],10,2);
let expectedOutput = [1,10,2,3,4];
assert.deepEqual(actualOutput,expectedOutput);

//inserting at beginning
actualOutput = addElement([10,20,30,40,50],100,1);
expectedOutput = [100,10,20,30,40,50];
assert.deepEqual(actualOutput,expectedOutput);

// insert in the end
actualOutput = addElement([100,200,300,600],1000,5);
expectedOutput = [100,200,300,600,1000];
assert.deepEqual(actualOutput,expectedOutput);

//deleting in the middle
actualOutput = deleteElement([1,2,3,4],2);
expectedOutput = [1,3,4]
assert.deepEqual(actualOutput,expectedOutput);

//deleting first item
actualOutput = deleteElement([10,20,30,40,50],10);
expectedOutput = [20,30,40,50];
assert.deepEqual(actualOutput,expectedOutput);

//deleting last item
actualOutput = deleteElement([100,200,300,600],600);
expectedOutput = [100,200,300,];
assert.deepEqual(actualOutput,expectedOutput);


actualOutput = sortArray("ascending",[34,68,12,56,90]);
expectedOutput = [12,34,56,68,90];
assert.deepEqual(actualOutput,expectedOutput);

//sort we have same elements  
actualOutput = sortArray("ascending",[3,6,8,3,9]);
expectedOutput = [3,3,6,8,9];
assert.deepEqual(actualOutput,expectedOutput);

//sort does not edit input
let input = [30,67,56,12,90];
actualOutput = sortArray("descending",input);
expectedOutput = [90,67,56,30,12];
assert.deepEqual(actualOutput,expectedOutput);
assert.deepEqual(input,[30,67,56,12,90]);

//sort ignores non recognized orders
assert.deepEqual(sortArray('random',[5,3,2,1]),[5,3,2,1]);
