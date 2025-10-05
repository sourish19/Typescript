"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function firstEle(arr) {
    return arr[0];
}
const val = firstEle(["1", 2, 3, 4, 5]);
console.log(val);
// ----------------------
// ---------Generics-------
//this version of the identity function is generic, as it works over a range of types
function identity(args) {
    return args;
}
// pass the type as a parameter
const op1 = identity("myString");
const op2 = identity(100);
const op3 = identity(true); // argument inference
console.log(op1);
console.log(op2);
// ----------
function logingIdentity(args) {
    console.log(args.length);
}
logingIdentity([]);
function identity2(args) {
    console.log('Args - ', args);
    return args;
}
const myIdentity = identity2;
myIdentity('hello');
// ------------
class Box {
    content;
    constructor(value) {
        this.content = value;
    }
}
const numberBox = new Box(123);
const stringBox = new Box("hi");
//# sourceMappingURL=index.js.map