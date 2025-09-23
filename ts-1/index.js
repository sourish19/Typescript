"use strict";
// Types - number, string, any - can be any datatype
// Try to avoid using any because we are using Typescript for typechecking purpose
// Typescript only catches compile time error
// Type Inferencing
// TS is giving a lot of information to the compiler
Object.defineProperty(exports, "__esModule", { value: true });
const x = 1; // I have implicitly given a Type
console.log(x);
function greeting(name) {
    return `Hello ${name}`;
}
console.log(greeting("sourish"));
function isAdult(age) {
    if (age > 18)
        return true;
    return false;
}
console.log(isAdult(19));
// In all these two function we are implictly getting the return types -- the return type is infered by the ts compiler
// Here if i dont write a return type it still knows it will return a number
// It automatically infered the return
function sum(num1, num2) {
    return num1 + num2;
    // return ""
}
console.log(sum(1, 2));
// Function that doesnt return anything & doesnt take any arguments
function delayedCall(cb) {
    setTimeout(() => {
        cb();
    }, 1000);
}
delayedCall(() => {
    console.log("Hello TS");
});
function delayedCall2(cb, delay) {
    setTimeout(() => {
        cb("Hello Hi there");
    }, delay);
}
delayedCall2((val) => {
    console.log(val);
    return val;
}, 1000);
let y = 1;
y = "sourish";
y = [1, 2, 3];
//# sourceMappingURL=index.js.map