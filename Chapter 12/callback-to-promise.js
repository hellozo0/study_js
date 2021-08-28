'use strict';

// Callback Hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {   //Promise 리턴
      setTimeout(() => {
        if (
          (id === 'ellie' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id);   //성공
        } else {
          reject(new Error('not found'));  //에러
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => { //프로미스 생성
      setTimeout(() => {
        if (user === 'ellie') {
          resolve({ name: 'ellie', role: 'admin' });   //성공
        } else { 
          reject(new Error('no access')); //실패
        }
      }, 1000);
    });
  }

  // Homework Answer 🚀
  async getUserWithRole(user, password) {
    const id = await this.loginUser(user, password);
    const role = await this.getRoles(id);
    return role;
  }
}

// Original code from Youtube course
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your passrod');
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)  //함수 호출
  .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))  //잘받아온다면 
  .catch(console.log);  

// Homework Answer 🚀
userStorage
  .getUserWithRole(id, password) 
  .catch(console.log)
  .then(console.log);
