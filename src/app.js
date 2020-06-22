// import './utils.js';
// import subtract, { square, add } from './utils'

// console.log('app.js is running!!')
// console.log(square(4));
// console.log(add(4, 100));
// console.log(subtract(100, 80));

import isSenior, { isAdult, canDrink} from './person';

console.log('is 15 year old adult? ', isAdult(15));
console.log('can 15 year old drink? ', canDrink(15));

console.log('is 19 year old adult? ', isAdult(19));
console.log('can 19 year old drink? ', canDrink(19));

console.log('is 22 year old adult? ', isAdult(22));
console.log('can 22 year old drink? ', canDrink(22));

console.log('is 66 year old a senior?', isSenior(66));
console.log('is 64 year old a senior?', isSenior(64));