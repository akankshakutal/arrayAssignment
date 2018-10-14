const lib = require('../.lib/addElementToArray.js');

let numbers = [ 1, 2, 3, 4,];
let position = 5;
let elementToAdd = 10;
let result = [];

result = lib.addElement(numbers,elementToAdd,position);
for(let  index=0; index<result.length; index++) {
  console.log(result[index]);
}

