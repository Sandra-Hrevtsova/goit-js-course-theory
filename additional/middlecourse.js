const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// slice(startIdx, afterLastIdx) => new Array
// [...arr] => new Array
// Array.from(arr) => new Array

// map(callback) => new Array where initial.length === newArr.length
// [1, 2, 3].map((elem, idx, array) => {})

// filter(callback) => new Array where lenght >= 0 || lenght <= initial.length

// find(callback) => first element of array with check || undefined

// every(callback) => true if all === true else false
//  && => true if all === true else false

// some(callback) => false if all === false else true
//  || => false if all === false else true

// forEach(callback) => undefined because it`s as cicle for...of || for
const callback = (elem, idx, array) => {}

// reduce(rdCallback, initMemoValue) => 0 || '' || [] || {} as memo || acc
const rdCallback = (memo, elem, idx, array) => {}

// sort(getSorted) => !!!! mutation
// [...arr].sort()
const getSorted = (a, b) => {
    // for numbers => return a - b || b - a
    // for string => return;
}

// flatMap(getMap) => new Array [...elem, ..., lastElem]
const getMap = (elem) => elem

// ============

// {} - object

// property - key: value,
// method === property where value == function

const user = {
    // properties
    name: 'user',
    age: 0,
    course: null,

    // method ES5 (2009)
    changeCourse: function() {},

    // method ES6 (2015) === ECMAScript2015
    updateCourse() {
        console.log('COURSE prop:', this.course);
    }
}
console.log('COURSE:', user.course);
user.updateCourse()

// ES6 classes Function-Constructors (ES5)
class User {
    // static properties and methods

    // private props and methods (#)

    constructor(){
        // properties for exemplar
    }
    // methods for exemplar
}

class newUser extends User {
    // static properties and methods

    // private props and methods (#)

    constructor(){
        super()
        // properties for exemplar
    }
    // methods for exemplar

}

const obj = new newUser()
console.log('obj:', obj);
