console.dir(Promise);

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let number = 2;

        if (number % 2 === 0) {
            resolve({number, description: 'it`s the odd number'})
        } else {
            reject(`${number} is not odd!!!`)
        }
    }, 1000)
});

// console.log('Exemplar of promise:', promise); // pending

promise.then((result) => {
            // console.log('Result:', result);
            // console.log('Result:', result.number);
            return result.number
        }).then((value) => {
            // console.log('VALUE:', value);
            value = value + ''
            return value
        }).then((res) => { 
            // console.log('res:', res); // fulfilled
        }).catch((error) => {
            // console.log('Error:', error);// rejected
        }).finally(() => {
            // console.log('Thank you for your request!')
        })

//  
const myFunc = (valueForChecking, successCheck, errorCheck) => {
    setTimeout(() => {
        if(typeof valueForChecking === 'string'){
            successCheck()
        } else {
            errorCheck()
        }
    }, 0)
}

const promissedFunc = (valueForChecking, delay) => {

    return new Promise((res, rej) => {
        setTimeout(() => {
            if (typeof valueForChecking === 'string') {
                res(`${valueForChecking} - success!`)
            } else {
                rej(`${valueForChecking} is not string`)
            }
        }, delay)
    })
}

// exemplar of Class == object

const resultat1 = promissedFunc({}, 0)

resultat1.then((data) => {
    // console.log('Data:', data);
    return data
}).catch((error) => {
    // console.log('Error:', error);
    return error
})

const resultat2 = promissedFunc(0, 0)

resultat2.then((data) => {
    // console.log('Data:', data);
    return data
}).catch((error) => {
    // console.log('Error:', error);
    return error
})

const resultat3 = promissedFunc('Javascript', 0)

resultat3.then((data) => {
    // console.log('Data:', data);
    return data
}).catch((error) => {
    // console.log('Error:', error);
    return error
})

const allPromises = Promise.all([resultat1, resultat2, resultat3]);
// console.log('allPromises:', allPromises);

// allPromises.then(res => {
//     console.log('allPromises res:', res);
// }).catch((error) => {
//     console.log('allPromises error:', error);
// })

const racedPromises = Promise.race([resultat1, resultat2, resultat3])
// console.log('racedPromises:', racedPromises);

// racedPromises.then((result) => {
//     console.log('racedPromises result:', result);
// }).catch((err) => {
//     console.log('racedPromises err:', err);
// })

let nickname = 'ku-ku';
let email = 'hhh@yahoo.com'

const resolvedPromises = Promise.resolve(nickname || email);
// console.log('resolvedPromises:', resolvedPromises);

resolvedPromises.then((result) => {
    console.log('resolvedPromises result:', result);
})

const rejectedPromises = Promise.reject('World!');
// console.log('rejectedPromises:', rejectedPromises);

// rejectedPromises.then(data => console.log('Data: ', data)).catch(err=> console.log('rejectedPromises:', err))
