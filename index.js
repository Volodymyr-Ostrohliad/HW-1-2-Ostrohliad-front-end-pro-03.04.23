var number1 = parseFloat(prompt("Введите первое число"));
var number2 = parseFloat(prompt("Введите второе число"));

var sum = number1 + number2;
var difference = number1 - number2;
var product = number1 * number2;
var quotient = number1 / number2;

var resultString = `${number1} + ${number2} = ${sum}\n`;
resultString += `${number1} - ${number2} = ${difference}\n`;
resultString += `${number1} * ${number2} = ${product}\n`;
resultString += `${number1} / ${number2} = ${quotient}`;

alert(resultString);