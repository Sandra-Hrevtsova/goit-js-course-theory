// let expression = prompt('Enter the expression');
let expression = ' 21  $  3   ';
//                012
console.log('EXPRESSION:', expression, typeof expression);
// console.log(Number(expression));

const isPlusExist = expression.includes('+');
const isMinusExist = expression.includes('-');
const isMultypleExist = expression.includes('*');
const isDirExist = expression.includes('/');
const isRestExist = expression.includes('%');
const isPowExist = expression.includes('**');

// if (!isPlusExist && !isMinusExist && !isMultypleExist && !isDirExist && !isRestExist && !isPowExist) {
//     alert('Incorrect expression!')
// }
let result;
if (isPlusExist) {
    let idx = expression.indexOf('+');
    // console.log('idx:', idx);
    let firstNumber = Number(expression.slice(0, idx));
    // console.log('firstNumber:', firstNumber, typeof firstNumber);
    let lastNumber = Number(expression.slice(idx + 1));
    // console.log('lastNumber:', lastNumber, typeof lastNumber);
    result = firstNumber + lastNumber;
} else if (isMinusExist) {
    let idx = expression.indexOf('-');
    // console.log('plusIdx:', idx);
    let firstNumber = Number(expression.slice(0, idx));
    // console.log('firstNumber:', firstNumber, typeof firstNumber);
    let lastNumber = Number(expression.slice(idx + 1));
    // console.log('lastNumber:', lastNumber, typeof lastNumber);
    result = firstNumber - lastNumber;
} else if (isMultypleExist) {
    let idx = expression.indexOf('*');
    // console.log('plusIdx:', idx);
    let firstNumber = Number(expression.slice(0, idx));
    // console.log('firstNumber:', firstNumber, typeof firstNumber);
    let lastNumber = Number(expression.slice(idx + 1));
    // console.log('lastNumber:', lastNumber, typeof lastNumber);
    result = firstNumber * lastNumber;
} else if (isDirExist) {
    let idx = expression.indexOf('/');
    // console.log('plusIdx:', idx);
    let firstNumber = Number(expression.slice(0, idx));
    // console.log('firstNumber:', firstNumber, typeof firstNumber);
    let lastNumber = Number(expression.slice(idx + 1));
    // console.log('lastNumber:', lastNumber, typeof lastNumber);
    result = firstNumber / lastNumber;
} else if (isRestExist) {
    let idx = expression.indexOf('%');
    // console.log('plusIdx:', idx);
    let firstNumber = Number(expression.slice(0, idx));
    // console.log('firstNumber:', firstNumber, typeof firstNumber);
    let lastNumber = Number(expression.slice(idx + 1));
    // console.log('lastNumber:', lastNumber, typeof lastNumber);
    result = firstNumber % lastNumber;
} else if (isPowExist) {
    let idx = expression.indexOf('**');
    // console.log('plusIdx:', idx);
    let firstNumber = Number(expression.slice(0, idx));
    console.log('firstNumber:', firstNumber, typeof firstNumber);
    let lastNumber = Number(expression.slice(idx + 2));
    console.log('lastNumber:', lastNumber, typeof lastNumber);
    result = firstNumber ** lastNumber;
} else {
    alert('Incorrect expression!');
}



console.log('result:', result);



