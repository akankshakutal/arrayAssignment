let name = process.argv[2];
let mail = process.argv[3];
let age = process.argv[4];
let flag = 0;

let person ={name : name , mailAddress : mail , age : age} 

console.log("Name of person is ",person.name);
console.log("Email Address of ",person.name,"is",person.mailAddress);
console.log("age of",person.name,"is",person.age);

let characters = person.name.split('');
console.log(characters[0]);

for(let index=0; index<characters.length; index++) {
  if(!isNaN(characters[index])) {
    flag = 1;
  }
}

if(flag == 0) {
  console.log("Valid Input");
} else {
  console.log("Invalid Name");
}


