const numb = 658;
//const numb = 12345;

function sumNumbArray (numb) {

   let sum = numb.toString()
    .split('')
    .map(str => parseInt(str))
    .reduce((acc, val) => acc + val, 0);
    
    if (sum >= 10) {
        sumNumbArray(sum);
    } else {
        console.log(sum);
        return sum;
    }
}

sumNumbArray(numb);

//Сделать так чтобы не было зависимо от длины массива
//подсказка - использовать остаток от деления (%)

//переделать под рекурсию
//сдулать функицю, которая принимает число, которая один раз делает все операции, а после условие (если сум Ю= 10), то вызывать функцию или возвращать значение