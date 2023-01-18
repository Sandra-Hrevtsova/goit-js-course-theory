const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];

function concatArrays(arr1, arr2, arr3) {
    const arr = arr1.concat(arr2, arr3);

    let count = arr.length;
    let i = 0;
    let res = '';

    while (i < count) {
        res = res + ' ' + arr.pop();
        i += 1;
    }

    return res;
}

const x = concatArrays(a, b, c);
console.log(x);