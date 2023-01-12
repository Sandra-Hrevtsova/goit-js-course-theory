// // (params) {
// //     statement
// //     return ...
// // }

// // Function Declaration
// myFunc(2, 3);

// function myFunc(value1, value2) {
//     let sum = value1 + value2;
//     console.log(sum);

//     return sum;
// }

// let result = myFunc(2, 3);
// console.log('result:', result);

// // Function Expression
// // myNewFunc(1, 0); // ERROR!!!!! 

// const myNewFunc = function (value1, value2) {
//     // let sum = value1 + value2;
//     // console.log(sum);

//     // return sum;
//     return value1 + value2;
// }

// let newResult = myNewFunc(1, 0);
// // console.log('newResult:', newResult);

// // Arrow function () => {}

// // const myArrowFunc = (value1, value2) => {
// //     return value1 + value2;
// // }
// const myArrowFunc = (value1, value2) => value1 ** value2;

// let arrowResult = myArrowFunc(1, 2);
// // console.log('arrowResult:', arrowResult);

// arrowResult = myArrowFunc(2, 1);
// // console.log('arrowResult:', arrowResult);

// // pseudo array arguments
// const students = ['Pavel', 'Gosha', 'Askhat'];
// console.log(students);
// for (let student of students) {
//     // console.log('FOR OF student:', student);
// }

// // function getStudents(){
// //     console.log(arguments);
// //     for (const arg of arguments) {
// //         console.log('FOR OF arg:', arg);
// //     }
// // }
// // == 1 ==
// function getStudents(date = 'dd/mm/yyyy', weekday, ...students){
// // == 2 ==
//     // console.log('date:', date);
//     // console.log('weekday:', weekday);

//     let results = [];
//     for (const arg of students) {
// // == 3 ==
//         console.log('FOR OF arg:', arg);
//         if (!arg) {
// // == 4 ==
//             results.push('Empty name')
//         };
//         if (arg && arg.startsWith('P')) {
// // == 4 ==
//             results.push('P - the fist letter')
//         };  
//         if (arg && arg.startsWith('G')) {
// // == 4 ==
//             results.push('G - the fist letter')
//         };  
//     }
//     return results;
// }

// let lesson = getStudents('12/01/2022', 'thuesday', 'Pavel', 'Gosha', undefined, 'Askhat')
// // console.log('Lesson:', lesson);
// let date;
// getStudents(date, null, 'Pavel', 'Gosha', undefined, 'Askhat')

// function getSum(num1 = 0, num2 = 0){
//     return num1 + num2;
//     //     1 + undefined
// }

// let sum = getSum();
// console.log('sum:', sum);

const setResult = function(a, b) {
    if(checkValues(a) && checkValues(b)) return a * b;
    return 'Incorrect numbers';
}

const checkValues = function(value){
    console.log('value:', value);
    return !isNaN(value);
}

let result = setResult(23, '45ghgkhj')
console.log('RESULT:', result);



// // == 2 console.log('isNumberB:', isNumberB);
// // == 2 console.log('isNumberA:', isNumberA);

// // // == 3 == console.log('value:', value);
// // == 2 == checkValues(b)

// // // == 3 == console.log('value:', value);
// // == 2 == checkValues(a)
// == 1 == setResult(23, '45ghgkhj')