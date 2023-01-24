function myFunc1() {
    // console.log('myFunc-1 is called');
}

function myFunc2() {
    // console.log('myFunc-2 is called');
}

function myFunc3() {
    // console.log('myFunc-3 is called');
}

function myFunc4() {
    // console.log('myFunc-4 is called');
}

function mainFunction (callback) {
    // console.log('Attention!!!');
    callback();
}

mainFunction(myFunc1)
mainFunction(myFunc2)
mainFunction(myFunc3)
mainFunction(myFunc4)

// mainFunction(function(){console.log('INLINE CALBACK')})

// [].forEach((element, index, array) => {
// operations with element
// })

function functionWithAnyCb(...callbacks) {
    // console.log('callbacks:', callbacks);

    // for (let func of callbacks) {
    //     // console.log('func:', func);
    //     func();
    // }

    let result = callbacks.forEach((func) => {
        // console.log('FOR EACH:', func);
        func();
    })
    // console.log('result:', result);
}

functionWithAnyCb(myFunc1, myFunc2, myFunc3, myFunc4)

const numbers = [1, 2, 3, 4, 5, 6, 7];
let result;
// console.log('RESULT:', result);

result = numbers.forEach((elem) => {
    return elem + 1
})
// console.log('RESULT .forEach():', result);

// FUNCTIONAL METHODS
// array.map()
result = numbers.map((number) => {
    // console.log('number: ', number);
    return number + ''
})
// console.log('RESULT .map():', result);

// array.filter()
result = numbers.filter((item) => {
    // console.log('item:', item);
    if (item % 2 === 0) {
        return item
    }
})

console.log('RESULT .filter():', result);


// array.find()
result = numbers.find((el) => {
    // console.log('el:', el);
    if (el % 2 === 0) {
        return el
    }
})
console.log('RESULT .find():', result);

// array.reduce()
result = numbers.reduce((memo, element) => {
    memo.push(element * 2)
    //        1*2
    //        2*2
    //        3*2
    //        4*2
    //        5*2
    //        6*2
    //        7*2

    return memo;
    // [2, 4, 6, 8, 10, 12, 14]
}, [])
console.log('RESULT .reduce():', result);

result = numbers.reduce((memo, elem, index) => {
    // console.log('elem:', elem);
    // console.log('index:', index);
    memo[`property-${index}`] = elem;
    // console.log('Memo:', memo);
    return memo;
}, {})

console.log('RESULT .reduce():', result);

result = numbers.reduce((summ, number) => {
    return summ += number;
}, 0)

console.log('RESULT .reduce():', result);

result = numbers.reduce((str, item) => {
    return str += item + '-'
}, '')

console.log('RESULT .reduce():', result);

//         ||              &&
// array.some() & array.every()
result = numbers.some((x) => {
    return x === 3;
})
console.log('RESULT .some():', result); // TRUE

result = numbers.some((x) => {
    return x > 7;
})
console.log('RESULT .some():', result); // FALSE

result = numbers.every((x) => {
    return x === 3;
})
console.log('RESULT .every():', result); // FALSE

result = numbers.every((x) => {
    return x > 0;
})
console.log('RESULT .every():', result); // TRUE

const numberValues = [2, 1, 13, 56, 724, 34, 76];
// array.sort()
result = numberValues.sort((min, max) => {
    return min - max
});
console.log('res SORT:', result);

let reverseValue = result.reverse();
console.log('reverseValue:', reverseValue);

result = numberValues.sort((min, max) => {
    return max - min;
});
// console.log('res SORT:', result);

const stringValues = ['Petya', 'Pavel', 'Askhat', 'Roman', 'Marina', 'Nikolai']
result = stringValues.sort().reverse();

// console.log('My lovely students:', stringValues);

// array.flatMap()

const user = {
    name: 'Salomon',
    age: 2
}

const values = Object.entries(user);
console.log('values:', values); // [['name', 'Salomon'], ['age', 2]]

result = values.flatMap((elem) => elem)

console.log('result .flatMap(): ', result);

// array.findIndex()

result = numbers.findIndex((elem) => elem === 0)
// - 1 if not found
// real index of value if founded
console.log('indexOf():', numbers.indexOf(0));

console.log('result .findIndex(): ', result);
