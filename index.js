let number1 = parseFloat(prompt("Введите первое число"));
let number2 = parseFloat(prompt("Введите второе число"));

const sum = number1 + number2;
const difference = number1 - number2;
const product = number1 * number2;
const quotient = number1 / number2;

let templateStrings = `${number1} + ${number2} = ${sum}\n`;
templateStrings += `${number1} - ${number2} = ${difference}\n`;
templateStrings += `${number1} * ${number2} = ${product}\n`;
templateStrings += `${number1} / ${number2} = ${quotient}`;

alert(templateStrings);
