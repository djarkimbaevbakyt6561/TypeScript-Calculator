const inputOne = document.getElementById('first-input') as HTMLInputElement;
const inputTwo = document.getElementById('second-input') as HTMLInputElement;
const operator = document.getElementById('operator') as HTMLSelectElement;
const button = document.getElementById('calculate') as HTMLButtonElement;
const resultParagraph = document.getElementById('result') as HTMLParagraphElement;

button.addEventListener('click', () => {
  let result: number;
  switch (operator.value) {
    case '-': {
      result = minusHandler(Number(inputOne.value), Number(inputTwo.value));
      break;
    }
    case 'x': {
      result = multiplicationHandler(
        Number(inputOne.value),
        Number(inputTwo.value)
      );
      break;
    }
    case '/': {
      result = divisionHandler(Number(inputOne.value), Number(inputTwo.value));
      break;
    }
    default: {
      console.log(operator.value);
      result = plusHandler(Number(inputOne.value), Number(inputTwo.value));
      break;
    }
  }
  inputOne.value = '';
  inputTwo.value = '';
  resultParagraph.textContent = `Result: ${result}`;
});
function plusHandler(num1: number, num2: number): number {
  return num1 + num2;
}
function minusHandler(num1: number, num2: number): number {
  return num1 - num2;
}
function multiplicationHandler(num1: number, num2: number): number {
  return num1 * num2;
}
function divisionHandler(num1: number, num2: number): number {
  return num1 / num2;
}
