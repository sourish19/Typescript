"use strict";
// Arrays
Object.defineProperty(exports, "__esModule", { value: true });
const superHeros = [];
superHeros.push("spiderman");
superHeros.push("batman");
superHeros.push("superman");
console.log(superHeros);
const heroPower = [];
heroPower.push(1);
heroPower.push(2);
heroPower.push(3);
console.log(heroPower);
const herosWithPower = [];
superHeros.forEach((hero, index) => (heroPower[index] ? herosWithPower.push({ name: hero, power: heroPower[index] }) : null));
console.log(herosWithPower);
// herosWithPower.push({ name: superHeros[0]!, power: heroPower[0]! }); --> This me it cannot be undefined otherwise will throw runtime error
const MLModels = [
    [255, 255, 255],
    [123, 124, 125, 126],
];
const newUser = [0, 'hhhh'];
const anotherUser = ['', 2]; // cant have [] 
//# sourceMappingURL=index.js.map