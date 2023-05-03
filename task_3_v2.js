//const numb = 658;
const numb = 198;

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