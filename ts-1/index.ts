// Types - number, string, any - can be any datatype
// Try to avoid using any because we are using Typescript for typechecking purpose
// Typescript only catches compile time error
// Type Inferencing
// TS is giving a lot of information to the compiler

const x: number = 1; // I have implicitly given a Type
console.log(x);

function greeting(name: string) {
  return `Hello ${name}`;
}
console.log(greeting("sourish"));

function isAdult(age: number) {
  if (age > 18) return true;
  return false;
}
console.log(isAdult(19));

// In all these two function we are implictly getting the return types -- the return type is infered by the ts compiler

// Here if i dont write a return type it still knows it will return a number
// It automatically infered the return
function sum(num1: number, num2: number): number {
  return num1 + num2;
  // return ""
}
console.log(sum(1, 2));

// Function that doesnt return anything & doesnt take any arguments
function delayedCall(cb: () => void) {
  setTimeout(() => {
    cb();
  }, 1000);
}
delayedCall(() => {
  console.log("Hello TS");
});

// Function that does return a string & takes arguments if we want to have multiple types to return then we have use | like this
function delayedCall2(cb: (val: string) => string, delay: number) {
  setTimeout(() => {
    cb("Hello Hi there");
  }, delay);
}
delayedCall2((val: string) => {
  console.log(val);
  return val;
}, 1000);

let y: any = 1;
y = "sourish";
y = [1, 2, 3];


// Tsconfig.ts is the configuration file for ts which is used to configure the ts compiler
// There are default config we can overide them based on our requirements 