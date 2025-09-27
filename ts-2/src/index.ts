
// we cannot use custom types as runtime variables

//This is the way to define type of an object
// The problem here is we have to repeat logic and if the object gets more complex the codebase gets ugly - it violets DRY
// Visual Studio Code uses TypeScript under the hood to make it easier to work with JavaScript.
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

//  INTERFACES & TYPES
interface User{
  name: string,
  age: number,
  anime?: string // It means optional string | undefined 
}

// To asign a type to this obj we use interfaces
const User:User = {
  name : 'Muzan',
  age : 1000,
  // anime: 'Demon Slayer',
}

console.log(User)
