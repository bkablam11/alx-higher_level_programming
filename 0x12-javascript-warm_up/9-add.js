#!/usr/bin/node
// Write a script that prints the addition of 2 integers

// function add(a, b) {
//     if (Number.isNaN(a) || Number.isNaN(b)) {
//         console.log("NaN");
//     }else{
//         console.log(a+b);
//     }
// }

// add(parseInt(process.argv[2]), parseInt(process.argv[3]))

function add (a, b) {
  console.log(parseInt(a) + parseInt(b));
}

add(process.argv[2], process.argv[3]);
