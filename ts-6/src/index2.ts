// Tupples - are array under the hood

let user: [string, number, boolean];
user = ["Hello", 1, false]; // Need to give these three values and cant reverse or interchange order

const rgb: [number, number, number] = [255, 255, 255];

type NewUser = [{ name: string; isLoggedIn: boolean }];
const newUser: NewUser = [{ name: "Levi", isLoggedIn: false }];

console.table(user);
console.table(rgb);
console.table(newUser);

type AnotherUser = [number, string];
const anotherUser: AnotherUser = [11, "hello"];
anotherUser.push("Levi");
anotherUser.push("Eren");
anotherUser.push(69);

const idkUser: AnotherUser = [69, "Mikasa"];
idkUser[0] = 68;
idkUser[1] = "Armin";
idkUser.push("33");

console.log("AnotherUser --> ", anotherUser);
console.log("idkUser --> ", idkUser);

//Currently the above codes is working i think ts has made some change cause there were issues check the below link
// --> https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array

// Unions --> avoid any keyword
let score: string | number;
score = 69;
score = "69";

type User = {
  id: number;
  name: string;
};

type Admin = {
  id: string;
  username: string;
};

const myName: User | Admin = { name: "Reze", id: 69 };

function getDBId(id: number | string) {
  console.log(`DB Id is: ${id}`);
}
getDBId(123);
getDBId("123");

const heros: (number | string)[] = ["spiderman", 100];

// Strict Check
const pi:3.14 = 3.14 

let seatAllotment: "aisle" |"middle" | "window" // Othere than this 3 val not allowed
seatAllotment = "aisle"