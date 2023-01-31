'use strict';

const fruit = {
    name: 'banana',
    weight: 100,
    price: 60,
    total: 0,

    getTotalSum() {
        // console.log(product.weight);
        const result =  this.weight * this.price;
        // console.log('total:', result);
        this.total = result;
        return this.total;
    },

    lossWeight(value){
        if (this.weight >=  value) {

            const res = this.weight - value;
            this.weight = res;
            this.getTotalSum()
            return this.weight;
        } else {
            alert('No fruits')
        }
    },

    addWeight(value = 0){
        // console.log('addWeight: ',this);
        return this.weight += value;
    },
}

// console.log('fruit:', fruit);
const result = fruit.getTotalSum();
// console.log('result:', result );
// console.log(this); 'use strict';!!!!!!!
const newWeight = fruit.lossWeight(30);
// console.log('newWeight:', newWeight);


const nextBought = fruit.lossWeight(50);
// console.log('nextBought:', nextBought);

// fruit.lossWeight(50);

fruit.addWeight();

function getWeightFromObject(callback) {
    const result = callback();
    // console.log('getWeightFromObject', result);
}

getWeightFromObject(fruit.addWeight.bind(fruit, 100))

// this in callbacks

// object.method.bind(object || newObject, ...params)

const Slava = {
    book: 'REACT JS', 
    toRead(bookName, page) {
        // console.log('bookName:', bookName);
        // console.log('page:', page);

        return this.book;
    }
}

const Edgar = {
    book: 'NODE JS', 
}

const cb = Slava.toRead.bind(Edgar, 'I love JS');


function toCallCallback (cb) {
    // console.log('toCallCallback is Called!!!!');
    return cb();
}

const myBook = toCallCallback(Slava.toRead.bind(Edgar, 'TypeScript', 50));
// console.log('myBook:', myBook);

const SlavaBook = Slava.toRead();
// console.log('SlavaBook:', SlavaBook);

// const EdgarBook = Slava.toRead.call(Edgar, 'Holy Bible', 777);
const EdgarBook = Slava.toRead.apply(Edgar, ['Holy Bible', 777]);

// console.log('SlavaBook:', EdgarBook);

// ====================
const arrowOfThis = () => {
    console.log('arrowOfThis:', this);
}

const default_user = {
    name: '',

    showName(){
        // declarationOfThis()
        arrowOfThis()
        return this.name;
    },
    setName(newName){
        return this.name = newName;
    }
}

const Roman = {
    name: 'Roma'
}

const Anastasia = {
    name: 'Nastia'
}

const Ashkhat = {
    name: 'Ashkhat'
}

let response = default_user.showName.call(Roman);
// console.log('response:', response);
let setNewName = default_user.setName.call(Roman, 'Super puper Roma');
// console.log('setNewName:', setNewName);

response = default_user.showName.apply(Anastasia);
// console.log('response:', response);
setNewName = default_user.setName.apply(Anastasia, ['The Best of The Best of Anastasia'])
// console.log('setNewName:', setNewName);

response = default_user.showName.call(Ashkhat);
// console.log('response:', response);
setNewName = default_user.setName.apply(Ashkhat, ['The Best of Super puper man!!'])
// console.log('setNewName:', setNewName);

// console.log('if type MODULE:', this);

function declarationOfThis(){
    console.log('declarationOfThis:', this);
}

const expressionOfThis = function(){
    console.log('expressionOfThis:', this);
}

// declarationOfThis()

// expressionOfThis()

// arrowOfThis()