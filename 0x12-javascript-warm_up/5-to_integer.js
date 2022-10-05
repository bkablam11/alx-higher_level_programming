#!/usr/bin/node
// Write a script that prints My number: <first argument converted in integer> if the first argument can be converted to an integer:
// parseInt(): Converts a string to an integer.
// A numeric value. Number.isNaN()
// Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number)
const number = parseInt(process.argv[2]);

if (Number.isNaN(number)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + number);
}
