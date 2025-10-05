type Arr = (string | number)[]; // Mixed array of string & number
function firstEle(arr: Arr): string | number {
  return arr[0]!;
}
const val = firstEle(["1", 2, 3, 4, 5]);
console.log(val);
// ----------------------

// ---------Generics-------
//this version of the identity function is generic, as it works over a range of types
function identity<Type>(args: Type): Type {
  return args;
}
// pass the type as a parameter
const op1 = identity<string>("myString");
const op2 = identity<number>(100);
const op3 = identity(true); // argument inference
console.log(op1);
console.log(op2);
// ----------

function logingIdentity<T>(args: T[]): void {
  console.log(args.length);
}
logingIdentity([])
//------------

interface GenericIdentityFn<T>{
    // <T>(args:T):T // This shadows the outer T --> dont redeclare <T>(..)..
    (args:T):T

}
function identity2<T>(args:T):T{
    console.log('Args - ',args);
    return args
}
const myIdentity: GenericIdentityFn<string> = identity2
myIdentity('hello')
// ------------

class Box<T> {
  content: T;
  constructor(value: T) {
    this.content = value;
  }
}
const numberBox = new Box(123);  
const stringBox = new Box("hi");