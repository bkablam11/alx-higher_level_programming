#!/usr/bin/node
/*
process.argv#
The process.argv property returns an array containing the command-line arguments passed when the Node.js process was launched.
The first element will be process.execPath. See process.argv0 if access to the original value of argv[0] is needed.
The second element will be the path to the JavaScript file being executed.
*/

// console.log(process.argv[2]);

// Write a script that prints the first argument passed
if (process.argv[2] === undefined) {
  console.log('No argument');
} else {
  console.log(process.argv[2]);
}
