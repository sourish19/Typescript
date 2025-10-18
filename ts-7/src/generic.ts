// Generics - takes a argument
// Generics are like reusable boxes — you can put anything inside, and TypeScript remembers what’s inside without losing the label!

const score: Array<number> = [12, 13]; // same as number[]

const dontKnowFn = <Types>(val: Types): Types => {
  return val;
};
// Short way to write the above code 
const IdontKnowFn = <T>(val: T): T => {
  return val;
};

dontKnowFn(7);
dontKnowFn({});
dontKnowFn('Mikasa');


