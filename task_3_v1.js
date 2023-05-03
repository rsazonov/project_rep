const numb = 658;

const numbArray = numb.toString().split('');

let sumArray = Number(numbArray[0]) + Number(numbArray[1]) + Number(numbArray[2]);

if (sumArray >= 10 ) {
    const numbArray1 = sumArray.toString().split('');
    let sumArray1 =  Number(numbArray1[0]) + Number(numbArray1[1]);
    console.log(sumArray1);
} else {
    console.log(sumArray);
}

//Сделать так чтобы не было зависимо от длины массива
//подсказка - использовать остаток от деления (%)