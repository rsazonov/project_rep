//let numbArray = [2,3,4,5];
//let numbArray = [3,4,2,5];
let numbArray = [3, 2, 3, 5];
let goalNumber = 7; 

function getArrSumEqGoalNumb(numbArray, goalNumber) {
    let result = [];
    for (let i = 0; i < numbArray.length; i++) {
        for (let j = i + 1; j < numbArray.length; j++) {
            let sum = numbArray[i] + numbArray[j];
            if (sum === goalNumber) {
                result.push(i, j);
            }
        }
    }
    return result;
}

console.log(getArrSumEqGoalNumb(numbArray, goalNumber));
module.exports = getArrSumEqGoalNumb;

// Переключиться на циклы (while, for)
//Переписать через функцию 