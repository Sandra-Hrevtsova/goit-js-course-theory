import './js/lesson-15.js';
import { students } from './js/lesson-15.js';
console.log('STUDENTS:', students);

// import { debounce } from "/debounce";
// console.log(debounce);

// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const c = [7, 8, 9];

// function concatArrays(arr1, arr2, arr3) {
//     const arr = arr1.concat(arr2, arr3);

//     let count = arr.length;
//     let i = 0;
//     let res = '';

//     while (i < count) {
//         res = res + ' ' + arr.pop();
//         i += 1;
//     }

//     return res;
// }

// const x = concatArrays(a, b, c);
// console.log(x);
// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {
//         // перебираю все зелья
//         for (const potion of this.potions) {
//             // проверяю свойство имени каждого зелья с тем, что получила из параметра
//            if (potion.name === newPotion) {
//             // если имя зелья и значение параметра совпали - выведу сообщение об ошибке
//             return `Error! Potion ${newPotion.name} is already in your inventory!`
//            }
//         // иначе - добавлю объект нового зелья 
//            this.potions.push({name: newPotion, price: 0});
//         }
//     },
//     removePotion(potionName) {
//         // тут тоже ты получаешь только имя, поэтому сначала надо проверить, есть ли в массиве объект с таким
//         // значением имени, как ты получаешь в параметре при вызове, 
//         // если есть объект с таким именем, то находишь его индекс и удаляешь
//         this.potions.splice(potionName, 1)
//     },
//     updatePotionName(oldName, newName) {
//       const potionIndex = this.potions.indexOf(oldName);
//       if (potionIndex === -1) {
//         return (`Potion ${oldName} is not in inventory!`);
//       }
//       this.potions.splice(potionIndex, 1, newName);
//     },
//     // Change code above this line
//   };

//   console.log(atTheOldToad.getPotions());
//   console.log(atTheOldToad.addPotion("Speed potion"));
//   console.log(atTheOldToad.getPotions("Speed potion"));
