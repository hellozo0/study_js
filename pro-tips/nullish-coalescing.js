// Nullish coalescing operator

// ❌ Bad Code 💩
function printMessage(text) {
  let message = text;
  if (text == null || text == undefined) {
    message = 'Nothing to display 😜';
  }
  console.log(message);
}

// ✅ Good Code ✨
function printMessage(text) {
  const message = text ?? 'Nothing to display 😜'; // 텍스트가 있다면 그대로 쓰고 없으면 출력문 저장
  console.log(message);
}

// 🚨 Default parameter is only for undefined
function printMessage(text = 'Nothing to display 😜') {
  console.log(text);
}

// 🚨 Logical OR operator ||
function printMessage(text) {
  const message = text || 'Nothing to display 😜';
  console.log(message);
}

const result = getInitialState() ?? fetchFromServer();
console.log(result);

function getInitialState() {
  return null;
}
function fetchFromServer() {
  return 'Hiya from 💻';
}

printMessage('Hello');
printMessage(null);
printMessage(undefined);
printMessage(0);
printMessage('');
