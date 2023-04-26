let numbArray = [2,3,4,5];
let goalNumber = 7;

if (numbArray[0] === goalNumber) {
    console.log (numbArray[0]);
} else if (numbArray[0]+numbArray[1] === goalNumber) {
    console.log (numbArray[0], numbArray[1]);
} else if (numbArray[0] + numbArray[1] + numbArray[2] === goalNumber) {
    console.log (numbArray[0], numbArray[1], numbArray[2]);
} else if (numbArray[0] + numbArray[1] + numbArray[2] + numbArray[3] === goalNumber) {
    console.log (numbArray[0], numbArray[1], numbArray[2], numbArray[3]);   
} else if (numbArray[0] + numbArray[2] === goalNumber) {
    console.log (numbArray[0], numbArray[2]);   
} else if (numbArray[0] + numbArray[2] + numbArray[3] === goalNumber) {
    console.log (numbArray[0], numbArray[2], numbArray[3]); 
} else if (numbArray[0] + numbArray[3] === goalNumber) {
    console.log (numbArray[0], numbArray[3]);  
} 
    

// numbArray.forEach(function(element) {
//     sum += element;
//   });
// console.log(sum);

// function getGoalNumber(arr, numb) {
//     arr.forEach(function(element) {
//         return(sum += element);
//       });

    // if (sum === numb) {
    //     return true;
    //   } else {
    //     return false;
    //   }
// }

// numbShortArray = getGoalNumber(numbArray, goalNumber);
// console.log(numbShortArray)

    // for (let i = 0; i < numbShortArray.length; i++) {
    //     console.log(numbShortArray[i])
    // }


    // let sumArray = Number(numbArray[0]) + Number(numbArray[1]) + Number(numbArray[2]);

// if (sumArray > 10 ) {
//     const numbArray1 = sumArray.toString().split('');
//     let sumArray1 =  Number(numbArray1[0]) + Number(numbArray1[1]);
//     console.log(sumArray1);
// } else {
//     console.log(sumArray);
// }