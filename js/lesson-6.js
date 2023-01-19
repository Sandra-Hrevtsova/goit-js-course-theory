
const initialArray = [1, 3, 19]
// console.log(Math.min(...initialArray));

const newArr = initialArray;
// console.log(newArr === initialArray);

const cloneArray = [...initialArray];
// console.log(cloneArray === initialArray);

const initObject = {name: 'Sandra'}

const newObject = initObject;
// console.log(newObject === initObject);

const cloneObject = {...initObject};
// console.log(cloneObject === initObject);

const userData = {name: 'user', age: undefined, skills: []}

const user = {...userData, isOnline: false, ...initObject }
// name: 'user'      name: 'Sandra'
// age: undefined,
// skills: []
// isOnline: false

// console.log('user:', user);
// name: 'Sandra'
// age: undefined,
// skills: []
// isOnline: false

// REST

function getStudents(date, ...students) {
    // console.log('DATE:', date);
    // console.log('STUDENTS:', students);
}

getStudents('', {name: 'Nastia'}, {name: 'Kolia'})
getStudents(null, {name: 'Nastia'}, {name: 'Kolia'}, {name: 'Askhat'})
getStudents('20/01/23')

// DESTRUCTURING
const name = ''

const {skills} = user;
// console.log('skills:', skills);

const usr = {
    name: 'Sandra',
    age: undefined,
    cat: {
        name: 'Salomon',
        breed: 'sphynx',
        age: 2,
        kittens: [
            {
                name: 'Lancelot'
            }
        ]
    } 
}

// console.log('CAT:', usr.cat.name);

const {cat: {name: catName}, age = 18} = usr;
// console.log('CAT:', catName);
// console.log('AGE:', age);

// console.log(usr.cat.kittens[0].name);
const {cat: {kittens}} = usr;
// console.log('kittens:', kittens);

const [elem1, elem2] = kittens;
// console.log('1:', elem1);

const {name: kittenName} = elem1;
// console.log('kittenName:', kittenName);

// console.log('2:', elem2);

// for(let {name} of usr.cat.kittens) {
//     console.log('kitten:', name);
// }

const usrData = {
    name: 'Olena', phone: '', email: '', agree: ''
}

function getUserData(usrData) {
    const {name} = usrData;

    // console.log('Hello ' + name);
    // console.log('sent to DB:', usrData);
}

getUserData(usrData)
getUserData('Olena', '+38050111222333', 'kdufgveksjhalekjfladhj@hamil.com', true)


const date = ['19', '01', '2023'];
// console.log('DATE:', date);

const [,,year] = date;
// console.log('year:', year);
// console.log('DAY:', day);

// =========================================

const product = {
    name: 'laptop',
    price: 100,
    count: 2,
    technical: {
        screen: {
            height: 900,
            width: 1400
        },
        weight: 700
    },

    getPrice: function() {
        return this.price;
    },

    setPrice(newPrice){
        let oldPrice = this.getPrice();
        if (oldPrice > 0) {
            this.price = newPrice
        }
        if (oldPrice === 0) {
            this.price = newPrice
        }
    }
};
// console.log(product.getPrice());

const { technical: {screen: {width}}} = product;
// console.log('Laptop width:', width);

const {technical: {weight: laptopWeight}} = product;
// console.log('Laptop weight:', laptopWeight);


const tech = {...product.technical}
console.log('new TECH:', tech);

console.log(tech === product.technical);