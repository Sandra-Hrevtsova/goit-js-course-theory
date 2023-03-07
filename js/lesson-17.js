console.log('ok');
const body = document.querySelector('body');
body.innerHTML = '';

// query to backend

// function to create smth
// response
// to show user this response

// | sync stack |     | setTimeout(cb, 2000, ...arg)   |
// | sync stack |     | setTimeout(cb, 1000, ...arg)   |
// | sync stack |
// | sync stack |

// |         que   setTimeout(cb, 1000, ...arg)                   |
// |         que   setTimeout(cb, 2000, ...arg)  
let count = 0;
// setInterval(() => {
//     count += 1;
//     console.log('count:', count);
// }, 3000)

const cb = (arg) => {
    console.log(arg);
};

// setTimeout(cb, 4000, 'Hello')

// console.log('ok');

const callBack = (arg) => {
    console.log(arg);
};

// setTimeout(callBack, 1000, 'World!')

// ========= DATE =============

console.dir(Date);

const date = new Date();
// console.log('DATE:', date, typeof date);

const strDate = 'Jul 11, 1990 12:22:09:123'
const myBirthday = new Date(strDate);
// console.log('myBirthday:', myBirthday, typeof myBirthday);

let year = 2022;
let month = 1; // 0 => 11
let day = 24;
let hour = 4;
let min = 30;
let sec = 9;
let ms = 123;

const badDay = new Date(year, month, day, hour, min, sec, ms);
// console.log('badDay:', badDay, typeof badDay);
const updBadDay = badDay.setHours(5);
// console.log('updBadDay:', updBadDay); // UNIX
// console.log('updBadDay hours:', new Date(updBadDay));

const parsedBadDay = Date.parse(badDay);
// console.log('parsedBadDay:', parsedBadDay, typeof parsedBadDay);

const justNow = Date.now();
// console.log('justNow:', justNow, typeof justNow);

const now = new Date();
console.log('now:', now ,typeof now);
// console.log(now.getDate()); // 7
// console.log(now.getDay()); // 0(sunday)=>6(saturday) 
// console.log(now.getMonth()); // 0(january)=>11(december)
// console.log(now.getFullYear()); // 2023

// console.log(now.getHours()); // 19 (GMT+0200)
// console.log(now.getUTCHours()); // 17 (UTC)

console.log('toUTCString:', now.toUTCString());
console.log('toISOString:', now.toISOString());
console.log('toLocaleString:', now.toLocaleString());
console.log('toDateString:', now.toDateString());
console.log('toTimeString:', now.toTimeString());

// .toUTCString(); // UTC date & time
// .toISOString();
// .toLocaleString();
// .toDateString(); // only date
// .toTimeString(); // only time

const btn = document.createElement('button');
btn.textContent = 'Click';
btn.type = 'button';

btn.id = 'clearInt'
body.insertAdjacentElement('afterbegin', btn)

const int = setInterval(() => {
    console.log('Set Interval');
    const dateForClocks = new Date();
    const h = String(dateForClocks.getHours()).padStart(2, 0);
    const m = String(dateForClocks.getMinutes()).padStart(2, 0);
    const s = String(dateForClocks.getSeconds()).padStart(2, 0);
    // console.log(`${h}:${m}:${s}`);
    const markup = `<p>${h}:${m}:${s}</p>`;
    body.innerHTML = markup
}, 1000);

btn.addEventListener('click', () => {
    console.log('CLICK');
    clearInterval(int);
})

 

