SYNC vs ASYNC

sync - all that we do before

async are:
- setTimeout(cb, ms, ...args) & setInterval(cb, ms, ...args) -- in window
- promises
- async await

Time & Date

console.dir(Date);
const date = new Date(); // now
<!-- ('Month Day, Year hh:mm:ss:mss') || (yyyy, m, d, h, m, s, ms) -->
console.log('DATE:', date, typeof date); // object of Date

console.log(date.getTime()); // UNIX in ms

//                    || UTC - Coordinated Universal Time
// .getDate(date)         || .getUTCDate(date)
// .getDay(date)          || .getUTCDay(date)
// .getMonth(date)        || .getUTCMonth(date)
// .getFullYear(date)     || .getUTCFullYear(date)
// .getHours(date)        || .getUTCHours(date)
// .getMinutes(date)      || .getUTCMinutes(date)
// .getSeconds(date)      || .getUTCSeconds(date)
// .getMilliseconds(date) || .getUTCMilliseconds(date)

// setters
// .setDate()         || 
// .setDay()          ||
// .setMonth()        || 
// .setFullYear()     ||
// .setHours()        || 
// .setMinutes()      || 
// .setSeconds()      || 
// .setMilliseconds()

const strDate = date.toString(); // date & time
console.log('string DATE:', strDate, typeof strDate); // string
// .toUTCString(); // UTC date & time
// .toISOString();
// .toLocaleString();
// .toDateString(); // only date
// .toTimeString(); // only time

console.log('now in ms:', Date.now()); // UNIX in ms
console.log('parsed Date:', Date.parse('11.11.2000 12:30:08:123')); // UNIX in ms

My clock
https://github.com/AleksandraHrevtsova/js-core-10

<!-- moment libriary for working with Date -->