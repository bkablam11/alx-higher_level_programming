#!/usr/bin/node
//Write a script that prints x times “C is fun”

// const number = process.argv[2]

// if (number===undefined) {
//     console.log("Missing number of occurrences");
// }else{
//     for (let i = 0;i < parseInt(number); i += 1) {
//         console.log("C is fun");
//     }
// }


let i = parseInt(process.argv[2]);
if (Number.isNaN(i)){
    console.log('Missing number of occurrences');
}else{
    while (i>0) {
        console.log('C is fun');
        i--;
    }
}