/**
 * type casting in javascript
 */

let number1 = "5";
let number2 = "10";

console.log("string toplama")
console.log(number1 + number2); // 510

// String to Number
number1 = Number(number1);
number2 = Number(number2);

console.log("string to number")
console.log(number1 + number2); // 15

// Number to String
number1 = String(number1);
number2 = String(number2);
console.log("number to string")
console.log(number1 + number2); // 510

// String to Boolean
let str1 = "true";
let str2 = "false";

console.log("string to boolean")
console.log(Boolean(str1)); // true
console.log(Boolean(str2)); // true (non-empty strings are truthy)

// Boolean to String
let bool1 = true;
let bool2 = false;

console.log("boolean to string")
console.log(String(bool1)); // "true"
console.log(String(bool2)); // "false"

// Number to Boolean
let num1 = 0;
let num2 = 1;

console.log("number to boolean")
console.log(Boolean(num1)); // false (0 is falsy)
console.log(Boolean(num2)); // true (non-zero numbers are truthy)

// Boolean to Number
console.log("boolean to number")
console.log(Number(bool1)); // 1
console.log(Number(bool2)); // 0