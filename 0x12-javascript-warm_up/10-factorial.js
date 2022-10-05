#!/usr/bin/node
// Write a script that computes and prints a factorial
function factorial (a) {
  if ((Number.isNaN(a)) || (a === 1)) {
    return 1;
  } else {
    // return factorial(a-1)*a;
    let res = a;
    while (a > 1) {
      a--;
      res = res * a;
    }
    return res;
  }
}

console.log(factorial(parseInt(process.argv[2])));
