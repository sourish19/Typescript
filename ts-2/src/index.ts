// Dont push the js file codes which gets compiled by ts compiler
// We can push the ts file codes
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

const user: {
  name: string;
  age: number;
  isVerified: boolean;
} = {
  name: "Sourish",
  age: 21,
  isVerified: true,
};

console.log(getUserDetails(user));
