// ----- Types Interfaces ------
type ID = string | number;
type Point = {
  x: number;
  y: number;
};
interface InterfacePoint {
  x: number;
  y: number;
}

const Point = (pt: InterfacePoint): void => {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
};
Point({ x: 10, y: 20 });

// extends lets one interface reuse and add to another
// Contains both the inherited name and added name
// We cant do this when using types we need to add intersection
interface Animal {
  name: string;
}
interface Bird extends Animal {
  birdName: string;
}
const getAnimal = (name?: Animal) => {
  return { name: "Pigeon", birdName: "ppppp" };
};
const creature: Bird = getAnimal();
creature.birdName = "IDK";

// In types intersectuon
type Animals = {
  name: String;
};
type Bear = Animals & {
  honey: boolean;
};

// Literal Types  -- not very useful
let x: "Hello World" = "Hello World";
// x = 'jjk' this is error

// Number Literal
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
//---------------------------------

// Non-null Assertion Operator (Postfix !)
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
//-----------------------------

// implement interfaces as classes
interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}
class Employee implements Person {
    name:string;
    age: number;
    constructor(n:string,a:number){
        this.name = n
        this.age = a
    }
    greet(phrase:string){
        console.log(`${phrase} ${this.name}`)
    }
}
const greetEmployee = new Employee('Sourish',21)
greetEmployee.greet('Welcome to Amazon')
// --------------------------

// Cannot do this in interfaces
type StringOrNumber = string | number
function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}
printId(101); 
printId('101'); 
// ------------------------------

// Similarly we can do this in types not in interfaces
type Employee2 = {
    name: string,
    startDate : Date
}
type Manager = {
    name: string,
    dept: string
}
type TeamLead = Employee2 & Manager

const teamLead: TeamLead = {
    name: 'Sourish',
    startDate: new Date(),
    dept: 'software developer'
}
