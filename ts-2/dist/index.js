"use strict";
// we cannot use custom types as runtime variables
Object.defineProperty(exports, "__esModule", { value: true });
//This is the way to define type of an object
// The problem here is we have to repeat logic and if the object gets more complex the codebase gets ugly - it violets DRY
// Visual Studio Code uses TypeScript under the hood to make it easier to work with JavaScript.
const getUserDetails = (user) => {
    return `Hi ` + user.name;
};
// Without using interfaces
const user = {
    name: "Levi",
    age: 21,
    isVerified: true,
};
console.log(getUserDetails(user));
// To asign a type to this obj we use interfaces
const User = {
    name: 'Muzan',
    age: 1000,
    // anime: 'Demon Slayer',
};
console.log(User);
const fun = async (number) => {
    const val = await Promise.resolve(number);
    return val;
};
console.log('Promise function - ', fun(26));
//# sourceMappingURL=index.js.map