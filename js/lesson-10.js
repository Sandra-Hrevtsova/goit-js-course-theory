console.log('ok');

// const obj = {
//     name: 'parent'
// }
// console.log(obj);

// const newObj = Object.create(obj)
// console.log(newObj);

class Student {
    // Static props
    static version = '1.0.0';
    static updVersion = function(value){
        this.version = value;
    }

    // Public props
    // name = '';
    // email = '';
    // phone = '';

    // Private props
    #pass = 'qwerty';

    constructor(name = '', email = '', phone = '') {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.results = [];

        // this.setname = function(newName) {
        //     return this.name = newName
        // }
    }
    // ACCESSORS
    // getters

    get _name(){
        return this.name;
    }

    get _pass() {
        return this.#pass;
    }

    // settters
    set _name(newName){
        return this.name = newName;
    }

    set _pass(newPass) {
        return this.#pass = newPass;
    }

    createResultObject(date, total){
        return {
            date, total
        }
    }

    passTest(date, ...rest){
        // console.log('DATE:', date);
        const result = rest.reduce((total, num) => total += num , 0);
        // console.log('TOTAL test result:', result);
        const res = this.createResultObject(date, result);
        // console.log('res:', res);
        this.results.push(res);
        return this.results;
    }


    // setName(newName) { // own row
    //     return this.name = newName
    // }
    // getName(){// own row
    //     return this.name;
    // }

    // setEmail(newEmail) {// own row
    //     return this.email = newEmail
    // }
    // getEmail(){// own row
    //     return this.email;
    // }

    // setPhone(newPhone) {// own row
    //     return this.phone = newPhone
    // }
    // getPhone(){// own row
    //     return this.phone;
    // }

 
}

const ira = new Student('Irina', 'ira@gmail.com', '+380501112233');
// console.log('Ira:', ira);
// console.log('Ira`s name:', ira.name); // not good
// console.log('Ira`s pass:', ira._pass); 
ira._pass = '123';
// console.log('Ira`s pass:', ira._pass); 



// console.log('Ira`s name:', ira._name); // called accessor get
ira._name = 'Iryna';
// console.log('Ira`s name:', ira._name); // called accessor get

ira.passTest('2/2/23', 1, 0, 1, 1, 1, 0, 1);
ira.passTest('3/2/23', 1, 0, 1, 1, 1, 0, 1);
ira.passTest('4/2/23', 1, 0, 1, 1, 1, 0, 1);
ira.passTest('5/2/23', 1, 0, 1, 1, 1, 0, 1)
const testIra = ira.passTest('6/2/23', 1, 0, 1, 1, 1, 0, 1)
// console.log('testIra:', testIra);



const kolia = new Student('Nikolay', 'kolia@g,ail.com', '555555')
// console.log('Kolia:', kolia);
const testKolia = kolia.passTest('3/2/23', 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1);

// console.dir(Student);

class UpdStudent extends Student {
    constructor(a, b, c){
        super(a, b, c)
        this.score = 0;
    }

    get _score() {
        return this.score;
    }
    set _score(value) {
        return this.score = value;
    }


    getScore(){
        const res = this.results.reduce((total, elem) => total += elem.total, 0)
        // console.log(res);
        this._score = res;
        return this.score;
    }

}

const edgar = new UpdStudent('Edgar', 'sss@mail.com', '7777');

console.log('Edgar:', edgar);
edgar.passTest('31/01/23', 1, 1, 0, 1)
edgar.passTest('30/01/23', 1, 1, 0, 1)
edgar.passTest('29/01/23', 1, 1, 0, 1)
edgar.passTest('28/01/23', 1, 1, 0, 1)
edgar.passTest('27/01/23', 1, 1, 0, 1)
edgar.getScore()