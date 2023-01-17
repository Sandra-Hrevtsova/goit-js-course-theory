const initUser = {
    name: 'default',
    age: 33
}
// console.log('initUser:', initUser);
// console.log('is exist login:', initUser.hasOwnProperty('login'));
// console.log('is exist name:', initUser.hasOwnProperty('name'));


// const user = {
//     // login: 'new user',
//     // 'password': 'qwerty',
//     // 'new password': 'qwerty123'
// };

const user = Object.create(initUser);
// console.log('is exist login:', user.hasOwnProperty('login'));
// console.log('is exist name:', user.hasOwnProperty('name'));
// console.log('user.login:', user.login);
user.login = 'qwerty';
// console.log('user.login:', user.login);

// console.log([]);

for(const prop in user) {
    if (user.hasOwnProperty(prop)) {
        // console.log('PROP:', prop, user[prop]);
    } else {
        // console.log(`prop ${prop} is NOT OWN`);
    }
}

const newUser = {
    login: 'anonymous'
}
// console.log('user:', user);

// console.log('user login:', user['login']);// === user.login
// console.log('user password:', user['new password']);

// console.log('newUser login:', newUser.login);

// console.log('newUser login:', newUser.password);

newUser.password = 'queque'
// console.log('newUser login:', newUser.password);

newUser.password = 'asdffg'
// console.log('newUser login:', newUser.password);

delete newUser.login

// console.log('newUser.login:', newUser.login);
// console.log('newUser:', newUser);

// METHODS
console.log(user);

user.updateLogin = function(newLogin) {
    // console.log('old login', this.login);
    this.login = newLogin;
    // console.log('new login', this.login);

    return this.login;
}

user.updateLogin('hello')

// for short property
let login = 'default';

// for calculated prop
const studentKey = 'course'

const student = {
    login, // login: login,
    skills: ['html', 'js'],
    profile: {
        name: 'Olena',
        age: 18,
        prop: {
            a: 'aaa',
            b: 'bbb'
        }
    },
    [studentKey]: 'insert value'
}
// console.log(student);
// console.log('SKILL:', student.skills[0]);
student.skills.push('REACT')
student.skills.push('NODE')
student.skills.push('SQL')
student.skills.push('MONGO')

// console.log(student.profile.prop.a);
// console.log('STUDENT name:', student.profile.name);

// keys()
const studentsKeys = Object.keys(student);
// console.log('studentsKeys:', studentsKeys);

const initUserKeys = Object.keys(initUser);
// console.log('initUserKeys:', initUserKeys);

const userKeys = Object.keys(user);
// console.log('userKeys:', userKeys, userKeys.length);

for(let key of userKeys) {
    // console.log('key of user:', key);
    if(key !== 'updateLogin') {
        // console.log('value of user:', user[key]);
    }
}

// values()
const studentsValues = Object.values(student);
// console.log('studentsValues:', studentsValues);

const initUserValues = Object.values(initUser);
// console.log('initUserValues:', initUserValues);

const userValues = Object.values(user);
// console.log('userValues:', userValues, userValues.length);

// entries()
// [[key, value], [key, value], [key, value]]
const studentEntries = Object.entries(student);
// console.log('studentEntries:', studentEntries);

const db = {
    students: {
        html: [{name: 'Olena'}, {name: 'Vova'}],
        js: [{name: 'Olena'}, {name: 'Vova'}],
        react: [{name: 'Olena'}, {name: 'Vova'}],
        node: [{name: 'Olena'}, {name: 'Vova'}],
    }
}

for(const student of db.students.js) {
    // console.log('STUDENT of js:', student);
    // console.log('STUDENT of js:', student.name);
}

// ==========
const product = {
    count: 10,
    price: 500,
    name: 'main product'
}
console.log(product);
console.log('KEYS', Object.keys(product));
console.log('VALUES:', Object.values(product));
console.log('ENTRIES:', Object.entries(product));

