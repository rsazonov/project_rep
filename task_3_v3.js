
let number = 658;

while (number >= 10) {
  let sum = 0;
  while (number !== 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
}
number = sum;
}
console.log(number);

//Сделать так чтобы не было зависимо от длины массива
//подсказка - использовать остаток от деления (%)