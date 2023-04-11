let a = Number(prompt("Введите первое число"));
let b = Number(prompt("Введите второе число"));
let c = Number(prompt("Введите третье число"));
let d = Number(3)
console.log(a,b,c);

if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert("Ошибка! Введите только числа.");
} else {
  const sum = (a + b + c) / d;
  console.log(sum);}

const sum = (a + b + c) / d;
console.log(sum)

let templateStrings = `${a} + ${b} + ${c} / ${d} = ${sum.toFixed(1)}`;
alert(templateStrings)