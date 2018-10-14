const getYoungPerson = function (naman,aftab) {
  if(naman.age > aftab.age) {
    return naman;
  } 

  if(aftab.age > naman.age) {
    return aftab;
  }
  
}

let naman = {name : "Naman", age : 22 , contactNo : 8723564557 };
let aftab = {name : "Aftab", age : 20 , contactNo : 9043567811 };

let youngPerson = getYoungPerson(naman,aftab);

console.log(youngPerson.name);


