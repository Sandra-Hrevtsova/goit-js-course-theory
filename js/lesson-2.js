'use strict';
// console.log('Hello');

// if (condition) {
//     statement
// } 

// let turn = 'right';

// if (turn === 'left') {
//     console.log('You need to turm to the left!!!');
// } else {
//     console.log('ELSEEEEEE');
// }

let ringWay = 1;

// if (ringWay === 1) {
//     console.log('It`s first');
// } else if (ringWay === 2) {
//     console.log('It`s second');
// } else if (ringWay === 3) {
//     console.log('It`s third');
// } else {
//     console.log('Elseee');
// } // => switch case

// let time = 14; // GLOBALL!!!!
// // console.log('GLOBALL time', time);
// if (time >= 9 && time <= 17) {
//     // console.log('GLOBALL time', time);

//     let res = 13 + 14;
//     let x = res % 2;
//     if (x === 1) {
//         // console.log('Ok');
//         // console.log('GLOBALL time', time);

//     } else {
//         console.log('NE ok');
//     }
//     console.log('WORK time');
// } else {
//     console.log('Good bye!');
// } // => TERNARY
// // console.log('x:', x);
// // (condition) ? {if} : {else}
// (time >= 9 && time <= 17) ? console.log('WORK time') : console.log('Good bye!');

// SWITCH CASE

// switch(ringWay) {
//     case '1':
//         console.log('It`s first');
//         break;
//     case 2:
//         console.log('It`s second');
//         break;
//     case 3:
//         console.log('It`s third');
//         break;

//     default: 
//     console.log('ringWay', ringWay);
// }

// while (condition) {state}
// do {state} while (condition)

let max = 10;
let start = 0;
let current = 11;

// while (current <= max) {
//     console.log('Ok');
//     current += 1;
// }

// do {
//     console.log('Ok');
//     current += 1;
// } while (current <= max)

// for (start, condition, step) {
//     state
// }

let text = 'I love JavaScript';
//         [0 2]
console.log(text.length);
//    i ||  j || k
for (let i = 0; i < text.length; i += 4) {
    //          i < 17
    console.log(`index:${i} - value:${text[i]}`);
}


