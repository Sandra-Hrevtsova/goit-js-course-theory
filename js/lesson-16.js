const body = document.querySelector('body');
body.innerHTML = '';
const form = `
    <form class='userDataForm'>
        <label>
            <input type='text' placeholder='name' name='name'/>
        </label>
        <label>
            <input type='text' placeholder='email' name='email'/>
        </label>
        <label>
            <input type='text' placeholder='group' name='group'/>
        </label>
        <button class='sendBtn'>send</button>
    </form>
`
body.insertAdjacentHTML('afterbegin', form);

const myForm = document.querySelector('.userDataForm');

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target.elements);
})

const user = {
    name: 'Sandra',
    age: 33
}

// console.log(JSON);
console.log('object:', user);

const userToJson = JSON.stringify(user);
console.log('json:', userToJson);

const parsedJson = JSON.parse(userToJson);
console.log('parsed Json:', parsedJson);

// const arr = [1, 2, 3];
// const arr = [];
const arr = 1;

// if (arr.length > 0) {
//     arr.map((el) => {
//         console.log(el);
//     })
// } else {
//     console.log(`${arr} is not array` );
// }

try {
    arr?.mar((el) => {
        console.log(el);
    })
} catch(error) {
    console.log(error);
}

console.log(localStorage);

// localStorage.setItem('user', JSON.stringify(user))
localStorage.setItem('token', 'sfcgasjlhgcvfdlsiakhv;eshfk4675r435674836yfgechnhshcmdhcje7243');

// localStorage.removeItem('user')
// localStorage.clear()

const userFromLS = localStorage.getItem('user');
console.log('userFromLS:', userFromLS);

const parsedDataFromLS = JSON.parse(userFromLS);
console.log('parsedDataFromLS:', parsedDataFromLS);

console.log(myForm.elements.name.value);
// myForm.elements.name.value = parsedDataFromLS.name

myForm.addEventListener('input', (event) => {
    const {currentTarget: elements} = event;
    const {name, email, group} = elements;
    // console.log('name:', name.value);
    // console.log('email:', email.value);
    // console.log('group:', group.value);

    const obj = {
        name: name.value,
        email: email.value,
        group: group.value
    }
    console.log(obj);
    const objToJson = JSON.stringify(obj);
    console.log(objToJson);
    localStorage.setItem('formData', objToJson);
})

const dataFromLS = localStorage.getItem('formData');
const parsedData = JSON.parse(dataFromLS);
console.log('parsedData:', parsedData);

myForm.elements.name.value = parsedData.name;
myForm.elements.email.value = parsedData.email;
myForm.elements.group.value = parsedData.group;

