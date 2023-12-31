// to string

let convertToString = String(33); // '33'
let convertFromBoolean = String(true); // 'true' 
let convertFromNull = String(null); // 'null'
let convertFromUndefined = String(undefined); // 'undefined'

console.log(convertToString);

console.log(typeof convertToString);

console.table([convertToString, convertFromBoolean, convertFromNull, convertFromUndefined]);
console.table([typeof convertToString, typeof convertFromBoolean, typeof convertFromNull, typeof convertFromUndefined]);


// to number

let convertToNumber = Number("33"); // 33
let convertFromBooleanNum = Number(true); // 1
let convertFromNullNum = Number(null); // 0
let convertFromUndefinedNum = Number(undefined); // NaN

console.table([convertToNumber, convertFromBooleanNum, convertFromNullNum, convertFromUndefinedNum]);
console.table([typeof convertToNumber, typeof convertFromBooleanNum, typeof convertFromNullNum, typeof convertFromUndefinedNum]);

// to boolean


let convertToBoolFromString = Boolean("amit"); // true
let convertToBoolFromStringBlank = Boolean(""); // false
let convertToBoolFromNumber = Boolean(33); // true
let convertToBoolFromNumberZero = Boolean(0); // false
let convertToBoolFromNumberOne = Boolean(1); // true
let convertToBoolFromNull = Boolean(null); // false
let convertToBoolFromUndefined = Boolean(undefined); // false

console.table([convertToBoolFromString, convertToBoolFromStringBlank, convertToBoolFromNumber, convertToBoolFromNumberZero, convertToBoolFromNumberOne, convertToBoolFromNull, convertToBoolFromNull]);
console.table([typeof convertToBoolFromString, typeof convertToBoolFromStringBlank, typeof convertToBoolFromNumber, typeof convertToBoolFromNumberZero, typeof convertToBoolFromNumberOne, typeof convertToBoolFromNull, typeof convertToBoolFromNull]);

