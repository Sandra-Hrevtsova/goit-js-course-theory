'use strict';
// console.log('Main js file');

// // ES5 (2009)
// var myVar
// // ES6 (2015)
// let & const
// let name;
// console.log(name); // undefined
// name = 'Sandra';
// console.log(name);
// name = 'Petr';
// console.log(name);

// const lastName = 'гревцова';
// console.log(lastName);
// // lastname = 'ddd' //ERROR

// let age = 32;
// console.log('AGE:', age);
// age = 33;
// console.log('AGE:', age);

// last_name
// lastName

// PRIMITIVES
// string
// let stringValue = 'Sandra Hrevtsova';
// console.log('stringValue:', stringValue);
// // number
// let numberValue = 18.8;
// console.log('numberValue:', numberValue);
// numberValue = NaN;
// console.log('numberValue:', numberValue);
// numberValue = Infinity;
// console.log('numberValue:', numberValue);
// // boolean
// let boolValue = true;
// console.log('boolValue:', boolValue);
// boolValue = false;
// console.log('boolValue:', boolValue);
// // null
// let nullValue = null;
// console.log('nullValue:', nullValue);
// // undefined
// let undefinedValue;
// console.log('undefinedValue:', undefinedValue);
// Symbol
// BigInt

// // typeof
// console.log('typeof stringValue:', typeof stringValue);
// console.log('typeof numberValue:', typeof numberValue);
// console.log('typeof boolValue:', typeof boolValue);
// console.log('typeof nullValue:', typeof nullValue);
// console.log('typeof undefinedValue:', typeof undefinedValue);

// 'fhsldrhfkd'
// "hgvjshdfkjsdh"

// let value = `Say "Hello"`;
// console.log(value);

// // ${} - interpolation
// let userName = 'Sandra'
// let sayHello = `Hello, ${userName}`;
// console.log(sayHello);

// userName = 'user'
// sayHello = `Hello, ${userName}`;
// console.log(sayHello);

// userName = '    SaNdRa   Httrrrsova   '
// console.log(userName.length);
// userName = userName.trim();
// console.log(userName);
// console.log(userName.length);

// userName = userName.toLowerCase();
// console.log(userName);

// userName = userName.toUpperCase();
// console.log(userName);

// index    01
// let text = 'I love JavaScript';
// // position 12
// const stopWord = 'sale'
// console.log(text.includes(stopWord)); // false
// console.log(text.includes('love'));

// // console.log(text[0]);
// // console.log(text[1]);
// // console.log(text[2]); // l

// console.log(text.indexOf(stopWord)); // -1
// console.log(text.indexOf('love')); // 2s

console.log('1' + '2');

let num = '1000'
console.log(typeof num, num);
num = Number(num)
console.log(typeof num, num);

let a = '2.222sdff';
let b = '3.2344';
a = '15';
b = '7';
// a = Number(a);
// b = Number(b);
// a = +a;
// b = +b;
// a = parseFloat(a);
// b = parseInt(b);

let result = a + b;
result = a - b;
result = a / b;
result = a * b;
result = a % b;
result = a ** b;
console.log('result:', result);

// NaN - Not a Number
console.log(isNaN('1'));
console.log(isNaN('Sandra'));
console.log(isNaN('2.23sefwse'));
console.log(isNaN(null));
console.log(isNaN(undefined));
console.log(isNaN(false));
console.log(isNaN(true));























