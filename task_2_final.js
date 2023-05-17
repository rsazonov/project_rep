const a = 2.5;
const b = 1.7;
const c = 3.9;

function calcSumSqMaxNumb(a, b, c) {
  let numbArray = [a,b,c];
  let compareNumeric = numbArray.sort((a, b) => b - a);
  return (numbArray[0]**2 + numbArray[1]**2);
  }
  calcSumSqMaxNumb (a,b,c);

module.exports = calcSumSqMaxNumb;