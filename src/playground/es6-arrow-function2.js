// argument object  -- no longer boud with arrow functions

// const add = (a, b) => {
//     console.log(arguments);
//     return a + b;
// };

// console.log(add(55,1, 100));

// this keyword -- no longer bound to arrow functions

// const user = {
//     name: 'Susheel',
//     cities: ['Delhi', 'NOIDA', 'Chennai'],
//     printCitiesLived() {
//         return this.cities.map((city) => 'Hi ' + city + '!');
//     }
// };

// console.log(user.printCitiesLived());

const multiplier = {
    numbers : [1,2,3],
    multiplyBy: 2,
    multiply () {
        return this.numbers.map(number => this.multiplyBy * number);
    }
}

console.log(multiplier.multiply());