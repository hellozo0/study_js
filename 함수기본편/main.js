'use strict';

// Primitive : 가장 작은 단위의 변수 : number, string, boolean, null, undefined
let number = 2; 
let number2 = number;  //number2에 값에 number1의 값이 복사
console.log(number); // 2
console.log(number2); // 2
 
number2 = 3;

console.log(number); // 2 
console.log(number2); // 3


//Object : 여러타입들을 한곳에 묶어둔것 : primitive를 제외한 모든 것
//const 값을 바꿀 수 없음 
const obj = {
    name : 'ellie',
    age : 5,
};

console.log(obj.name); //ellie

//🌟onj에는 주소값이 들어있다.🌟
let obj2 = obj; //🌟obj2라는 변수에 obj의 값을 복사(주소값을 복사)🌟

obj.name = 'hellozo0';
console.log(obj2.name); //hellozo0



//const 
const num = 2;
// num = 4; //error



