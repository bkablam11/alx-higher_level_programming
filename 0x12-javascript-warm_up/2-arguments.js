#!/usr/bin/node
//Write a script that prints a message depending of the number of arguments passed:

if (process.argv.length<=2) {
    console.log("No argument");    
}else if (process.argv.length ===3) {
    console.log("Argument found");
}else {
    console.log("Arguments found");
}

// explication [link](https://nodejs.org/api/process.html#process_process_argv)
// print process.argv
// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
// });

/*
0: /usr/bin/node
1: path
2: arg
*/
