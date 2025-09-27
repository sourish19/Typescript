"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const x = 1; // I have implicitly given a Type
console.log(x);
function greeting(name) {
    return `Hello ${name}`;
}
console.log(greeting("Levi"));
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
// Function that does return a string & takes arguments if we want to have multiple types to return then we have use | like this
function delayedCall2(cb, delay) {
    setTimeout(() => {
        cb("Hi there");
    }, delay);
}
delayedCall2((val) => {
    console.log(val);
    return val;
}, 1000);
let y = 1;
y = "Eren";
y = [1, 2, 3];
function printStringNumberBool(val) {
    console.log(val);
}
printStringNumberBool(1);
// Tsconfig.ts is the configuration file for ts which is used to configure the ts compiler
// There are default config we can overide them based on our requirements 
// inferred types - when we dont explicitly define the type like {let a = 2} - Inferred as: number
//# sourceMappingURL=index.js.map