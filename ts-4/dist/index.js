"use strict";
// ------------ Arrays --------------
Object.defineProperty(exports, "__esModule", { value: true });
const maxValue = (arr) => {
    // For the above reason we use this or arr[0]! --> non-null assertion operator
    let maxVal = arr[0] ?? -Infinity;
    arr.forEach((val) => (maxVal = val > maxVal ? val : maxVal));
    return maxVal;
};
console.log(maxValue([1, 2, 3, 4, 5]));
const isLegal = (arr) => {
    return arr.filter((val) => val.age > 18);
};
console.log(isLegal([
    {
        firstName: "Levi",
        lastName: "Ackerman",
        age: 19,
    },
    {
        firstName: "Mikasa",
        lastName: "Ackerman",
        age: 16,
    },
]));
// ------------------------------
// ---------- ENUMS ------------
// It returns 0,1,2,3....
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 10] = "Up";
    Direction[Direction["Down"] = 11] = "Down";
    Direction[Direction["Left"] = 12] = "Left";
    Direction[Direction["Right"] = 13] = "Right";
})(Direction || (Direction = {}));
function doSomething(keyPress) {
    console.log(keyPress);
}
doSomething(Direction.Down);
//# sourceMappingURL=index.js.map