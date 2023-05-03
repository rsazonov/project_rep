
let numbArray = [10,6,11,5,24];

function calcSumSqMaxNumb(f1,f2) {
    return (f1**2 + f2**2);
  }

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }

numbArray.sort(compareNumeric);

let maxOne = Math.max(...numbArray);

for (let i=0; i<numbArray.length; i++) {
    if (numbArray[i] === maxOne) {
        maxTwo = numbArray[i-1];
    } else {
        i++;
    }
}

let result =  calcSumSqMaxNumb(maxOne,maxTwo); 
console.log (result);

// Переписать так чтобы была сортировка и брались макс и 2е число