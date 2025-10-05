"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Field needs to be initialized in the constructor itself 
class UserAccount {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const newUser = new UserAccount('Bankai', 1);
console.log(newUser);
// ------ ------
class helloName {
    // Not initialized but no err since I am not using constructor 
    name;
    setName(newName) {
        this.name = newName;
    }
    getName() {
        console.log(this.name);
    }
}
const a = new helloName();
a.setName('Sourish');
a.getName();
// ------ ------
class Ds {
    // readonly - I can only assign this variable in constructor not on other functionas
    name = 'Zenitsu';
    constructor(secondName) {
        this.name = `${this.name} ${secondName}`;
    }
}
const d = new Ds('Agatsuma');
console.log(d.name);
// ----Overloads---
// -- Method Overload --
class Calculate {
    add(x, y) {
        return x + y;
    }
}
const value = new Calculate();
console.log(value.add(3, 21));
// -- Constructor Overload -- when a class can be constructed in multiple ways, with different parameter types or numbers of parameters.
class Point {
    x;
    y;
    constructor(x, y = 0) {
        if (typeof x === "string") {
            const [px, py] = x.split(",").map(Number);
            this.x = px ?? 0;
            this.y = py ?? 0;
        }
        else {
            this.x = x;
            this.y = y;
        }
    }
}
const p1 = new Point(10, 20);
const p2 = new Point("5,6");
console.log('This is p1', p1, 'This is p2', p2);
// -----------------------------------------
//# sourceMappingURL=classes.js.map