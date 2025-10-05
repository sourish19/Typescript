- TS is strict syntactical superset of js 
- Typescript only catches compile time error
- TS is giving a lot of information to the compiler
#

Install TS - These commands initialize a TS project
- npm init -y
- npx tsc --init
- tsc -b -> Compile ts to js 
#

- Generates a new index.js file 
- Generally make Ts as dev dependency
- TS provides some basic types - number, string,undefined,null,boolean 
#

- TS config file has bunch of options which is used to change the compilation process like Target, rootDir outDir etc...
- Try to avoid using any because we are using Typescript for typechecking purpose
- There are default config we can overide them based on our requirements 
#

- Dont push the js file codes which gets compiled by ts compiler
- We can push the ts file codes
- Type Inferencing - figure out the types for us even we omit them
#

## Classes
- In Js class fields are created dynamically but in Ts we need to define it 
- The strictPropertyInitialization setting controls whether class fields need to be initialized in the constructor.
- declare and assign properties directly in the constructor using public, private, or readonly
- We use overloads beacuse when we only use unions for parameters, the return type usually becomes a union as well, which is less precise
- We need Overload - Multiple valid input types with different return types want better IntelliSense & type safety
#

- Type aliases and interfaces are very similar, and in many cases we can choose between them freely
- We can use interfaces to aggregate data
- ! - non-null assertion operator - definitely not null or undefined here
- Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants. - 
The final value stored at runtime is still a number (0, 1, 2, 3). 
- The concept behind an enumeration is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings.
#

- Generics enable you to create components that work with any data type while still providing compile-time type safety