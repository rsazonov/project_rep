//const numb = 658;
const numb = 12345;

let numbArray = numb.toString()
                    .split('')
                    .map(str => parseInt(str));

function sumNumbArray(numbArray) {
  let sum = numbArray.reduce((acc, val) => acc + val, 0);
  
  while (sum >= 10) {
    sum = sum.toString()
              .split('')
              .map(str => parseInt(str))
              .reduce((acc, val) => acc + val, 0);
  }
  return sum;
}

let result = sumNumbArray(numbArray);

console.log(result);

//Сделать так чтобы не было зависимо от длины массива
//подсказка - использовать остаток от деления (%)

//переделать под рекурсию
//сдулать функицю, которая принимает число, которая один раз делает все операции, а после условие (если сум Ю= 10), то вызывать функцию или возвращать значение