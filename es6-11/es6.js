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

  // π©
  const ellie2 = {
    name: name, //Ellie
    age: age, //18
  };

  // β¨ μΆμ½ν΄μ μ½λ μμ± κ°λ₯
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

  // π©
  {
    const name = student.name;
    const level = student.level;
    console.log(name, level);
  }

  // β¨
  {
    const { name, level } = student; 
    console.log(name, level); //Anna 1

    //ν€μ μ΄λ¦μ λ³κ²½ν  μλ μμ
    const { name: studentName, level: studentLevel } = student;
    console.log(studentName, studentLevel); //Anna 1
  }

  // array
  const animals = ['πΆ', 'π½'];

  // π©
  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
  }

  // β¨
  {
    const [first, second] = animals; //0, 1λ²μ§Έμ μ κ·Ό ( κ°μμ§ κ³ μμ΄)
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
  const arrayCopy = [...array]; //πobjectμ μ°Έμ‘°κ°μ λ³΅μ¬ λ°μ
  console.log(array, arrayCopy);

  const arrayCopy2 = [...array, { key: 'key3' }];
  obj1.key = 'newKey'; //πλ°λΌμ κ°μ λ°κΎΈλ©΄ μ μ²΄κ° λ€ λ°λ(μ°Έμ‘°κ°μ λ³΅μ¬ λ°μμ)
  console.log(array, arrayCopy, arrayCopy2);


  // object copy
  const obj3 = { ...obj1 };
  console.log(obj3);

  // array concatenation
  const fruits1 = ['π', 'π'];
  const fruits2 = ['π', 'π₯'];
  const fruits = [...fruits1, ...fruits2];
  console.log(fruits); //λ³΅μ­,λΈκΈ°,λ°λλ,ν€μ

  // object merge
  const dog1 = { dog: 'π' };
  const dog2 = { dog: 'πΆ' };
  const dog = { ...dog1, ...dog2 };
  console.log(dog); //π¨λ§μ½ ν€κ° κ°μ objectλ₯Ό λ³ν©νλ©΄ λ€μκΊΌκ° μμκΊΌλ₯Ό λ?μ΄μ
  console.clear();
}



/**
 * Default parameters
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
 */
{
  // π©
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

  // β¨
  {
    function printMessage(message = 'default message') { //μ΄κΈ°κ°μ μ§μ 
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
  // π©
  {
    let component;
    if (isCat) {
      component = 'πΈ';
    } else {
      component = 'πΆ';
    }
    console.log(component);
  }

  // β¨
  {
    const component = isCat ? 'πΈ' : 'πΆ';
    console.log(component);
    console.log(isCat ? 'πΈ' : 'πΆ');
  }
  console.clear();
}



/**
 * Template Literals
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
 */
{
  const weather = 'π€';
  const temparature = '16Β°C';

  // π©
  console.log(
    'Today weather is ' + weather + ' and temparature is ' + temparature + '.'
  );

  // β¨
  console.log(`Today weather is ${weather} and temparature is ${temparature}.`);

}
