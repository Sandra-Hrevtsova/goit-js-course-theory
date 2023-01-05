// let name = prompt('Enter your name');
let uName = '  John    Doe  '; // => false
uName = uName.trim();

let firstName, lastName; 

if (uName.includes(' ')) {
    let idx = uName.indexOf(' ')
    firstName = uName.slice(0, idx);
    lastName = uName.slice(idx).trim();
} 

if (!uName) {
    uName = 'anonymous';
} 
if (lastName) {
    uName = firstName + ' ' + lastName
}

let greeting = `Hello, ${uName}`
console.log(greeting);