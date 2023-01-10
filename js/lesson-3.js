// console.log('ok');

const emptyArray = [];
// console.log('emptyArray:', emptyArray);

const studentsNames = ['Nikolai', 'Kostya', 'Pasha', 'Askhat'];
// console.log('studentsNames:', studentsNames);

// console.log(studentsNames[0]);
// console.log(studentsNames[1]);
// console.log(studentsNames[2]);
// console.log(studentsNames[3]);
// console.log(studentsNames[4]);

let lastIdx = studentsNames.length - 1;
// console.log('lastIdx:', lastIdx);

studentsNames[4] = 'Nikita';
// console.log(studentsNames[4]);

const newArray = [1, 'test', undefined, null, [], studentsNames]
// console.log('newArray:', newArray[newArray.length-1][0]);
// console.log('newArray:', newArray.at(-1)[0]);

// console.log('studentsNames:',studentsNames);
//                                       i += 1
//                                       i = i + 1
for(let i = 0; i < studentsNames.length; i += 1) {
    // console.log(`FOR index-${i}:`, studentsNames[i]);
}
//    let book of books // const books = []

for (let name of studentsNames) {
    if (name.length === 6) {
        // break
        // console.log('only 6 symbols');
        continue;
    }
    // console.log('FOR...OF', name);
}

const cloneArrayOfStudents = studentsNames;
cloneArrayOfStudents[cloneArrayOfStudents.length] = 'new value';
// console.log('cloneArrayOfStudents:',cloneArrayOfStudents);

// console.log(studentsNames === cloneArrayOfStudents);

// METHODS
const nums = [1, 4, 6, 3];
console.log('nums:', nums);
nums.unshift('hello', 'world')
// console.log('nums:', nums);

nums.push('I', 'Love', 'Js')
// console.log('nums:', nums);

nums.shift()
// console.log('nums:', nums);
nums.shift()
// console.log('nums:', nums);

nums.pop()
nums.pop()
nums.pop()
// console.log('nums:', nums);


const cloneNums = nums.slice()
console.log('cloneNums:', cloneNums);
// console.log(nums === cloneNums);

const partOfNums = nums.slice(0, 2)
console.log('partOfNums:', partOfNums);

const lastTwoElems = nums.slice(-2)
console.log('lastTwoElems:', lastTwoElems);

const idxOfFour = cloneNums.indexOf(4); // 1
// console.log('idxOfFour:', idxOfFour);
// cloneNums.splice(idxOfFour, 2); // deleted 2 elements from index 1
cloneNums.splice(idxOfFour, 0, 'HELLO', 'WORLD'); 
// console.log('cloneNums:', cloneNums);

const newArr = [null];

const concatedArray = partOfNums.concat(newArr, lastTwoElems)
// console.log('concatedArray:', concatedArray);

let str = 'I love Js!'
const strToArr = str.split(' ')
console.log('strToArr:', strToArr);

const words = ['hello', 'world']
console.log(words);
const arrToStr = words.join('! ').toUpperCase()
console.log('arrToStr:', arrToStr);