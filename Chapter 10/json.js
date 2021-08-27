'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json); //["apple","banana"]

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: function () {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json); //{"name":"tori","color":"white","size":null,"birthDate":"2021-08-27T13:41:29.812Z"}

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json); //{"name":"tori","color":"white","size":null}

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
});
//key: , value: [object Object]
//key: name, value: tori
//key: color, value: white
//key: size, value: null
//key: birthDate, value: 2021-08-27T13:42:30.309Z
//key: jump, value: function () {console.log(`${this.name} can jump!`);}

console.log(json); //{"name":"ellie","color":"white","size":null,"birthDate":"2021-08-27T13:41:29.812Z"}




// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json); //{"name":"tori","color":"white","size":null,"birthDate":"2021-08-27T13:47:04.724Z"} birthDate가 string으로 할당

const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
//key: name, value: tori
//key: color, value: white
//key: size, value: null
//key: birthDate, value: 2021-08-27T13:42:30.309Z
//key: , value: [object Object]

console.log(obj); //{name: "tori", color: "white", size: null, birthDate: Fri Aug 27 2021 22:45:59 GMT+0900 (KST)}
rabbit.jump(); //tori can jump!
// obj.jump();

console.log(rabbit.birthDate.getDate()); //27
console.log(obj.birthDate.getDate()); //27