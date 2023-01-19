-!- SPREAD

1. with ARRAY

- pass values from array
const nums = [1, 2, 3];
Math.max(...nums)

- create new own array
const initialArray = [1, 2, 3];
const newValues = [...initialArray];

2. with OBJECT

- create new own object by one or more objects

const nameValues = {firstName: 'user', lastName: 'surname'};
const contacts = {phone: '+380501112233', email: 'user@mail.com'}

const user = {...nameValues, age: 18, ...contacts}

-!- REST

1. with ARRAY

- collect all params in functon
function getProducts (...products) {
    <!-- (prop, ...products)  -->
    console.log(products); // [] - array
}

-!- DESTRUCTURING

1. Object

const user = {
    name: 'Sandra',
    age: null,
    cat: {
        name: 'Salomon',
        breed: 'sphynx',
        age: 2,
    } 
}

const {name, age = 33, cat: {name: petName, breed}} = object
console.log(name); // Sandra
console.log(age); // 33
console.log(petName); // Salomon
console.log(breed); // sphynx

2. Array

const date = [19, 01, 2023];
const [day, month, year] = date;

console.log(day); // 19
console.log(month); // 1
console.log(year); // 2023

-!- pattern {PARAMS}

function(name, age, skills, phone, ..., email) {}
||
const params = {name, age, skills, phone, ..., email}
function (params) {}
