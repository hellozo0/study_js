/**
 * 관련 강의 영상: https://youtu.be/36HrZHzPeuY
 */
/**
 * Optional Chaining (ES11)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 */
{
  const person1 = {
    name: 'Ellie',
    job: {
      title: 'S/W Engineer',
      manager: {
        name: 'Bob',
      },
    },
  };

  const person2 = {
    name: 'Bob',
  };

  // 💩💩💩💩💩💩
  {
    function printManager(person) {
      console.log(person.job.manager.name);
    }
    printManager(person1);
    // printManager(person2);
  }

  // 💩💩💩 Ternary Operator 사용
  {
    function printManager(person) {
      console.log(
        person.job
          ? person.job.manager
            ? person.job.manager.name
            : undefined
          : undefined
      );
    }
    printManager(person1);
    printManager(person2);
  }

  // 💩
  {
    function printManager(person) {
      console.log(person.job && person.job.manager && person.job.manager.name);
    }
    printManager(person1);
    printManager(person2);
  }

  // ✨
  {
    function printManager(person) {
      console.log(person.job?.manager?.name);
    }
    printManager(person1);
    printManager(person2);
  }
  console.clear();
}

/**
 * Nullish Coalescing Operator (ES11)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
 */
{
  // Logical OR operator
  // false: false, '', 0, null, undefined
  {
    const name = 'Ellie';
    const userName = name || 'Guest';
    console.log(userName);
  }

  {
    const name = null;
    const userName = name || 'Guest'; 
    console.log(userName);
  }

  // 💩
  {
    const name = '';
    const userName = name || 'Guest'; //''도 false로 간주되서 Guest가 할당..이름을 안쓰고 싶은데..
    console.log(userName); //Guest

    const num = 0;
    const message = num || 'undefined'; //undefined로 할당
    console.log(message); //undefined
  }

  // ✨
  {
    const name = '';
    const userName = name ?? 'Guest'; //이름이 있다면 name을 쓰고, 값이 없다면 Guest
    console.log(userName);  //   출력

    const num = 0;
    const message = num ?? 'undefined'; //num이 있다면 num쓰고, 없으면 undefined
    console.log(message); //0
  }
}
