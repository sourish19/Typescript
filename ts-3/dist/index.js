"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Point = (pt) => {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
};
Point({ x: 10, y: 20 });
const getAnimal = (name) => {
    return { name: "Pigeon", birdName: "ppppp" };
};
const creature = getAnimal();
creature.birdName = "IDK";
// Literal Types  -- not very useful
let x = "Hello World";
// x = 'jjk' this is error
// Number Literal
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
// Non-null Assertion Operator (Postfix !)
function liveDangerously(x) {
    // No error
    console.log(x.toFixed());
}
class Employee {
    name;
    age;
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
const greetEmployee = new Employee('Sourish', 21);
greetEmployee.greet('Welcome to Amazon');
function printId(id) {
    console.log(`ID: ${id.id}`);
}
printId({ id: 101 });
printId({ id: '101' });
//# sourceMappingURL=index.js.map