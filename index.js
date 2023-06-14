var inputOne = document.getElementById('first-input');
var inputTwo = document.getElementById('second-input');
var operator = document.getElementById('operator');
var button = document.getElementById('calculate');
var resultParagraph = document.getElementById('result');
button.addEventListener('click', function () {
    var result;
    switch (operator.value) {
        case '-': {
            result = minusHandler(Number(inputOne.value), Number(inputTwo.value));
            break;
        }
        case 'x': {
            result = multiplicationHandler(Number(inputOne.value), Number(inputTwo.value));
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
    resultParagraph.textContent = "Result: ".concat(result);
});
function plusHandler(num1, num2) {
    return num1 + num2;
}
function minusHandler(num1, num2) {
    return num1 - num2;
}
function multiplicationHandler(num1, num2) {
    return num1 * num2;
}
function divisionHandler(num1, num2) {
    return num1 / num2;
}
