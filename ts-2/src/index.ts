// we cannot use custom types as runtime variables

//This is the way to define type of an object
// The problem here is we have to repeat logic and if the object gets more complex the codebase gets ugly - it violets DRY
// Visual Studio Code uses TypeScript under the hood to make it easier to work with JavaScript.

const fun = async (number: number): Promise<number> => {
  const val = await Promise.resolve(number);
  return val;
};

console.log("Promise function - ", fun(26));

//  Contextual Typing
// TypeScript infers name is a string because names is an array of strings
//the context (names array) gives TypeScript enough information.
const names = ["Eren", "Levi", "Denji"];
names.forEach((name) => console.log(name.toUpperCase()));

const getUserDetails = (user: {
  name: string;
  age: number;
  isVerified: boolean;
}): string => {
  return `Hi ` + user.name;
};

// Without using interfaces
const user: {
  name: string;
  age: number;
  isVerified: boolean;
} = {
  name: "Levi",
  age: 21,
  isVerified: true,
};
console.log(getUserDetails(user));

//  INTERFACES 
// To asign a type to this obj we use interfaces
const User: User = {
  name: "Muzan",
  age: 1000,
  // anime: 'Demon Slayer',
};
console.log(User);

interface User {
  name: string;
  age: number;
  anime?: string; // It means optional string | undefined
}

interface NewUser {
  readonly dbId: number // cannot be changed after creation 
  email: string,
  name: string,
  googleId?: string // optional
  
  // these two are same 
  login:()=>string 
  signin():string // preffer this one 
}

// Interface merging --> TS will merege the these two into one interface --> type cannot get merged 
interface NewUser{
  githubId: string
}

// Extend --> explicitly choose which interface to inherit from
interface Admin extends NewUser{
  role: "admin" | "ta" | "learners";
}
// interface NewUser extends BaseUser, AnotherUser {} --> multiple interface inheritance





