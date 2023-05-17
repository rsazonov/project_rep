//let numbArray = [2,3,4,5];
//let numbArray = [3,4,2,5];
let numbArray = [3, 2, 2, 5];
// let numbArray = [3.1, 2, 3.9, 5];
let goalNumber = 7; 

function getArrSumEqGoalNumb(numbArray, goalNumber) {
    let result = [];
    let found = false;

    for (let i = 0; i < numbArray.length; i++) {
        for (let j = i + 1; j < numbArray.length && !found; j++) {
            let sum = numbArray[i] + numbArray[j];
            if (sum === goalNumber){
                result.push(i, j);
                found = true;
            } 
        }
    }
    return result;
}
module.exports = getArrSumEqGoalNumb;