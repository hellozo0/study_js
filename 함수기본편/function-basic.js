'use strict';
// 1. 함수 선언 & 호출
//함수 선언
function doSomething(){
    console.log('hello');
}
//함수 호출
doSomething();



// 2. 값을 리턴하는 함수
function add(a,b){
    const sum = a + b;
    return sum;
}
const result = add(1,2);
console.log(result);


// 3. 언어 공부 방법
// 4. 함수를 인자로 전달
// function doSomething(add){
//     console.log(add);
//     const result = add(2,3);
//     console.log(result);
// }

// function add(a,b){
//     const sum = a + b;
//     return sum;
// }
// //함수 호출
// doSomething(add); //이름만 작성



// 5. 선언 & 호출 복습
// 6. 함수를 변수에 할당
const addFun = add;
console.log(add); //함수 로직이 출력됨
addFun(1,2);
// 7. 마치며

