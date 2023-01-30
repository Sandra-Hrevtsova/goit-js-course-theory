const arr = [
    { name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
    { name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
    { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
    { name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
    { name: "Pierre", surname: "Curie", born: 1859, dead: 1906, id: 5 },
    { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 6 },
    { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 7 },
    { name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 8 },
    { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 9 },
    { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 10 },
    { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 11 },
    { name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 12 },
    { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 13 }
];

// 1 - Получить массив ученых, родившихся в 19 веке.
// const bornedIn19century = arr.filter((scientist) => {
//     // console.log('scientist:', scientist);
//     // console.log('born:', scientist.born);
//     // const condition = scientist.born >= 1800 && scientist.born <= 1899;
//     const condition = scientist.born >= 1800 && scientist.born < 1900;
//     // console.log('condition:', condition);
//     return condition;
// }) 

const bornedIn19century = arr.filter((scientist) => scientist.born >= 1800 && scientist.born < 1900);
// console.log("bornedIn19century:", bornedIn19century);

// 2 - Найти общую сумму лет, сколько прожили все ученые.
// const totalAge = arr.reduce((total, scientist) => {
//     // console.log(`${scientist.name} ${scientist.surname}: born - ${scientist.born}, dead - ${scientist.dead}`);
//     const leave = scientist.dead - scientist.born;
//     // console.log(`${scientist.name} ${scientist.surname}: ${leave}`);
//     total += leave;
//     return total;
// }, 0);

const totalAge = arr.reduce((total, {dead, born}) => total += dead - born, 0);

// console.log('totalAge:', totalAge);

// 3 - Отсортировать ученых по алфавиту.
const slicedarray = arr.slice();
// console.log('slicedarray:', slicedarray, slicedarray === arr);

const sortedSlicedArray = slicedarray.sort((a, z) => a.surname > z.surname ? 1 : -1);
// console.log('sortedSlicedArray:', sortedSlicedArray);

const spredArray = [...arr];
// console.log('spredArray:', spredArray, spredArray === arr);
// const sortByAge = spredArray.sort((min, max) => {
//     const minAge = min.dead - min.born;
//     const maxAge = max.dead - max.born;
//     // console.log('minAge:', minAge);
//     // console.log('maxAge:', maxAge);
//     return minAge - maxAge
// })

const sortByAge = spredArray.sort((min, max) => (min.dead - min.born) - (max.dead - max.born))
// console.log('sortByAge:', sortByAge);
// console.log(sortByAge.map(({dead, born} )=> dead - born ));

const clonedByMap = arr.map(el => el);
// console.log('clonedByMap:', clonedByMap, clonedByMap === arr);

// 4 - Удалить из массива ученых, родившихся в 15, 16 или 17 веках.
// const filteredScientists = arr.filter(({born}) => {
//     // console.log('scientist:', born);
//     const condition = born < 1400 || born >= 1700;
//     return condition;
// })
const filteredScientists = arr.filter(({born}) => born < 1400 || born >= 1700);

// console.log('filteredScientists:', filteredScientists);

// 5 - Найти ученого, который родился позже всех.
// [ages] =  .map()
// Math.max(...[ages])

// const result = arr.map(({dead, born}) => {
//     const age = dead - born;
//     console.log('scientist age:', age);
//     return age;
// })

const result = arr.map(({born}) => born)

// console.log('result:', result);

const lastBorned = Math.max(...result);
// console.log('lastBorned:', lastBorned);

const findScientist = arr.find((scientist) => scientist.born ===lastBorned);

// console.log('findScientist:', findScientist);

const findScientist2 = clonedByMap.sort((min, max) => min.born - max.born)[clonedByMap.length-1]

// console.log('findScientist2:', findScientist2);

// 6 - Найти год рождения Albert Einstein.
const scientistName = 'Albert  Einstein'

// const whenEinsteinBorn = arr.find((scientist) => {
//     const fullName = scientist.name + ' ' + scientist.surname;
//     console.log('fullName:', fullName);

//     const condition = fullName === scientistName;
//     console.log(condition);

//     console.log('scientist born:', scientist.born);

//     if (condition) {
//         return scientist.born;
//     }
// })

const whenEinsteinBorn = arr.find(({name, surname, born}) => {
    if ((name + ' ' + surname) === scientistName) {
        return born;
    }
})

// console.log('whenEinsteinBorn:', whenEinsteinBorn?.born);

const whenEinsteinBorn2 = arr.reduce((bornDate, {name, surname, born}) => {
    if ((name + ' ' + surname) === scientistName) {
        bornDate = born
    }
    return bornDate
}, 0)

// console.log('whenEinsteinBorn2:', whenEinsteinBorn2);

// 7 - Найти ученых, фамилия которых начинается на букву "С".

const scientistsStartWithC = arr.filter(({surname}) => {
    return surname.toLowerCase().startsWith('c');
})

// console.log('scientistsStartWithC:', scientistsStartWithC);

// 8 - Удалить из массива всех ученых, имя которых начинается на букву "A".

const scientistsStartWithoutA = arr.filter((elem) => {
    return !elem.name.toLowerCase().startsWith('a')
})
// console.log('scientistsStartWithoutA:', scientistsStartWithoutA);

// 9 - Найти ученого, который прожил больше всех и ученого, который меньше.
const findYongestAndOldest = [...arr].sort((min, max) => {
    return (min.dead - min.born) - (max.dead - max.born)
})

console.log("findYongestAndOldest:", findYongestAndOldest, findYongestAndOldest.map(({dead, born}) => dead - born));

console.log('Yongest: ', findYongestAndOldest[0]);
console.log('Oldest: ', findYongestAndOldest[arr.length - 1]);
