const lib = require('../.lib/arrayOperations.js');

let numbers = [ 1, 2, 3, 4,];
let elementToAdd = 3;
let result = [];

result = lib.deleteElement(numbers,elementToAdd);
for(let  index=0; index<result.length; index++) {
  console.log(result[index]);
}

