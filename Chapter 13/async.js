'use strict';
// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
  // do network reqeust in 10 secs....
  return 'ellie';
}

const user = fetchUser();
user.then(console.log); //promise로 만들어짐
console.log(user); 



// 2. await ✨
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}

//병렬로 실행 가능 한것 --> 서로 연관되어 있지 않은 함수들
async function pickFruits() {
  const applePromise = getApple(); //promise를 만들면 바로 promise가 실행된다.
  const bananaPromise = getBanana(); //promise를 만들면 바로 promise가 실행된다.
  const apple = await applePromise; //동기화 시켜주기
  const banana = await bananaPromise; //동기화 시켜주기
  return `${apple} + ${banana}`; 
}

pickFruits().then(console.log); //사과 + 바나나  -->  병렬로 실행



// 3. useful APIs ✨
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
