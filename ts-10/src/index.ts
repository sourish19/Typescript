/*
    Generic constaraints
    The keyof operator takes an object type and produces a string or numeric literal union of its keys.
*/

//-------------------------------------------------------------------------------
const obj = {
    x: 10,
    y: 'Hello world',
    z: ['JJK','DBZ']
}

// So here the problem is that the type it returns a union of all the types that is passed in this case it is obj 
const genericConstraints =<T> (obj:T, key: keyof T)=>{
    return obj[key]
}

// the types of XValue and YValue are narrowed down to a certain type of the obj properties.
const genericConstraints2 =<T, K extends keyof T> (obj: T,key:K)=>{
    return obj[key]
}

const XValue = genericConstraints2(obj,'x')
const YValue = genericConstraints2(obj,'y')
//-------------------------------------------------------------------------------


//  --------------------------------------------------------------------------
const user = { id: 1, name: "Sourish", active: true };

const setProperty = <T,K  extends keyof T>(obj:T,key:K,value: T[K]):T=>{
    obj[key] = value
    return obj
}

setProperty(user, "name", "Updated Sourish"); // valid
setProperty(user, "active", false); // valid
// const val =setProperty(user, "id", "wrong type"); //  should cause type error

//  --------------------------------------------------------------------------
const users = [
  { id: 1, name: "Levi" },
  { id: 2, name: "Eren" },
  { id: 3, name: "Mikasa" },
//   { id: 3, c: "Mikasa" }
];

const pluck = <T, K extends keyof T >(arr:T[],key:T[K][])=>{
    return arr.map(k => k )
}

const names = pluck(users, "name");
// expected: string[]

const ids = pluck(users, "id");
// expected: number[]