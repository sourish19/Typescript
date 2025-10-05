"use strict";
// Tupples - are array under the hood 
Object.defineProperty(exports, "__esModule", { value: true });
let user;
user = ['Hello', 1, false]; // Need to give these three values and cant reverse or interchange order
const rgb = [255, 255, 255];
const newUser = [{ name: 'Levi', isLoggedIn: false }];
console.table(user);
console.table(rgb);
console.table(newUser);
// ---- This works ----
const anotherUser = [11, 'hello'];
anotherUser.push('Levi');
anotherUser.push('Eren');
anotherUser.push(69);
const idkUser = [69, 'Mikasa'];
idkUser[0] = 68;
idkUser[1] = 'Armin';
idkUser.push('33');
console.log('AnotherUser --> ', anotherUser);
console.log('idkUser --> ', idkUser);
// --> https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array
//# sourceMappingURL=index2.js.map