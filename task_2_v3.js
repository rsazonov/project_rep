
let numbArray = [10,6,11,5,7];

function calcSumSqMaxNumb(f1,f2) {
    return (f1**2 + f2**2);
  }

let compareNumeric = numbArray.sort((a, b) => a - b);

let maxOne = Math.max(...compareNumeric);

for (let i=0; i<compareNumeric.length; i++) {
    if (compareNumeric[i] === maxOne) {
        maxTwo = compareNumeric[i-1];
    } else {
        i++;
    }
}

let result =  calcSumSqMaxNumb(maxOne,maxTwo); 
console.log (result);

// Переписать так чтобы была сортировка и брались макс и 2е число