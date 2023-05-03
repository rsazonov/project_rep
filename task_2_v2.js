const a = 10;
const b = 6;
const c = 11;

function calcSumSqMaxNumb(f1,f2) {
    return (f1**2 + f2**2);
  }

function createArray (a1,a2,a3) {
    let newArray
    return newArray = [a1,a2,a3];
}

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }

let numbArray = createArray (a,b,c);

numbArray.sort(compareNumeric);
console.log(numbArray);

let result =  calcSumSqMaxNumb(numbArray[2],numbArray[1]); 
console.log (result);

// //Переписать так чтобы была сортировка и брались макс и 2е число