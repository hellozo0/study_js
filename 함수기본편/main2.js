'use strict';


//함수는 반복되는 코드들을 짧게 만들어줌, 재사용 가능
const num1 = 1;
const num2 = 2;
const result = num1 + num2;
console.log(result); //3

const num3 = 1;
const num4 = 2;
const result2 = num3 + num4;
console.log(result); //3

//함수 호출
function add(a,b) {
    return a + b;
}

const sum = add(3,4);
console.log(sum); //7



const doSomething = add; //변수에 레퍼런스가 할당되어 있다.

const result3 = doSomething(2,3);
console.log(result3); //5
const result4 = add(2,3);
console.log(result4); //5


function print(a,b){
    console.log(`${a} ${b}`);
}
print(3,13);



//callback




function surprise(operator){ 
    const result5 = operator(2,3);
    console.log(result5); //5
}

surprise(add); //add의 주소값을 전달 --> add를 수행하는 것과 같음 