/**
 * Shorthand property names
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 *
 */

{
  const ellie1 = {
    name: 'Ellie',
    age: '18',
  };

  const name = 'Ellie';
  const age = '18';

  // 💩
  const ellie2 = {
    name: name, //Ellie
    age: age, //18
  };

  // ✨ 축약해서 코드 작성 가능
  const ellie3 = {  
    name,
    age,
  };

  console.log(ellie1, ellie2, ellie3);
  console.clear();
}



/**
 * Destructuring Assignment
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 *
 */
{
  // object
  const student = {
    name: 'Anna',
    level: 1,
  };

  // 💩
  {
    const name = student.name;
    const level = student.level;
    console.log(name, level);
  }

  // ✨
  {
    const { name, level } = student; 
    console.log(name, level); //Anna 1

    //키의 이름을 변경할 수도 있음
    const { name: studentName, level: studentLevel } = student;
    console.log(studentName, studentLevel); //Anna 1
  }

  // array
  const animals = ['🐶', '😽'];

  // 💩
  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
  }

  // ✨
  {
    const [first, second] = animals; //0, 1번째에 접근 ( 강아지 고양이)
    console.log(first, second);
  }
  console.clear();
}



/**
 * Spread Syntax
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 *
 */
{
  const obj1 = { key: 'key1' };
  const obj2 = { key: 'key2' };
  const array = [obj1, obj2];

  // array copy
  const arrayCopy = [...array]; //🌟object의 참조값을 복사 받음
  console.log(array, arrayCopy);

  const arrayCopy2 = [...array, { key: 'key3' }];
  obj1.key = 'newKey'; //🌟따라서 값을 바꾸면 전체가 다 바뀜(참조값을 복사 받아서)
  console.log(array, arrayCopy, arrayCopy2);


  // object copy
  const obj3 = { ...obj1 };
  console.log(obj3);

  // array concatenation
  const fruits1 = ['🍑', '🍓'];
  const fruits2 = ['🍌', '🥝'];
  const fruits = [...fruits1, ...fruits2];
  console.log(fruits); //복숭,딸기,바나나,키위

  // object merge
  const dog1 = { dog: '🐕' };
  const dog2 = { dog: '🐶' };
  const dog = { ...dog1, ...dog2 };
  console.log(dog); //🚨만약 키가 값은 object를 병합하면 뒤에꺼가 앞에꺼를 덮어씀
  console.clear();
}



/**
 * Default parameters
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
 */
{
  // 💩
  {
    function printMessage(message) {
      if (message == null) {
        message = 'default message';
      }
      console.log(message);
    }

    printMessage('hello');
    printMessage(); //undefined
  }

  // ✨
  {
    function printMessage(message = 'default message') { //초기값을 지정
      console.log(message); 
    }

    printMessage('hello');
    printMessage();
  }
  console.clear();
}



/**
 * Ternary Operator
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
{
  const isCat = true;
  // 💩
  {
    let component;
    if (isCat) {
      component = '😸';
    } else {
      component = '🐶';
    }
    console.log(component);
  }

  // ✨
  {
    const component = isCat ? '😸' : '🐶';
    console.log(component);
    console.log(isCat ? '😸' : '🐶');
  }
  console.clear();
}



/**
 * Template Literals
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
 */
{
  const weather = '🌤';
  const temparature = '16°C';

  // 💩
  console.log(
    'Today weather is ' + weather + ' and temparature is ' + temparature + '.'
  );

  // ✨
  console.log(`Today weather is ${weather} and temparature is ${temparature}.`);

}
