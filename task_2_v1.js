const a = 3;
const b = 4;
const c = 5;

function calcSumSqMaxNumb(f1,f2) {
    return (f1**2 + f2**2);
  }

function getMaxOne(m1, m2, m3) {
    if (m1 > m2 && m1 > m3) {
        return m1;
    } else if (m2 > m1 && m2 > m3) {
        return m2;
    } else {
        return m3;
    }
}

function getMaxTwo(m1, m2, m3) {
    if (m1 > m2 && m1 < m3) {
        return m1;
    } else if (m2 > m1 && m2 < m3) {
        return m2;
    } else {
        return m3;
    }
}

let maxOne = getMaxOne (a,b,c);
let maxTwo = getMaxTwo (a,b,c);


let result =  calcSumSqMaxNumb(maxOne,maxTwo);

console.log (result);
