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
- Type Inferencing