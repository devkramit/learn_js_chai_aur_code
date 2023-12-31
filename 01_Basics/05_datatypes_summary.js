/**
 * This file provides an overview of different data types in JavaScript.
 */

console.log("Hey! Amit");

/**
 * Adds a given number to itself.
 * @param {number} num - The number to be added.
 * @returns {number} - The sum of the given number and itself.
 */
function toAdd(num) {
    return num + num;
}

console.log(toAdd(10));

// Primitive types - String, Number, boolean, Null, undefined

// Reference type (Non- Primitive)

// Array, Objects, Function

let myArr = ["amit", "kumar", "engineer"]; // example of Array
let myObj = { // Example of an object
    name : "Amit",
    surname : "Kumar",
    designation : "Engineer"
}
let myFunction = function(){ // example of a function
    console.log("This is my function!");
}

console.table([myArr, myObj]);