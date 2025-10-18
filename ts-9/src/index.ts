// Narowing

// typeof guard
type alphanumeric = string | number;
function add(a: alphanumeric, b: alphanumeric) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

console.log(add("a", "b"));
console.log(add(1, 2));

function printAll(strs: string | string[] | null) {
  if (!strs || strs.length === 0) return; // Need to check for null because js treats null as an object
  if (typeof strs === "object") {
    // here js treats array as an object
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}

printAll("a");
printAll(["a", "b", "c"]);
printAll(null);


function printAll2(strs: string | string[] | null) {
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  // Here there is a bug in the code like empty string '' is also consider a truthy value -- just stupid js thing
  // !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
    return strs
  }
}

// Equality narrowing
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
    y.toLowerCase();
  } else {
    console.log(x);
    console.log(y);
  }
}

// in operator narowing 
//  determining if an object or its prototype chain has a property with that particular name
type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}

move({fly: ()=>console.log("Fly")})
move({swim: ()=>console.log("Swim")})

// instanceof operator narrowing
//  in JavaScript x instanceof Foo checks whether the prototype chain of x contains Foo.prototype -- mostly used in classes 

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}