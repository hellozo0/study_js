// Nullish coalescing operator

// β Bad Code π©
function printMessage(text) {
  let message = text;
  if (text == null || text == undefined) {
    message = 'Nothing to display π';
  }
  console.log(message);
}

// β Good Code β¨
function printMessage(text) {
  const message = text ?? 'Nothing to display π'; // νμ€νΈκ° μλ€λ©΄ κ·Έλλ‘ μ°κ³  μμΌλ©΄ μΆλ ₯λ¬Έ μ μ₯
  console.log(message);
}

// π¨ Default parameter is only for undefined
function printMessage(text = 'Nothing to display π') {
  console.log(text);
}

// π¨ Logical OR operator ||
function printMessage(text) {
  const message = text || 'Nothing to display π';
  console.log(message);
}

const result = getInitialState() ?? fetchFromServer();
console.log(result);

function getInitialState() {
  return null;
}
function fetchFromServer() {
  return 'Hiya from π»';
}

printMessage('Hello');
printMessage(null);
printMessage(undefined);
printMessage(0);
printMessage('');
