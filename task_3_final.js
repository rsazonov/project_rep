const numb = 0.1;

function sumNumbArray (numb) {

   let sum = Math.trunc(numb).toString()
    .split('')
    .map(str => parseInt(str))
    .reduce((acc, val) => acc + val, 0);
    
    if (sum >= 10) {
        return(sumNumbArray(sum));
    } else {
        return sum;
    }
}

sumNumbArray(numb);
console.log(sumNumbArray(numb));

module.exports = sumNumbArray;