let userInput = prompt('Enter your age please');
console.log('AGE:', userInput, typeof userInput, isNaN(userInput));
let checkedValue = parseInt(userInput);
// let checkedValue = parseFloat(userInput);
let cancelValue = isNaN(userInput); // null => false
console.log('checkedValue:', checkedValue);
// '2' < 18
if (cancelValue) {
    alert('Incorrect number! Please enter the number')
} else if (checkedValue < 18) {
    alert('You cannot to use it, sorry!')
} else if (checkedValue >= 18 && checkedValue < 65) {
    alert('You can authorized')
} else if (checkedValue > 65) {
    alert('Please call to customer service')
} else {
    console.log('User clicked CANCEL');
}