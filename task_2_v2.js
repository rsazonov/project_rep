const a = 10;
const b = 6;
const c = 11;

function calcSumSqMaxNumb(f1,f2) {
    return (f1**2 + f2**2);
  }

let numbArray = [a,b,c];

let compareNumeric = numbArray.sort((a, b) => b - a);
console.log (compareNumeric);

let result =  calcSumSqMaxNumb(numbArray[0],numbArray[1]); 
console.log (result);

// //Переписать так чтобы была сортировка и брались макс и 2е число
// Сделать стрелочную функцию compareNumeric в sort
// сортировка наоборот