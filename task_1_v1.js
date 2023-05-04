//let numbArray = [2,3,4,5];
//let numbArray = [3,4,2,5];
let numbArray = [3,2,3,5,4,1,2,5,7];
let goalNumber = 7;

for (let i = 0; i < numbArray.length; i++) {
    for (let j = 0; i < numbArray.length; j++){
        let sum = numbArray[i] + numbArray[j];
        
        if (sum === goalNumber) {
            console.log (i,j);
            break;
        } 
    }
    break;
}
// Переключиться на циклы (while, for)
//Переписать через функцию 